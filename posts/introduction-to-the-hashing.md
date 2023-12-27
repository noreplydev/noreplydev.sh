---
date: 2023-12-17
title: Introduction to the hashing
slug: introduction-to-the-hashing 
topic: cibersecurity
author: c. sánchez
---

# Introduction

Hashing is the process made by a hash function. This doesn't sounds very helpful, so let's dive into it. 

A hash function is a function that takes an input and returns an output. The output is called hash, and we can affirm that is the output of hashing the input.

# Hashing properties

To consider a function a hash function, it must have the following properties:

I. Deterministic: The same input will always result in the same output. Hashing "hello world" will always result in the same hash.
II. Fixed output length: The output length is always the same, no matter which input was given to the function this will always return the same hash length.
III. Efficient: The function must be relatively fast to compute. This is a very important property for performance reasons. 
IV. Irreversibility: The function must be irreversible. This means that given a hash we can't determine which was the input. This is a very important property for security reasons.  
V. Avalanche effect: A small change in the input like "hello world" to "hello world!" must result in a completely different hash.
VI. Pre-image resistance: Given a hash, it must be difficult to find the input that generated it. 
VII. 2nd pre-image resistance: Given an input, it must be difficult to find another input that generates the same hash. 
VIII. Collision resistance: It must be difficult to find two inputs that generate the same hash.

# Famous hash functions

There are many hash functions. Each one has its own properties and use cases. Some of the most famous are:

- MD5: It's a 128-bit hash function. It's not secure anymore and it's not recommended to use it since the computers are fast enough to find collisions.
- SHA-1: It's a 160-bit hash function. It runs with the same problems as MD5.
- SHA-2: It's a family of hash functions. It has different variants like SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224, SHA-512/256. It's the most used hash function family nowadays. Each variant has a different output length which is the number that follows the SHA- prefix.

# Hashing use cases

Hashing is util for many things. Think that hashing is a function that given an input return a unique output. This is very useful when we want unique identifiers for data. For example, a password is a data that we want to store in a database. We don't want to store the password in plain text because if someone gets access to the database, they will have access to all the passwords. So, we can hash the password and store the hash in the database. When a user wants to log in, we can hash the password and compare it with the hash stored in the database. If they match, the user can log in. 

In this case, we are using the hashed password as an identifier of the real password. 