---
label: environments
---

# environments

The `environments` command is used to manage environments.

---

## list

List all the environments.

```bash # :icon-terminal: terminal
baselime applications list
```

### Examples

#### Example 1: Listing all environments

Command:

```bash # :icon-terminal: terminal
baselime environments list
```

Output:

```txt # :icon-code: output
✔ Fetching your environments
╔═══════════╤════════════════╤═════════════╤═══════════════════════════╗
║ Alias     │ Account        │ Region      │ Created                   ║
╟───────────┼────────────────┼─────────────┼───────────────────────────╢
║ prod      │ 111111111111   │ eu-west-2   │ 2022-05-13T20:27:53+00:00 ║
╚═══════════╧════════════════╧═════════════╧═══════════════════════════╝
✨ 1 environment
```

---

## setup

Setup a new environment.

```bash # :icon-terminal: terminal
baselime environments setup --type aws --account <account_numner> --region <region> --alias <alias>
```

### Options

- `--type`: The type of environment to setup. Currently supports `aws`
- `--account`: Account number
- `--region`: Region
- `--alias`: An alias for the environment (eg. 'prod')

### Examples

#### Example 1: Setting up an environment

Command:

```bash # :icon-terminal: terminal
baselime environments setup --type aws --account <account_numner> --region <region> --alias <alias>
```

Output:

Intercative.
