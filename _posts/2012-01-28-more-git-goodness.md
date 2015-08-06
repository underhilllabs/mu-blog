---
layout: post
title: More Git Goodness
tags: git
category: Git
---

## Git Show

### Show a particular commit with git show


This will show the commit as a diff.

{% highlight bash %}
git show HEAD^^^
{% endhighlight %}

Also you can use the commit's sha1 as an argument 
{% highlight bash %}
git show 62114826e3f
{% endhighlight %}




## Set git to output color

{% highlight bash %}
git config --local color.ui auto
{% endhighlight %}


This command adds the following to your .gitconfig file:

{% highlight yaml %}
[color]
       ui = auto
{% endhighlight %}



## Git Bisect

Try to find where in the version history a bug first appeared.

{% highlight bash %}
# start bisect
git bisect start
# set good point: there was no bug here, this can be a tag, SHA1, or HEAD~18 ...
git good v1.2.6
# set bad endpoint: we know it had shown up by here
git bad master

# bisect will select a commit half way between good and bad
# test ... then tell git if its good or bad
git bisect good
# it will split the other half in half
git bisect bad
# when you've found the bad commit, reset the branch with
git biset reset

{% endhighlight %}
