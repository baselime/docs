---
label: deploy
---

# baselime deploy

Use the `baselime deploy` command to deploy your Observability as Code configurations from your local folder to your Baselime account.

```bash :icon-terminal: terminal
baselime deploy

Create or update observability configurations

Options:
      --profile  [string] [default: "default"]
      --quiet  [boolean] [default: false]
      --debug  [boolean] [default: false]
      --format     Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
  -c, --config     The configuration folder to execute  [string] [default: ".baselime"]
  -y, --yes        Skip the manual validation of changes  [boolean] [default: false]
      --dry-run    Checks the changes that will be made to the remote when applying, without actually making the request  [boolean] [default: false]
      --variables  The variables to replace when doing the plan  [array]
  -h, --help       Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version    Show the current Baselime CLI version  [boolean]

Examples:

        baselime deploy
        baselime deploy --config .baselime --profile prod
```
