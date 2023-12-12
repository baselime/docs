---
order: 1
label: Go
---

# OpenTelemetry for Go

The [Baselime Go OpenTelemetry SDK](https://github.com/baselime/go-opentelemetry) enables you to instrument your Go services with OpenTelemetry without the boilerplate of using the OpenTelemetry SDK directly.

This SDK uses [OpenTelemetry for Go](https://opentelemetry.io/docs/instrumentation/go/) and provides a layer that facilitates instrumenting your Go applications.

!!!
If your application is already instrumented with [OpenTelemetry](https://opentelemetry.io/), you can start sending your tracing data to Baselime without any additional code changes.

Add the Baselime OpenTelemetry endpoint to your exporter:
- Endpoint `https://otel.baselime.io/v1/`
- Header: `x-api-key: <BASELIME_API_KEY>` 
!!!

---

## Instrumentation

### Step 1: Install the SDKs

Install the [Baselime Go OpenTelemetry SDK](https://github.com/baselime/go-opentelemetry). 

```bash # :icon-terminal: terminal
go get github.com/baselime/go-opentelemetry
```

### Step 2: Set the Baselime environment variables

Set the environment variables of your comntainer service to include the Baselime API Key

```bash # :icon-terminal: terminal
export BASELIME_API_KEY=<YOUR_API_KEY>
export OTEL_SERVICE_NAME='<NAME_OF_YOUR_APP_OR_SERVICE>'
```

### Step 3: Add the Opentelemetry Instrumentation to your application

```go # :icon-terminal: terminal
func main() {
    params := baselime_opentelemetry.Config{}
    otelShutdown, err := baselime_opentelemetry.ConfigureOpenTelemetry(params)

    if err != nil {
        log.Fatalf("error setting up OTel SDK - %e", err)
    }

    defer otelShutdown()
    ...
}
```

Once these steps are completed, distributed traces from your go container applications should be available in Baselime to query via the console or the Baselime CLI.

---

The `BaselimeSDK` takes the following configuration options.

## Configuration

| Field Name     | Description                               |
|----------------|-------------------------------------------|
| BaselimeApiKey | API key for Baselime service               |
| ServiceName    | Name of the service                       |
| Namespace      | Namespace identifier                      |
| CollectorUrl   | URL for the data collector                |
| Protocol       | Communication protocol (grpc / http)       |


---

## Instrumenting Libraries

In Go you have to manually instrument the libraries you use. You can find instrumentation for popular libraries on the [go ecosystem registry](https://opentelemetry.io/ecosystem/registry/?language=go&component=instrumentation)

Once you have installed the instrumentation you can find the instructions on how to apply it in their github repo, each instrumentation could be slightly different.

```go # :icon-terminal: terminal
// init aws config
cfg, err := awsConfig.LoadDefaultConfig(ctx)
if err != nil {
    panic("configuration error, " + err.Error())
}

// instrument all aws clients
otelaws.AppendMiddlewares(&cfg.APIOptions)
    ```