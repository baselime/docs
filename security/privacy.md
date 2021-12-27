---
label: Data Privacy
order: -1
---

# Data Privacy

---

You can keep your sensitive data private when working with Baselime. Configure Data Privacy policies to keep your sensitive data private, whhilst Baselime collects telemetry data from your serverless stack.

---

## Data Privacy Policies

You can prevent specific data fields from being ingested in Baselime. Eitherby blocking them entirely, or obfuscating the value stored in Baselime. blocked and obfustaed data fields can be specified across an entire workspace or per namespace.

### Blocking Data Fields

Blocked keys will not be stored in Baselime. They will not be available in queries, visualisations or text-search fields.

Data fields can be blocked in the Baselime Web UI or using the CLI.

```bash #
baselime keys block 'user.email' --namespace 'login-lambda'
```

### Obfuscating Data Fields

Obfuscated keys will be stored in Baselime, but scrambled as a Base64-encoded ASCII from the original data. It should be noted that it is possible to retrive the value of the obfuscated value.

Data fields can be obfuscated in the Baselime Web UI or using the CLI

```bash #
baselime keys obfuscate 'user.email' --namespace 'login-lambda'
```
