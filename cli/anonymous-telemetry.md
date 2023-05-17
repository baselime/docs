---
title: Anonymous Telemetry
order: -3
---

Baselime collects completely **anonymous** telemetry data about general CLI usage. Participation in this anonymous program is optional, and you can opt-out if you'd not like to share any information.

### How do I opt-out?

You can opt out-by running the following command:

```bash
baselime telemetry disable
```

You can re-enable telemetry if you'd like to rejoin the program by running.

```bash
baselime telemetry enable
```

### Why do we collect telemetry data?

Telemetry data help up to accurately measure the Baselime CLI feature usage, pain points, and customisation across all developers. This data empowers us to build a better product for more developers.

It also allows us to verify if the improvements we make to the Baselime CLI are having a positive impact on the developer experience.

### What is being collected?

We measure the following anonymously:

- Command invoked (ie. `baselime deploy`, `baselime query`, or `baselime tail`)
- Version of Baselime in use
- General machine information (e.g. number of CPUs, macOS/Windows/Linux, whether or not the command was run within CI)

An example telemetry event looks like:

```json
{
  "command": "apply",
  "timestamp": 1659020253591,
  "properties": {
    "config": ".baselime"
  }
}
```

These events are then sent to an endpoint hosted on our side.

### What about sensitive data or secrets?

We **do not** collect any metrics which may contain sensitive data.

This includes, but is not limited to: environment variables, file paths, contents of files, logs, or serialized errors.

### Will the telemetry data be shared?

The data we collect is completely anonymous, not traceable to the source, and only meaningful in aggregate form.

No data we collect is personally identifiable.

In the future, we plan to share relevant data with the community through public dashboards or reports.
