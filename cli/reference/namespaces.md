---
label: namespaces
---

# namespaces

The `namespaces` command is used to manage namespaces.

---

## list

List all the namespaces.

```bash # :icon-terminal: terminal
baselime namespaces list
```

### Options

- `--application`: Application name
- `--from`: UTC start time - may also be relative eg: 1h, 20mins
- `--to`: UTC end time - may also be relative eg: 1h, 20mins, now


### Examples

#### Example 1: Listing all namespaces ingested for an application for the past 2 hours

Command:

```bash # :icon-terminal: terminal
baselime namespaces list --application api --from 2hours --to now
```

Output:

```txt # :icon-code: output
✔ Fetching your namespaces
╔═════════════════════════════╤═════════════════════════╗
║ Namespace                   │ Last ingested           ║
╟─────────────────────────────┼─────────────────────────╢
║ namspace_1                  │ 2022-05-23 10:25:37.364 ║
╟─────────────────────────────┼─────────────────────────╢
║ namspace_2                  │ 2022-05-23 10:20:33.081 ║
╚═════════════════════════════╧═════════════════════════╝
✨ 2 namespaces
```
