---
label: Basic CLI Features
order: -2
---

The command line interface to Baselime is via the `baselime` command, which accepts a variety of commands and subcommands, such as `baselime init` or `baselime apply`. A full list of the supported commands, subcommands is provided in the navigation section of this page.

We refer to the `baselime` command line tool as the `Baselime CLI` elsewhere in the documentation.

To view a list of the commands available in your current version of the Baselime CLI, run `baselime --help`:

```txt # :icon-code: output
baselime [command]
The power of Baselime in the command-line

Commands:
  baselime alerts        Manage alerts
  baselime applications  Manage applications
  baselime apply         Create or update observability configurations
  baselime auth          Manage authentication state
  baselime destroy       Destroy previously-created observability configurations
  baselime environments  Manage environments
  baselime events        Manage events
  baselime init          Prepare your working directory for other commands
  baselime namespaces    Manage namespaces
  baselime plan          Show changes required by the current configuration
  baselime queries       Manage queries
  baselime refresh       Update the state to match remote systems
  baselime validate      Check whether the configuration is valid

Options:
  -h, --help     Show this help output, or the help for a specified command or subcommand                                         [boolean]
  -v, --version  Show the current Baselime CLI version                                                                            [boolean]
```

(The output from your current Baselime CLI version might differ from the above example).

To get specific help for any specific command, use the `--help` option with the relevant command. For example `baselime apply --help` will display the help for the "apply" command.

The built-in help describes the most important and relevant characteristics of each command and subcommand. For more details, please refer to each commands section in this documentation. 

---

## Common options

- `--profile`: Use a specific profile from your credentials folder
- `--quiet`: Disable console output
- `--debug`: Turn on debug logging
- `--format`: The formating style for the command output.
  - `json`
  - `table`

---

## CLI Reference


[!ref alerts](./reference/alerts.md)
[!ref applications](./reference/applications.md)
[!ref apply](./reference/apply.md)
[!ref auth](./reference/auth.md)
[!ref destroy](./reference/destroy.md)
[!ref environments](./reference/environments.md)
[!ref events](./reference/events.md)
[!ref init](./reference/init.md)
[!ref namespaces](./reference/namespaces.md)
[!ref plan](./reference/plan.md)
[!ref queries](./reference/queries.md)
[!ref refresh](./reference/refresh.md)
[!ref validate](./reference/validate.md)

