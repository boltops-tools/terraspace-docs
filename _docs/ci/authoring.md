---
title: "Authoring"
order: 8
category: ci
---

If a Terraspace CI Plugin does not yet exist for your CI system, consider authoring one. Terraspace has a generator to make it easy to start.

    terraspace new plugin ci NAME

## Example

We'll go through an example to help explain.

    terraspace new plugin ci github

## Files

Here are some of the important generated files to review and implement:

    lib/terraspace_ci_github.rb
    lib/terraspace_ci_github/vars.rb
    lib/terraspace_ci_github/interface.rb
    lib/terraspace_ci_github/pr.rb

## Registration

At the bottom of the top-level `terraspace_ci_github.rb` the CI plugin is registered

lib/terraspace_ci_github.rb

```ruby
Terraspace::Cloud::Ci.register(
  name: "github",
  env_key: "GITHUB_ACTIONS",
  root: __dir__, # used for templates/default lookup
  exe: ".github/bin",
)
```

* name: The CI Plugin name.
* env_key: The env key that is used to detect whether or not the CI plugin should be used.
* root: This is the root of the CI plugin. It's use so that a template can be looked up as a part of the `terraspace new ci` command.  The `__dir__` ruby special variable just means the directory of the current source code file itself. So the `terraspace_ci_github/lib` folder.

## Interface

The interface to implement is simple.

lib/terraspace_ci_github/interface.rb

```ruby
module TerraspaceCiGithub
  class Interface
    # required interface
    def vars
      Vars.new.data
    end

    # optional interface
    def comment(url)
      Pr.new.comment(url)
    end
  end
end
```

There are only 2 methods, `vars` and `comment(url)`. The `vars` method must return a Hash of properties to be stored on terraspace cloud. The `comment(url)` method should post a comment on the PR with the Terraspace URL link. The comment is optional since most systems do not support PRs and comments.

## Vars

To see what variables you should return, here's the relevant part of the vars class.

lib/terraspace_ci_github/vars.rb

```ruby
module TerraspaceCiGithub
  class Vars < Base
    # Hash of properties to store
    def data
      {
        build_system: "github",
        host: "github.com",
        full_repo: full_repo,
        branch_name: branch_name,
        commit_url: commit_url,
        branch_url: branch_url,
        pr_url: pr_url,
        build_url: build_url,
        build_type: build_type,
        commit_message: commit_message,
        build_id: build_id,
        build_number: ENV['GITHUB_RUN_NUMBER'],
        pr_number: pr['number'],
        sha: sha,
      }
    end
  ...
```

## PR Comment

By default the `terraspace new plugin ci` generator will not include the PR code unless the `--pr` optional is used.

Here the relevant part of the `Pr#comment` method.

lib/terraspace_ci_github/pr.rb

```ruby
module TerraspaceCiGithub
  class Pr < Base
    def comment(url)
      return unless ENV['GITHUB_EVENT_NAME'] == 'pull_request'
      return unless github_token?

      repo = ENV['GITHUB_REPOSITORY'] # org/repo
      number = ENV['GITHUB_REF_NAME'].split('/').first # IE: 2/merge
      marker = "<!-- terraspace marker -->"
      body = marker + "\n"
      body << "Terraspace Cloud Url #{url}"

      comments = client.issue_comments(repo, number)
      found_comment = comments.find do |comment|
        comment.body.starts_with?(marker)
      end

      if found_comment
        client.update_comment(repo, found_comment.id, body) unless found_comment.body == body
      else
        client.add_comment(repo, number, body)
      end
    end
  end
end
```

Notice, how it will find and updating existing comments. You should do this also or else the comments will get noisy.

## Templates

You can define starter templates to help users get started using your ci plugin quickly. You define the template in `lib/template`.

The `terraspace new ci` generator command uses these files. Provide a good starting example and add to the Terraspace Docs site. Check out other ci plugin for examples.
