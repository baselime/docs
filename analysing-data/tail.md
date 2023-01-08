---
label: Live Tailing
order: -1
---

# Tailing your data

The `baselime tail` command enables you to stream telemetry data in real time to your terminal. This can be useful for debugging or quickly checking the status of your services.

```bash # :icon-terminal: terminal
baselime tail
```

By default, the `baselime tail` command will stream all telemetry data for your Baselime environment. You can further filter the data by adding query parameters, such as:

```bash # :icon-terminal: terminal
baselime tail --filters "data.user.id = 123456" --needle "error" --follow
```

This will only show the events where `data.user.id` is `123456` and the word `error` appears in the event.

You can also specify a time range for the data being streamed:

```bash # :icon-terminal: terminal
baselime tail --from '2022-01-01T00:00:00Z' --to '2022-01-02T00:00:00Z'
```

Alternatively, you can define the timerange in relative format

```bash # :icon-terminal: terminal
baselime tail --from 2weeks --to now
```

This will stream telemetry data between the specified start and end times.

The `baselime tail` command can be a useful tool for quickly checking the status of your application and identifying any issues that may be occurring.