---
layouts: page
title: Install
permalink: /install/
---

<head>
  <script type="module" src="https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module"></script>
  <script defer="defer" src="/assets/install/js/main.js"></script>
  <link href="/assets/install/css/main.css" rel="stylesheet">
</head>

Plug the Q-Tune into your computer using a USB cable or, as needed, a USB to serial adapter, the version you wish to use and click on the connect button.

  <div class="container" style="height: 100%;">
    <hr class="my-4">
    <div class="mb-3">
      <esp-web-install-button id="button_web_install" manifest="/assets/install/artifacts/manifest.json">
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