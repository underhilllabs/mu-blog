---
layout: post
title: Using Jekyll on NearlyFreeSpeech.net
tags: jekyll webdev
category: Web Development
description: How to set up a jekyll static-site on NearlyFreeSpeech.net, deploying with git push and the git post-receive hook.  
---

NearlyFreeSpeech.net is a good simple, bare-bones fit for a Jekyll
site once everything is set up. The price can't be beat, you can put
down a $10 payment and just try it out. With a Jekyll site, that $10
investment should last a while!

## Set Up SSH Alias
The first thing to do is set up an ssh alias in your .bashrc file.
The hostname and username that are assigned at nfsn are generally
pretty easy to forget, so I always create an alias for them, like:

{% highlight bash %}
alias sshnfsn='username_sitename@ssh.yourhostname.nearlyfreespeech.net';
{% endhighlight %}

Once you save the .bashrc file, you can source it with:

{% highlight bash %}
. ~/.bashrc
{% endhighlight %}

and then test that it works with by running it.

{% highlight bash %}
sshnfsn
{% endhighlight %}

## Aside: Public, Private, Protected Directories
On a nfsn site, there are 3 directories in your /home folder. 

*  The __/home/public__ folder is your public facing directory. This is
   your website's public Document Root. 

* The __/home/private__ folder is your private folder where you can store
  git repos, your ruby gems, anything private you need to use or back
  up.

* The __/home/protected__: let me know if find a use for this.

## Set Up Git on NFSN
Once you are ssh'd into nfsn, cd into /home/private and create a
directory for your git repositories and create a bare git repository
for your site.
{% highlight bash %}
cd /home/private
mkdir git
cd git
mkdir mysite.git
cd mysite.git
git init --bare
{% endhighlight %}

Now you have a bare git repository for your jekyll site. The following
script will create a git post-receive hook, that will run every time
you push to your git repository.

{% highlight bash %}
#!/bin/sh

REPONAME=mysite.git
GIT_REPO=$HOME/git/$REPONAME
TMP_GIT_CLONE=$HOME/git/tmp_deploy/$REPONAME
PUBLIC_WWW=/home/public

# clone the git repo into the tmp_deploy directory.
git clone $GIT_REPO $TMP_GIT_CLONE
# jekyll-ify the site and place html files in /home/public
jekyll --no-auto $TMP_GIT_CLONE $PUBLIC_WWW

rm -Rf $HOME/git/tmp_deploy/$REPONAME/.git/objects
rm -Rf $HOME/git/tmp_deploy/$REPONAME/.git
rm -Rf $HOME/git/tmp_deploy/$REPONAME

exit
{% endhighlight %}

Be sure to chmod +x the file:

{% highlight bash %}
chmod ug+x /home/private/git/mysite.git/post-receive
{% endhighlight %} 

Now, every time you "git push" into nfsn this post-receive hook will
auto-regenerate your jekyll site. 

## Set Up a Git Remote to NFSN
Back on your home computer or wherever you are building your jekyll
site, you need to create a git remote for your nsfn git
repository.

{% highlight bash %}
cd ~/projects/mysite.git
# substitute in your username, sitename and nfsn hostname
git remote add nfsn ssh://&lt;nsfnusername&gt;-&lt;sitename&gt;@ssh.&lt;hostname&gt;.nearlyfreespeech.net/home/private/git/mysite.git
{% endhighlight %}

Now that you have a git remote set up for your jekyll site, you can
Create a page in your jekyll "_post" directory.   
Run "jekyll --server" to test it locally at http://localhost:4000.

{% highlight bash %}
jekyll --server
{% endhighlight %} 

If it looks good, add it to your git repository.

{% highlight bash %}
git commit -am "new brilliant post!"
{% endhighlight %} 

Next, push it to your website on nfsn.

{% highlight bash %}
git push nfsn master
{% endhighlight %} 

The post-receive script you created earlier will generate your new public jekyll website automatically.

Test it and enjoy!

