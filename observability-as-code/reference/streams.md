---
label: Stream
order: -6
---

The reference to declaring a stream in any YAML file within the `.baselime` folder.

```yaml # :icon-code: .baselime/demo.yml
# Reference (ref) of the stream
random-num-gen-value:
  # Required: Type of resource, must be "stream"
  type: stream

  # Required: The properties of the resource
  properties:
 
    # Required: Name of the stream
    name: demo name

    # Required: stream parameters
    parameters:
      
      # Required: An array of datasets to run the stream against
      datasets: logs
      
      # Optional: The namespaces to filter when running the stream. Default: Will include all available namespaces
      namespaces:
        - demo-lambda

      # Optional: Filter events based on additional criteria
      # Default: Will not apply any filters on the stream
      filters:
        - "@type := REPORT"
        - "@duration :> 10"

```

---

## stream filters

Each stream filter is a string that can be represented as `key :operation value`
- `key`: the event property to filter against.
- `operation`: an operation used to compare the key against the value. For further details, please check the [list of accepted operations](../../advanced/accepted-operations.md).
- `value`: the value to compare the key against.
