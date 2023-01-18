---
label: CloudTrail Events
order: -3
---

# CloudTrail Events

Baselime automatically ingests CloudTrail events when you connect your AWS account. Baselime will automatically create a new CloudTrail and S3 bucket for you, and configure them to send data to your Baselime account. No additional setup is required on your end.

Once connected, CloudTrail events will be sent to Baselime and made available for querying.

---

## Why CloudTrail ?

[CloudTrail](https://aws.amazon.com/cloudtrail/) is a service provided by AWS that records API activity in your AWS account. This data can be used to track changes to your resources, troubleshoot issues, and improve security.

By sending CloudTrail events to Baselime, you can use our query and visualization tools to more easily analyze and understand your API activity. You can also set up alerts to be notified of specific API activity or trends.

With CloudTrail events in Baselime, you can gain a deeper understanding of your AWS API activity and use that knowledge to improve the security and reliability of your applications.

---

## CloudTrail management events

CloudTrail events fall into multiple categories, and Baselime automatically ingests CloudTrail management events. Please refer to the complete [CloudTrail docs](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html) for further details on the CloudTrail concepts. 

