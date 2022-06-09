---
label: Queries
order: -1
---

The available properties sitting under `queries` in the `.baselime.yml`.

```yaml # :icon-code: .baselime.yml
# Start listing the queries. Queries are represented as an object where the key is the reference (ref) of the query,
# and the value is an object describing the query 
queries:
  
  # Reference (ref) of the query
  random-num-gen-value:
    
    # Required: Name of the query
    name: demo name
    
    # Optional: Description of the query
    description: demo description
    
    # Required: Query parameters
    parameters:
      
      # Required: The dataset to run the query against
      dataset: logs
      
      # Optional: The namespaces to filter when running the query. Default: Will include all available namespaces
      namespaces:
        - demo-lambda
      
      # Optional: A flag on wether to include or exclude specified namespaces. Default: INCLUDE
      namespaceCombination: INCLUDE # Possible values: INCLUDE, EXCLUDE, STARTS_WITH
      
      # Required: The calculations to perform when performing the query, represented as an array of strings.
      calculations:
        - MAX(@duration)
        - MIN(@duration)
        - AVG(@duration)
        - P99(@duration)
        - COUNT
      
      # Optional: The filters to apply to matching events when running the query.
      # Default: Will not apply any filters on the query.
      filters:
        - "@message := REPORT"
```

## Query calculations

Each query calculation is a string that can be represented as `operator(key)`
- `operator`: a computation to be performed the key. For further details, please check the [list of accepted operators](../../advanced/accepted-operations.md).
- `key`: the event property to perform the calculation on.

However, the `COUNT` calculation does not require a `key`.

## Query filters

Each query filter is a string that can be represented as `key :operation value`
- `key`: the event property to filter against.
- `operation`: an operation used to compare the key against the value. For further details, please check the [list of accepted operations](../../advanced/accepted-operations.md).
- `value`: the value to compare the key against.
