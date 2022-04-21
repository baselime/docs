---
label: Basic CLI Features
order: -2
---

The command line interface to Baselime is via the `baselime` command, which accepts a variety of commands and subcommands, such as `baselime init` or `baselime apply`. A full list of the supported commands, subcommands is provided in the navigation section of this page.

We refer to the `baselime` command line tool as the `Baselime CLI` elsewhere in the documentation.

To view a list of the commands available in your current version of the Baselime CLI, run `baselime --help`:

```txt
baselime [command] 

Commands:
  baselime init                             Prepare your working directory for other commands
  baselime validate                         Check whether the configuration is valid
  baselime plan                             Show changes required by the current configuration
  baselime apply [subcommand]               Create or update observability configurations
  baselime auth                             Obtain and save credentials for an environment
  baselime destroy                          Destroy previously-created observability configurations
  baselime logout                           Remove locally-stored credentials for an environment
  baselime refresh                          Update the state to match remote systems
  
  baselime aws <subcommand>                 Operations on AWS environment integrations
  [args]                             
  baselime queries <subcommand>             Operations on queries
  [args]
  baselime alerts <subcommand>              Operations on alerts
  [args]

Options:
      --version  Show the current Baselime CLI version                                        [boolean]
  -h, --help     Show this help output, or the help for a specified command or subcommand     [boolean]
```

(The output from your current Baselime CLI version might differ from the above example).

To get specific help for any specific command, use the `--help` option with the relevant command. For example `baselime apply --help` will display the help for the "apply" command.

The built-in help describes the most important and relevant characteristics of each command and subcommand. For more details, please refer to each commands section in this documentation. 

---

## CLI Reference

[!ref init](./reference/init.md)
[!ref apply](./reference/apply.md)
[!ref auth](./reference/auth.md)
[!ref aws](./reference/aws.md)
[!ref keys](./reference/keys.md)
[!ref query-run](./reference/query-run.md)

