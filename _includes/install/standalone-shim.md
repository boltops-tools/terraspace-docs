/usr/local/bin/terraspace

    #!/bin/bash
    unset GEM_HOME
    unset GEM_PATH
    export PATH=/opt/terraspace/embedded/bin:$PATH
    if [ -f config/app.rb ]; then
      exec bundle exec terraspace "$@"
    else
      exec terraspace "$@"
    fi
