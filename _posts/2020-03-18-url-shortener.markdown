---
layout: post
title:  "Building a URL Shortening service"
description: "While bored, I wanted hone my skills and make something useful."
date:   2020-03-18 00:00:00 -0500
category: project
tags: ['NodeJS', 'APIs', 'Passport']
comments: true
---

While bored, I wanted to hone my skills and make something useful. Often my biggest struggle is finding something 'fun', useful to make while still being doable in small chunks so I can actually get something tangible quickly and then build upon it.

## Goals

I decided to make a URL shortening service. I wanted to get more familiar with NodeJS, express and handle views. I also wanted something that could have protected routes. That is to say you can't just send request through to different endpoints without being authenticated.

I also wanted this to be built in such a way to improve my 'git' skills even if I was only working alone on the project. Things like creating issues for bugs/features and then creating the appropriate branch doing the changes and submitting pull requests.

## What I've learned
NodeJS and express are extremely powerful. I almost took this in direction to where it would be a consumable RESTapi. But to cut back on a second deployment for a UI to consume that RESTapi, I opted to have it all in one system. In the future I think I will try to separate that to deploy two projects (backend and frontend) to something like Heroku.

Using Github, setting up a project, and tracking issues and building out features and submitting pull requests, while adding a layer of complexity to my workflow did help me become more cognizant in my normal workflows as well.

## Checking it out
If you want to see it for yourself you can head over to [http://jdngr.co](http://jdngr.co). A demo account is set up ```username: demo@example.com``` ```password: demo123```. Do note, that demo content is pruned every so often for sanity sake. So I wouldn't depend on this deployed instance for URLs you wish to keep. That being said, you can checkout the source-code over on [github](https://github.com/johnweland/url-shortener).