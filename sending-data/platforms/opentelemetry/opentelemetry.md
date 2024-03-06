---
label: OpenTelemetry
order: -4
---

If your codebase is already instrumented with [OpenTelemetry](https://opentelemetry.io/), you can start sending your traces, metrics and logs to Baselime today.


## Configuration

### Endpoint
* HTTP: `otel.baselime.io/v1/`
* gRPC: `otel-ingest.baselime.io:4317`

### Headers
```yaml
x-api-key: <BASELIME_API_KEY>
x-baselime-dataset: <YOUR_DATASET> # Optional, defaults to "otel"
```

---
## Baselime OpenTelemetry for Platforms
[!ref icon="../../../assets/images/logos/logo_aws_lambda.png"](../../platforms/aws/aws-lambda/traces/index.md)
[!ref icon="../../../assets/images/logos/cloudflare.png"](../../platforms/cloudflare/traces.md)

---

## Baselime OpenTelemetry Distros
[!ref icon="../../../assets/images/logos/node.svg"](../../languages/node.js.md)
[!ref icon="../../../assets/images/logos/next.js.svg"](../../languages/next.js.md)
[!ref icon="../../../assets/images/logos/python.svg"](../../languages/python.md)
[!ref icon="../../../assets/images/logos/golang.svg"](../../languages/go.md)

---

## AWS PrivateLink

Baselime supports [AWS PrivateLink](https://aws.amazon.com/privatelink/) for OpenTelemetry.
[!ref icon="../../../assets/images/logos/aws.svg"](./private-link.md)

---

## Manual instrumentation

This section covers basic configuration of traces and metrics exporter. For more detailed examples, refer to the
[OpenTelemetry Distros](#baselime-opentelemetry-distros) section for your language or platform.

==- Javascript
```javascript # :icon-code: index.js
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { OTLPMetricExporter } from '@opentelemetry/exporter-metric-otlp-http';

const traceExporter = new OTLPTraceExporter({
    url: "otel.baselime.cc:4317",
    headers: {
        "x-api-key": BASELIME_API_KEY,
        "x-baselime-dataset": YOUR_DATASET,
    },
    timeoutMillis: 1000,
});

const metricExporter = new OTLPMetricExporter({
    url: "otel.baselime.cc:4317",
    headers: {
        "x-api-key": BASELIME_API_KEY,
        "x-baselime-dataset": YOUR_DATASET,
    },
    timeoutMillis: 1000,
});
```

[OpenTelemetry documentation for Javascript](https://opentelemetry.io/docs/languages/js/exporters/#available-exporters)

==- Go
```go # :icon-code: main.go
package main

import (
	"context"
	"go.opentelemetry.io/otel/exporters/otlp/otlpmetric/otlpmetricgrpc"
	"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc"
)

var metricExporter, _ = otlpmetricgrpc.New(
	context.TODO(),
	otlpmetricgrpc.WithEndpoint("otel-ingest.baselime.cc:4317"),
	otlpmetricgrpc.WithHeaders(map[string]string{
		"x-api-key": BASELIME_API_KEY,
		"x-baselime-dataset": YOUR_DATASET,
	}),
)

var traceExporter, _ = otlptracegrpc.New(
	context.TODO(),
	otlptracegrpc.WithEndpoint("otel-ingest.baselime.cc:4317"),
	otlptracegrpc.WithHeaders(map[string]string{
        "x-api-key": BASELIME_API_KEY,
        "x-baselime-dataset": YOUR_DATASET,
    }),
)
```
[OpenTelemetry documentation for Go](https://opentelemetry.io/docs/languages/go/exporters/#otlp-traces-over-grpc)

==- Python
```python # :icon-code: main.py
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
from opentelemetry.exporter.otlp.proto.grpc.metrics_exporter import OTLPMetricsExporter

span_exporter = OTLPSpanExporter(
    endpoint="otel-ingest.baselime.cc:4317",
    headers={
        "x-api-key": BASELIME_API_KEY,
        "x-baselime-dataset": YOUR_DATASET,
    },
)

metric_exporter = OTLPMetricsExporter(
    endpoint="otel-ingest.baselime.cc:4317",
    headers={
        "x-api-key": BASELIME_API_KEY,
        "x-baselime-dataset": YOUR_DATASET,
    },
)
```
[OpenTelemetry documentation for Python](https://opentelemetry.io/docs/languages/python/exporters/#usage)
==- Java
```java # :icon-code: Main.java
import io.opentelemetry.exporter.otlp.metrics.OtlpGrpcMetricExporter;
import io.opentelemetry.exporter.otlp.trace.OtlpGrpcSpanExporter;

OtlpGrpcSpanExporter spanExporter = OtlpGrpcSpanExporter.builder()
    .setEndpoint("otel-ingest.baselime.cc:4317")
    .addHeader("x-api-key", BASELIME_API_KEY)
    .addHeader("x-baselime-dataset", YOUR_DATASET)
    .build();
    
OtlpGrpcMetricExporter metricExporter = OtlpGrpcMetricExporter.builder()
    .setEndpoint("otel-ingest.baselime.cc:4317")
    .addHeader("x-api-key", BASELIME_API_KEY)
    .addHeader("x-baselime-dataset", YOUR_DATASET)
    .build();
```
[OpenTelemetry documentation for Java](https://opentelemetry.io/docs/languages/java/exporters/)
==- Other
Consult the [OTEL documentation](https://opentelemetry.io/docs/languages/) to find support for traces, metrics and logs for other languages and platforms.
==- 