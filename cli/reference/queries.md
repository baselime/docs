---
label: queries
---

# queries

The `queries` command is used to manage queries.

---

## list

List all the queries.

```bash # :icon-terminal: terminal
baselime queries list
```

### Options

- `--application`: Name of the application


### Examples

#### Example 1: Listing all queries

Command:

```bash # :icon-terminal: terminal
baselime queries list
```

Output:

```txt # :icon-code: output
✔ Fetching your queries
╔═════════════╤═════════════════════════════╤═══════════════════════════════════════════╤═══════════════════════════╗
║ Application │ Id                          │ Name                                      │ Created                   ║
╟─────────────┼─────────────────────────────┼───────────────────────────────────────────┼───────────────────────────╢
║ api         │ lambda-duration             │ duration of the lambda execution          │ 2022-05-13T19:53:08+00:00 ║
╟─────────────┼─────────────────────────────┼───────────────────────────────────────────┼───────────────────────────╢
║ demo        │ random-num-gen-value        │ the value of the random number generation │ 2022-05-14T15:55:01+00:00 ║
╟─────────────┼─────────────────────────────┼───────────────────────────────────────────┼───────────────────────────╢
║ demo        │ random-num-gen-duration     │ duration of the random number generation  │ 2022-05-14T15:55:01+00:00 ║
╟─────────────┼─────────────────────────────┼───────────────────────────────────────────┼───────────────────────────╢
║ default     │ untitled-query_s2VTVn       │ Untitled Query                            │ 2022-05-12T08:49:20+00:00 ║
╟─────────────┼─────────────────────────────┼───────────────────────────────────────────┼───────────────────────────╢
║ api         │ response-time               │ response-time                             │ 2022-05-13T19:53:08+00:00 ║
╟─────────────┼─────────────────────────────┼───────────────────────────────────────────┼───────────────────────────╢
║ default     │ above-50_vkqD2i             │ Above 50                                  │ 2022-05-20T14:42:58+00:00 ║
╚═════════════╧═════════════════════════════╧═══════════════════════════════════════════╧═══════════════════════════╝
✨ 6 queries
```

#### Example 2: Listing all queries for an application

Command:

```bash # :icon-terminal: terminalbaselime queries list --application demo
```

Output:

```txt # :icon-code: output
✔ Fetching your queries
╔═════════════╤═════════════════════════╤═══════════════════════════════════════════╤═══════════════════════════╗
║ Application │ Id                     │ Name                                      │ Created                   ║
╟─────────────┼─────────────────────────┼───────────────────────────────────────────┼───────────────────────────╢
║ demo        │ random-num-gen-duration │ duration of the random number generation  │ 2022-05-14T15:55:01+00:00 ║
╟─────────────┼─────────────────────────┼───────────────────────────────────────────┼───────────────────────────╢
║ demo        │ random-num-gen-value    │ the value of the random number generation │ 2022-05-14T15:55:01+00:00 ║
╚═════════════╧═════════════════════════╧═══════════════════════════════════════════╧═══════════════════════════╝
✨ 2 queries
```

---

## run

Run a query.

```bash # :icon-terminal: terminal
baselime queries run --application <application_name> --id <query_id> --from 2days --to 1day
```

### Options

- `--environment`: Environment id
- `--application`: Name of the application
- `--id`: Query id
- `--from`: UTC start time - may also be relative eg: 1h, 20mins
- `--to`: UTC end time - may also be relative eg: 1h, 20mins, now
- `--id`: Query id


### Examples

#### Example 1: Run a query passing its application and id

Command:

```bash # :icon-terminal: terminal
baselime queries run --application api --id lambda-duration --from 2days --to 1day
```

Output:

```txt # :icon-code: output
✔ Running the query
╔═══════════════╤══════════════════╤═══════════════════════════╤═══════════════════════════╤═════════╤═══════════════════════════╗
║ Id            │ QueryId          │ From                      │ To                        │ Status  │ Created                   ║
╟───────────────┼──────────────────┼───────────────────────────┼───────────────────────────┼─────────┼───────────────────────────╢
║ 1653302639712 │ lambda-duration  │ 2022-05-21T11:43:57+01:00 │ 2022-05-22T11:43:57+01:00 │ STARTED │ 2022-05-23T10:43:59+00:00 ║
╚═══════════════╧══════════════════╧═══════════════════════════╧═══════════════════════════╧═════════╧═══════════════════════════╝
╔════════════════╤════════════════════╗
║ Aggregate      │ Value              ║
╟────────────────┼────────────────────╢
║ MAX(@duration) │ 8758.75            ║
╟────────────────┼────────────────────╢
║ MIN(@duration) │ 2.25               ║
╟────────────────┼────────────────────╢
║ P99(@duration) │ 322.98440000000005 ║
╚════════════════╧════════════════════╝
Follow this url: https://console.baselime.io/<workspace>/<env>/queries/lambda-duration/1653302639712
```
