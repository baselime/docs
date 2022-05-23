---
label: destroy
---

# destroy

---

Destroy previously-created observability configurations


```bash #
baselime destroy
```

### Options

- `--config`: Baselime configuration file to destroy. Defaults to `.baselime.yml`

### Examples

#### Example 1: Destroying the default config file

Command:

```bash #
baselime destroy
```

Output:

```bash #
✔ Valid configuration file
✔ Submitted your observability configurations. id: 01G3R48M4QVDYH7NF79AWT4K0D
```

#### Example 2: Destroying a configuration file

Command:

```bash #
baselime destroy --config custom.yml
```

Output:

```bash #
✔ Valid configuration file
✔ Submitted your observability configurations. id: 05GYB48M4QVJHT7NF79AWT4KIH
```
