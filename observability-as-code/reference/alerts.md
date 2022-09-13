---
label: Alerts
order: -2
---

The reference to declaring an alert in any YAML file within the `.baselime` folder.

```yaml # :icon-code: .baselime/demo.yml
# Alert ID
random-num-gen-value:
  # Required: Type of resource, must be "alert"
  type: alert

  # Required: The properties of the resource
  properties:
    
    # Required: Name of the alert
    name: demo name
    
    # Optional: Description of the alert
    description: demo description
    
    # Required: Alert parameters
    parameters:
      
      # Required: The id of query to run at regular intervals for the alert. This query must be within the same application as the alert. 
      # Please note that if the query has multiple calculations, the alert will be based off the first listed calculation in the array of calculations of the query
      query: !ref id-of-an-existing-query

      # Required: The frequency reprensents how often, in minutes, to check for the threshold condition
      frequency: 30

      # Required: The duration is the time range, in minutes, of data that the alert will check. 
      duration: 30
      
      # Required: The threshold is a string representing the condition to be met to trigger an alert
      threshold: "> 200"
      
      # Required: Channels are the ids of the recipients to notify when the threshold condition is met. All channels must be within the same application as the alert 
      channels:
        - !ref id-of-an-existing-channel
        - !ref id-of-another-existing-channel
        - !ref id-of-a-third-existing-channel
```

---

## Alert threshold

The alert threshold is a string that can be represented as `operation value`
- `operation`: an operation used to compare the first results of the query against the value. For further details, please check the [list of accepted operations](../../advanced/accepted-operations.md).
- `value`: the value to compare the first result of the query against.
