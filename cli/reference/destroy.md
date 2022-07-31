---
label: destroy
---

# destroy

---

Destroy previously-created observability configurations


```bash # :icon-terminal: terminal
baselime destroy
```

### Options

- `--config`: Baselime configuration folder to destroy. Defaults to `.baselime`

### Examples

#### Example 1: Destroying the default config folder

Command:

```bash # :icon-terminal: terminal
baselime destroy
```

Output:

```txt # :icon-code: output
✔ Valid configuration folder
✔ Submitted your observability configurations. id: 01G3R48M4QVDYH7NF79AWT4K0D
```

#### Example 2: Destroying a configuration folder

Command:

```bash # :icon-terminal: terminal
baselime destroy --config custom
```

Output:

```txt # :icon-code: output
✔ Valid configuration folder
✔ Submitted your observability configurations. id: 05GYB48M4QVJHT7NF79AWT4KIH
```
