---
label: logout
---

# baselime logout

Use the `baselime logout` command to log out of Baselime.

```bash :icon-terminal: terminal
baselime logout

Delete the locally-stored credentials for an environment

Options:
      --profile  Alias of the profile  [string] [default: "default"]
      --quiet    [boolean] [default: false]
  -d, --debug    [boolean] [default: false]
      --format   Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
  -h, --help     Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version  Show the current Baselime CLI version  [boolean]

Examples:

        # Intercatively select the environment to log out of:
        baselime logout

        # Provide parameters on the command-line:
        baselime  logout --profile prod

```
