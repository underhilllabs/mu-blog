--- 
name: this-weeks-emacs-commands
layout: post
title: This Week's Emacs Commands
tags: emacs
category: Emacs
---
If you've ever played keywiz on Emacs: "M-x keywiz", you were probably eating humble-hacker-pie by the end of the game.  (For the uninitiated, keywiz is a game in emacs that's asks 10 random questions about key-bindings for some times obscure emacs commands.)  So far my top score is 4 (out of 10).

So what is a novice to do? I've decided to write commands I want to learn on sticky notes on my monitor until I memorize them.

So, without further ado, here's this weeks list of new commands:


``` bash goto line
M-g g
``` 
This command will ask for a line number and take you there in the current file.  


``` bash vc-diff
C-x v=
``` 
This command will show a diff between current file and HEAD in whatever Version Control System you are using.


``` bash vc-next-action  
C-x vv
``` 
This command will perform the next appropriate VCS command, such as add current file to staging, or commit.


``` bash indent-region
C-M-\
``` 
If there is a defined region, this command will indent it.


``` bash comment-region  
C-M-;
``` 
If there is a defined region, this command will comment the region out.   (or uncomment a commented out region.)

A note: to define a region.  Do a C-[spc] at the beginning of the region and then move to the end of the region however you'd like (arrow keys, C-n, C-f, C-v).  If you can't see the regions add the following to your .emacs file: (transient-mark-mode 1).

Second note, in the above key combination, capital C, means hold the Ctrl key, capital M, means hold the Alt key.  If there are dashes between letters: type them together (or with C or M hold the Ctrl or Alt key while typing the other key.  So with M-g g: Hold Alt while typing g, let go and then type g again.)

Now off to work on a new version of keywiz, perhaps keywiz-jr!

