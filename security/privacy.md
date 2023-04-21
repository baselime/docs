---
label: Telemetry Data Privacy
order: -1
---

# Telemetry Data Privacy

Baselime is designed to help you observe the health and performance of your applications, and part of that involves collecting telemetry data. To ensure the privacy of your data, Baselime provides a number of features that enable you to control which data is collected and how it is used.

## Obfuscating Keys

Baselime enables you to obfuscate certain keys from being ingested into your datasets. This is particularly useful for sensitive information such as passwords, API keys, and other personal data. You can obfuscate keys for a specific dataset by using the `baselime obfuscate-key` command:

```bash :icon-terminal: terminal
baselime obfuscate-key --dataset logs --key password
```

You can also obfuscate keys for multiple datasets at once by specifying the `--dataset` flag multiple times:

```bash :icon-terminal: terminal
baselime obfuscate-key --dataset logs --dataset metrics --key password
```

In addition to the command-line interface, you can also use a `.baselimeignore` file to block keys. The `.baselimeignore` file should be located in the root of your repository and should contain a list of keys to block, one per line, with the associated dataset. For example:

```txt # :icon-code: .baselimeignore
lambda-logs:block:password
lambda-logs:block:data.user.email
```

Moreover, you can obfuscate keys using the [Baselime console](https://console.baselime.io), in the datasets section.

Keep in mind that obfuscating keys is a one-way process, meaning that once a key has been obfuscated, there is no way to recover the original value. Make sure to carefully consider which keys you want to obfuscate.

---

## .baselimeignore [Coming soon]

The `.baselimeignore` file allows you to specify keys that should be obfuscated when data is ingested into Baselime. You can use this file to block or obfuscate multiple keys across multiple datasets.

To obfuscate a key, add a line to the `.baselimeignore` file in the following format:

```txt # :icon-code: .baselimeignore
<dataset>:obfuscate:<key>
```

For example, to obfuscate the `data.user.email` key in the `lambda-logs` dataset, you would add the following line to your `.baselimeignore` file:

```txt # :icon-code: .baselimeignore
lambda-logs:obfuscate:data.user.email
```

Note that the `.baselimeignore` file should be placed in the root folder of your service and will be applied when you run `baselime push`.

Keep in mind that the `.baselimeignore` file is only applied to data that is ingested after the `.baselimeignore` file is pushed. Data that was ingested before the `.baselimeignore` file was pushed will not be affected.

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

Any nested field in your telemetry data that contains any of these automatically scrubbed keys will be blocked from ingestion by default.

To turn automatic scrubbing on or off for a specific dataset, use the following commands [Coming soon]:

```bash :icon-terminal: terminal
baselime scrubbing enable --dataset <dataset>
baselime scrubbing disable --dataset <dataset>
```

Or using the [Baselime console](https://console.baselime.io), in the datasets section.
