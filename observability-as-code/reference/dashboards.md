---
label: Dashboards
order: -5
---

The reference to declaring a chart in any YAML file within the `.baselime` folder.

```yaml # :icon-code: .baselime/demo.yml
# Reference (ref) of the dashboard
main-dashboard:
  # Required: Type of resource, must be "dashboard"
  type: dashboard

  # Required: The properties of the resource
  properties:
    
    # Required: Name of the dashbaord
    name: Main dashbaord

    # Optional: Description of the dashbaord
    description: Displays the general health of our systems
    
    # Required: List of the references (ref) of all the charts to be displayed in this dashboard
    charts:
      - !ref chart-a
      - !ref chart-b
      - !ref chart-c
```
