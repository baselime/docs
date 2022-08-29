---
label: validate
---

# validate

---

The `baselime validate` command vaidates the configuration files in the `.baselime` in the working directory. The `baselime validate` command does not access any of the remote resources on the Baselime backend, and validates only the local configuration files.

```bash # :icon-terminal: terminal
baselime validate
```

The `baselime validate` verifies that the local configuration files are syntactically correct. It should be used for general verification.

### Examples

Command:

```bash # :icon-terminal: terminal
baselime validate
```

Output:

```txt # :icon-code: output
✔ Valid configuration folder
```