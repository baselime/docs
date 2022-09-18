---
label: CloudTrail Events
order: -3
---

# CloudTrail Events

---

Once you connect your AWS account to Baselime, Baselime automatically ingests [CloudTrail Events](https://aws.amazon.com/cloudtrail/) from your AWS environment.

CloudTrail is a managed AWS service which records user activity and API usage across other AWS services. It is useful to debug incidents when the source of the issue is not necessarily application code, but how services communicate with each other. This is particularly relevant for serverless and event-driven applications where significant functionality is taken by cloud infrastructure instead of application code.

---

## CloudTrail management events

CloudTrail events fall into multiple categories, and Baselime automatically ingests CloudTrail management events. Please refer to the complete [CloudTrail docs](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html) for further details on the CloudTrail concepts. 

