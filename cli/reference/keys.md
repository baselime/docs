---
label: keys
---

# key

The `keys` command is used to perform operations on keys.

---

## block

Used to block a specific key from being ingested into Baselime.

```bash #
baselime keys block <KEY> \
  --namespace <NAMESPACE> 
```

### Options

- `--namespace`: the specific namespace in which to block the key

### Outputs

- `id`: an ID uniquely representing the blocked key

### Example

Command:

```bash #
baselime keys block "user.email" \
  --namespace login-lambda 
```

Output:

```json #
{
  "id": "80facf44-a7fc-444e-8210-9e7de435111d"
}
```

---

## obfuscate

Used to obfuscate a specific key when ingested into Baselime. Obfuscated keys will be stored in Baselime, but scrambled as a Base64-encoded ASCII from the original data.

```bash #
baselime keys obfuscate <KEY> \
  --namespace <NAMESPACE> 
```

### Options

- `--namespace`: the specific namespace in which to obfuscate the key

### Outputs

- `id`: an ID uniquely representing the obfuscated key

### Example

Command:

```bash #
baselime keys obfuscate "user.name" \
  --namespace login-lambda 
```

Output:

```json #
{
  "id": "80facf44-a7fc-444e-8210-9e7de435111d"
}
```
