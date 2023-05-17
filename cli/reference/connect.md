---
label: connect
---

# baselime connect

Use the `baselime connect` command to connect your AWS account to Baselime.

```bash :icon-terminal: terminal
baselime connect

Connect a cloud environment to Baselime

Options:
      --profile  [string] [default: "default"]
      --quiet  [boolean] [default: false]
      --debug  [boolean] [default: false]
      --format    Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
      --provider  The cloud provider  [string] [choices: "aws"]
      --account   The account number  [string]
      --region    The region  [string]
      --alias     An alias for the environment (eg. 'prod')  [string]
  -h, --help      Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version   Show the current Baselime CLI version  [boolean]

Examples:

        # Connect an AWS environment:
        baselime connect
```
