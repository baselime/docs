---
label: init
---

# baselime init

Use the `baselime init` command to initialize a new service in the current directory.

```bash :icon-terminal: terminal
baselime init

Initialise Observability as Code in the current working directory

Options:
      --profile      [string] [default: "default"]
      --quiet        [boolean] [default: false]
  -d, --debug        [boolean] [default: false]
      --format       Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
      --service      Name of the service  [string]
      --description  Description of the service  [string]
      --template     Template to intitialise the service with  [string]
      --provider     Cloud provider  [string] [choices: "aws"] [default: "aws"]
  -h, --help         Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version      Show the current Baselime CLI version  [boolean]

Examples:

        # Initialise a service:
        baselime init

        # Provide parameters on the command-line:
        baselime init --service <service_name> --description <description>

        # Provide a template on the command-line:
        # The template can be either a local template within Baselime or a public URL to a template

        baselime init --service <service_name> --template <workspace>/<template>
        baselime init --service <service_name> --template <template-url>

```
