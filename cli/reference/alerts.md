---
label: alerts
---

# baselime alerts

Use the `baselime alerts` to manage the alerts in your Baselime environment.

```bash :icon-terminal: terminal
baselime alerts

Manage alerts

Commands:
  baselime alerts check  Run the query of a set of alerts to check their status
  baselime alerts list   List all the alerts

Options:
      --profile  [string] [default: "default"]
      --quiet    [boolean] [default: false]
  -d, --debug    [boolean] [default: false]
      --format   Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
  -h, --help     Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version  Show the current Baselime CLI version  [boolean]

Examples:

        baselime alerts list

```
