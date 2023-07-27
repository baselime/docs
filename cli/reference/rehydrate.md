---
label: rehydrate
---

# baselime rehydrate

Use the `baselime rehydrate` to rehydrate Baselime hot storage with data from your Amazon S3 Bucket.

```bash :icon-terminal: terminal
baselime rehydrate

Rehydrate Baselime hot storage with data from your Amazon S3 Bucket

Options:
      --profile  [string] [default: "default"]
      --quiet  [boolean] [default: false]
      --debug  [boolean] [default: false]
      --format            Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
      --start-date        Date to start recovering data from, in ISO format  [string]
      --hours-to-recover  Number of consecutive hours of data to recover starting from start-date. Minimum: 1, maximum: 12  [number]
  -h, --help              Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version           Show the current Baselime CLI version  [boolean]

Examples:

        baselime rehydrate --start-date 2023-06-08T13:24:47.906Z --hours-to-recover 1
        baselime rehydrate --profile prod --start-date 2023-06-08T13:24:47.906Z --hours-to-recover 9

```
