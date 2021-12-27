---
label: init
---

# init

---

The `init` command is used initialise Baselime in a new or existing application.


```bash #
baselime init \
  [--application <APPLICATION_NAME>] \
  [--description <APPLICATION_DESCRIPTION>] \
```

### Options

- `--application`: the name of the application, defaults to the name of the working directory
- `--description`: the description of the application, defaults to `null`

### Outputs

Running this command will create a `.baselime.yml` file in the working directory

### Example

Command:

```bash #
baselime init \
  --application sample-application \
  --description "This is a sample description of the application" \
```

Output:

```yaml .baselime.yml
version: 0.0.0.1

application: sample-application
description: This is a sample description of the application
```



