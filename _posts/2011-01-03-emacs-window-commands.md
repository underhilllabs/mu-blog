--- 
name: emacs-window-commands
layout: post
title: Emacs Window Commands
tags: emacs
category: Emacs
---
I recently bought a new large monitor, which opened the possibility of using Emacs with multiple, side-by-side windows.  Which is brilliant by the way!  Since I plugged it in, I've been `C-x 3`-ing like a madman.  My new favorite way to learn programming is having an info file open in the left window and in the right window having a scheme (or python) prompt open.  That is what I am doing now working on the Structure and Interpretation of Computer Programs.  Luckily there was an <a href="http://www.neilvandyke.org/sicp-texi/">info file available</a>.  I'm trying to think of a simple way to translate my programming epubs or pdfs into info files.

<a href="http://www.flickr.com/photos/redbike/5324820738/" title="SICP with Emacs by denverfiddler, on Flickr"><img src="http://farm6.static.flickr.com/5043/5324820738_4a77355d01.jpg" width="500" height="267" alt="SICP with Emacs" /></a>

Anyways on to todays topic.  Emacs window commands!  

The first thing to keep in mind, is the difference between windows and  frames in emacs.  To emacs: a window is any portal to a buffer.  if you type in `C-x 2` in emacs and your view splits in half.  These two  portals are known as windows.  What we usually call a new window, is known as a frame to emacs.  So when you type in Ctrl-n in your browser and a new window pops open, in Emacsia, this is known as a new frame.

### Open another window:

<b>C-x 2</b>        open another vertical window.<br><b>C-x 3</b>        open another horizontal window.<br><b>C-x 4 b </b>     open a buffer in the other window<br><b>C-x 4 f</b>      open a new file in the other window.<br><b>C-x 1</b>        close all other windows, leave current window open. <br><b>C-x 0</b>        close current window, switch to other window.<br><b>C-x o</b>        move to other window<br>

### Positioning windows:

<b>C-x +</b>      balance windows. This balances the size of all open windows.<br><b>C-x {</b>     widen current window.<br><b>C-x }</b>     narrow current window.<br><b>C-u C-x {</b>   widen current window by 4 columns.<br><b>C-u C-x }</b>   narrow current window by 4 columns.<br>

### Scroll other window:

<b>M-C-v</b>     scroll other window<br>
