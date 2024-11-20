---
title: setup static page with hugo, github pages and custom domain
summary: Click for more ...
date: 2024-11-01
authors:
  - Mati: author.jpeg
---

:warning: Under Construction :warning:

## preface

In this brief tutorial, I will show you how to generate a simple static website, host it on GitHub Pages with a custom domain, and do it all for free.

I've noticed many people using Medium to share their ideas, and it's a fantastic platform. The concentration of brilliant techies posting their thoughts and solutions is truly impressive. However, what about those who want to build their own brand, promote their own domain independently, and avoid getting lost in the crowd? While it's important to promote our site through various channels to achieve the best rankings, we can still host our small projects on our own domain where we have near-complete control.

## steps

### install hugo

To start creating your page, we first need to install the Hugo environment. There are various static page generators like Jekyll, Next.js, and Gatsby.

My goal was to be quite versatile, and the ease of use when creating a website comes down to creating the proper Markdown files, which is both easy and awesome! I chose [Hugo](https://gohugo.io/) after digging into multiple sources and receiving good feedback, as well as the extensive marketplace of [themes](https://themes.gohugo.io/).

Hugo is blazing fast and is supported on many platforms and through multiple package managers. I personally use Ubuntu Linux as my base host, which is supported out of the box.

Whole setup details, including repositories, can be found under this [link](https://gohugo.io/installation/).

Keep in mind that Hugo requires [Golang](https://go.dev/doc/install) version 1.22 or higher and sometimes the [dart-sass](https://gohugo.io/hugo-pipes/transpile-sass-to-css/#dart-sass) package for proper CSS transpilation.

### create a simple website

The documentation steps can be found under this [link.](https://gohugo.io/getting-started/quick-start/)

After installing Hugo, you can check if it's ready to go by following these steps:

- Create a website with YAML as the starting config format (TOML is the default).
- Navigate to the folder of your website and init repo.
- Add the initial theme through a git submodule.
- Add the theme name to the base config.
- Run and check the output.

```bash
hugo new site demo --format yaml
cd demo && git init
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
echo "theme: ananke" >> hugo.yaml
hugo serve
```

Navigate to the link from the CLI output to check the results, which by default is [http://localhost:1313](http://localhost:1313) If the port is already taken, you will get a random port from the high port range (30000+).

Your whole statically generated page is in the **./public** folder within the demo directory. From here, you can take it and publish it wherever you like.

Keep in mind that if you did not stop the **hugo serve** command, all changes will be reflected immediately after saving any config or site files.

### install theme

:warning: This part can be tricky since each template works differently! Some templates work directly via a **git submodule add** or the **hugo mod get** command. Others need to be copied or cloned directly from the template creator's Git repository.

First, choose your favorite theme from the official site [https://themes.gohugo.io/](https://themes.gohugo.io/). Then, navigate to the details of the theme and follow the instructions provided in the description!

After you have found it and properly installed and configured the details, give it a try and run the **hugo serve** command!

### own domain

If you already have your domain, you can skip this point.

I have the privilege of having my domain registered with [nic.eu.org](https://nic.eu.org/), which is completely free of charge and leased for 100 years.

To register your own domain, please follow the instructions from this [link](https://nic.eu.org/opendomains.html).

Keep in mind that since this is an unpaid service, [any kind of help is welcome](https://nic.eu.org/tohelp.html), and the request can take some time. I waited around two years for mine, but that was more than ten years ago. It’s still worth it!

### point your domain to GitHubPages

If you have your own domain registered already, inside your DNS settings point the A/AAAA or an ALIAS record of the origin **@** to the following IP addresses:

```bash
# IPv4 (A)
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

# IPv6 (AAAA)
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

An example dig anwser

```bash
# get A records
$ dig +nocmd +noall +answer www.kepa.eu.org A
www.kepa.eu.org.	6883	IN	CNAME	kepa.eu.org.
kepa.eu.org.		6883	IN	A	185.199.110.153
kepa.eu.org.		6883	IN	A	185.199.111.153
kepa.eu.org.		6883	IN	A	185.199.108.153
kepa.eu.org.		6883	IN	A	185.199.109.153

# get AAAA records
$ dig +nocmd +noall +answer kepa.eu.org AAAA
kepa.eu.org.		6917	IN	AAAA	2606:50c0:8001::153
kepa.eu.org.		6917	IN	AAAA	2606:50c0:8003::153
kepa.eu.org.		6917	IN	AAAA	2606:50c0:8000::153
kepa.eu.org.		6917	IN	AAAA	2606:50c0:8002::153

```

At a later step, when registering the custom domain in your GitHub repository, you will be asked to add a TXT record to verify that you are the owner of the DNS origin. This is a common process for many providers, so there's no need to worry.

#### redirection with www+tld

Please don't forget to create a CNAME record inside your DNS Zone for your custom domain with **www** in front!

This will allow you to reach your website not only with the top-level domain (TLD) but also with **www**.

For example, you can reach my website at [kepa.eu.org](http://kepa.eu.org) as well as [www.kepa.eu.org](http://www.kepa.eu.org). Many forget about this, but it's quite handy!

Example anwser from dig

```bash
# get CNAME records for your www+tld domain
$ dig +nocmd +noall +answer www.kepa.eu.org CNAME
www.kepa.eu.org.	7119	IN	CNAME	kepa.eu.org.

```

### create repo in GH

- add proper .gitignore
- deploy to repo
- add CNAME file
- deploy manualy the public only
- deploy with GH Actions

<!-- ### next : create custom mail with zoho
  - setup spf + dkim -->
