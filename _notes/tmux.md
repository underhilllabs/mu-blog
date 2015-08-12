---
layout: page
title: Tmux Notes
category: tmux
tags: [notes, tmux, commandline]
notetype: cheatsheet
published: true
permalink: cheatsheets/tmux/
---

## Basic Commands

{:class .table .table-bordered .table-striped}
| key combo| command|
|----------|--------|
| C-b c | Create a new window|
| C-b d | Detach session|
| C-b 1 | Jump to window 1|
| C-b , | Rename window|
| C-b % | Split pane|
| C-b ? | See list of available tmux commands|

## Share a session with another user

First user

```bash
tmux -S /tmp/pair
chmod 777 /tmp/pair
```

Second user

```bash
tmux -S /tmp/pair attach
```

## My .tmux.conf

```
# colors
setw -g mode-bg black
set-option -g default-terminal "screen-256color" #"xterm-256color" # "screen-256color"
set-option -g pane-active-border-fg green

set -g status-left-length 32
set -g status-right-length 150

set -g status-fg white
set -g status-bg colour234
set -g window-status-activity-attr bold
set -g pane-border-fg colour245
set -g pane-active-border-fg colour39
set -g message-fg colour16
set -g message-bg colour221
set -g message-attr bold

set -g window-status-format "#[fg=white,bg=colour234] #I #W "

set -g terminal-overrides 'xterm:colors=256'

set -sg escape-time 0 
# set window and pane index to 1 (0 by default)
set-option -g base-index 1
setw -g pane-base-index 1
# bind p and n to next and previous session
bind -r ( switch-client -p
bind -r ) switch-client -n
```

