---
label: Kubernetes
order: -7
---

# Kubernetes Logs
If you use Docker or Podman as your container runtime, you can stream your container logs
to Baselime by using Fluentbit DaemonSet as your logging driver

## How to configure
First create a configuration yaml
```yaml # :icon-code: custom-values.yaml
apiKey: "YOUR_API_KEY"
```
!!!
Obtain your API key from the console [Baselime console](https://console.baselime.io).
!!!

Next install the Baselime Helm chart
```bash
helm repo add baselime-logs-exporter https://github.com/baselime/helm-charts
helm repo update
helm install baselime-logs-exporter baselime-logs-exporter/baselime-logs-exporter-logs-exporter --values custom-values.yaml
```

---
## Best practices
We expect the log messages to be in JSON format. For example:
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
![Sending Telemetry data to Baselime](../../assets/images/illustrations/sending-data/kubernetes-ingestion.png)

DaemonSet provided above creates an instance of FluentBit pod on each node in your cluster.
The FluentD pod reads the logs from the `/var/log/containers/*.log` and `/var/log/pods/*.log` directories
and sends them to Baselime over HTTPS.

You can find example implementation in our [GitHub repository](https://github.com/baselime/examples/tree/main/kubernetes-logs)