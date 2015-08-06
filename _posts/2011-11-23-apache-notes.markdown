---
layout: post
title: Apache Notes
tags: apache, webdev
category: Web Development
---

## Restart Apache2

```
sudo apache2ctl graceful
```

## Continuously Monitor Apache Error Log

```
sudo tail -f /var/log/apache2/error.log
```

### Apache Configuration
#### Add a new VirtualHost to the Apache Config file

```
sudo vi /etc/apache2/sites-available/default
```

#### A simple VirtualHost entry

```
<VirtualHost *:80>
  ServerName majorursa.net
  ServerAlias www.majorursa.net
  DocumentRoot /var/www/majorursalia/
</VirtualHosta>
```

#### A VirtualHost for a Drupal Site

```
<VirtualHost *:80>  
  ServerName majorursa.net
  ServerAlias www.majorursa.net
  DocumentRoot /var/www/majorursalia/drupal-6.22
  <Directory /var/www/majorursalia/drupal-6.22/>
    AllowOverride All
    Options None
    Order allow,deny
    Allow from all
  </Directory>
</VirtualHost>
```
### Phusion Passenger

Warning: Do NOT start phusion passenger on a whim and forget about it and leave it Running! It's a memory hog!


