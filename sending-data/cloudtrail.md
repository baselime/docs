---
label: CloudTrail
order: -5
---

# CloudTrail

Baselime automatically ingests CloudTrail events when you connect your AWS account. Baselime will automatically create a new CloudTrail and S3 bucket for you, and configure them to send data to your Baselime account. No additional setup is required on your end.

Once connected, CloudTrail events will be sent to Baselime and made available for querying.

---

## Why CloudTrail ?

[CloudTrail](https://aws.amazon.com/cloudtrail/) is a service provided by AWS that records API activity in your AWS account. This data can be used to track changes to your resources, troubleshoot issues, and improve security.

By sending CloudTrail events to Baselime, you can use our query and visualization tools to more easily analyze and understand your API activity. You can also set up alerts to be notified of specific API activity or trends.

With CloudTrail events in Baselime, you can gain a deeper understanding of your AWS API activity and use that knowledge to improve the security and reliability of your applications.

---

## How it works

CloudTrail writes trail data periodically in a pre-configured S3 bucket in your AWS account. Once the data is written, it signals to an SNS topic that the trail is written.

Baselime configures this SNS to invoke a Lambda function that reads the data from the S3 bucket and ingests it in the Baselime backend.

![Sending CloudTrail data to Baselime](../assets/images/illustrations/sending-data/cloudtrail.png)

---

## CloudTrail management events

CloudTrail events fall into multiple categories, and Baselime automatically ingests CloudTrail management events. Please refer to the complete [CloudTrail docs](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html) for further details on the CloudTrail concepts. 

