---
order: -3
label: Python
---

# OpenTelemetry for Python on AWS Lambda

The [Baselime Python OpenTelemetry tracer for AWS Lambda](https://github.com/Baselime/python-opentelemetry) instruments your Python AWS Lambda functions with OpenTelemetry and automatically sends OpenTelemetry traces to Baselime. This is the most powerful and flexible way to instrument your Python AWS Lambda functions.


---

## Automatic Instrumentation

To automatically instrument your AWS Lambda functions with the [Baselime Python OpenTelemetry tracer for AWS Lambda](https://github.com/Baselime/python-opentelemetry), set the following tag to your AWS Lambda functions: `baselime:tracing=true`.

+++ AWS CDK

To add the Baselime tag to all your AWS Lambda functions in a service or stack add this line to your AWS CDK code.

```typescript #
 Tags.of(app).add("baselime:tracing", `true`);
```

+++ SST

To add the Baselime tag to all your AWS Lambda functions in a service or stack add this line to your `sst.config.ts` file.

```typescript #
 Tags.of(app).add("baselime:tracing", `true`);
```

+++ Serverless Framework

To add the Baselime tag to all your AWS Lambda functions in a add this snippet to your `serverless.yml` file.

```yaml #
provider:
  name: aws
  tags:
    "baselime:tracing": "true"
```

+++ AWS SAM

To add the Baselime tag to all your AWS Lambda functions in a add this snippet to your AWS SAM configuration file.

```yaml #
AWSTemplateFormatVersion: "2010-09-09"
Transform: AWS::Serverless-2016-10-31
Description: "Gets data from the xxxxx API."
Globals:
  Function:
    Tags:
       "baselime:tracing": "true"
```
+++

That's all you are all set with OpenTelemetry on Python AWS Lambda functions.

!!! 
OpenTelemetry automatic instrumentation is available only once you have connected your AWS Account to Baselime. Adding the tag to AWS Lambda functions in an AWS Account not connected to Baselime will not have any effect.
!!!

!!!
We recommended a miminum of 512mb of memory configured on AWS Lambda functions with the automatic OpenTelemetry instrumentation. AWS Lambda functions with less memory may experience higher latencies as the traces are being processed.
!!!

!!! 
To remove the OpenTelemetry instrumentation from your AWS Lambda functions, remove the `baselime:tracing=true` tag from the function and Baselime will revert the function to un-instrumentate state.
!!!

!!!warning
Other observability tool layers and tags can adversely interact with the Baselime OpenTelemetry layer. We recommend to disable all other observability layers and tags before instrumenting your AWS Lambda functions with the Baselime OpenTelemetry layer. Failing to do so could result in down-time.  
!!!

---

## Adding custom OpenTelemetry spans

To add custom spans to your OpenTelemetry traces, install the [`opentelemetry-api`](https://opentelemetry-python.readthedocs.io/en/latest/api/trace.html) package.

```bash
poetry add opentelemetry-api
```

And manually add spans to your traces.

```python #
from opentelemetry import trace
tracer = trace.get_tracer("your-custom-spans", "1.0.0")

def handler(event, context)
    with tracer.start_as_current_span("a-custom-span") as span:
        span.set_attribute("key", "value")
        span.set_attributes({ 'foo': 'bar'})
        span.add_event("events going down")
        try:
            json_region = os.environ['AWS_REGION']
            return {
                "statusCode": 200,
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": json.dumps({
                    "Region ": json_region
                })
            }

        except Exception as e:
            span.record_exception(e)
            return {
                "statusCode": 500,
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": json.dumps({
                    "Message ": "Sorry"
                })
            }


```

---

## Sending data to another OpenTelemetry backend

OpenTelemetry is an open standard, and you can use the [Baselime Python OpenTelemetry tracer for AWS Lambda](https://github.com/Baselime/python-opentelemetry) to send telemetry data to another backend of your choice.

Set environment variable `COLLECTOR_URL` to your observability backend.

---