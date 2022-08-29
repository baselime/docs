---
label: dashbaords
---

# dashbaords

The `dashbaords` command is used to manage dashbaords.

---

## list

List all the dashbaords.

```bash # :icon-terminal: terminal
baselime dashbaords list
```

### Options

- `--application`: Name of the application


### Examples

#### Example 1: Listing all dashbaords

Command:

```bash # :icon-terminal: terminal
baselime dashbaords list
```

Output:

```txt # :icon-code: output
✔ Fetching your dashbaords
╔═════════════╤══════════════════╤═══════════════════╤═══════════════════════════╗
║ Application │ Id               │ Name              │ Created                   ║
╟─────────────┼──────────────────┼───────────────────┼───────────────────────────╢
║ api         │ main-dash        │ Main Dashboard    │ 2022-07-01T19:54:46+00:00 ║
╟─────────────┼──────────────────┼───────────────────┼───────────────────────────╢
║ default     │ new-dashbaord    │ New Dashboard     │ 2022-07-01T18:51:27+00:00 ║
╚═════════════╧══════════════════╧═══════════════════╧═══════════════════════════╝

✨ 2 dashbaords
```

#### Example 2: Listing all dashbaords for an application

Command:

```bash # :icon-terminal: terminal
baselime dashbaords list --application api
```

Output:

```txt # :icon-code: output
✔ Fetching your dashbaords
╔═════════════╤══════════════════╤═══════════════════╤═══════════════════════════╗
║ Application │ Id               │ Name              │ Created                   ║
╟─────────────┼──────────────────┼───────────────────┼───────────────────────────╢
║ api         │ main-dash        │ Main Dashboard    │ 2022-07-01T19:54:46+00:00 ║
╚═════════════╧══════════════════╧═══════════════════╧═══════════════════════════╝
✨ 1 dashbaord
```