---
layout: post
title: "Adding a Group By clause to a View"
date: 2014-07-15 17:35
comments: true
categories: Drupal
---

These are some quick notes on how I added a group by clause to a query for a view in Drupal 7.

I have a custom database in a module that I wrote and one of the fields in it: **video_id** corresponds to a **node nid**. So I wanted to pull this database into a view. However there can be many rows in my database for each node and all I wanted for the view was to print one message **Update answer key** if there was one or more entries in the database and a different message **Create answer key** if there were no entries.


## tl;dr this is what worked ##

### Tag the query in hook_views_query_alter() ###
```php
<?php

/**
 * Implements hook_views_query_alter().
 */
function my_mod_views_query_alter(&$view, &$query) {
  if($view->name == 'video_landing_page') {
    // add_groupby doesn't work
    //$query->add_groupby('node.nid');
    $query->add_tag('my_mod');
  }
}
```

### Next implement hook_query_TAG_alter ###
```php
<?php

/**
 * Implements hook_query_TAG_alter().
 */
function dance_code_query_my_mod_alter(QueryAlterableInterface $query){
  $query->groupBy('node.nid');
}
```

### Full Story ###

This was simple to do with a raw sql statement by adding "group by node.nid". So I first tried adding this group by with hook_views_query_alter().

```php
<?php

function my_mod_views_query_alter(&$view, &$query) {
  if($view->name == 'video_landing_page') {
    $query->add_groupby('node.nid');
  }
}
```


This did not appear to work. I searched google and D.O. and none of the solutions worked. There was also a consensus that there was a bug in **hook_views_query_alter()** and that I should use **hook_query_altar()** instead.

So I worked on implementing hook_query_alter, unfortunately the first problem was knowing how to identify that I was altering the correct view.


