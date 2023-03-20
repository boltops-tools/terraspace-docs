---
title: "Docker Versioning"
nav_text: Versioning
category: docker-guides
---

Docker images with terraspace installed are published with the OS and version tag. Dockerhub tags: [ghcr.io/boltops-tools/terraspace](https://github.com/orgs/boltops-tools/packages/container/package/terraspace)

The version naming convention is:

    ghcr.io/boltops-tools/terraspace:$VERSION-$OS

When the version is not including in the name, it's the latest version of terraspace.

Examples

    ghcr.io/boltops-tools/terraspace:amzn2         # latest
    ghcr.io/boltops-tools/terraspace:1.0.0-amzn2
    ghcr.io/boltops-tools/terraspace:ubuntu        # latest
    ghcr.io/boltops-tools/terraspace:1.0.0-ubuntu

More examples:

    ghcr.io/boltops-tools/terraspace:alpine
    ghcr.io/boltops-tools/terraspace:amzn2
    ghcr.io/boltops-tools/terraspace:centos
    ghcr.io/boltops-tools/terraspace:debian
    ghcr.io/boltops-tools/terraspace:fedora
    ghcr.io/boltops-tools/terraspace:ubuntu

## Main Latest Version

The top-level main latest version is ubuntu. So

    ghcr.io/boltops-tools/terraspace

Is the same as

    ghcr.io/boltops-tools/terraspace:ubuntu

The top-level is also available with the version tag

    ghcr.io/boltops-tools/terraspace:1.0.0
