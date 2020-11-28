## Generated Wrappers

By default, the standalone installer creates wrapper scripts in `/usr/local/bin`. Here are some of them:

    /usr/local/bin/bundle
    /usr/local/bin/gem
    /usr/local/bin/rspec
    /usr/local/bin/terraspace

Most users have `/usr/local/bin` configured in there PATH. So these wrappers work immediately. If you wish not to have these wrappers generated for you, set `export TS_WRAPPERS=0` before running the installer.

Important: If you have ruby wrappers in /usr/local/bin already, the installer will overwrite them.
