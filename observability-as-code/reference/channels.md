---
label: Channels
order: -3
---

The available properties sitting under `channels` in the `.baselime.yml`.

```yaml # :icon-code: .baselime.yml
# Start listing the channels. Channels are represented as an object where the key is the reference (ref) of the channel,
# and the value is an object describing the channel 
channels:
  
  # Reference (ref) of the channel
  developers:
    
    # Required: The type of the channel
    # Accepted values: email
    type: email
    
    # Required: The targets to notify in this channel
    targets:
     - example@email.com
    
```
