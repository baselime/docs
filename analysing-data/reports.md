---
label: Reports
order: -3
---

# Reports

---

Baselime reports are a powerful tool that enable you to compare the state of a service before and after making changes. By incorporating Baselime reports into your CI/CD pipeline, you can see the impact of changes in production. This improves the reliability of your deployments and enables you to build self-healing systems.

For example, if a report after deployment fails, you can roll back or roll forward to ensure the stability of your service.

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

This workflow takes a snapshot with `baselime report github` before and after running the deployment script (`npm run deploy`). The reports are posted on the commit that triggered the workflow. By comparing the two snapshots, you can see how the deployment affected your service and take appropriate action.

---

## Running a report

To run a report, use the `baselime report` command. By default, this will create a snapshot of all the alerts in the current service, display the results in the terminal, and save them to a file.

```bash # :icon-terminal: terminal
baselime report
```

To publish a report to GitHub, run:

```bash # :icon-terminal: terminal
baselime report github
```

