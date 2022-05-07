---
title: Generic
order: 7
category: ci
---

Terraspace provides a generic way to set CI system values if the CI system you're using is not supported. You can set the following env variable values as part your build system before calling terraspace commands like `terraspace plan` or `terraspace up`.

    TS_CI_REPO=org/repo
    TS_CI_BRANCH=main
    TS_CI_COMMIT_URL=https://domain.com/org/repo/commit/79cd3b42c043c1bbcec900f570747ca27e868d6b
    TS_CI_BRANCH_URL=https://domain.com/org/repo/tree/pr2
    TS_CI_PR_URL=https://domain.com/org/repo/pull/2
    TS_CI_BUILD_URL=https://domain.com/org/repo/builds/2255260545
    TS_CI_BUILD_TYPE=pull_request
    TS_CI_PR_NUMBER=2
    TS_CI_SHA=79cd3b42c043c1bbcec900f570747ca27e868d6b
    TS_CI_COMMIT_MESSAGE="test commit"
    TS_CI_BUILD_ID=123
    TS_CI_BUILD_NUMBER=123

This allows terraspace to provide "smart" links to your repo.  You can also [author your own Terraspace CI Plugin]({% link _docs/ci/authoring.md %}).