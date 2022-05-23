---
label: alerts
---

# alerts

The `alerts` command is used to manage alerts.

---

## list

List all the alerts.

```bash #
baselime alerts list
```

### Options

- `--application`: Name of the application


### Examples

#### Example 1: Listing all alerts

Command:

```bash #
baselime alerts list
```

Output:

```txt
✔ Fetching your alerts
╔════════╤═════════════╤═════════════════════════╤═════════════════════════╤═══════════════════════════╗
║ Id     │ Application │ Ref                     │ Name                    │ Created                   ║
╟────────┼─────────────┼─────────────────────────┼─────────────────────────┼───────────────────────────╢
║ FpCzIz │ api         │ critical-response-time  │ Long response times     │ 2022-05-13T19:53:09+00:00 ║
╟────────┼─────────────┼─────────────────────────┼─────────────────────────┼───────────────────────────╢
║ fXBnuy │ default     │ count-is-above-0_fXBnuy │ Count is above 0        │ 2022-05-12T15:06:27+00:00 ║
╚════════╧═════════════╧═════════════════════════╧═════════════════════════╧═══════════════════════════╝
✨ 2 alerts
```

#### Example 2: Listing all alerts for an application

Command:

```bash #
baselime alerts list --application api
```

Output:

```txt
✔ Fetching your alerts
╔════════╤═════════════╤═════════════════════════╤═════════════════════════╤═══════════════════════════╗
║ Id     │ Application │ Ref                     │ Name                    │ Created                   ║
╟────────┼─────────────┼─────────────────────────┼─────────────────────────┼───────────────────────────╢
║ FpCzIz │ api         │ critical-response-time  │ Long response times     │ 2022-05-13T19:53:09+00:00 ║
╚════════╧═════════════╧═════════════════════════╧═════════════════════════╧═══════════════════════════╝
✨ 1 alert
```