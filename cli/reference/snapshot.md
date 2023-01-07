---
label: snapshot
---

# baselime snapshot

Use the `baselime snapshot` command to check all the alerts in your current service, create snapshots of the results, display them in the terminal, and output them to a file.

```bash :icon-terminal: terminal
baselime snapshot

Check all the alerts in the current service, create snapshots of the results, displays the results in the terminal, and outputs them to a file

Options:
      --profile  [string] [default: "default"]
      --quiet  [boolean] [default: false]
  -d, --debug  [boolean] [default: false]
      --format    Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
  -c, --config    The configuration folder of the service to snapshot. Defaults to the service specified in the .baselime folder, if it exists.  [string] [default: ".baselime"]
  -o, --out-file  The file to output the results to  [string] [default: "baselime-snapshot.json"]
      --service   The service to snapshot. This will be used to determine the service if no service is provided.  [string]
  -h, --help      Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version   Show the current Baselime CLI version  [boolean]

Examples:

        baselime snapshot
        baselime snapshot --config .baselime --out-file file.json

```
