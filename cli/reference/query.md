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
      --profile       [string] [default: "default"]
      --quiet         [boolean] [default: false]
  -d, --debug         [boolean] [default: false]
      --format        Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
      --service       Name of the service  [string]
      --id            Query id, if running a saved query  [string]
      --datasets      The datasets to query  [array] [default: []]
      --filters       A set of filters to apply when running the query; multiple filters can be passed  [array] [default: []]
      --calculations  A set of calculations to claculations to compute; multiple calculations can be added  [array] [default: []]
      --needle        A string to search in the fields and values of every event  [string]
      --regex         A regular expression to search in the fields and valies of every event. If there is both a needle and a regex, the regex is considered in priority  [string]
      --match-case    Match case if a needle is specified  [boolean] [default: false]
      --from          UTC start time - may also be relative eg: 1h, 20mins  [string]
      --to            UTC end time - may also be relative eg: 1h, 20mins, now  [string]
  -h, --help          Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version       Show the current Baselime CLI version  [boolean]

Examples:

          # Run a query in interactive mode
          baselime query

          # Run a saved query passing the service name and the queryId:
          baselime query --service <service_name> --id <query_id> --from 2days --to 1day

          # Run a query inline with filters and searching for a field or value (needle)
          baselime query --filters "<key> <operation> <value>" --needle <needle> --follow

          # Run a query inline with a calculation on events matching a regular expression
          baselime query --calculations <operator>(<key>) --regex <regex>

```
