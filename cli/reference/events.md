---
label: events
---

# events

The `events` command is used to manage events.

---

## search

Search for a needle in a dataset.

```bash # :icon-terminal: terminal
baselime events search --datset <dataset> --needle <needle>
```

### Options

- `--from`: UTC start time - may also be relative eg: 1h, 20mins
- `--to`: UTC end time - may also be relative eg: 1h, 20mins, now
- `--dataset`: Dataset to search
- `--namespaces`: The namespaces to search; if no namespace is specified all namespaces will be searched; multiple namespaces can be passed
- `--needle`: Needle to search in the dataset

### Examples

#### Example 1: Search for a needle in a dataset

Command:

```bash # :icon-terminal: terminal
baselime events search --dataset logs --needle "email address not found"
```

Output:

```txt # :icon-code: output
```

---

## stream

Stream a dataset.

```bash # :icon-terminal: terminal
baselime stream --dataset <dataset_name> --namespaces <space_1> <space_2>
```

### Options

- `--from`: UTC start time - may also be relative eg: 1h, 20mins
- `--to`: UTC end time - may also be relative eg: 1h, 20mins, now
- `--dataset`: Dataset to search
- `--namespaces`: The namespaces to search; if no namespace is specified all namespaces will be searched; multiple namespaces can be passed
- `--follow`: Wait for additional data to be appended when the end of streams is reached

### Examples

#### Example 1: Stream an follow a dataset

Command:

```bash # :icon-terminal: terminal
baselime stream --dataset logs --namespaces namespace_1 namespace_2 --follow
```

Output:

```txt # :icon-code: output
2022-05-23 10:18:18.741 namespace_1 {"message": "Test message"}
2022-05-23 10:18:18.742 namespace_2 {"@type":"END","@requestId":"8af8ed70-d252-4c8e-98c3-e7de57c51ed9"}
2022-05-23 10:18:18.742 namespace_2 {"@type":"REPORT","@requestId":"8af8ed70-d252-4c8e-98c3-e7de57c51ed9","@duration":91.35,"@billedDuration":92 "@memorySize":2048,"@maxMemoryUsed":100}

// More events... 
```
