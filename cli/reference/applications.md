---
label: applications
---

# applications

The `applications` command is used to manage applications.

---

## list

List all the applications.

```bash #
baselime applications list
```

### Examples

#### Example 1: Listing all applications

Command:

```bash #
baselime applications list
```

Output:

```txt
✔ Fetching your applications
╔═══════════╤═══════════════════════════╗
║ Name      │ Created                   ║
╟───────────┼───────────────────────────╢
║ api       │ 2022-05-13T20:27:53+00:00 ║
╚═══════════╧═══════════════════════════╝
✨ 1 application
```

---

## describe

Return the description of an application.

```bash #
baselime applications describe --name <application_name>
```

### Options

- `--name`: Name of the application

### Examples

#### Example 1: Describing an application

Command:

```bash #
baselime applications describe --name api
```

Output:

```txt
✔ Fethcing application api
╔═══════════╤═════════╤═══════════════╤═══════════════════════════╤═══════════════════════════╗
║ Name      │ Status  │ Deployment Id │ Created                   │ Updated                   ║
╟───────────┼─────────┼───────────────┼───────────────────────────┼───────────────────────────╢
║ api       │ SUCCESS │ u_Eq2l        │ 2022-05-13T20:27:53+00:00 │ 2022-05-08T17:18:57+00:00 ║
╚═══════════╧═════════╧═══════════════╧═══════════════════════════╧═══════════════════════════╝
```
