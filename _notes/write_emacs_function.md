---
layout: page
title: Write an Emacs Function
notetype: note
category: emacs
tags: emacs
permalink: cheatsheets/write-emacs-function/
---

<h2>Table of Contents</h2>
<ul>
<li><a href="#sec-1">Writing an emacs lisp command</a>
<ul>
<li>
<ul>
<li><a href="#sec-1-1">writing commands incrementally</a></li>
<li><a href="#sec-1-2">This works!!</a></li>
</ul>
</li>
<li><a href="#sec-1-1">Transpose-windows</a></li>
</ul>
</li>
</ul>

<h2 id="sec-1">Writing an emacs lisp command</h2>




```cl
(defun transpose-windows ()
 "transpose current-window and next-window"
 (interactive)
 (setq buffer-1 (buffer-name))
 (message "jumping to other window")
 (other-window)
 (setq buffer-2 (buffer-name))       
 (switch-to-buffer (buffer-1))
 (other-window -1)
 (switch-to-buffer (buffer-2)))
```



```cl
(setq cur-buffer (buffer-name))
(buffer-name)
(transpose-windows)
```

<h4 id="sec-1-1">writing commands incrementally</h4>

<p>Emacs has many great features to help yoy write functions. For
instance you can evaluate functions and variable write in the emacs
editing buffer by typing:
</p>


`C-x C-e`

<p>
after the variable name or after the closing parenthesis of a
function.  And the results will be echoed in the mini-buffer.
</p>
<p>
For instance you could type the following into a buffer, and then type
C-x C-e after, to evaluate.  
</p>


`(buffer-name)`


<pre class="example">
transpose_windows.org
</pre>


<ul>
<li id="sec-1-1-1">Next Incremental Step<br/>
Start with a simple command to save the current buffer's name in a
variable and then jump to other window and write both that variable
and the current buffer's name



```cl
(defun jmp-print-buffer ()
 "jump to next-window and swap to current buffer"
 (interactive)
 (setq buffer1 (buffer-name))
 (message "buffer1 is %s" buffer1)
 (other-window 1)
 (message "buffer1 was %s" buffer1)
 (message "buffer-name is %s" buffer-name))
```

<p>
Next, write a function to save buffer name, jump to other-window and
switch buffers to that buffer.
</p>


```cl
(defun jmp-swap ()
 "jump to next-window and swap to current buffer"
 (interactive)
 (setq buffer-1 (buffer-name))
 (message "buffer-1 is %s" buffer-1)
 (other-window -1)
 (switch-to-buffer buffer-1)
 (message "buffer-1 is %s" buffer-1)
 (message "buffer-name is %s" buffer-name))
```

</li>
</ul>

<h4 id="sec-1-2">This works!!</h4>

<p>
Now, its time to finish the program!
</p>
<h3 id="sec-1-1">Transpose-windows</h3>

```cl
(defun transpose-windows () 
 "Swap buffer in current window with next window."
 (interactive)
 (setq buffer1 (buffer-name))
 (other-window 1)
 (setq buffer2 (buffer-name))
 ;;(message "current buffer was %s" buffer1)
 ;;(message "current buffer now: %s" (buffer-name))
 ;;(message "oh yes! will switch to %s" buffer2)
 (switch-to-buffer buffer1)
 (other-window -1)
 (switch-to-buffer buffer2))
```
