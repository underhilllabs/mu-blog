---
layout: post
title: Using Vim for Tricky Regular Expressions
tags: vim 
category: Vim
description: Using vim regular expressions to to a tricky translation from org-mode to html.
---

![Mastering Regular Expressions](https://lh4.googleusercontent.com/-IEgGpMB_XVY/UYk1L1-eg2I/AAAAAAAADno/KbPfRaXE3S4/w220-h196-no/mastering_regexp1.png)

So, I was trying to convert an orgmode file to html. There is an orgmode-export-as-html function, but it was choking on something, so I needed to do the conversion by hand. I tried many, many times to convert the file with emacs regular expressions, but was unsuccessful.  The difficulty was the orgmode headlines, which look like this:

``` bash
*** Use the sort function
```

I wanted to simply transform this into:

```
<h3>Use the sort function</h3>
```

## Vim Regexp
I was finally able to match the headline in vim with the following regular expression: 

```
\*\*\* \(\(w*\).*\)
```

* The literal asterisks had to be matched with \*.  
* Next, to match to the end of the line I used: \(\(w*\).*\) 
* \( \) creates a matching group, which can be used later in the replacement string with \1 or \2 etc.
* Also \(w*\).* matches 1 or more words

### Vim Substitution Expression

```bash
%s/\*\*\* \(\(w*\).*\)/<h3&gt;\1<\/h3&gt;/
```
* The % matches the entire file
* The \1 matches the first matching group in the search string
That is, \1 will match everything on the line after the 3 literal asterisks.

## Testing Matching String
Its easy to test a regular expression in vim.  While in command mode (hit Esc if you are in input mode), type a / and then type your regular expression and then press "return", like so:
```bash
/\*\*\* [RETURN]
```

Your matches will be highlighted.  Click 'n' to jump to the next match.

## Getting back to previous substitution
Vim has a cool, intuitive way to explore your command history. In command mode, type ":" as for typing an ex command, and then press the up arrow to scroll up to through your command history. This is really handy for using previous, complex regular expressions.


