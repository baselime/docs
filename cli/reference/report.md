---
label: report
---

# baselime report

Use the `baselime report` command to generate a report based on your observability data and assess the health and performance of your service.

```bash :icon-terminal: terminal
baselime report

Post reports to CI/CD pipelines

Commands:
  baselime report         Post a Baselime report to file or stdout  [default]
  baselime report github  Post a Baselime report to GitHub

Options:
      --profile    [string] [default: "default"]
      --quiet      [boolean] [default: false]
  -d, -d, --debug  [boolean] [default: false]
      --format     Format to output the data in  [string] [choices: "table", "json", "table", "json"] [default: "table"]
      --path       Path to the Baselime output file  [string]
      --out-file   Path to the Baselime output file  [string]
  -c, --config     The configuration folder to create the report for. This will be used to determine the service if no service is provided.  [string] [default: ".baselime"]
  -h, --help       Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version    Show the current Baselime CLI version  [boolean]

Examples:

        baselime report github --repo <org/repo> --pull-request <pr-number> --path <path-to-baselime-output> --github-token <github-token>


        # Post a report to stdout:
        baselime report

        # Post a report to file:
        baselime report --path <path-to-baselime-output>

```
