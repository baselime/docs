---
label: Overview
order: 1
---

# Data Security in Baselime

Baselime is committed to ensuring the security and privacy of our users' data. We have implemented a number of measures to ensure that data is encrypted in transit and at rest, and that it is not accessible from the public internet. Here are some of the key data security features of Baselime:

## Data Encryption

All data transferred to and from Baselime is encrypted in transit using industry-standard protocols such as HTTPS and TLS. In addition, all data is encrypted at rest.

---

## Private VPCs and IAM Roles

Baselime runs in private Virtual Private Clouds (VPCs) and utilizes IAM roles to ensure that data is only accessed by authorized users and processes.

---

## No Public Access

Baselime does not expose any data to the public internet. All data is accessed via secure, authenticated channels.

---

## Modern Best Practices

Baselime follows modern best practices for data security, including regularly updating and patching our systems, implementing network segmentation and access controls, and conducting regular security audits and penetration testing.

---

## Data Scrubbing and Obfuscation

Baselime provides tools for scrubbing and obfuscating sensitive data, such as passwords, secrets, and API keys. Users can block or obfuscate specific keys by dataset using the `.baselimeignore` file, or by using the `baselime scrubbing` command. In addition, Baselime automatically scrubs a predefined list of sensitive fields, including "password" and "secret".

To learn more about how to use these features to protect your data, see the Baselime [Telemetry Data Privacy](./privacy.md) documentation.

---

## Compliance

We're currently working towards compliance with a number of industry-standard security and privacy frameworks, including GDPR, SOC2 and HIPAA. Please contact us for more information on our compliance status.

---

## Support

If you have any questions or concerns about the security of your data in Baselime, please don't hesitate to contact our support team. We are always here to help!
