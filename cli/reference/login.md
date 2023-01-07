---
label: login
---

# baselime login

Use the `baselime login` command to log in your Baselime account and select an environment.

```bash :icon-terminal: terminal
baselime login

Obtain and save credentials for an environment

Options:
      --profile  Alias of the profile  [string] [default: "default"]
      --quiet    [boolean] [default: false]
  -d, --debug    [boolean] [default: false]
      --format   Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
  -h, --help     Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version  Show the current Baselime CLI version  [boolean]

Examples:

        # Intercatively authenticate against Baselime:
        baselime login

        # Provide parameters on the command-line:
        baselime login --profile prod

```
