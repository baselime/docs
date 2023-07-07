---
label: mark
---

# baselime mark

Use the `baselime mark` command to create a marker.

```bash :icon-terminal: terminal
baselime mark

Creates a marker

Options:
      --profile  [string] [default: "default"]
      --quiet  [boolean] [default: false]
      --debug  [boolean] [default: false]
      --format       Format to output the data in  [string] [choices: "table", "json"] [default: "table"]
      --service      The service to add the marker to  [string] [default: "default"]
      --url          The URL associated with this specific marker  [string]
      --name         The name of this specific marker  [string] [default: "created-by-baselime-cli"]
      --description  The description of this specific marker  [string]
      --start-time   The start time for the marker in unix time (milliseconds since the epoch). Defaults to now  [number]
      --end-time     The end time for the marker in unix time (milliseconds since the epoch)  [number]
  -h, --help         Show this help output, or the help for a specified command or subcommand  [boolean]
  -v, --version      Show the current Baselime CLI version  [boolean]

Examples:

        # Creates a marker
        baselime mark --service <service_name> --url <marker_url> --description <description>

```
