---
label: Vercel
order: -2
---

# Vercel

---

Vercel is a cloud platform for hosting and deploying web applications and websites. It is designed to make the process of deploying, scaling, and managing web apps as simple and efficient as possible. Vercel offers a variety of features and tools for web developers.

## Baselime Integration

Baselime provides advanced observability capabilities for applications running on Vercel. 

Install the integration for free on the [Vercel marketplace](https://vercel.com/integrations/baselime) and start observing your Vercel apps in minutes.

!!!
If you deploy Next.js applications on Vercel, we recommened also instrumenting your applications with [OpenTelemetry for Next.js](./opentelemetry/next.js.md) to enable distributed tracing in addition to logs.
!!!


### How it works

When you install the Baselime integration on the Vercel Marketplace, Baselime automatically creates a [log drain](https://vercel.com/blog/log-drains) on your Vercel account to start streaming all your logs in real-time.

Once Baselime receives your data, we automatically discover all your Vercel apps and ingests all your logs into three datasets:
- `vercel-build`: logs from your Vercel build steps
- `vercel-edge`: logs from Vercel Edge functions
- `vercel-functions`: logs from Vercel functions such as API routes
- `vercel-static`: logs from requests to static assets on Vercel such as HTML and CSS files

The logs are separated in multiple datasets to give you a complete view of your Vercel applications.

### Using the Vercel integration

All the logs from your Vercel apps are streamed to Baselime. You can search, query or tail your logs from the console and the CLI. You can create alerts from derived metrics from your logs. You can use our dashboard templates to create dashboards based on your Vercel logs, and modify them at will.

![Vercel Logs in Baselime](../../assets/images/illustrations/sending-data/vercel.png)


