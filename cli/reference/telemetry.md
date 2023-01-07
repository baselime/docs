---
label: telemetry
---

# baselime telemetry

Use the `baselime telemetry` command to manage the usage telemetry data collected by the Baselime CLI.

```bash :icon-terminal: terminal
baselime telemetry

Manage Baselime telemetry collection

Commands:
  baselime telemetry disable  Disable Baselime telemetry collection
  baselime telemetry enable   Enable Baselime telemetry collection

Options:
      --profile  [string] [default: "default"]
      --quiet    [boolean] [default: false]
  -d, --debug    [boolean] [default: false]
      --format   Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
  -h, --help     Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version  Show the current Baselime CLI version  [boolean]

Examples:

        baselime telemetry enable
        baselime telemetry disable

```
