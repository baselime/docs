---
label: apply
---

# apply

---

The `apply` command is used apply the changes made to the Baselime config file onto the Baselime platform.


```bash #
baselime apply \
  [--file <BASELIME_FILE>] \
```

### Options

- `--file`: the Baselime configuration file. Defaults to `.baselime.yml`

### Outputs

The resources created on the Baselime platform.

### Example

Command:

```bash #
baselime apply
```

Output:

```bash #
Created queries:
  - test-query: <created_query_id>
Created alerts:
  - test-alert: <created_alert_id>
# ... more created resources ... #
```



