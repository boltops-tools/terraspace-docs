---
title: terraspace logs
reference: true
---

## Usage

    terraspace logs [ACTION] [STACK]

## Description

View and tail logs.

The log commands will filter out the logs for the last ran terraspace command. It does this by filtering for the last found PID in the log files.

## Quick Start

Follow all the logs as you're running `terraspace all up`:

    terraspace logs -f

Note, Terraspace automatically checks every second for new logs and adds them to be followed.

## View Logs

View last 10 lines of each log file.

    terraspace logs up network # view up log on a specific stack
    terraspace logs up         # view all up logs
    terraspace logs down       # view all down logs
    terraspace logs            # view all logs: up, down, etc

By default, the logs command shows the last 10 lines for each log file. You can use the `-n` option to adjust this.

    terraspace logs -n 2       # view last 2 lines of all logs: up, down, etc

To show all logs, use the `-a` option.

    terraspace logs up -a

Note, if both an action and stack is specified, then it defaults to showing all logs. If you want not to show all logs, use `--no-all`.

## Tail Logs

To tail logs, use the `-f` option.

    terraspace logs up network -f # view up log on a specific stack
    terraspace logs up -f         # view all up logs
    terraspace logs down -f       # view all down logs
    terraspace logs -f            # view all logs: up, down, etc

## Timestamps

The timestamps are shown by default when you are looking for multiple files.  When you specify both the action and stack for a single log file, the timestamps are not shown.

    terraspace logs up         # timestamps will be shown in this case
    terraspace logs up network # timestamps not be shown in this case

To show timestamps:

    terraspace logs up network --timestamps


## Options

```
t, [--timestamps], [--no-timestamps]  # Whether or not to show the leading timestamp. Defaults to timestamps for multiple logs, and no timestamp if a single log is specified. Note: In follow mode, timestamp always shown
f, [--follow], [--no-follow]          # Follow the log in live tail fashion. Must specify a stack if using this option.
n, [--limit=N]                        # Number of lines to limit showing. Only applies in no-follow mode.
                                      # Default: 10
a, [--all], [--no-all]                # All mode turns off the limit. Defaults to all if a single log is specified. Only applies in no-follow mode.
p, [--pid=PID]                        # Filter by pid. Defaults to the last pid at the bottom of the log file.
    [--verbose], [--no-verbose]       
    [--noop], [--no-noop]             
```

