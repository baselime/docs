---
label: Reports
order: -3
---

# Reports

Baselime reports allow you to monitor the health of your services and get notified when issues arise. Reports can be triggered on-demand, and can be sent to third party integrations such as Slack or Github.

## Running a report

To run a report, use the `baselime report` command. By default, this will create a snapshot of all the alerts in the current service, display the results in the terminal, and output them to a file.

```bash # :icon-terminal: terminal
baselime report
```

To generate and publish a report, run the `baselime report` command followed by the name of the integration you want to publish the report to:

```bash # :icon-terminal: terminal
baselime report <integration>
```

For example, to publish a report to GitHub, you would run:

```bash # :icon-terminal: terminal
baselime report github
```

---

## SLOs and Dashboards (Coming Soon)

In the future, the report command will also include support for publishing Service Level Objectives (SLOs) and creating dashboards to visualize your report data. Stay tuned for updates!
