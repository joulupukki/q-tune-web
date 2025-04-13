---
layouts: page
title: Troubleshooting
permalink: /troubleshooting/
---

## Introduction

While you may not be shocked like you might be working on a vacuum tube amp, for example, many of the components in the Q-Tune may be sensitive to electrostatic shocks. When you are probing with a digital multimeter (DMM) or an oscilloscope, be very careful not to short any two points of any component as you will risk damaging one or more components. The ESP32, for example, is extremely sensitive and it can be easily damaged if incorrect voltage is applied.

This document is meant to list possible issues you might encounter and how to potentially go about tracking issue down and fix them. It may not contain everything and if you discover something that’s not included here, please create a [new issue](https://github.com/joulupukki/q-tune/issues/new) to let us know about it.

## One of my relays does not seem to be working

There are two different dual-coil latching relays (DPDT switches) in Q-Tune. Relay #1 is the “Bypass Relay” and it switches the tuner from tuning mode to bypass mode. Relay #2 is the “Bypass Type Relay” and it controls whether your bypass operates in True Bypass or Buffered Bypass.

These relays run on the 9V power supply you provide via the 9V DC jack and consist of two main components:

1. **NE555** Timer ([datasheet](https://www.ti.com/lit/ds/symlink/ne555.pdf?ts=1742524749415&ref_url=https%253A%252F%252Fwww.mouser.com%252F))
2. **TQ2-L2-5V** DPDT Relay ([datasheet](https://api.pim.na.industrial.panasonic.com/file_stream/main/fileversion/4514))

These relays operate at 5V and by the time the supply voltage goes through the NE555 timer and the diodes, capacitors, and resistors, that’s the voltage they will see. They operate when a short pulse is put across their coils.

1. Compare your board with the schematic and make sure you’ve installed the correct components and that their values match. If necessary, remove each component from the board and test it individually with a DMM. Make sure you have all your diodes installed in the right directions.

2. Make sure the ESP32 is sending the full 3.3V.

The ESP32 sends either a constant 3.3V or 0V. The NE555 recognizes the rising or falling edge and sends an electrical pulse. Using a DMM or an oscilloscope, measure the incoming GPIO signal from the ESP32 to measure 3.3V or 0V. Operate the foot switch between bypass or tuning mode to check Relay #1 and switch between true bypass or buffered bypass mode in the menu system to operate Relay #2.

2. Ensure that your NE555 is producing the proper output voltage at Pin 3 when the ESP32 is sending 3.3V. You can disconnect the 22uF capacitor from Pin 3 and replace it with a 470R resistor to GND - when Pin 4 (GPIO) is 3.3V, the voltage at Pin 3 should measure about 1.2V below the supply voltage, or 7.6 - 7.8V. If it is lower than this, you may need to try a different NE555.
