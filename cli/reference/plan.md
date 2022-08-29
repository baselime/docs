---
label: plan
---

# plan

---

The `baselime plan` command creates an execution plan, which lets you preview the changes that Baselime plans to make on your Observability Configurations. 

```bash # :icon-terminal: terminal
baselime plan
```

The `plan` command:

- Builds an internal representation of the resources defined in the `.baselime` folder in your current working directory.
- Submits the current resources configuration to the Baselime backend which returns a comparison between the current configuration and the existing resources state.
- Proposes a set of change actions that should, if applied, make the remote observability resources match the local configuration.

The plan command alone will not carry out any of the proposed changes to the Baselime backend. It is intended to be used to check if the changes match the expected result before using the `baselime apply` command.

If you are using Baselime directly in an interactive terminal and you expect to apply the changes Baselime proposes, you can alternatively run `baselime apply` directly. By default, the `apply` command automatically generates a new plan and prompts for you to approve it.

### Examples

Command:

```bash # :icon-terminal: terminal
baselime plan
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


✔ Plan
    2 to add
    12 to change
    19 to destroy
```
