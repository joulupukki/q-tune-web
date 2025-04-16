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

| PCB Mount |
| :---: |
| ![PCB Mount](/assets/build/images/component-pcb-mount.png){:height="140px" width="240px"} |

### Mounting Nut

### Outer Washer

### Lock Washer


| Footswitch |
| :---: |
| ![Footswitch](/assets/build/images/component-momentary-footswitch.png){:height="140px" width="240px"} |


## PCB: Overview

Time to start building!

![PCB Top](/assets/build/images/pcb-top-q-tune-v4.5.png)

![PCB Bottom](/assets/build/images/pcb-bottom-q-tune-v4.5.png)

The general principle for PCB population is that you work in stages from shortest components (i.e., lowest profile) to tallest so that when the PCB is upside-down, everything is making contact with the work surface and held in place.

So, you will start by populating the small diodes (the lowest-profile components), followed by the resistors & schottky diodes, sockets, MLCCs, film capacitors, and finally the electrolytic capacitors.

![Build Order](/assets/build/images/pcb-build-order.png)

## PCB: Diodes

Using the parts list above, populate the smaller diodes by pushing them through the holes and bending the leads outward at an angle to hold them in place. **Diodes are polarized**, so make sure to identify the polarity band (which indicates the "cathode", or negative side) and match the band to the footprint on the PCB.

Flip the board over, solder all the diodes, then cut the leads. If this is your first time soldering, watch tutorial videos on YouTube and make sure you get it down before you begin. You don't want to practice or experiment on this board!

## PCB: Resistors

Next, you'll populate the resistors. Resistors are not polarized so they will work in any direction. Some builders like to line them up in the same uniform direction with the tolerance band on the same side, but that's a personal preference for you to decide.

Don't try to do all of the resistors at once. You'll want to stop periodically, flip the board over, solder everything, then cut the leads using the wire snippers to make room for more. Generally you don't want to do more than 15 to 20 resistors at a time or the bottom of the board will get too crowded.

## PCB: Sockets & ICs

Next up are the sockets. You can't bend the leads of the sockets like you can with the other components so they won't stay in on their own until they are soldered. Pay attention to the markings on the PCB noting which side is pin #1. Orient the socket with the half-circle notch on the side of pin #1.

Again, it's much easier to do all of these at once with gravity holding them in place for you. You'll want to do them before you do any of the taller components.

### Installing the ICs

Don't insert the ICs into the sockets just yet. We will do this in a later step, after the entire board has been populated with the tallest components (the polarized capacitors). This information is just listed here for reference.

The legs of each IC are bent outward slightly during manufacturing so they'll need to be bent back inward before they can be inserted into the sockets.

It's easiest to do this by laying the IC legs against the table and bending the body itself so all four legs on the side are straightened out at once. Then, flip it over and do the other side. Take your time and be careful not to bend them too far. You can use pliers to bend them straight if you go too far, but it's best to bend them right the first time.

ICs may have two different orientation marks: either a dot in the upper-left or a half-circle notch in the middle of the top side. Some ICs have both marks. This shows which way the IC shoul dbe rotated when inserting into a socket (the socket also has a half-circle notch).

## PCB: Capacitors (Non-Polarized)

After the sockets come the MLCC and the box film capacitors. These are several different heights, but there aren't as many, so you can do as many as you like at the same time, matching heights. Bend the leads at an angle to hold them in place before soldering.

MLCCs and box capacitors are not polarized so they will work in any direction. However, to keep things neat, it's recommomended to put them all facing the same way and, if possible, with the value markings left legible after building.

**Note:** Depending on the type, the box film capacitors may have their value printed on either the top or the side. Usually the red ones have it printed on the side while the blue, yellow, or gray ones have it on the top.

## PCB: Wires

This kit includes a JST 12-pin cable assembly that connects between the PCB and the ESP32 development board. All of the wires are not used for communication between the two devices but for better organization pads are provided for each wire.

### Preparation

Measure out how long you'd like the JST cable to be and cut the wires all in a straight line. Cut the wires so they are short enough to not be a nuicance but long enough so that with the PCB and ESP32 dev board disconnected, you can lay them next to each other "unfolded" like a book.

After cutting the wires, carefully strip each wire with about 1/8 of the wire exposed. Twist and tin each wire before proceeding.

### Installing the Wires

Placing each wire into the pads and soldering can be a bit tricky. To make the installation easier, use some painter's tape and tape the wires down to your work surface to force the wires to be next to each other and neatly organized. Lift the taped wires from your work surface and carefully align each one in order into the pad holes. Use the holes closest to the inside of the board paying close attention to orient the colors with the corresponding pins on the ESP32 development board. The outer pads are for convenience in troubleshooting.

You might find it easier to do half of them first and then the other half second. After you've inserted the wires into the PCB use some additional tape to hold the wires in place while you flip the board over and solder them. Be sure to trim the wires after soldering so that none of them short out with each other.

## PCB: Audio and DC Jacks

You're getting close! Get the two input/output jacks. To get the best alignment of the board and the LCD screen, use the pedal enclosure for correct placement of the audio jacks. Use the washers and screws and install the two audio jacks into the holes. Then, place the PCB directly on top of the jacks and carefully solder them getting them straight as possible.

Align the DC jack in between the two audio jacks and solder it as close to straight as possible. If you need help keeping it aligned you can use some painter's tape to hold it in place before you solder it.

## PCB: Capacitors (Polarized)

Populate the electrolytic capacitors. These are the tallest components so we save them for the last. They are polarized (i.e., they will only work in one direction) so pay particular attention that you install them correctly. The lighter vertical mark indicates the negative side. The longer leg is positive and fits in the square pad.

## PCB: Board Mounts

The two plastic board mounts need to be prepared before using them. The mounting holes are not threaded. To cut new threads, use the provided hex wrench and the larger screws. Install the screws by turning them clockwise into the holes as shown.

Now remove the screws and attach the mounts to the board as shown below.

## Momentary Footswitch

Prepare the two short wires provided for the momentary footswitch. Solder one to each leg of the momentary footswitch and the other sides to the PCB into the **MOM+** and **MOM-** pads.

Check the vertical placement of the switch in the enclosure and adjust the lower nut to end up with the height you prefer. A popular preference is to have the top of the shaft threads fully covered with the outside nut. This gives a nice and finished look.

## Diagnostic Power Up

We've intentionally left out the ICs and the relays and not connected the ESP32 LCD. It's time to do some basic checks with your multimeter.

Connect 9V DC power (center pin negative) to the DC Jack and turn power on to the board.

With your ground probe connected to the GND of X1 (or any easily-accessible ground point), use the positive probe to check the following:

1. X1-5V: 5V

2. IC1, Pin 8: 5V

3. IC2, Pin 8: 5V

4. IC3 and IC4, Pin 8: 9V

**Disconnect the power from your PCB** for the next tests.

Switch your multimeter to continuity mode and if possible, enable the alarm/beep so that when both probes are connected, you hear a noise. For these tests we want to make sure there aren't shorts (i.e., hearing a beep between these test points is bad).

1. Check neighboring pads on the X1 connector area. You shouldn't have continuity between any of the pads. If you do, double-check your work, fix your soldering job of the wires, and re-test.

2. Check that **MOM+** and **MOM-** aren't shorted together. With your propes connected to those pads, you can also press the footswitch and you should hear a sound from your multimeter.

3. Feel free to check other connections as you see fit using the schematic as a guide.

If these tests all pass and you're seeing the proper voltages and connectivity, you're ready to move on.

## Attaching the LCD

Way to go! Your PCB is finally populated and ready to join forces with the ESP32 development board.

### Connect the JST Wire Assembly

**IMPORTANT:** The pins inside the JST header on the LCD screen can be damaged easily. Take your time to line up the JST wire connector and the socket on the back side of the LCD. Once it's aligned perfectly carefully press uniformly on both outer sides of the connector so that you push it straight into the connector. If something doesn't feel aligned, do not force it as you may break one of the pins.

### Attach the LCD Screen

Using the provided spacers, 2.5mm screws, and 2.5 hex wrench, screw the PCB to the under side of the LCD panel as shown.

## Enclosure Installation

You're so close now, but take your time on this step! The LCD screen and cover lens are not indestructable. **DO NOT FORCE** the LCD into the enclosure cutout at any point as you may risk chipping, cracking, or otherwise damaging the screen.

Carefully slide the assembly into the enclosure, pushing the audio jacks through the holes in the enclosure. The audio jack holes are intentionally oversized to help you align the LCD screen in the top cutout.

With the assembly pushed as far as it goes take your time to line it up and move the LCD into place into the enclosure. As long as you've followed the previous step of installeing the audio jacks this next step should be a breeze. However, if you find that the LCD is crooked or otherwise not aligning up with the enclosure cutout, you may need to adjust your soldering of the audio jacks (which will require disassembly of the screws).

## ICs and Relay Installation

With the board and screen all in place, you're ready to install the ICs! Pay attention to Pin #1 and carefully line up the pins with the sockets. Make sure you take your time so you don't bend any of the pins and damage them. After they are aligned, carefully press them all the way down into the socket.

Install the two relays last and again, make sure the pins are lined up before pressing them down into the sockets.

## Final Testing & Assembly

Woohoo! You've made it and are ready to power on your tuner for the first time. Before assembling the lid onto the enclosure let's make sure everything is working.

Connect a guitar cable to the input and output with the output running to an amplifier. Connect a 9V power source (center negative) to the DK jack.

### Test the Tuning

The tuner should turn on and your tuner should be muted and in tuning mode. You can adjust the settings later, but pluck a string on your instrument and make sure the meedle of the tuner is picking it up.

### Test the Byass Relay

So far so good?

Press the footswitch to go into bypass mode and you should hear a good clean signal into your amplifier. This test confirms your bypass relay switch is properly working.

### Test the Bypass Mode Relay

Now let's test the buffered bypass mode relay. Press and hold the footswitch to enter the user settings of the tuner. Press and hold the footswitch again with the focus on the **Tuner** button to enter the main tuner settings.

Advance to the **Bypass Mode** button by single pressing the footswitch button (double-press will change the focus to the previous button/option). Press and hold the footswitch to enter the **Bypass Mode** sreen. Your tuner should automatically unmute when you enter this screen.

By default, your tuner is shipped to be in **True Bypass** mode. To switch to **Buffered Bypass** mode, press the footswitch to advance to the **Buffered Bypass** mode and then press and hold the footswitch to select it. After switching to **Buffered Bypass** mode, you should still hear audio from your instrument. It may sound a little bit different depending on how many pedals you have plugged in after your tuner or how long your cable to and from the pedal is. Hearing sound confirms that your buffer type relay is working!

Move to the **Back** button by single pressing the footswitch. Back out of user settings by long pressing the footswitch with the focus on the **Back** buttons and finally the **Exit** button.

### CONGRATULATIONS!

You've successfully built your very own instrument tuner pedal! Explore the settings and make it work just like you want. For an in-depth explanation of the user settings, visit the [User Manual](/user-manual).

Thank you for choosing Q-Tune! We hope you'll find years of enjoyment and stable tuning. We'd love to hear from you and your experience building the pedal. Tag us in your social posts on YouTube, Instagram, or whatever your preferred platform is.

## Schematic

![Schematic](/assets/build/images/schematic-q-tune-v4.5.png)

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
