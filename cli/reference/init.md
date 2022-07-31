---
label: init
---

# init

---

The `init` command is used to prepare your working directory for other commands.


```bash # :icon-terminal: terminal
baselime init --application <application_name> --description <description>
```

### Options

- `--application`: Name of the application
- `--description`: Description of the application

### Examples

#### Example 1: Interactively initialise an application

Command:

```bash # :icon-terminal: terminal
baselime init
```

Output:

Intercative.

#### Example 2: Initialise an application with options

Command:

```bash # :icon-terminal: terminal
baselime init --application api --description "The api that powers our web application"
```

Output:

```txt # :icon-code: output
✔ .baselime folder Generated
```



