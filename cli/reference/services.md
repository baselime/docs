---
label: services
---

# baselime services

Use the `baselime services` command to manage Baselime services.

```bash :icon-terminal: terminal
baselime services

Manage services

Commands:
  baselime services describe  Return the description of a service
  baselime services list      List all the services

Options:
      --profile  [string] [default: "default"]
      --quiet    [boolean] [default: false]
  -d, --debug    [boolean] [default: false]
      --format   Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
  -h, --help     Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version  Show the current Baselime CLI version  [boolean]

Examples:

        baselime services list
        baselime services describe --name <service_name>

```
