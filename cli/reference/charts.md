---
label: charts
---

# charts

The `charts` command is used to manage charts.

---

## list

List all the charts.

```bash # :icon-terminal: terminal
baselime charts list
```

### Options

- `--application`: Name of the application


### Examples

#### Example 1: Listing all charts

Command:

```bash # :icon-terminal: terminal
baselime charts list
```

Output:

```txt # :icon-code: output
✔ Fetching your charts
╔═════════════╤══════════════════╤═══════════════════╤═══════════════════════════╗
║ Application │ Id               │ Name              │ Created                   ║
╟─────────────┼──────────────────┼───────────────────┼───────────────────────────╢
║ api         │ api-response     │ Api Response Time │ 2022-07-01T19:54:46+00:00 ║
╟─────────────┼──────────────────┼───────────────────┼───────────────────────────╢
║ default     │ new-chart        │ New Chart         │ 2022-07-01T18:51:27+00:00 ║
╚═════════════╧══════════════════╧═══════════════════╧═══════════════════════════╝

✨ 2 charts
```

#### Example 2: Listing all charts for an application

Command:

```bash # :icon-terminal: terminal
baselime charts list --application api
```

Output:

```txt # :icon-code: output
✔ Fetching your charts
╔═════════════╤══════════════════╤═══════════════════╤═══════════════════════════╗
║ Application │ Id               │ Name              │ Created                   ║
╟─────────────┼──────────────────┼───────────────────┼───────────────────────────╢
║ api         │ api-response     │ Api Response Time │ 2022-07-01T19:54:46+00:00 ║
╚═════════════╧══════════════════╧═══════════════════╧═══════════════════════════╝
✨ 1 chart
```