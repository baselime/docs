---
label: Telemetry Data Privacy
order: -1
---

# Telemetry Data Privacy

Baselime is designed to help you observe the health and performance of your applications, and part of that involves collecting telemetry data. To ensure the privacy of your data, Baselime provides a number of features that enable you to control which data is collected and how it is used.

## Obfuscating Keys

Baselime enables you to obfuscate keys from being ingested into your datasets. This is particularly useful for sensitive information such as passwords, API keys, and other personal data. You can obfuscate keys for a specific dataset in the [Baselime console](https://console.baselime.io), in the datasets section.

Keep in mind that obfuscating keys is a one-way process, meaning that once a key has been obfuscated, there is no way to recover the original value. Make sure to carefully consider which keys you want to obfuscate.

---

## Automatic scrubbing

Baselime that automatically obfuscate sensitive information from being ingested into the telemetry data by default. This is done to ensure that sensitive data is not accidentally exposed.

The following keys are automatically scrubbed:

- `password`
- `secret`
- `passwd`
- `api_key`
- `pwd`
- `apikey`
- `access_token`
- `auth`
- `credentials`
- `creds`
- `sourceip`

Any nested field in your telemetry data that contains any of these automatically scrubbed keys will be blocked from ingestion by default.

To turn automatic scrubbing on or off for a specific dataset, use the [Baselime console](https://console.baselime.io), in the datasets section.
