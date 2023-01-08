---
label: Snapshots
order: -2
---

# Snapshots

Snapshots enable you to capture the current state of all your alerts in a service at a given point in time. This can be useful for debugging purposes or for creating a record of the health of your system at a specific moment.

## Using Snapshots

To create a snapshot, simply run the `baselime snapshot` command in your terminal. This will create a snapshot of the current state of all alerts in the current service, display the results in the terminal, and output them to a file in JSON format. You can specify the output file path using the `--out-file` flag.

```bash # :icon-terminal: terminal
baselime snapshot --service my-service --out-file snapshot.json
```

This will create a snapshot of the alerts in the `my-service` service and save it to the `snapshot.json` file.

---

## Viewing Snapshots (Coming soon)

You can view your snapshots in the Baselime console under the "Snapshots" tab in the navigation menu. From here, you can view the details of each snapshot, including the time it was created, the service it was created for, and the state of each alert at that time.

---

## Tips for Effective Snapshotting

1. Use snapshots as a debugging tool to help you understand the state of your system at a specific moment in time
2. Use snapshots to compare the state of your alerts before and after making changes to your service.
3. Save snapshots for compliance purposes.

