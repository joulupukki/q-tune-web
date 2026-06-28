---
layout: ../../layouts/PageLayout.astro
title: "How a Chromatic Tuner Works"
description: "What is a chromatic tuner doing when you pluck a string? A plain-English look at pitch, frequency, cents, and how a tuner pedal like Q-Tune figures out the note you're playing."
pubDate: "2026-06-21"
author: "Boyd"
---

When you pluck a string and watch the display settle, quite a bit happens in the half-second before it tells you you're in tune. Here's what a chromatic tuner is doing, in plain terms.

## "Chromatic" means all twelve notes

A lot of simple tuners only know the six open-string notes of a guitar in standard tuning: E, A, D, G, B, E. A chromatic tuner knows all twelve notes in the octave, sharps and flats included. That means it can help you tune to any note, in any tuning, on any instrument in its range. Drop D, open tunings, a baritone, a bass: it doesn't care. It tells you the nearest note and whether you're above or below it.

## It comes down to frequency

Pitch is frequency, measured in hertz (cycles per second). The A above middle C is almost always 440 Hz, and every other note sits a fixed ratio away from it. Go up a semitone and you multiply the frequency by about 1.0595. Go up a full octave and you double it.

To describe how close you are, tuners use cents. There are 100 cents between one note and the next, so a cent is a hundredth of a semitone. Being 5 cents flat is a small, mostly inaudible miss. Being 30 cents flat is the kind of thing a roomful of people will wince at. A good tuner resolves down to a cent or so, which is finer than most ears.

## Finding the pitch is harder than it looks

Here's the catch: a plucked string doesn't produce one clean frequency. It produces a fundamental (the note you mean) stacked with quieter harmonics above it, and the whole thing shifts as the note decays. The tuner has to pull the fundamental out of that, fast enough to be useful and stable enough that the reading doesn't jump around.

There are a few common ways to do it:

- **Zero-crossing detection** looks at how often the waveform crosses zero to estimate the frequency. It's efficient and accurate when implemented carefully.
- **Autocorrelation** slides the signal against a delayed copy of itself to find the repeating period.
- **FFT** breaks the signal into its frequency components and reads the pitch off the spectrum.

Each one trades off speed, accuracy, and how well it copes with a noisy or quickly decaying signal.

## How Q-Tune does it

Q-Tune uses a zero-crossing-based approach tuned for guitar and bass. The goal: lock on quickly when you pluck a string, then hold steady instead of flickering, so you can trust what the screen says. The 2.8-inch display shows it in real time, with a few different modes to suit how you like to read "in tune."

The honest version is that the real algorithm has more going on than "count the zero crossings." Pitch detection is complex, and getting it to feel fast and solid on a real pedalboard required many iterations.

## Why it matters when you play

A slow tuner makes you wait between songs. A twitchy one makes you second-guess it. One that locks on fast and sits still lets you tune and get back to playing. That's the whole point. Accuracy matters too: your intonation, your chords, and how you sit in a mix all start from a note being where it should be.

## See it in action

Q-Tune is our take on a fast, accurate chromatic tuner you build yourself. [Take a look](/#buy), or read about [the two kit versions](/blog/solderless-vs-solder-guitar-pedal-kits).
