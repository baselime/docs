---
label: apply
---

# apply

---

Create or update observability configurations


```bash # :icon-terminal: terminal
baselime apply
```

### Options

- `--config`: Baselime configuration file to execute. Defaults to `.baselime.yml`

### Examples

#### Example 1: Applying the default config file

Command:

```bash # :icon-terminal: terminal
baselime apply
```

Output:

```txt # :icon-code: output
✔ Valid configuration file
✔ Submitted your observability configurations. id: 01G3R48M4QVDYH7NF79AWT4K0D
```

#### Example 2: Applying a configuration file

Command:

```bash # :icon-terminal: terminal
baselime apply --config custom.yml
```

Output:

```txt # :icon-code: output
✔ Valid configuration file
✔ Submitted your observability configurations. id: 05GYB48M4QVJHT7NF79AWT4KIH
```
