---
order: -5
label: Python
---

# OpenTelemetry for Python

The [Baselime Python OpenTelemetry SDK](https://github.com/baselime/python-opentelemetry) enables you to instrument your Python services with OpenTelemetry without the boilerplate of using the OpenTelemetry SDK directly.

This SDK uses [OpenTelemetry for Python](https://opentelemetry.io/docs/instrumentation/python/) and provides a layer that facilitates instrumenting your Python applications.

---

## Instrumentation
!!!info
Is your application already instrumented with [OpenTelemetry](https://opentelemetry.io/)?

[!ref icon="../../assets/images/logos/logo_open_telemetry.png" text="Configure endpoint and headers"](../platforms/opentelemetry/opentelemetry.md#configuration)
!!!

### Step 1: Install the SDKs

Install the [Baselime Python OpenTelemetry SDK](https://github.com/baselime/python-opentelemetry). 

```bash # :icon-terminal: terminal
poetry add baselime-opentelemetry
```

### Step 2: Install Instrumentations

Automatically install instrumentation for the python libraries you use with `opentelemetry-bootstrap`

```bash # :icon-terminal: terminal
poetry run opentelemetry-bootstrap
```

### Step 3: Set the Baselime environment variables

Set the environment variables of your comntainer service to include the Baselime API Key

```bash # :icon-terminal: terminal
export BASELIME_API_KEY=<YOUR_API_KEY>
export OTEL_SERVICE_NAME='<NAME_OF_YOUR_APP_OR_SERVICE>'
```

### Step 4: Run the Opentelemetry Instrumentation

``` # :icon-terminal: terminal
poetry run opentelemetry-instrument python myapp.py
```

Once these steps are completed, distributed traces from your Python container applications should be available in Baselime to query via the console or the Baselime CLI.

---

## Configuration

When running your application locally you can set the environment variable `EXPORT_CONSOLE=TRUE` to print all the telemetry to the console. This can help make sure you have instrumented your application correctly

