---
label: refresh
---

# refresh

---

The `baselime plan` command reads the current settongs from the Baselime backend for all observability resources for an application, and updated the local state to match. 

```bash # :icon-terminal: terminal
baselime refresh
```

The `refresh` command:

- Builds an internal representation of the resources defined in the `.baselime` folder in your current working directory.
- Submits the current resources configuration to the Baselime backend which returns a comparison between the current configuration and the existing resources state.
- Proposes a set of change actions that should, if applied, make the local configuration match the remote observability resources.

If there are discrepancies between the remote observability resources and the local configurations, the `refresh` command will delete the amend the existing files for deleted or updated resources; and will create a new file `imported_<timestamp>` with resources which have been created.

### Examples

Command:

```bash # :icon-terminal: terminal
baselime refresh
```

Output:

```txt # :icon-code: output
┌────┬────────────────────────────────────────────────────────────────────────────────────┐
│ ~~ │ lambda-cold-start-duration:                                                        │
│    │   type: query                                                                      │

// Extended output

├────┼────────────────────────────────────────────────────────────────────────────────────┤
│ ++ │ pokedex-dashboard:                                                                 │
│    │   type: dashboard                                                                  │
│    │                                                                                    │
└────┴────────────────────────────────────────────────────────────────────────────────────┘


✔ Resources
    2 to add
    12 to change
    19 to destroy
```
