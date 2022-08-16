---
label: Queries
order: -1
---

The reference to declaring a query in any YAML file within the `.baselime` folder.

```yaml # :icon-code: .baselime/demo.yml
# Reference (ref) of the query
random-num-gen-value:
  # Required: Type of resource, must be "query"
  type: query

  # Required: The properties of the resource
  properties:
 
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
      
      # Optional: A flag on whether to include or exclude specified namespaces. Default: INCLUDE
      namespaceCombination: INCLUDE # Possible values: INCLUDE, EXCLUDE, STARTS_WITH
      
      # Required: The calculations to perform when performing the query, represented as an array of strings
      calculations:
        - MAX(@initDuration)
        - MIN(@initDuration)
        - AVG(@initDuration)
        - P99(@initDuration)
        - COUNT
      
      # Optional: Filter events based on additional criteria
      # Default: Will not apply any filters on the query
      filters:
        - "@type := REPORT"
        - "@duration :> 10"

      # Optional: If multiple filters are provided, defines how to combine them
      # Default: Will filter only events that match all the criteria specified in filters
      filterCombination: AND # Possible values: AND, OR

      # Optional: Split results of the calculation based on the value of a specific attribute
      # Default: Will not do any group by.
      groupBy:
        type: string # Possible values: string, number, boolean
        value: "@memorySize"
```

---

## Query calculations

Each query calculation is a string that can be represented as `operator(key)`
- `operator`: a computation to be performed the key. For further details, please check the [list of accepted operators](../../advanced/accepted-operations.md).
- `key`: the event property to perform the calculation on.

However, the `COUNT` calculation does not require a `key`.

---

## Query filters

Each query filter is a string that can be represented as `key :operation value`
- `key`: the event property to filter against.
- `operation`: an operation used to compare the key against the value. For further details, please check the [list of accepted operations](../../advanced/accepted-operations.md).
- `value`: the value to compare the key against.
