---
label: tail
---

# baselime tail

Use the `baselime tail` command to stream events from your telemetry data in
real-time.

```bash :icon-terminal: terminal
baselime tail

Tail your telemetry data to your terminal

Options:
      --profile     [string] [default: "default"]
      --quiet       [boolean] [default: false]
  -d, --debug       [boolean] [default: false]
      --format      Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
      --datasets    The datasets to tail  [array] [default: []]
      --service     The service to tail. When specified, additional filters are combined with the filters of the service  [string]
      --filters     A set of filters to apply to the tail; multiple filters can be passed  [array] [default: []]
      --needle      A string to search in the telemetry data to tail  [string]
      --field       The field to display from the events  [string]
      --regex       A regular expression to search in the telemetry data to tail. If there is both a needle and a regex, the regex takes priority  [string]
      --match-case  Match case if a needle is specified  [boolean] [default: false]
      --from        UTC start time - may also be relative eg: 1h, 20mins  [string] [default: "1hour"]
      --to          UTC end time - may also be relative eg: 1h, 20mins, now  [string] [default: "now"]
  -f, --follow      Wait for additional data to be appended when the end of the tail is reached  [boolean] [default: false]
  -h, --help        Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version     Show the current Baselime CLI version  [boolean]

Examples:

        # Tail a dataset
        baselime tail --datasets <dataset_name> --from 3hours to now

        # Tail all datasets with filters and find a needle
        baselime tail --filters "<key> <operation> <value>" --needle "<needle>" --follow

        # Tail all datasets with filters and find all events matching a regular expression
        baselime tail --filters "<key> <operation> <value>" --regex "<regex>" --follow
```
