---
label: query-run
---

# query-run

---

The `query-run` command is used run a query on Baselime.


```bash #
baselime query-run <query_id>\
  --from <FROM> \
  --to <TO> \
  [--limit <LIMIT>] \
  [--offset <OFFSET>] \
  [--ui] \
```

### Options

- `--from`: the datetime UNIX timestamp (with milliseconds) of the start time of the query run
- `--to`: the datetime UNIX timestamp (with milliseconds) of the end time of the query run
- `--limit` [optional]: the maximum number of query results
- `--offset` [optional]: the number of query results to skip
- `--ui` [optional]: display the query results in the Baselime Web UI

### Outputs

- `query_run`: the query run object
- `data`: the results of the query run

### Example

Command:

```bash #
baselime query-run abcdefgh \
  --from 1640404332438 \
  --to 1640407932438 \
```

Output:

```json #
"query_run": {
    "id": "TfcBkYdh",
    "query_id": "abcdefgh",
    "from": 1640404332438,
    "to": 1640407932438,
  },
  "data": [
    ... query results ...
  ]
```
