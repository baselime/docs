---
label: FAQ
order: 1
---

## What is Baselime?

[Baselime](https://baselime.io) is an observability solution that makes observability for cloud-native microservices easy. Baselime covers your logs, metrics, traces in a single solution. Baselime is built on top of ClickHouse, the fastest columnar database in the world. 

---

## How much does it cost?

Baselime pricing is based on the number of events your systems produce. This scales linearly with the traffic your applications handle. Moreover, Baselime has a full free tier for up to 20M events per month.

Check out our [pricing page](https://baselime.io/pricing) for more details.

---

## How does Baselime count events for billing?

Baselime counts the number of events daily and updates your dashboard accordingly. Baselime does not count Amazon CloudWatch metrics or Amazon CloudTrail logs as part of the monthly event cap. All other events are counted, include the `START`, `END` and `REPORT` log lines from serverless functions.

---

## Does Baselime support multi-accounts and multi-regions?

Yes, Baselime supports for multi-account and multi-region setups. When you connect your first cloud account to Baselime, Baselime creats a Baselime environment. You can subsequently add as many new cloud accounts or regions to the Baselime environment. All your telemetry data from those separate accounts and regions will be unified in the Baselime environment.

---

## Where is my data stored?

You own your data.

You can select to use either our cloud offering, or our **Bring Your Own Backend** solution. With **Bring Your Own Backend**, all the data is stored on your AWS account and your use the Baselime clients to access it.

### Cloud offering

All the telemetry data your cloud infrastructure generate is stored in two data tiers:
- hot tier: on Baselime AWS accounts in the `eu-west-1` region. This data is used for fast questions
- cold tier: in an Amazon S3 bucket in your AWS cloud account. This data is used for long terms storage in a resource you own

It is possible to rehydrate data from the cold tier to the hot tier for queriyng historical incidents free of charge.

### Bring Your Own Backend

Baselime can integrate with your own backend. As such, all the telemetry data is stored and queried in your cloud account. The enables you to keep maximum flexibility and privacy for storing sensitive data. You will be able to set your own retention periods, your own storage type, and your own privacy settings.

**Bring Your Own Backend** is available on our Enterprise Plans.

---

## Is my data secure?

Baselime is fully GDPR compliant and your data is stored in data centers that are all SOC2 compliant.

---

## How can I work with my team?

Once you sign up to Baselime with your organisation domain email, you can configure Baselime such that anyone with the same email domain can join your workspace.

Moreover, you can invite your teammates individurally. Additionally, every query result, dashboards, an alerts have a unique permalink in Baselime that you can share with your team.


