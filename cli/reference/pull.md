---
label: pull
---

# baselime pull

Use the `baselime pull` command to update local observability as code configurations with the latest state from the remote systems. If the service has not been initialised locally yet then the cli will prompt you to select a service and download everything to your machine.

```bash :icon-terminal: terminal
baselime pull

Pull the state from the remote systems to update the local state

Options:
      --profile    [string] [default: "default"]
      --quiet      [boolean] [default: false]
  -d, --debug      [boolean] [default: false]
      --format     Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
  -c, --config     The configuration folder to execute  [string] [default: ".baselime"]
  -y, --yes        Skip the manual validation of changes  [boolean] [default: false]
      --variables  The variables to replace when doing the plan  [array]
  -h, --help       Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version    Show the current Baselime CLI version  [boolean]

Examples:

        baselime pull
        baselime pull --config .baselime --profile prod

```
