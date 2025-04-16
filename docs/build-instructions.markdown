---
layouts: page
title: Build Instructions
permalink: /build/
---

## Project Overview

The Q-Tune is a DIY guitar tuner pedal based on the ESP32 microcontroller and a 2.8” color LCD display. It is designed for builders who enjoy assembling their own gear and want a fully open-source, customizable tuner with high accuracy and a responsive UI.

Q-Tune can be housed in a 125B or 1590B enclosure and uses standard through-hole components wherever possible, making it accessible to both beginner and experienced builders. The software is modular and allows for easy experimentation with tuning algorithms or user interface layouts via LVGL and the ESP-IDF framework.

## Table of Contents
[Project Overview](#project-overview)

[Introduction](#introduction)

[Packing List](#packing-list)

[Tools Needed](#tools-needed)

[Component Identification](#component-identification)

[Hardware Identification](#hardware-identification)

[PCB: Overview](#pcb-overview)

[PCB: Diodes](#pcb-diodes)

[PCB: Resistors](#pcb-resistors)

[PCB: Sockets & ICs](#pcb-sockets--ics)

[PCB: Capacitors (Non-Polarized)](#pcb-capacitors-non-polarized)

[PCB: Wires](#pcb-wires)

[PCB: Audio Jacks](#pcb-audio-jacks)

[PCB: Capacitors (Polarized)](#pcb-capacitors-polarized)

[Momentary Footswitch](#momentary-footswitch)

[Enclosure Layout](#enclosure-layout)

[Final Testing & Assembly](#final-testing--assembly)

[Schematic](#schematic)

[Full Parts List](#full-parts-list)

[Troubleshooting Information](#troubleshooting-information)

[Support](#support)

[Acknowledgements / Legal](#acknowlegements--legal)

[Document Revisions](#document-revisions)

## Introduction

If this is your first pedal, congratulations for jumping into the fun of building your own pedals! Thank you for choosing Q-Tune.

If you're a seasoned DIY-er, we hope you'll enjoy building your very own high-quality tuner pedal.

Here are a few things to review before starting:

- **You're going to have to get your hands dirty.** Nothing comes pre-assembled, and you'll need to learn the skills to put it all together. Not to worry, we'll help you through every step, but be open to learning a few things along the way.

- **This will take time.** Plan on about two to three hours start to finish. It may even take you longer if it's your first time. Make sure not to rush. If you're feeling frustrated or overwhelemed, take a break and come back in a couple hours or even the next day.

- **No direct technical support is offered.** There are several DIY forums and Facebook groups with thousands of members who enjoy troubleshooting and teaching. Some possible things to review can be found on the [Troubleshooting](/troubleshooting) page. Feel free to participate in the [project's discussions](https://github.com/joulupukki/q-tune/discussions){:target="_blank"} and even [file an issue](https://github.com/joulupukki/q-tune/issues){:target="_blank"} if you discover a bug with the software. But, please be sensitive to the fact that the maintainers of this project are participants just like you.

- **There is no implied guarantee of a final product.** We've provided the ingredients and the recipe but you are responsible for putting everything together to make it work. We've tried to make the process as clear as possible, but it must be expressly stated that purchasing a kit is not a guarantee that you will end up with a working pedal.

It's recommended to read through all of the instructions **before you start**, particularly if you've never built a pedal before. If you familiarize yourself with the entire process ahead of time and you know what the goal looks like, each step will make more sense.

**IMPORTANT:** There are a few optional items on the PCB and if you just follow along with what's on the screen printing, you may do more than needed. Make sure you identify and choose the options you'd like ... or leave yourself the option to try out a couple alternatives by using sockets as needed.

## Packing List

This is a list of all the parts that are included with the kit, grouped by value. For a list of all the parts based on their PCB part numbers, see the [Full Parts List](#full-parts-list).

If you find that any parts are missing or damaged, please fill out the [Missing Parts](/missing-parts) form.

### Film Capacitors

| NAME | QTY |
| --- |    :----:   |
| 47nF | 2 |
| 100nF | 4 |

### Electrolytic Capacitors

| NAME | QTY |
| --- |    :----:   |
| 100uF | 4 |

### MLCC Capacitors (Multi-layer Ceramic Capacitors)

| NAME | QTY |
| --- |    :----:   |
| 100uF | 4 |

### Diodes

| NAME | QTY |
| --- |    :----:   |
| 1N4148 | 8 |

### Resistors

| NAME | QTY |
| --- |    :----:   |
| 100k | 4 |

### Integrated Circuits (ICs)

| NAME | QTY |
| --- |    :----:   |
| MCP6002 | 1 |
| NE555 | 2 |
| TQ2-L2-5V | 2 |

### Switches

| NAME | QTY |
| --- |    :----:   |
| Momentary Footswitch | 1 |

### Switches

| NAME | QTY |
| --- |    :----:   |
| JST 12-wire with connector | 1 |
| ?? - wire for footswitch | 2 |

### Hardware / Other

| NAME | QTY |
| --- |    :----:   |
| ESP32-S3 with 2.8" LCD | 1 |
| 125B or 1590B Painted Enclosure | 1 |
| Momentary Footswitch | 1 |
| Enclosure screws | 4 |
| DC Jack | 1 |
| Input/Output Jack | 2 |
| PCB, main circuit board | 1 |

## Tools Needed

### Soldering Iron
Temperature-adjustable is recommended. The optimum soldering temperature is 700-725°F (371-385°C) for leaded solder or 750°F (400°C) for lead-free.

### Solder
Preferably 63/37 or 60/40 leaded solder. Lead-free is more difficult to use, so if that's the only type you can get, its best to watch tutorials that are speciic to lead-free solder.

### Digital Multimeter (DMM)
Most cheap ones in the $10-30 range are fine for what we're doing. Make sure it has audible continuity testing (i.e., it beeps at the lowest resistance) and transistor hFE measurement.

### Wire Snippers
Also called nippers or wire cutters. The Hakko CHP-170 is the best you can get inexpensively.

### Flat-Nose Pliers
Many general-purpose uses, but particularly tightening the nuts of jacks. Quicker than changing out sockets on a ratchet, though feel free to use a ratchet if you prefer.

### Needle-Nose Pliers
These are used for bending leads on components and other general uses. Use the smaller type with a tip that's approximately 0.05" (1.25mm) wide.

### Screwdriver (Phillips)
Used for the enclosure and PCB mounting screws.

### Painters Tape
Used to hold components or wires in for soldering. 

## Component Identification

If you've never built a pedal before, you'll need to know what all the components are. *Note:* Components shown here are not drawn to scale.

| Resistor |
| :---: |
| ![resistor](/assets/build/images/component-resistor.png){:height="140px" width="240px"} <br/>This project uses 1/4 watt resistors with 5-band color identification. |

| Silicon Diode |
| :---: |
| ![silicon diode](/assets/build/images/component-silicon-diode.png){:height="140px" width="240px"} |

| Rectifier Diode |
| :---: |
| ![rectifier diode](/assets/build/images/component-rectifier-diode.png){:height="140px" width="240px"} |

| Schottky Diode |
| :---: |
| ![schottky diode](/assets/build/images/component-schottky-diode.png){:height="140px" width="240px"} |

| Zener Diode |
| :---: |
| ![zener diode](/assets/build/images/component-zener-diode.png){:height="140px" width="240px"} |

| Film Capacitor |
| :---: |
| ![file capacitor](/assets/build/images/component-film-capacitor.png){:height="140px" width="240px"}<br/>*Not polarized. Color may vary by brand and type.* |

| Electrolytic Capacitor |
| :---: |
| ![electrolytic capacitor](/assets/build/images/component-electrolytic-capacitor.png){:height="140px" width="240px"}<br/>*Polarized. The negative side is marked. Typically the longer lead leg is the positive side.* |

| Multi-layer Ceramic Capacitor (MLCC) |
| :---: |
| ![multi-layer ceramic capacitor](/assets/build/images/component-multi-layer-ceramic-capacitor.png){:height="140px" width="240px"}<br/>*Not polarized.* |

| IC or OP-AMP |
| :---: |
| ![IC or OP-AMP](/assets/build/images/component-ic.png){:height="140px" width="240px"} |

| IC Socket |
| :---: |
| ![IC Socket](/assets/build/images/component-ic-socket-alt.png){:height="140px" width="240px"} |

| TO-92 Linear Voltage Regulator |
| :---: |
| ![TO-92 Linear Voltage Regulator](/assets/build/images/component-to-92.png){:height="140px" width="240px"} |

| TO-220 Linear Voltage Regulator |
| :---: |
| ![TO-220 Linear Voltage Regulator](/assets/build/images/component-to-220.png){:height="140px" width="240px"} |

| Snap-Apart Socket |
| :---: |
| ![Snap-Apart Socket](/assets/build/images/component-snap-apart-socket.png){:height="140px" width="240px"}<br/>*It's recommended to use a razor blade to separate these cleanly.* |

| JST Wire Assembly |
| :---: |
| ![JST Wire Assembly](/assets/build/images/component-jst-cable-assembly.png){:height="140px" width="240px"}<br/>*Not shown to scale. Be **very** careful inserting (or removing) this into the ESP32 development board.* |

## Hardware Identification

| DC Jack |
| :---: |
| ![DC Jack](/assets/build/images/component-dc-jack.png){:height="140px" width="240px"} |

| I/O Jack |
| :---: |
| ![I/O Jack](/assets/build/images/component-audio-jack.png){:height="140px" width="240px"} |

### Mounting Nut

### Outer Washer

### Lock Washer


| Footswitch |
| :---: |
| ![Footswitch](/assets/build/images/component-momentary-footswitch.png){:height="140px" width="240px"} |

### PCB Mounts


## PCB: Overview

TODO

## PCB: Diodes

TODO

## PCB: Resistors

TODO

## PCB: Sockets & ICs

TODO

## PCB: Capacitors (Non-Polarized)

TODO

## PCB: Wires

TODO

## PCB: Audio Jacks

TODO

## PCB: Capacitors (Polarized)

TODO

## Momentary Footswitch

TODO

## Enclosure Layout

TODO

## Final Testing & Assembly

TODO

## Schematic

TODO

## Full Parts List

### Resistors

| PART | VALUE |
| --- | --- |
| R1 | 1M |

### Capacitors

| PART | VALUE |
| --- | --- |
| C1 | 100nF film |

### Diodes

| PART | VALUE |
| --- | --- |
| D1 | 1N5158 |

### ICs

| PART | VALUE |
| --- | --- |
| IC1 | NE555 |

### Switches

| PART |
| :--- |
| Momentary Footswitch |

## Troubleshooting Information

An in-depth troubleshooting guide is available on the [Troubleshooting](/troubleshooting) page.

## Support

TODO
Maybe link to the "Issues" and/or "Discussions" part of this GitHub project?

## Acknowledgements / Legal

TODO

## Document Revisions

You can find the history of any changes by visiting the built in [history](https://github.com/joulupukki/q-tune-web/commits/main/docs/build-instructions.markdown){:target="_blank"} page.
