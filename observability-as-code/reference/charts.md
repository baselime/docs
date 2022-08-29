---
label: Charts
order: -4
---

The reference to declaring a chart in any YAML file within the `.baselime` folder.

```yaml # :icon-code: .baselime/demo.yml
# Chart ID
random-num-gen-value:
  # Required: Type of resource, must be "chart"
  type: chart

  # Required: The properties of the resource
  properties:
    
    # Required: Name of the chart
    name: demo name

    # Required: Type of the chart
    type: timeseries # Possible values: stats, timeseries, bar
    
    # Required: Charts parameters
    parameters:
      
      # Required: The id of the query to run for the chart. This query must be within the same application as the chart. 
      query: !ref demo-query-id
      
      # Required: The time range, in minutes, of data to be displayed in the chart. 
      duration: 15

      # Optional: The label of the horiontal axis of the chart
      xaxis: time

      # Optional: The label of the vertical axis of the chart
      yaxis: calculations
```
