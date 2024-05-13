---
label: Kubernetes
order: -7
---

# Kubernetes Logs
If you use Docker or Podman as your container runtime, you can stream your container logs to Baselime by using Fluentbit DaemonSet as your logging driver.

## How to configure

First create a configuration file with the value of your Baselime API key

```yaml # :icon-code: custom-values.yaml
apiKey: "YOUR_API_KEY"
```

!!!
Get your Baselime API key from the [Baselime console](https://console.baselime.io).
!!!

Install the Baselime Helm chart

```bash
helm repo add baselime-logs-exporter https://baselime.github.io/helm-charts
helm repo update
helm install baselime-logs-exporter baselime-logs-exporter/baselime-logs-exporter --values custom-values.yaml
```

Your logs should automatcally be streamed to Baselime in real-time.

---

## Best practices

Baselime works best when log messages are written as JSON blobs. For example:

```go # :icon-code: main.go
package main

import (
	"log/slog"
	"os"
)

func main() {
	logger := slog.New(slog.NewJSONHandler(os.Stdout, nil))
	logger.Info("Hello, logs!", "extra", map[string]interface{}{
		"stringField": "stringVal",
		"objectField": map[string]interface{}{
			"nestedField": "nestedVal",
		},
	})
}
```

---
## How it works

The Baselime DeamonSet creates an instance of a FluentBit pod in each node in your clusted. The post reads all logs written to  `/var/log/containers/*.log` and `/var/log/pods/*.log` and forwards them to the Baselime back-end using your Baselime API key over HTTPS.

![Sending Telemetry data to Baselime](../../assets/images/illustrations/sending-data/kubernetes-ingestion.png)

You can find example implementation in our [GitHub repository](https://github.com/baselime/examples/tree/main/kubernetes-logs)