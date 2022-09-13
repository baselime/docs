---
label: init
---

# init

---

The `init` command is used to initialise your local folder with metadata about your application.

```bash # :icon-terminal: terminal
baselime init --application <application_name> --description <description> --template <template>
```

### Options

- `--application`: Name of the application
- `--description`: Description of the application
- `--template`: The template to initialise the folder with

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
baselime init --application api --description "The api that powers our web application" --template @workspace/template-name
```

Output:

```txt # :icon-code: output
✔ .baselime folder Generated
```



