---
layout: post
title: "Vim Plugins: vim-surround"
date: 2013-05-11 13:05
comments: true
categories: Vim
---

Contunuing my series of posts on awesome, indispensible Vim plugins, today let's meet [vim-surround](https://github.com/tpope/vim-surround)! Vim-surround allows you to manipulate text/tags/quotes that surround a chuck of code.

## Delete Surroundings with `ds*`

Delete the `<h3>` tag:

before:
``` html
<h3>Welcome to Snarnia!</h3>
```

command to run with cursor anywhere on the line (even in tag.)

``` bash Delete Surrounding Tag
dst
```

after:
``` bash
Welcome to Snarnia!
```

## Change Surroundings with `cs* `

Change `"Hello, Bossy"` to `<q>Hello, Bossy</q>` with:
``` html Change Surrounding Quote
cs"<q>
```

## Add Surrounding text with `ys* `

Adding text makes use of vim's yanking word movements. Suppose you want to add, quotes around a sentence:

before:
``` html
I'm a monster, as well as a dwarf. You should charge me double.

--Tyrion Lannister
```

Command, on same line as quotation:
```
yss"
```

after:
```
"I'm a monster, as well as a dwarf." You should charge me double."

--Tyrion Lannister
```

I have found  [vim-surround](https://github.com/tpope/vim-surround) especially helpful when editing html. 

## Manipulate outer tags

One more tip for manipulating outer tags: add a numeric argument to work on outer tags.

``` html "example html"
<div>
<ul>
  <li>one</li>
  <li>more</li>
  <li>thing</li>
<ul>
</div>
```

In order to delete the `<div>` tag while in a list item in the code up above, type: `ds3t` and that will delete the tag 3 layers up.

Afterwards:
``` 

<ul>
<li>one</li>
<li>more</li>
<li>thing</li>
<ul>
```

