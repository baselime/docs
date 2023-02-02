---
label: Overview
order: 1
---

# Templates

Templates are a powerful way to share patterns and best practices when it comes to observing your Serverless app. A template is a collection of `.yml` files that contain [queries](../analysing-data/queries.md), [alerts](../analysing-data/alerts.md). Templates can be shared publicly or within organisations to help teams consistently manage their O11y, and prevent us from all having to write the same lambda timeout alert for every project!

## Getting started

You can find the templates in the UI when creating new services, or through the [baselime cli](../cli/install.md).

To list the available templates run 

```bash
baselime templates list
```

To preview a template run

```bash
baselime templates get -w baselime -n metrics
```

![preview a template](preview-templates.png)

> To save the template as a file you can run `baselime templates get -w baselime -n metrics > metrics.yml`. This uses the "redirection" operator to redirect the standard output to a file

## Adding templates to services

When you run `baselime init` to create a service you will be prompted to select templates that you can add.

![Baselime init service templates](baselime-init.png)

The queries and alerts for this template will be available instantly.

To add templates to an existing service edit the `.baselime/index.yml` file, appending `- ${workspace}/${name}` to the templates array.

```yml
templates:
  - name: baselime/dynamodb
  - name: baselime/pokedex
```

## Becoming a template author


