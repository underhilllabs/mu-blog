---
layout: post
title: "Notes on Practical Vim"
date: 2013-07-21 17:13
comments: true
categories: vim
---

## Chapter 3: Insert Mode

### Make corrections without leaving Insert mode
- `c-w` delete last word
- `c-u` delete back to beginning of sentence.

### Paste from register without leaving Inser mode
- `C-r{register}` paste from register

So you can yank some text in Normal mode, type `A` to start in insert mode at the end of the line, and type `C-r0` to paste what you just yanked.

### Autocomplete

There is a later chapter that covers autocomplete goodness, but I should mention the simple form.
- `C-n` autocomplete

this autocompletes from current buffer, all open buffers and CTAGS.

### Jump to the end of the line

This is a new keymapping I thought of just now! 
- `inoremap <C-e> <C-o>A`

This remaps Ctrl-e to jump to end of the line, while you're in insert mode. Granted, this is what is known as mixing metaphors, as C-e is an emacs shortcut. But it's also one of my favorites. 

```
inoremap <C-a> <C-o>I
```

Would add the opposite emacs shortcut to jump to the beginning of the line.




