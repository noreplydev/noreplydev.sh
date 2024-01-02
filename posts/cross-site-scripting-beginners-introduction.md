---
date: 2023-12-10
title: Cross site scripting beginners introduction 
slug: cross-site-scripting-beginners-introduction 
topic: hacking
author: c. sánchez
---

# Introduction

When we talk about web security, there are many different types of vulnerabilities that we can exploit as attackers. One of the most common ones is Cross Site Scripting (XSS).  

XSS is a type of attack that allows an attacker to inject malicious code into a website. This code can be used to steal information from the user, or to redirect them to a malicious website.

# Types of XSS

There are three main types of XSS attacks: reflected, stored, and DOM-based. Each type has its own characteristics and vulnerabilities.

### Reflected XSS
Reflected XSS occurs when an attacker sends a malicious script to a user, often through a link, which then gets executed in the user's browser. The script is reflected off the web server, hence the name. It's typically non-persistent, meaning it only affects the user who clicks on the malicious link. Attackers often use social engineering to trick users into clicking these links. The main defense against reflected XSS is proper input validation and output encoding.

comming soon...