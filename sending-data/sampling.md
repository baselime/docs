---
label: Sampling
order: -11
---

Sampling enables you to control the volume of data processed and ingested in Baselime, by selecting only a portion of your data, whilst keeping the ability to extrapolate key insights from the selected set.

---

## When should you consider sampling?

You should consider sampling when your data volumes are high, when you exceed multiple billion events per day, or **multiple thousand requests per second**.

Sampling will enable you to reduce the overall volume of data processed and stored, and keep only data where "interesting things" occur. Interesting things could be errors, events with specific attributes, or events with high latencies associated.

---

## Automatic tail sampling with Baselime

!!!
Automatic tail sampling is available only on our Enterprise Tier
!!!

You can enable automatic tail sampling on Baselime for each of your datasets.

With tail sampling, the decision to sample a trace or request happens at the end of the processing, by considering all of the spans and events within the trace or request. A trace/request is sampled (ingested) when:

- At least one event has an error (for logs, log levels are considered)
- At least one event has a status code > 399
- it meets the deterministic probability sampling, based on a fixed sampling rate

If any event (logs, spans and span events) associated with a trace or request meets the criteria, the entire trace or request is sampled. Otherwise, it is dropped.

If your events are not associated to any trace or request, they are sampled using the same criteria, but are kept individually instead of as part of a request.

!!!
Learn how to [enrich your logs with request IDs](./logs-enrichment.md) for faster troubleshooting.
!!!

---

## How Baselime works with sampled data

When Baselime automatically samples your data, it also saves a `$baselime.samplingInterval` on each of your events. If you decide to sample with a `N` sampling rate, Baselime will automatically store `1/N` as the `$baselime.samplingInterval`.

Baselime then uses the sampling interval to compute aggregations such as `COUNT`, `SUM`, `AVG` and all percentiles.

In other words, Baselime enables you to perfrom **accurate calculations** that are representative of the entire dataset, even with a sampled dataset.

Baselime also surfaces the average sample rate in the query results in the [console](https://console.baselime.io). This gives you an idea of the sample rate of the events queried when running a query.

### `COUNT_DISTINCT`

`COUNT_DISTINCT` enables you to compute the number of unique values a property take in your dataset. This is impossible to accurately compute with sampled data. When performing a `COUNT_DISTINCT` aggregation, Baselime will count the number of unique values present in the sampled dataset and will not compensate for the sampling rate.
