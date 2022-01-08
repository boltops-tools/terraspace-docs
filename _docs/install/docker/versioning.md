---
title: "Docker Versioning"
nav_text: Versioning
category: docker-guides
---

Docker images with terraspace installed are published with the OS and version tag. Dockerhub tags: [boltops/terraspace](https://hub.docker.com/r/boltops/terraspace/tags)

The version naming convention is:

    boltops/terraspace:$VERSION-$OS

When the version is not including in the name, it's the latest version of terraspace.

Examples

    boltops/terraspace:amzn2         # latest
    boltops/terraspace:1.0.0-amzn2
    boltops/terraspace:ubuntu        # latest
    boltops/terraspace:1.0.0-ubuntu

More examples:

    boltops/terraspace:alpine
    boltops/terraspace:amzn2
    boltops/terraspace:centos
    boltops/terraspace:debian
    boltops/terraspace:fedora
    boltops/terraspace:ubuntu

## Main Latest Version

The top-level main latest version is ubuntu. So

    boltops/terraspace

Is the same as

    boltops/terraspace:ubuntu

The top-level is also available with the version tag

    boltops/terraspace:1.0.0
