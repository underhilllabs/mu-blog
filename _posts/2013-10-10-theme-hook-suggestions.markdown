---
layout: post
title: "Theme Hook Suggestions"
date: 2013-10-10 12:40
comments: true
categories: drupal
---
## Theme Hook Suggestion Patterns

### Base Templates
The following base templates are part of Bartik: **comment.tpl.php**, **comment-wrapper.tpl.php**,  **maintenance-page.tpl.php**, **node.tpl.php**, **page.tpl.php**. Additionally, the core taxonomy module defines the **taxonomy-term.tpl.php** template. 

#### find all of the templates in your site install
from within your site's root directory run one of the following commands and optionally redirect the output (it's long) into a file.

```bash
find . -name '*.tpl.php' -print
```

or if you're using zsh: 

```bash
ls **/*.tpl.php
```

### Copy Base Template into your theme or module and customize it
Decide what template you'd like to override and copy it into your module or theme folder.

```bash
cp modules/taxonomy/taxonomy-term.tpl.php sites/all/modules/custom/amazing-mod/theme/taxonomy-term.tpl.php
```

### Rename file to a specific taxonomy vocabulary or term id
The pattern for overriding a taxonomy template is `taxonomy-term--[vocabulary-machine-name|tid].tpl.php`. In our case we are going to override the template for the **education_session**, so we rename the template thus:

```bash
cd  sites/all/modules/custom/amaaazing-mod/theme/
mv taxonomy-term.tpl.php taxonomy-term--education-session.tpl.php
```

Notice that we changed the underscores in the *machine-name* to dashes.

## Additional Notes

### Don't Forget: replace _ with - in field and taxonomy-term machine names

For instance, the taxonomy term *education_session* would become *education-session* in the Theme Hook Suggestion:
`taxonomy-term--education-session.tpl.php`

### If you cannot see changes: clear caches

```bash
drush cc all
```


## Create a template file for your module

### Implement hook_theme()

Implement hook_theme() and define your template file.

``` php
<?php
/**
 * Implements hook_theme().
 */
function amazing_mod_hook_theme() {
  return array(
    'amazing-item' => array(
        'variables' => ('item' => NULL),
        'template' => 'amazing-item',
     ),
  );
}
?>
```

and create the file

```bash
vim theme/amazing-item.tpl.php
```

## References

+ [Drupal.org doc on Drupal 7 Template (Theme Hook) Suggestions](https://drupal.org/node/1089656)
+ [D.o doc Working with template suggestions](https://drupal.org/node/223440)
