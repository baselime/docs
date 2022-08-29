---
label: Channels
order: -3
---

The reference to declaring a channel in any YAML file within the `.baselime` folder.

```yaml # :icon-code: .baselime/demo.yml
# Channel ID
developers:
  # Required: Type of resource, must be "channel"
  type: channel

  # Required: The properties of the resource
  properties:
    
    # Required: The type of the channel
    # Accepted values: email, slack
    type: slack
    
    # Required: The targets to notify in this channel
    targets:
     - general # the name of the slack channel to alert, must be a public channe;
    
```
