---
title: Terraspace with Docker
---

You can run Terraspace within a Docker container. The Docker images are published to Dockerhub within a few minutes of a gem release at [boltops/terraspace](https://hub.docker.com/r/boltops/terraspace). This provides you with an isolated throwaway environment to try out Terraspace.

Here's a "Getting Started with Terraspace and Docker" Video:

{% include videos/learn.md
     url="terraspace-install/lessons/terraspace-docker-installation"
     img="https://uploads-learn.boltops.com/tdp8ky20djzbxsbqyeblxrwuszq5"
     premimum=false %}

## Docker Run

Start the container

    docker run -ti boltops/terraspace

This starts up a container with Terraspace and Terraform already installed.

The default OS is ubuntu. You can also use different OSes by specifying the tag.

    docker run -ti boltops/terraspace:alpine
    docker run -ti boltops/terraspace:amzn2
    docker run -ti boltops/terraspace:centos
    docker run -ti boltops/terraspace:debian
    docker run -ti boltops/terraspace:fedora
    docker run -ti boltops/terraspace:ubuntu

For the Dockerfiles, see: [boltops-tools/terraspace-dockerfiles](https://github.com/boltops-tools/terraspace-dockerfiles)

## Docker Pull

The Docker images are published to Dockerhub within a few minutes of a gem release at [boltops/terraspace](https://hub.docker.com/r/boltops/terraspace). The images generally include the latest version of Terraspace and Terraform. So remember to update the cached Docker images if you've pulled them before.

    docker pull boltops/terraspace
    docker pull boltops/terraspace:alpine
    docker pull boltops/terraspace:amzn2
    docker pull boltops/terraspace:centos
    docker pull boltops/terraspace:debian
    docker pull boltops/terraspace:fedora
    docker pull boltops/terraspace:ubuntu

## Cloud Provider Docker Guides

Here are useful Docker guides for different cloud providers:

{% assign docs = site.docs | where: "categories","docker-guides" | sort:"order" %}
{% for doc in docs -%}
* [{{ doc.title }}]({{ doc.url }})
{% endfor %}
