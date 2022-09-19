---
label: events
---

# events

The `events` command is used to manage events.

---

## stream

Stream telemetry data to your terminal.

```bash # :icon-terminal: terminal
baselime stream --datasets <dataset_name> --namespaces <space_1> <space_2>
```

### Options

- `--from`: UTC start time - may also be relative eg: 1h, 20mins
- `--to`: UTC end time - may also be relative eg: 1h, 20mins, now
- `--datasets`: The datasets to stream
- `--filters`: A set of filters to apply to the stream; multiple filters can be passed
- `--needle`: A string to search in the stream
- `--regex`: A regular expression to search in the stream. If there's both a needle and a regex, the regex takes priority
- `--match-case`: Match case if a needle is specified
- `--namespaces`: The namespaces to search; if no namespace is specified all namespaces will be searched; multiple namespaces can be passed
- `--combination`: The combination to use when multiple namespaces are specified
- `--follow`: Wait for additional data to be appended when the end of streams is reached

Each filter is a string that can be represented as `<key> <operation> <value>`
- `<key>`: the event property to filter against.
- `<operation>`: an operation used to compare the key against the value. For further details, please check the [list of accepted operations](../../advanced/accepted-operations.md).
- `<value>`: the value to compare the key against.

### Examples

#### Example 1: Stream an follow a dataset

Command:

```bash # :icon-terminal: terminal
baselime stream --datasets <dataset_name> --follow
```

Output:

```txt # :icon-code: output
2022-05-23 10:18:18.741 namespace_1 {"message": "Test message"}
2022-05-23 10:18:18.742 namespace_2 {"@type":"END","@requestId":"8af8ed70-d252-4c8e-98c3-e7de57c51ed9"}
2022-05-23 10:18:18.742 namespace_2 {"@type":"REPORT","@requestId":"8af8ed70-d252-4c8e-98c3-e7de57c51ed9","@duration":91.35,"@billedDuration":92 "@memorySize":2048,"@maxMemoryUsed":100}

// More events... 
```

#### Example 2: Stream all datasets with filters and find a needle, and follow

Command:

```bash # :icon-terminal: terminal
baselime stream --filters "<key> <operation> <value>" --needle "<needle>" --follow
```

Output:

```txt # :icon-code: output
// Events... 
```

#### Example 3: Stream a dataset with filters and find all events matching a regular expression

Command:

```bash # :icon-terminal: terminal
baselime stream --filters "<key> <operation> <value>" --regex "<regex>" --follow
```

Output:

```txt # :icon-code: output
// Events... 
```

#### Example 4: Stream multiple namespaces in a dataset

Command:

```bash # :icon-terminal: terminal
baselime stream --datasets <dataset_name> --namespaces <space_1> <space_2>
```

Output:

```txt # :icon-code: output
// Events... 
```