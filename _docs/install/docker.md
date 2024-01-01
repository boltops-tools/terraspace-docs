---
title: Terraspace with Docker
nav_text: Docker
category: install
subcategory: docker-guides
order: 3
---

You can run Terraspace within a Docker container. The Docker images are published to Dockerhub within a few minutes of a gem release at [ghcr.io/boltops-tools/terraspace](https://github.com/orgs/boltops-tools/packages/container/package/terraspace). This provides you with an isolated throwaway environment to try out Terraspace.

Here's a "Getting Started with Terraspace and Docker" Video:

{% include videos/learn.md
     url="terraspace-install/lessons/terraspace-docker-installation"
     img="https://learn-uploads.boltops.com/tdp8ky20djzbxsbqyeblxrwuszq5"
     premimum=false %}

## Docker Run

Start the container

    docker run -ti ghcr.io/boltops-tools/terraspace

This starts up a container with Terraspace and Terraform already installed.

The default OS is ubuntu. You can also use different OSes by specifying the tag.

    docker run -ti ghcr.io/boltops-tools/terraspace:alpine
    docker run -ti ghcr.io/boltops-tools/terraspace:amzn2
    docker run -ti ghcr.io/boltops-tools/terraspace:centos
    docker run -ti ghcr.io/boltops-tools/terraspace:debian
    docker run -ti ghcr.io/boltops-tools/terraspace:fedora
    docker run -ti ghcr.io/boltops-tools/terraspace:ubuntu

For the Dockerfiles, see: [boltops-tools/terraspace-dockerfiles](https://github.com/boltops-tools/terraspace-dockerfiles)

## Docker Pull

The Docker images are published to Dockerhub within a few minutes of a gem release at [ghcr.io/boltops-tools/terraspace](For the Dockerfiles, see: [boltops-tools/terraspace-dockerfiles](https://github.com/orgs/boltops-tools/packages/container/package/terraspace)). The images generally include the latest version of Terraspace and Terraform. So remember to update the cached Docker images if you've pulled them before.

    docker pull ghcr.io/boltops-tools/terraspace
    docker pull ghcr.io/boltops-tools/terraspace:alpine
    docker pull ghcr.io/boltops-tools/terraspace:amzn2
    docker pull ghcr.io/boltops-tools/terraspace:centos
    docker pull ghcr.io/boltops-tools/terraspace:debian
    docker pull ghcr.io/boltops-tools/terraspace:fedora
    docker pull ghcr.io/boltops-tools/terraspace:ubuntu

## Cloud Provider Docker Guides

Here are useful Docker guides for different cloud providers:

{% assign docs = site.docs | where: "categories","docker-guides" | sort:"order" %}
{% for doc in docs -%}
* [{{ doc.title }}]({{ doc.url }})
{% endfor %}
