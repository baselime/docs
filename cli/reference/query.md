---
label: query
---

# baselime query

Use the `baselime query` command to run a query on your telemetry data data.

```bash :icon-terminal: terminal
baselime query

Run a query
Use baselime query without any flags for the interactive mode

Options:
      --profile  [string] [default: "default"]
      --quiet  [boolean] [default: false]
      --debug  [boolean] [default: false]
      --format   Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
      --service  Name of the service  [string]
      --id       Query id, if running a saved query  [string]
      --from     UTC start time - may also be relative eg: 1h, 20mins  [string]
      --to       UTC end time - may also be relative eg: 1h, 20mins, now  [string]
  -h, --help     Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version  Show the current Baselime CLI version  [boolean]

Examples:

          # Run a query in interactive mode
          baselime query

          # Run a saved query passing the service name and the queryId:
          baselime query --service <service_name> --id <query_id> --from 2days --to 1day
```
