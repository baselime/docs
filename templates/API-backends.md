# Templates for API Backends

Monitor your API Backends with the Starter template for queries, and alerts. These queries use your Api Gateway Logs, and CloudWatch Metrics to help you make sure your API's are scalable and have great uptime.

## Datasets

| Dataset | Docs  |
|---------|-------|
| apigateway-logs | https://docs.baselime.io/sending-data/apigateway-logs/ |
| cloudwatch-metrics | https://docs.baselime.io/sending-data/cloudwatch-metrics/ |

### Queries

| Name | Description | Dataset | ID |
|------|-------------|---------|----|
| API Latency | Provides stats on API latency (AVG, P90, P95, P99) | apigateway-logs | [api-latency](./api-latency.yml) |
| API Errors | Counts the number of API errors and groups by status | apigateway-logs | [api-errors](./errors.yml) |
| API Overview | Sums the values of API metrics | cloudwatch-metrics | [api-overview](./api-overview.yml) |
| Request Count | Counts the number of requests | apigateway-logs | [request-count](./request-count.yml) |

### Alarms

| Name | Description | Triggered by | ID |
|------|-------------|-------------|----|
| API Latency Alarm | Triggers an alarm if the AVG response latency is over a threshold | api-latency | [api-latency-alarm](./api-latency.yml) |
| API Errors Alarm | Triggers an alarm if the count of API errors is over a threshold | api-errors | [api-errors-alarm](./errors.yml)|
| Request Count Alarm | Triggers an alarm if the count of requests is over a threshold | request-count | [request-count-alarm](./request-count.yml) |


## Combos

This template works great with

* [Lambda Logs Basics](../lambda-logs-basics/)