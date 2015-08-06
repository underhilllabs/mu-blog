---
layout: post
title: "Zombies, Emacs and Orgmode "
date: 2011-05-19 17:35
comments: true
categories: [Emacs, Zombies]
---

![Emacs Screenshot](http://farm3.static.flickr.com/2741/5738522164_058b838336.jpg)

![Zombie-Shovel-Run Graph](http://farm4.static.flickr.com/3280/5738238466_8320bfd478_o.png)

I was playing around with Graphviz inside orgmode inside Emacs. Come the Zombie Apocalypse I'll be prepared, thanks to Emacs and Orgmode. Here's the Graphviz src: 

{% highlight bash %}
digraph D {
  size="8,6"
 node [ shape = polygon,
  sides = 4,
  distortion = "0.0",
  orientation = "0.0",
  skew = "0.0",
  color = "#aaaaaa",
  style = filled,
  fontname = "Helvetica-Outline" ];
  apocalypse [sides=9 skew=".32" color="purple"]
  apocalypse -> zombie
  apocalypse -> zombies
  shovel [skew=".56" color="#aa2222"]
  subgraph singular {
    label="one"
    color=purple
    zombie -> shovel [color="#440000"]
    shovel -> run
  }
  run [sides=9, color=salmon2];
  subgraph plural {
    label="many"
    color=red
    zombies -> run [color="#00a4d4"]
  }
}
{% endhighlight %}

save this file as zombies.gv, then run: graphviz zombies.gv.
If you are interested in graphviz, you can click on any graph in this gallery and see the graphviz source for the graph.

I wrote the graph source first in Emacs in Orgmode 7.5. Here's the src for experimenting with graphs in orgmode using the new org-babel, which lets you evaluate code in special code sections right inside of Emacs: 

```
#+begin_src dot :file digraph2.png :cmdline -Kdot -Tpng  
digraph D {
  size="8,6"
 node [ shape = polygon,
  sides = 4,
  distortion = "0.0",
  orientation = "0.0",
  skew = "0.0",
  color = "#aaaaaa",
  style = filled,
  fontname = "Helvetica-Outline" ];
  apocalypse [sides=9 skew=".32" color="purple"]
  apocalypse -> zombie
  apocalypse -> zombies
  shovel [skew=".56" color="#aa2222"]
  subgraph singular {
    label="one"
    color=purple
    zombie -> shovel [color="#440000"]
    shovel -> run
  }
  run [sides=9, color=salmon2];
  subgraph plural {
    label="many"
    color=red
    zombies -> run [color="#00a4d4"]
  }
}
#+end_src
```

Then inside the buffer you can evaluate the code with "C-c C-c", and you can see the results of evaluating the code with "C-c C-o".


This is made possible by Org-babel, a cool tool that allows you to run scripts from different languages in a single Org-mode buffer.  Not only that but you can pipe output from one code block to another code block written in a different language.  I will have more blog posts about this in the future.  Org-babel is a part of Org-mode since Org-mode 7.x or so.  Exciting stuff!

## Further Reading

<a href="http://j.mp/l6chaqorgmode.org/worg/org-contrib/babel/">Org-babel Documentation</a><br>

<a href="http://www.graphviz.org/">Graphviz</a>

