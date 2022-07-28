---
label: telemetry
---

# telemetry

The `telemetry` command is used to manage Baselime's telemetry collection.

---

## enable

Enable Baselime's telemetry collection.

```bash # :icon-terminal: terminal
baselime telemetry enable
```

## disable

Disable Baselime's telemetry collection.

```bash # :icon-terminal: terminal
baselime telemetry disable
```


### Examples

#### Example 1: Enable telemetry collection

Command:

```bash # :icon-terminal: terminal
baselime telemetry enable
```

Output:

```txt # :icon-code: output
Status: Enabled
Baselime telemetry is completely anonymous. Thank you for participating!
```

#### Example 2: Disable telemetry collection

Command:

```bash # :icon-terminal: terminal
baselime telemetry disable
```

Output:

```txt # :icon-code: output
Status: Disabled 

You have opted out of Baselime's anonymous telemetry program.
No data will be collected from your machine.
```
