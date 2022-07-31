---
label: Channels
order: -3
---

The reference to declaring a channel in any YAML file within the `.baselime` folder.

```yaml # :icon-code: .baselime/demo.yml
# Reference (ref) of the channel
developers:
  # Required: Type of resource, must be "channel"
  type: channel

  # Required: The properties of the resource
  properties:
    
    # Required: The type of the channel
    # Accepted values: email
    type: email
    
    # Required: The targets to notify in this channel
    targets:
     - example@email.com
    
```
