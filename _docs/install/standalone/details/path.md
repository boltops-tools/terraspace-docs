---
title: "Standalone Path"
nav_text: Path
category: standalone-details
order: 2
---

By default, the standalone installer creates wrapper scripts in `/usr/local/bin`. Here are some of them:

    /usr/local/bin/bundle
    /usr/local/bin/gem
    /usr/local/bin/rspec
    /usr/local/bin/ruby
    /usr/local/bin/terraspace

Most users have `/usr/local/bin` configured in there PATH. So these wrappers should work.

If you wish not to have these wrappers generated for you, set `export TS_WRAPPERS=0` before running the installer.

## Installation without Wrappers

Without the wrapper scripts, to complete the terraspace standalone installation, you must add `/opt/terraspace/embedded/bin` to your PATH.  You can add to your `~/.bash_profile`

.bash_profile

    export PATH="/opt/terraspace/embedded/bin:$PATH"

And start a new terminal. Check if terraspace is in the PATH. You should see something like this:

    $ type terraspace
    terraspace is /opt/terraspace/embedded/bin/terraspace
