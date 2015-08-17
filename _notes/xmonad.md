---
layout: page
title: Xmonad Notes
category: xmonad
tags: [notes, xmonad]
published: true
permalink: cheatsheets/xmonad/
---

## Basic Commands

{:class .table .table-bordered .table-striped}
| key combo| command|
|----------|--------|
| &lt; mod &gt; j | jump to next pane |
| &lt; mod &gt; k | jump to previous pane |
| &lt; mod &gt; 1 | move to first workspace |
| shift-&lt; mod &gt; &lt; enter &gt; | open terminal |

## xmonad/xmonad.hs 

Configuration file for Xmonad. This example creates shortcuts for firefox, chrome, nautilus, emacs.
It also uses Gnome configuration and rebinds the mod key to the "windows" key.

```haskell
import XMonad
import XMonad.Config.Gnome
import XMonad.Util.EZConfig(additionalKeys)

main = do
    xmonad $ gnomeConfig
      { modMask = mod4Mask     -- Rebind Mod to the Windows key
      } `additionalKeys`
        [ ((mod1Mask, xK_f), spawn "firefox")
        , ((mod1Mask, xK_c), spawn "google-chrome")
        , ((mod1Mask, xK_n), spawn "nautilus")
        , ((mod1Mask, xK_e), spawn "emacs")
        ]
```


