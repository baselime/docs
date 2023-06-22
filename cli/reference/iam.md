---
label: iam
---

# baselime iam

Use the `baselime iam` command to display the currently logged-in user and environment.

```bash :icon-terminal: terminal
baselime iam

View authentication status

Options:
      --profile  [string] [default: "default"]
      --quiet    [boolean] [default: false]
  -d, --debug    [boolean] [default: false]
      --format   Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
  -h, --help     Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version  Show the current Baselime CLI version  [boolean]

Examples:

        # Check authentication status for default profile:
        baselime iam

        # Check authentication status of a specified profile:
        baselime iam --profile prod

```
