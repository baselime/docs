---
label: gRPC
order: -4
---

# OpenTelemetry over gRPC

---

If your codebase is already instrumented with [OpenTelemetry](https://opentelemetry.io/), you can start sending your tracing data to Baselime today.

Add the Baselime OpenTelemetry endpoint to your exporter:
- Endpoint `otel-grpc.baselime.io:4317`
- Header: `api-key: <BASELIME_API_KEY>` 

Get your public Baselime API key in the [Baselime console](https://console.baselime.io).

You can configure following optional attributes:
* `io.baselime.namespace` - Namespace of your traces in Baselime
* `io.baselime.service` - Service name of your traces in Baselime

+++Go
```go
package main

import (
	"context"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc"
	"go.opentelemetry.io/otel/sdk/resource"
	tracesSdk "go.opentelemetry.io/otel/sdk/trace"
	semconv "go.opentelemetry.io/otel/semconv/v1.21.0"
	"go.opentelemetry.io/otel/trace"
	"log"
)

var tracer trace.Tracer

func getResources() *resource.Resource {
	r, err := resource.Merge(
		resource.Default(),
		resource.NewWithAttributes(
			semconv.SchemaURL,
			semconv.ServiceName("ExampleService"),
			attribute.Key("io.baselime.namespace").String("optional-namespace-name"),
		),
	)

	if err != nil {
		panic(err)
	}
	return r
}

func setupTracing(ctx context.Context) {
	// Set up the OpenTelemetry Tracer Provider
	tracesExporter, err := otlptracegrpc.New(
		ctx,
		otlptracegrpc.WithEndpoint("otel-grpc.baselime.io:4317"),
		otlptracegrpc.WithHeaders(map[string]string{
			// Replace 'YOUR_API_KEY' with your actual API key
			"api-key": "YOUR_API_KEY",
		}),
	)
	if err != nil {
		log.Fatalf("failed to initialize exporter: %v", err)
	}
	traceProvider := tracesSdk.NewTracerProvider(
		tracesSdk.WithBatcher(tracesExporter),
		tracesSdk.WithResource(getResources()),
	)
	tracer = traceProvider.Tracer("ExampleService")
	// Set the tracer provider
	otel.SetTracerProvider(traceProvider)
}

func main() {
	ctx := context.Background()
	setupTracing(ctx)
}

```
+++Javascript
```typescript
import { context, trace } from 'opentelemetry/api';
import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/tracing';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { CollectorTraceExporter } from '@opentelemetry/exporter-collector-grpc';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

let tracer: trace.Tracer;

const getResources = (): Resource => {
    try {
        const r = Resource.merge(
            Resource.default(),
            new Resource({
                [SemanticResourceAttributes.SERVICE_NAME]: 'ExampleService',
                'io.baselime.namespace': 'optional-namespace-name',
            })
        );
        return r;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const setupTracing = (ctx: context.Context): void => {
    // Set up the OpenTelemetry Tracer Provider
    const tracerProvider = new NodeTracerProvider({
        resource: getResources(),
    });

    // Set up the OTLP exporter with custom endpoint and headers
    const exporter = new CollectorTraceExporter({
        serviceName: 'ExampleService',
        // Replace 'YOUR_API_KEY' with your actual API key
        headers: { 'api-key': 'YOUR_API_KEY' },
        url: 'otel-grpc.baselime.io:4317',
    });

    const spanProcessor = new SimpleSpanProcessor(exporter);
    tracerProvider.addSpanProcessor(new BatchSpanProcessor(spanProcessor));

    // Set the tracer provider and tracer
    tracer = trace.wrap(tracerProvider.getTracer('ExampleService'));

    // Register the tracer provider
    tracerProvider.register();
};

// Main function
const main = () => {
    const ctx = context.active();
    if (!ctx) {
        throw new Error('Active context not found.');
    }
    setupTracing(ctx);
    // Your application code goes here
};

// Run the main function
main();
```
+++Python
```python
import contextlib
from opentelemetry import trace
from opentelemetry.trace import TracerProvider, get_tracer
from opentelemetry.sdk.trace.export import BatchSpanProcessor, ConsoleSpanExporter
from opentelemetry.exporter.otlp.proto.grpc.trace_exporter import OTLPSpanExporter
from opentelemetry.sdk.resources import Resource
from opentelemetry.semconv import service, resource, trace as semconv_trace

tracer = get_tracer(__name__)

def get_resources():
    try:
        r = Resource.create(
            {
                semconv_trace.SERVICE_NAME: "ExampleService",
                "io.baselime.namespace": "optional-namespace-name",
            }
        )
        return r
    except Exception as e:
        print(e)
        raise e

def setup_tracing():
    # Set up the OpenTelemetry Tracer Provider
    tracer_provider = TracerProvider(resource=get_resources())

    # Set up the OTLP exporter with custom endpoint and headers
    exporter = OTLPSpanExporter(
        endpoint="otel-grpc.baselime.io:4317",
        headers={"api-key": "YOUR_API_KEY"},  # Replace with your actual API key
    )

    span_processor = BatchSpanProcessor(exporter)
    tracer_provider.add_span_processor(span_processor)

    # Set the tracer provider and tracer
    trace.set_tracer_provider(tracer_provider)
    global tracer
    tracer = trace.get_tracer(__name__)

@contextlib.contextmanager
def traced_span(name, **attributes):
    with tracer.start_as_current_span(name, attributes=attributes):
        yield

def main():
    setup_tracing()
    with traced_span("example_span"):
        # Your application code goes here
        pass

if __name__ == "__main__":
    main()

```
+++Java
```java
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.api.trace.TracerProvider;
import io.opentelemetry.context.Context;
import io.opentelemetry.context.Scope;
import io.opentelemetry.exporter.otlp.trace.OtlpGrpcSpanExporter;
import io.opentelemetry.sdk.OpenTelemetrySdk;
import io.opentelemetry.sdk.resources.Resource;
import io.opentelemetry.sdk.trace.SdkTracerProvider;
import io.opentelemetry.sdk.trace.export.SimpleSpanProcessor;
import io.opentelemetry.semconv.resource.attributes.ResourceAttributes;

public class Main {

    private static Tracer tracer;

    public static void setupTracing() {
        // Set up the OpenTelemetry Tracer Provider
        TracerProvider tracerProvider =
                SdkTracerProvider.builder()
                        .setResource(
                                Resource.create(
                                        ResourceAttributes.SERVICE_NAME, "ExampleService",
                                        "io.baselime.namespace", "optional-namespace-name"))
                        .build();

        // Set up the OTLP exporter with custom endpoint and headers
        OtlpGrpcSpanExporter exporter =
                OtlpGrpcSpanExporter.builder()
                        .setEndpoint("otel-grpc.baselime.io:4317")
                        .addHeader("api-key", "YOUR_API_KEY")  // Replace with your actual API key
                        .build();

        tracerProvider.addSpanProcessor(SimpleSpanProcessor.create(exporter));

        // Set the tracer provider and tracer
        OpenTelemetrySdk openTelemetry = OpenTelemetrySdk.builder().setTracerProvider(tracerProvider).build();
        tracer = openTelemetry.getTracer("ExampleService");
    }

    public static void main(String[] args) {
        setupTracing();
        try (Scope ignored = tracer.spanBuilder("example_span").startScopedSpan()) {
            // Your application code goes here
        }
    }
}

```
+++C#
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
using OpenTelemetry;
using OpenTelemetry.Resources;
using OpenTelemetry.Trace;

class Program
{
    private static Tracer tracer;

    public static Resource GetResources()
    {
        var builder = ResourceBuilder.CreateDefault().AddService("ExampleService")
            .AddAttribute("io.baselime.namespace", "optional-namespace-name");
        return builder.Build();
    }

    public static void SetupTracing()
    {
        // Set up the OpenTelemetry Tracer Provider
        using var openTelemetry = Sdk.CreateTracerProviderBuilder()
            .SetResource(GetResources())
            .AddSource("ExampleService")
            .AddOtlpExporter(options =>
            {
                options.Endpoint = new Uri("otel-grpc.baselime.io:4317");
                options.Headers = new Dictionary<string, string>
                {
                    {"api-key", "YOUR_API_KEY"}  // Replace with your actual API key
                };
            })
            .Build();

        // Set the tracer provider and tracer
        tracer = openTelemetry.GetTracer("ExampleService");
    }

    public static async Task Main()
    {
        SetupTracing();

        using (var span = tracer.StartActiveSpan("example_span"))
        {
            // Your application code goes here
            await Task.Delay(100);
        }
    }
}
```