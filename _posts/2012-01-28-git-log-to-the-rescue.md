---
layout: post
title: Git Log to the Rescue
tags: git
category: Git
---
## Using Git Log
### git log &#8212;stat

If you'd like to see the number of changes in each file, add the --stat option.

<img src="https://lh6.googleusercontent.com/-jaNagkLs3rU/Tu-DuIZKN1I/AAAAAAAACaE/xdNCDuVv6Vw/s800/git-log--stat.jpg" alt="" />

### git log &#8212;since=&#8220;3 weeks ago&#8221; &#8212;until=&#8220;yesterday&#8221;

Git log also provides an intuitive way to provide a date range, with &#8212;since and &#8212;until options.

### git log -p

With the -p option, git log will show patches of each of the commits.

<img src="https://lh5.googleusercontent.com/-iULY5TLtYaw/Tu-D5rVPdGI/AAAAAAAACZw/U1Cr0Vh09Ao/s800/git-log-p.jpg" alt="" />

### git log &#8212;graph

Git log with the &#8212;graph option prints a graph along the left edge to show branches of the repository.

<img src="https://lh4.googleusercontent.com/-y3F733L3w9w/Tu-KMcMnp7I/AAAAAAAACac/YtfG0oN5kaU/s640/git-log-stat-graph-pretty-short.jpg" title="The stars in the graph show which branch the commits are on." alt="The stars in the graph show which branch the commits are on." />

The full command for the graph screenshot above is:

{% highlight bash %}git log --graph --stat --pretty=short{% endhighlight %}

The repository used in the graph example is the git repository itself.  You can clone it here:

{% highlight bash %}git clone git://github.com/gitster/git.git{% endhighlight %}

The repository used for the first two examples are from Drupal.  You can also clone drupal:

{% highlight bash %}git clone --branch 7.x http://git.drupal.org/project/drupal.git{% endhighlight %}
			
