---
label: Rehydration from S3
order: -1
---

# Rehydrating logs from Amazon S3

This page describes how you can rehydrate your logs from Amazon S3 into Baselime.

## How it works
When your data is streamed to Baselime, through different sources described in the [Sending Data to Baselime](./overview.md) section,
it is also streamed to a Kinesis Firehose created in your AWS at the time of integration. The Firehose then saves
the data in an S3 bucket in your AWS account.

![Data flow](../assets/images/illustrations/sending-data/s3-rehydration.png)


This allows you to use your data even outside the Baselime, for example feed it into a data lake.

At the time of connecting your AWS account to Baselime a role is also created which gives access to
list and read files specifically from that bucket. This role is assumed by Baselime Rehydration Lambda,
which lists and reads the files, and sends them to our system once gain.

This way you can query data in Baselime, even long after it has expired. Just keep in mind
that default TTL for objects set in that Bucket is set to 180 days, but feel free to change it to your needs.

## How to use it
First, you'll need to have Baselime CLI installed. You can find the installation instructions [here](../cli/install.md).

Once you have it installed, you can use the following command to rehydrate your data:

```bash
baselime rehydrate --startDate 2023-06-08T13:24:47.906Z --hoursToRecover 1
```
Start date should be formatted in RFC3339 format, and hours to recover should be a number.
The process will recover all the data from the start date, for the number of consecutive hours from that date.