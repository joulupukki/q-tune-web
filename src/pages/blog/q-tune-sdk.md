---
layout: ../../layouts/PageLayout.astro
title: "Meet the Q-Tune SDK: Build Your Own Tuners and Standby Screens"
description: "The Q-Tune SDK lets you build custom tuner displays and standby screens for your Q-Tune pedal. Here's what it is, who it's for, and how to start."
pubDate: "2026-07-01"
author: "Boyd"
---

Q-Tune has always been a tuner you build. Now it's also a tuner you can build on. The Q-Tune SDK is here, and it lets you write your own tuner displays and standby screens for the pedal.

<div class="aspect-video my-6"><iframe class="w-full h-full rounded-xl" src="https://www.youtube.com/embed/B0TpQGBdE88" title="Q-Tune SDK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## What you can build

There are two kinds of plugins:

- **Tuner displays.** The screen you watch while you tune. Build a gauge, a needle, a strobe, pixel art, whatever you can draw. Your plugin gets the detected note, how many cents sharp or flat you are, and the user's settings to work with.
- **Standby screens.** What's on screen when you're not tuning. Visualizers, animations, a set list, a clock, anything that fits.

The SDK comes with working samples to start from: gauge and phase tuner displays, plus a couple of standby screens.

## Who it's for

The SDK is built around C++ and LVGL, the same graphics library Q-Tune runs on. If you've drawn anything with LVGL, you'll be at home. You don't need to be a deep embedded engineer, and if you'd rather not write it all by hand, there's a guided way to describe the screen you want and generate a starting point.

Builds run in Docker, so you don't have to assemble a local toolchain. Clone the repo, start from a sample, build, and load it onto your Q-Tune.

## It's open source

The SDK is Apache-2.0 licensed, so you're free to build plugins, share them, and even sell them. The screen is 240 by 320, and your plugin can run in portrait or landscape.

## Start building

The SDK and its docs live on GitHub: [q-tune-sdk](https://github.com/joulupukki/q-tune-sdk). The README walks through setup, the samples, and how to get a plugin onto your pedal.

## Why we built it

Most tuners never change after the day you unbox them. We wanted Q-Tune to be different. Firmware updates already make it better over time, and the SDK takes the next step: the people who own one, and the community around it, can make it their own.

Don't have a Q-Tune yet? [Take a look](/#buy).
