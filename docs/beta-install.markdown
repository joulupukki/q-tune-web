---
layouts: page
title: Beta Install
permalink: /beta-install/
sitemap: false
---

<head>
  <meta name="robots" content="noindex, nofollow">
  <script type="module" src="https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module"></script>
  <script defer="defer" src="/assets/install/js/main.js"></script>
  <style>
.btn {
  background-color: rgb(0, 116, 212);
  color: white;
  font-weight: 600; /* Semi-bold */
  font-size: 18px;
  height: 44px;
  padding: 0 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
  user-select: none;
}

.btn:hover {
  background-color: rgb(0, 100, 190);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.btn:active {
  background-color: rgb(0, 85, 170);
  transform: scale(0.98);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}
  </style>
</head>

> **⚠️ Beta Firmware** — This page installs pre-release firmware. It may contain bugs or incomplete features. Use at your own risk.

<h3>Requirements:</h3>

<ul>
 <li>Chrome Web Browser</li>
 <li>USB-C Data Cable</li>
</ul>

<h3>Instructions:</h3>
<ol>
  <li>Plug in Q-Tune to your computer using a USB-C data cable and then click the <strong>Connect to device</strong> button.</li>

  <li>If your computer recognizes the Q-Tune, it will show up as an option starting with <strong>USB JTAG/serial...</strong>.</li>

  <li>Select that option and click the <strong>Connect</strong> button.</li>

  <li>Click the <strong>Install Q-Tune</strong> option.</li>

  <li><strong>DO NOT</strong> select the <strong>Erase device</strong> option unless you want to erase all of your user settings.</li>

  <li>Click the <strong>Next</strong> button and then confirm by clicking the <strong>Install</strong> button.</li>

  <li>Wait for the installer to finish. Once it's done you can unplug the USB-C cable and put Q-Tune to use on your pedalboard!</li>
</ol>

<hr>

  <div class="container" style="height: 100%; display: flex; justify-content: center; margin: 20px 0;">
    <hr class="my-4">
    <div class="mb-3">
      <esp-web-install-button id="button_web_install" manifest="/assets/install/beta/beta-manifest.json">
        <button type="button" class="btn btn-primary" slot="activate">Connect to device</button>
        <span slot="not-allowed">
          <div class="alert alert-dismissible alert-danger">
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            <strong>Not Allowed</strong>
            <div>Flashing is only supported from the local host or from a secure web site.</div>
          </div>
        </span>
        <span slot="notsupported">
          <div class="alert alert-dismissible alert-danger">
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            <strong>Browser Not Supported</strong>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API#browser_compatibility">Make sure
              you are using a compatible browser</a>
          </div>
        </span>
      </esp-web-install-button>
    </div>
  </div>
