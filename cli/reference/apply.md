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

- `--config`: Baselime configuration folder to execute. Defaults to `.baselime`

### Examples

#### Example 1: Applying the default config folder

Command:

```bash # :icon-terminal: terminal
baselime apply
```

Output:

```txt # :icon-code: output
✔ Valid configuration folder
✔ Submitted your observability configurations. id: 01G3R48M4QVDYH7NF79AWT4K0D
```

#### Example 2: Applying a configuration folder

Command:

```bash # :icon-terminal: terminal
baselime apply --config custom
```

Output:

```txt # :icon-code: output
✔ Valid configuration folder
✔ Submitted your observability configurations. id: 05GYB48M4QVJHT7NF79AWT4KIH
```
