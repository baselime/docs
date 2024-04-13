---
label: FAQ
order: 1
---

## What is Baselime?

[Baselime](https://baselime.io) is an observability solution that makes observability for cloud-native microservices easy. Baselime covers your logs, metrics, traces in a single solution. Baselime is built on top of ClickHouse, the fastest columnar database in the world. 

---

## How much does it cost?

Baselime is completely free.

Check out our [pricing page](https://baselime.io/pricing) for more details.

---

## How does Baselime count events for billing?

Baselime counts the number of events daily and updates your dashboard accordingly. Baselime does not count Amazon CloudWatch metrics or Amazon CloudTrail logs as part of the monthly event cap. All other events are counted, include the `START`, `END` and `REPORT` log lines from serverless functions.

---

## Does Baselime support multi-accounts and multi-regions?

Yes, Baselime supports for multi-account and multi-region setups. When you connect your first cloud account to Baselime, Baselime creats a Baselime environment. You can subsequently add as many new cloud accounts or regions to the Baselime environment. All your telemetry data from those separate accounts and regions will be unified in the Baselime environment.

---

## Where is my data stored?

All the telemetry data your cloud infrastructure generates is stored in Baselime AWS accounts in the `eu-west-1` region.

---

## Is my data secure?

Baselime is fully GDPR compliant and your data is stored in data centers that are all SOC2 compliant.

---

## How can I work with my team?

Once you sign up to Baselime with your organisation domain email, you can configure Baselime such that anyone with the same email domain can join your workspace.

Moreover, you can invite your teammates individurally. Additionally, every query result, dashboards, an alerts have a unique permalink in Baselime that you can share with your team.


