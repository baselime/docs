---
label: queries
---

# queries

The `queries` command is used to manage queries.

---

## list

List all the queries.

```bash #
baselime queries list
```

### Options

- `--application`: Name of the application


### Examples

#### Example 1: Listing all queries

Command:

```bash #
baselime queries list
```

Output:

```txt
✔ Fetching your queries
╔════════╤═════════════╤═════════════════════════════╤═══════════════════════════════════════════╤═══════════════════════════╗
║ Id     │ Application │ Ref                         │ Name                                      │ Created                   ║
╟────────┼─────────────┼─────────────────────────────┼───────────────────────────────────────────┼───────────────────────────╢
║ 1DLRye │ api         │ lambda-duration             │ duration of the lambda execution          │ 2022-05-13T19:53:08+00:00 ║
╟────────┼─────────────┼─────────────────────────────┼───────────────────────────────────────────┼───────────────────────────╢
║ c2qPyC │ demo        │ random-num-gen-value        │ the value of the random number generation │ 2022-05-14T15:55:01+00:00 ║
╟────────┼─────────────┼─────────────────────────────┼───────────────────────────────────────────┼───────────────────────────╢
║ oMyxvw │ demo        │ random-num-gen-duration     │ duration of the random number generation  │ 2022-05-14T15:55:01+00:00 ║
╟────────┼─────────────┼─────────────────────────────┼───────────────────────────────────────────┼───────────────────────────╢
║ s2VTVn │ default     │ untitled-query_s2VTVn       │ Untitled Query                            │ 2022-05-12T08:49:20+00:00 ║
╟────────┼─────────────┼─────────────────────────────┼───────────────────────────────────────────┼───────────────────────────╢
║ uLS5NU │ api         │ response-time               │ response-time                             │ 2022-05-13T19:53:08+00:00 ║
╟────────┼─────────────┼─────────────────────────────┼───────────────────────────────────────────┼───────────────────────────╢
║ vkqD2i │ default     │ above-50_vkqD2i             │ Above 50                                  │ 2022-05-20T14:42:58+00:00 ║
╚════════╧═════════════╧═════════════════════════════╧═══════════════════════════════════════════╧═══════════════════════════╝
✨ 6 queries
```

#### Example 2: Listing all alerts for an application

Command:

```bash #
baselime queries list --application demo
```

Output:

```txt
✔ Fetching your queries
╔════════╤═════════════╤═════════════════════════╤═══════════════════════════════════════════╤═══════════════════════════╗
║ Id     │ Application │ Ref                     │ Name                                      │ Created                   ║
╟────────┼─────────────┼─────────────────────────┼───────────────────────────────────────────┼───────────────────────────╢
║ oMyxvw │ demo        │ random-num-gen-duration │ duration of the random number generation  │ 2022-05-14T15:55:01+00:00 ║
╟────────┼─────────────┼─────────────────────────┼───────────────────────────────────────────┼───────────────────────────╢
║ c2qPyC │ demo        │ random-num-gen-value    │ the value of the random number generation │ 2022-05-14T15:55:01+00:00 ║
╚════════╧═════════════╧═════════════════════════╧═══════════════════════════════════════════╧═══════════════════════════╝
✨ 2 queries
```

---

## run

Run a query.

```bash #
baselime queries run --application <application_name> --ref <query_ref> --from 2days --to 1day
```

### Options

- `--application`: Name of the application
- `--ref`: Query reference
- `--from`: UTC start time - may also be relative eg: 1h, 20mins
- `--to`: UTC end time - may also be relative eg: 1h, 20mins, now
- `--id`: Query id


### Examples

#### Example 1: Running a query passing its id

Command:

```bash #
baselime queries run --id c2qPyC --from 3hours --to now
```

Output:

```txt
✔ Running the query
╔═══════════════╤═════════╤═══════════════════════════╤═══════════════════════════╤═════════╤═══════════════════════════╗
║ Id            │ QueryId │ From                      │ To                        │ Status  │ Created                   ║
╟───────────────┼─────────┼───────────────────────────┼───────────────────────────┼─────────┼───────────────────────────╢
║ 1653302481818 │ c2qPyC  │ 2022-05-23T08:41:18+01:00 │ 2022-05-23T11:41:18+01:00 │ STARTED │ 2022-05-23T10:41:21+00:00 ║
╚═══════════════╧═════════╧═══════════════════════════╧═══════════════════════════╧═════════╧═══════════════════════════╝
╔════════════════════════════╤═══════╗
║ Aggregate                  │ Value ║
╟────────────────────────────┼───────╢
║ MAX(@message.extra.number) │ 2     ║
╟────────────────────────────┼───────╢
║ MIN(@message.extra.number) │ 1     ║
╟────────────────────────────┼───────╢
║ AVG(@message.extra.number) │ 1.5   ║
╟────────────────────────────┼───────╢
║ COUNT                      │ 10    ║
╚════════════════════════════╧═══════╝
Follow this url: https://console.baselime.cc/workspaces/KeEDAtw3oxbV/envs/KoeZFW/queries/c2qPyC/1653302481818
```

#### Example 2: Run a query passing its application and ref

Command:

```bash #
baselime queries run --application api --ref lambda-duration --from 2days --to 1day
```

Output:

```txt
✔ Running the query
╔═══════════════╤═════════╤═══════════════════════════╤═══════════════════════════╤═════════╤═══════════════════════════╗
║ Id            │ QueryId │ From                      │ To                        │ Status  │ Created                   ║
╟───────────────┼─────────┼───────────────────────────┼───────────────────────────┼─────────┼───────────────────────────╢
║ 1653302639712 │ 1DLRye  │ 2022-05-21T11:43:57+01:00 │ 2022-05-22T11:43:57+01:00 │ STARTED │ 2022-05-23T10:43:59+00:00 ║
╚═══════════════╧═════════╧═══════════════════════════╧═══════════════════════════╧═════════╧═══════════════════════════╝
╔════════════════╤════════════════════╗
║ Aggregate      │ Value              ║
╟────────────────┼────────────────────╢
║ MAX(@duration) │ 8758.75            ║
╟────────────────┼────────────────────╢
║ MIN(@duration) │ 2.25               ║
╟────────────────┼────────────────────╢
║ P99(@duration) │ 322.98440000000005 ║
╚════════════════╧════════════════════╝
Follow this url: https://console.baselime.cc/workspaces/KeEDAtw3oxbV/envs/KoeZFW/queries/1DLRye/1653302639712
```
