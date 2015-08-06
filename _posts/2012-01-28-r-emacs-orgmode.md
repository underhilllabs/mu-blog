---
layout: post
title: R, Emacs, and Orgmode
tags: R emacs orgmode data 
categories: Emacs
---
### Using R with Org-babel
#### to export a graph created by R, use the following line to start the R code:

``` 
#+begin_src R :results graphics :file lightning.png :exports both
```

#### Parameters explained:


* <b>:results graphics</b> exports the results as a graphics file.
* <b>:file</b> lightning.png exports the graph to a file named lightning.png
* <b>:exports both</b> exports both the code and the results

#### to end the R code use the following line

```
#+end_src
```

### R Emacs Tips

#### M-x R

<p>type M-x R to start the inferior R process in an emacs buffer
</p>

#### History

if you start R-mode in the same directory each time and save the
session at the end of your session, then your history and session
variables will be preserved between sessions.
