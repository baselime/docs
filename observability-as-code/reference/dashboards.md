---
label: Dashboards
order: -5
---

The available properties sitting under `dashboards` in the `.baselime.yml`.

```yaml # :icon-code: .baselime.yml
# Start listing the dashboards. Dashboards are represented as an object where the key is the reference (ref) of the dashboard,
# and the value is an object describing the dashboard
dashboards:
  
  # Reference (ref) of the dashbaord
  main-dashboard:
    
    # Required: Name of the dashbaord
    name: Main dashbaord

    # Optional: Description of the dashbaord
    description: Displays the general health of our systems
    
    # Required: List of the references (ref) of all the charts to be displayed in this dashboard
    charts:
      - chart-a
      - chart-b
      - chart-c
```
