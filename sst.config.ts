import type { SSTConfig } from "sst";
import * as s3Deploy from "aws-cdk-lib/aws-s3-deployment";
import * as ssm from "aws-cdk-lib/aws-ssm";

import { Bucket } from "sst/constructs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { BucketAccessControl, BucketPolicy } from "aws-cdk-lib/aws-s3";
import { StarPrincipal, PolicyStatement } from "aws-cdk-lib/aws-iam";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  config(_input) {
    return {
      name: "docs",
      region: "eu-west-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
			const bucket = new Bucket(stack, "docs-bucket", {
				cdk: {
					bucket: {
						websiteIndexDocument: "index.html",
						publicReadAccess: true,
					},
				},
			});
			bucket.cdk.bucket.grantPublicAccess("*");
			const policy = new PolicyStatement({
				resources: [
				  bucket.cdk.bucket.arnForObjects("*"), 
				  bucket.cdk.bucket.bucketArn,
				],
				actions: ["s3:GetObject"],
				principals: [new StarPrincipal()],
			  });
			
			bucket.cdk.bucket.addToResourcePolicy(policy)
			new s3Deploy.BucketDeployment(stack, "deploy-docs", {
				sources: [s3Deploy.Source.asset(join(__dirname, "dist"))],
				destinationBucket: bucket.cdk.bucket,
				destinationKeyPrefix: "docs",
				accessControl: BucketAccessControl.PUBLIC_READ,
			});

			new ssm.StringParameter(this, "docsUrlParameter", {
				parameterName: `/${stack.stage}/baselime/docs/s3/url`,
				stringValue: bucket.cdk.bucket.bucketWebsiteDomainName,
				description: "The url of the docs",
				tier: ssm.ParameterTier.STANDARD,
				allowedPattern: ".*",
			});

			stack.addOutputs({
				url: `${bucket.cdk.bucket.bucketWebsiteUrl}/docs/` || "http://localhost:3000",
			});
		});
  }
} satisfies SSTConfig;
