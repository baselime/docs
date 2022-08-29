---
label: channels
---

# channels

The `channels` command is used to manage channels.

---

## list

List all the channels.

```bash # :icon-terminal: terminal
baselime channels list
```

### Options

- `--application`: Name of the application


### Examples

#### Example 1: Listing all channels

Command:

```bash # :icon-terminal: terminal
baselime channels list
```

Output:

```txt # :icon-code: output
✔ Fetching your channels
╔═════════════╤══════════════════╤══════════════════╤══════════════════════════════╤═══════════════════════════╗
║ Application │ Id               │ Name             │ Targets                      │ Created                   ║
╟─────────────┼──────────────────┼──────────────────┼──────────────────────────────┼───────────────────────────╢
║ api         │ developers       │ developers       │ ["developers@ecma.com"]      │ 2022-05-04T15:26:05+00:00 ║
╟─────────────┼──────────────────┼──────────────────┼──────────────────────────────┼───────────────────────────╢
║ default     │ admins           │ admins           │ ["a@ecma.com", "b@ecma.com"] │ 2022-06-30T08:28:40+00:00 ║
╚═════════════╧══════════════════╧══════════════════╧══════════════════════════════╧═══════════════════════════╝

✨ 2 channels
```

#### Example 2: Listing all channels for an application

Command:

```bash # :icon-terminal: terminal
baselime channels list --application api
```

Output:

```txt # :icon-code: output
✔ Fetching your channels
╔═════════════╤══════════════════╤══════════════════╤══════════════════════════════╤═══════════════════════════╗
║ Application │ Id               │ Name             │ Targets                      │ Created                   ║
╟─────────────┼──────────────────┼──────────────────┼──────────────────────────────┼───────────────────────────╢
║ api         │ developers       │ developers       │ ["developers@ecma.com"]      │ 2022-05-04T15:26:05+00:00 ║
╚═════════════╧══════════════════╧══════════════════╧══════════════════════════════╧═══════════════════════════╝
✨ 1 channel
```