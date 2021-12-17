---
title: How to Use Custom Version of Terraspace
nav_text: Custom Version
category: gem
order: 2
---

If you want or need to run a forked version of terraspace, here's how.

Clone down the project:

    $ git clone https://github.com/boltops-tools/terraspace

Update [lib/terraspace/version.rb](https://github.com/boltops-tools/terraspace/blob/master/lib/terraspace/version.rb) so you'll be able to tell that it's a custom build.  For example:

```ruby
module Terraspace
  VERSION = "0.6.22.custom"
end
```

Build the gem package:

    $ bundle
    $ rake build
    pkg/terraspace-0.6.22.custom.gem

The produced `.gem` can used to install the gem. You can install it locally:

    $ gem install pkg/terraspace-0.6.22.custom.gem
    $ terraspace -v
    0.6.22.custom

Or on any machine with a Ruby installed. You can copy it to the machine, ssh into it, and install the custom gem:

    $ scp pkg/terraspace-0.6.22.custom.gem user@server.com:
    $ ssh user@server.com
    $ gem install terraspace-0.6.22.custom.gem
    $ terraspace -v
    0.6.22.custom
