---
label: destroy
---

# baselime destroy

Use the `baselime destroy` to services previously created through Observability as Code.

```bash :icon-terminal: terminal
baselime destroy

Destroy previously-created observability configurations

Options:
      --profile  [string] [default: "default"]
      --quiet  [boolean] [default: false]
  -d, --debug  [boolean] [default: false]
      --format   Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
  -c, --config   The configuration folder to execute  [string] [default: ".baselime"]
  -h, --help     Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version  Show the current Baselime CLI version  [boolean]

Examples:

        baselime destroy
        baselime destroy --config .baselime --profile prod

```
