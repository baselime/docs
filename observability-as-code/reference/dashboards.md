---
label: Dashboards
order: -5
---

The reference to declaring a chart in any YAML file within the `.baselime` folder.

```yaml # :icon-code: .baselime/demo.yml
# Dashboard ID
main-dashboard:
  # Required: Type of resource, must be "dashboard"
  type: dashboard

  # Required: The properties of the resource
  properties:
    
    # Optional: Name of the dashbaord
    name: Main dashbaord

    # Optional: Description of the dashbaord
    description: Displays the general health of our systems
    
    # Required: List of the ids of all the charts to be displayed in this dashboard
    charts:
      - !ref chart-a
      - !ref chart-b
      - !ref chart-c
```
