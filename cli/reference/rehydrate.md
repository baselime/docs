---
label: connect
---

# baselime connect

Use the `baselime rehydrate` to rehydrate expired data from your S3.

```bash :icon-terminal: terminal
cli.js rehydrate

Rehydrate expired data from your s3

Options:
      --profile  [string] [default: "default"]
      --quiet  [boolean] [default: false]
      --debug  [boolean] [default: false]
      --format          Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
  -c, --config          The configuration folder to execute  [string] [default: ".baselime"]
      --startDate       Date onwards which to recover the data ISO format  [string]
      --hoursToRecover  Consecutive hours of data from startDate to recover  [number]
  -h, --help            Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version         Show the current Baselime CLI version  [boolean]

Examples:

        cli.js rehydrate --startDate 2023-06-08T13:24:47.906Z --hoursToRecover 1
        cli.js rehydrate --config .baselime --profile prod --startDate 2023-06-08T13:24:47.906Z --hoursToRecover 1
```
