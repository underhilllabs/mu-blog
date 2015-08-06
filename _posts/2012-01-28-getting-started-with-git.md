---
layout: post
title: Getting Started with Git
tags: git
category: Git
---
### Start Using Git on a Project

```
# cd into project your working on
cd <project>
# initialize a git repository
git init  
# add all of the files to the repository
git add .
# now commit the files to repository
git commit -m "My first commit message"
```
### Later, check which files have changed and are out of sync

```
# this will list changed files and new files
git status
# this will add the newly updated updated_file.php to the commit
# staging area
git add updated_file.php
# commit changes with a good change message
git commit -m "Fixed missing name bug in updated_file.php"
```

### Create a remote repository

```
# ssh into server and create repository directory
ssh boris@vladivostok.net
mkdir myproject
cd myproject
# --bare option means this repository will be pushed to and pulled
# from but never worked in directly (ie it will be a repository without working
# files).  This caused me no small amount of confusion when I first
# started using git.  
git init --bare
# exit out of distant vladivostok server
exit
# cd into local project
cd project
# add the remote repository
git remote add vladivostok ssh:boris@vladivostok.net:myproject
# now you can push a branch of the repository to the remote
# repository, "master" is the default main branch in git
git push vladivostok master
```

Sweet! Now your code is backed up on a remote server.  In fact your
code's entire history is on the remote server.  Everytime you make a
commit on the local server, you can push that change to the remote
server as well.

### Good Git Introductions

<a href="http://www.alistapart.com/articles/get-started-with-git/">Getting Started With Git</a>
<a href="http://schacon.github.com/git/everyday.html">Everyday Git with 20 commands or so</a>


### Git Next Level

<a href="http://think-like-a-git.net/epic.html">Think like a Git</a>
<a href="http://www.linuxjournal.com/content/git-revision-control-perfected">Git: Revision Control Perfected</a>


<a href="http://cmurphycode.posterous.com/git-201-slightly-more-advanced">Git 201: Slightly More Advanced</a>

<a href="http://danielmiessler.com/study/git/">A Git Primer</a>
<a href="http://eagain.net/articles/git-for-computer-scientists/">Git for Computer Scientists</a>
<a href="http://tomayko.com/writings/the-thing-about-git">The Thing About Git</a>

### Git Workflow
<a href="http://scottchacon.com/2011/08/31/github-flow.html">Github's Git Workflow</a>

<a href="http://nvie.com/posts/a-successful-git-branching-model/">Git-flow a more complex workflow</a>

### Github Stuff

<a href="http://net.tutsplus.com/tutorials/other/getting-the-hang-of-github/">Getting the Hang of Github</a>

