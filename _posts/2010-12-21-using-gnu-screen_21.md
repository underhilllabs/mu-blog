--- 
name: using-gnu-screen_21
layout: post
title: Using Gnu Screen
tags: commandline
category: Systems Administration
---
I've been a long time user of Linux and the command line, but not until recently have I used the amazing program: `screen`.  Screen is a terminal multiplexor.  This means you can have multiple sessions open at the same time (even over a single ssh connection) and flip back and forth between them.  

Prior to discovering screen I'd often be ssh'd into a remote server editing a file when the ssh session would time out or drop and I'd have to quickly open up a new terminal and start editing the file again.  Now while using screen, the screen session itself is independent of the ssh session.  So if my ssh connection flakes out, I start up a new terminal, ssh into the server, "reattach" the previous screen session to this new terminal and all of my work: my emacs window, my bash jobs, etc are still running in the screen session!  

## How to start screen
``` bash
bart@home: $ ssh boris@remote-server-in-distant-vladivostok 
boris@distant-vlad: $ screen
```

If you already have a screen session running on the remote server you can reattach with:

```
boris@distant-vlad: $ screen -r
```

I like to use the options: `-raAd`, mostly because it looks raad.

```
boris@distant-vlad: $ screen -raAd
```

**r**: means reattach previous session

**a**: include all capabilities (with some minor exceptions) in each window's termcap

**A**: Adapt the sizes of all windows to the size of the current terminal

**d**: Forceably detach any sessions that are still holding on to this (your workstation at work for instance).

## Create new sessions

Once inside screen to start a new session use the keyboard combination: `C-a c`. That is, "Ctrl-a c".  (the mnemonic is **c** for "create window")  This will create a new window move you to it.  To move back to the previous window, do a `C-a C-a`.    You can also use the keyboard combos `C-a n` and `C-a p` to move to the Next and Previous windows.  Or you can move to a window directly using its number with `C-a 3` (or whatever number it is.)

## Customizing screen with .screenrc

If you are an emacs user or if you use the emacs shortcuts on the command line, than you know that C-a is already used as the command to bring the cursor to the beginning of the line.  So what to do?  You can change the default keyboard bindings in the .screenrc configuration file in your home directory.  If it doesn't already exist, create it and add the following line:

`escape ^Bb` 

or whatever you want to use as the control sequence.  This will change the control sequence from `C-a` to `C-b`, other people use other keys, some use the backslash `\` instead.  So now if you have changed to C-b, then to toggle between windows use:

**C-b C-b** and so on...

Another good thing to add to the screenrc is code for a modeline, so you can see the available windows:

``` bash Add to .screenrc
caption string "%?%F%{= Bk}%? %C%A %D %d-%m-%Y %{= kB} %t%= %?%F%{= Bk}%:%{= wk}%? %n "
hardstatus alwayslastline
hardstatus string '%{= kG}[ %{G}%H %{g}][%= %{= kw}%?%-Lw%?%{r}(%{W}%n*%f%t%?(%u)%?%{r})%{w}%?%+Lw%?%?%= %{g}][%{B} %m/%d %{W}%c %{g}]'
```

This code will add a modeline to the bottom of the terminal that tells you which window you are in and also the numbers or names of the sessions.

## Irssi is Screen's BFF
Best of all you can keep a session of Irssi (an irc client) running at all times in a screen session and always be up to date with your favorite IRC channels.<p />

## Additional Screen resources
 <a href="http://aperiodic.net/screen/quick_reference">Screen Quick Reference</a>

<a href="http://www.ibm.com/developerworks/aix/library/au-gnu_screen/index.html?ca=dgr-lnxw07GNU-Screen&S_TACT=105AGX59&S_CMP=grsitelnxw07">Stayin' Alive with Screen</a>

<a href="http://www.linuxjournal.com/article/6340">Power Sessions with Screen</a>

<a href="http://quadpoint.org/articles/irssi">Guide to Using Irssi with Screen</a>
