---
layout: page
title: Setting up Dokku on Digital Ocean
category: docker
tags: [notes, docker, dokku]
published: true
permalink: cheatsheets/dokku-digital-ocean/
---

This is notes from my first time using Digital Ocean. It is a pretty cool interface and it has a Dokku instance built in. But there were a couple additional steps to set it up, as well as one hiccup with SSH keys.

## Create a droplet 

My config options

{:class .table .table-bordered .table-striped}
| option | my choice        | 
|--------|-------|
|hostname | dokku |
|RAM | 512MB |
| region | default |
|Image | Applications > Dokku 0.2.23 on Ubuntu... |
| Add optional SSH Keys | Yes, do this to avoid my minor problems |


## DNS setup

you can either use a dedicated URL like this:

{:class .table .table-bordered .table-striped}
| Name | TYPE | VALUE | TTL|
|------|------|-------|----|
| *   | A  |  [Droplet IP] | 3h |
| @   | A   | [Droplet IP] | 3h |

or if you want to dokku to create 4 level domains (don't know if there's a tech term) add the following entries to your already existing DNS zone file:

{:class .table .table-bordered .table-striped}
| Name | TYPE | VALUE | TTL|
|------|------|-------|----|
| *.darkmatter   | A  |  [Droplet IP] | 3h |
| darkmatter   | A   | [Droplet IP] | 3h |

the second option would add a root url of `darkmatter.example.com` and an app named `app1`, would be deployed to:
`app1.darkmatter.example.com`

## Send your SSH key to dokku on your server

This sends your SSH key up to the dokku server so that you can git push to the server without typing in a password each time.

```
cat ~/.ssh/id_rsa.pub | ssh root@darkmatter.example.com "sudo sshcommand acl-add dokku progrium"
```

## Git set up for a demo app

```
cd app
git init
git commit -am "initial commit"
# git remote add dokku dokku@[your-domain-name]:[app-name]
git remote add dokku dokku@darkmatter.example.com:app1
git push dokku master
```

If no problems are encountered, then dokku will respond (on the command line) that 

```bash
...
[lots of git messages]
...
-----> Releasing app1 ...
-----> Deploying app1 ...
=====> Application deployed:
       http://app1.darkmatter.example.com
```




