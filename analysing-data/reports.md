---
label: Reports
order: -3
---

# Reports

Baselime reports allow you to monitor the health of your services and get notified when issues arise. Reports can be triggered on-demand, and can be sent to third party integrations such as Slack or Github.

## When to use reports ?

Baselime reports are a powerful tool that enable your team to compare the state of a service before and after making changes. By incorporating Baselime reports into your CI/CD pipeline, your team can see the impact of their changes on alerts, dashboards, and SLOs in production. This not only improves the reliability of your deployments, but it also enables your team to build self-healing systems. For example, if a report after deployment is negative, your team can roll back or roll forward to ensure the stability of your service.

Here is an example of how you can use the `baselime report` command in a GitHub Action to compare the state of a service before and after a deployment:

```yaml #
name: Deploy Service
on: [push]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Take snapshot before deployment
        run: baselime report github --repo $github.GITHUB_REPOSITORY --commit $github.GITHUB_SHA --github-token $secrets.GITHUB_TOKEN
      - name: Run deployment
        run: npm run deploy
      - name: Wait 5 minutes
        run: sleep 300
      - name: Take snapshot after deployment
        run: baselime report github --repo $github.GITHUB_REPOSITORY --commit $github.GITHUB_SHA --github-token $secrets.GITHUB_TOKEN
```

This workflow will take a snapshot with `baselime report github` before and after running the deployment script (`npm run deploy`). The report will be posted on the commit that triggered the workflow as a comment. It contains the current state of your service, including alerts, dashboards, and SLOs (coming soon). By comparing the two snapshots, you can see how the deployment affected your service and take appropriate action if needed.

---

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
