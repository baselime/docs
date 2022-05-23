---
label: auth
---

# alerts

The `auth` command is used to manage authentication state.

---

## login

Obtain and save credentials for an environment

```bash #
baselime auth login
```

### Options

- `--email`: Email of the user

---

## logout

Remove locally-stored credentials for an environment

```bash #
baselime auth logout
```

### Examples

#### Example 1: Intercatively select the environment to log out of

Command:

```bash #
baselime auth logout
```

Output:

Intercative.

#### Example 2: Logout of a specific environment

Command:

```bash #
baselime auth logout --profile prod
```

Output:

```bash #
✔ Deleted credentials from your workstation
```
