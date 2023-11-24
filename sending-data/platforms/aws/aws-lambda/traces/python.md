---
order: -3
label: Python
---

# OpenTelemetry for Python on AWS Lambda

The [Baselime Python OpenTelemetry tracer for AWS Lambda](https://github.com/Baselime/python-opentelemetry) instruments your Python AWS Lambda functions with OpenTelemetry and automatically sends OpenTelemetry traces to Baselime. This is the most powerful and flexible way to instrument your Python AWS Lambda functions.


---

## Automatic Instrumentation

To automatically instrument your AWS Lambda functions with the [Baselime Node.js OpenTelemetry tracer for AWS Lambda](https://github.com/Baselime/lambda-node-opentelemetry), set the following tag to your AWS Lambda functions: `baselime:tracing=true`.

For detailed instructions on how to add the tag to for your framework go to the [OpenTelemetry for AWS Lambda](./index.md) Guide

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