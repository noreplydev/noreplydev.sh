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

comming soon...