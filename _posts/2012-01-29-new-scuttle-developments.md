---
layout: post
title: New Scuttle Developments
tags: scuttle bookmarking
category: Open Source Projects
---
![ Scuttle Screenshot ](http://dev.majorursa.net/sites/default/files/styles/large/public/field/image/scuttle-screenshot.png)

I am a big fan, user, and tinkerer of <a href=http://sourceforge.net/projects/scuttle/>Scuttle</a>: the Open Source <a href=http://en.wikipedia.org/wiki/Social_bookmarking>Social Bookmarking</a> System. In case you have never heard of it, Scuttle is similar to other social bookmarking web applications like Delicious and <a href="http://pinboard.in">Pinboard</a>. It allows you to save website bookmarks on a public site, so that other people can follow your bookmarks and you can follow other people with similar interests. Although unlike delicious and pinboard, most scuttle instances are decentralized with only a few users. So there is less of the social aspect. (That is until someone figures out how to federate all of the decentrailized installations.)

You can see some of my work on different Scuttle projects on <a href=https://github.com/underhilllabs>my github profile</a>.  And here's my <a href=http://bookmarks.denvertech.org>bookmark site</a> which shows scuttle in use.

## Scuttle Web App Additions
I have a <a href=https://github.com/underhilllabs/scuttle>fork of the original scuttle web app</a>. I have add a couple of features recently. I was getting frustrated because I would bookmark a website, and scuttle would tell me that that page was already bookmarked a year ago and so would keep the bookmark in the stream a year ago, even if I updated the bookmark. The problem with that approach is that when something is bookmarked a while ago and I'm researching the topic again, I want the updated bookmark to show up with the most recent bookmarks. So I altered the code to do this.  When I resave a bookmark or update it, Scuttle now saves my updated bookmark in the stream with recent bookmarks.  It shows both the original date and the modified date.  

## Firefox Scuttle Plug-in Keyboard Shortcut
There is also a firefox plugin for scuttle to update your scuttle site.  I added a keyboard shortcut to the <a href=https://github.com/underhilllabs/Scuttle-Plugin-Firefox-4>plugin on my fork of it at github</a>, My addition adds a keyboard shortcut at "Shift-Ctrl-B", so if you're reading a good article, you can just type "Shift-Ctrl-B" and the "scuttle save bookmark" window will pop up. If you are interested, you can download the <a href=https://github.com/underhilllabs/Scuttle-Plugin-Firefox-4/downloads>firefox plugin here</a>.





