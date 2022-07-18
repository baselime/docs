---
label: Charts
order: -4
---

The available properties sitting under `charts` in the `.baselime.yml`.

```yaml # :icon-code: .baselime.yml
# Start listing the charts. Charts are represented as an object where the key is the reference (ref) of the chart,
# and the value is an object describing the chart
charts:
  
  # Reference (ref) of the chart
  random-num-gen-value:
    
    # Required: Name of the chart
    name: demo name

    # Required: Type of the chart
    type: timeseries # Possible values: stats, timeseries, bar
    
    # Required: Charts parameters
    parameters:
      
      # Required: The reference (ref) of query to run for the chart. This query must be within the same application as the chart. 
      query: demo-query-ref
      
      # Required: The time range, in minutes, of data to be displayed in the chart. 
      duration: 15

      # Optional: The label of the horiontal axis of the chart
      xaxis: time

      # Optional: The label of the vertical axis of the chart
      yaxis: calculations
```
