---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layouts: home
title: "Q-Tune"
description: "Q-Tune is the first DIY guitar tuner pedal kit featuring a bright 2.8-inch LCD, ultra-accurate pitch detection, buffered or true bypass, and USB-C firmware upgrades. Build a professional-grade tuner pedal with easy soldering and custom enclosure options."
---

## A DIY Tuner Pedal Kit that Doesn't Compromise

<style>
  .enclosure-button-wrapper {
    display: flex;
    justify-content: center;
    margin: 20px 0; /* optional spacing above/below */
  }

  .enclosure-button {
    display: inline-block;
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 6px;
    cursor: pointer;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
    transition: box-shadow 0.2s ease;
  }

  .enclosure-button img {
    height: 150px;  /* adjust this to your liking */
    width: auto;
  }

  .enclosure-button:hover {
    box-shadow: 4px 4px 12px rgba(0,0,0,0.3);
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 12px;
    max-width: 90%;
    max-height: 90%;
    overflow-y: auto;
    text-align: center;
  }

  .modal-content img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  .modal-close {
    margin-top: 1rem;
    background-color: #444;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  .modal-close:hover {
    background-color: #222;
  }
</style>

<script async
  src="https://js.stripe.com/v3/buy-button.js">
</script>

<div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: flex-start;">

  <div style="flex: 0 0 400px;">

    <img src="/assets/images/q-tune-hero.jpg" alt="Q-Tune DIY guitar tuner pedal kit" style="max-width: 100%; height: auto; border-radius: 8px;">

    <div style="text-align: center;">
      The kits include all components needed to build a Q-Tune tuner pedal. Pre-order purchases are paid up-front. The kit may take up to 45 business days after purchase to receive.
    </div>

    <!-- Trigger Button -->
    <div class="enclosure-button-wrapper">
      <div id="enclosureButton" class="enclosure-button">
        <img src="/assets/images/1590b-vs-125b-button.jpg" alt="Compare 1590B and 125B Enclosure Sizes" />
      </div>
    </div>
    <div style="display: flex; justify-content: center; margin: 20px 0;"><strong>No soldering required inside either enclosure.</strong></div>

    <!-- Modal -->
    <div id="enclosureModal" class="modal-overlay">
      <div class="modal-content">
        <img src="/assets/images/q-tune-1590b-vs-125b.jpg" alt="1590B vs 125B" />
        <p><strong>1590B:</strong> More compact. Fits easily on tight pedalboards.</p>
        <p><strong>125B:</strong> Larger. Could fit in better with your existing pedals.</p>
        <button id="modalCloseBtn" class="modal-close">Close</button>
      </div>
    </div>

  </div>

  <div style="flex: 1; min-width: 300px;">

<!-- 1590B Begin -->
<div class="buy-button-container">
  <div style="font-size: 1.2em;"><strong>1590B</strong> Kit</div>
  <div style="margin-bottom: 10px; font-weight: bold;">AVAILABLE NOW &amp;<br/>READY TO SHIP</div>
  <div style="font-size: 2em; font-weight: bold; margin: 0.2em 0;">$149</div>
  <div style="margin-bottom: 10px;">+ Shipping</div>

  <!-- Primary Button -->
  <button class="preorder-button"
    data-url-us="https://buy.stripe.com/8x2cN5eCV8Nzf6ndTe8og01"
    data-url-ca="https://buy.stripe.com/dRm7sL7ate7Te2jg1m8og06"
  >
    Buy 1590B
  </button>
  <div style="margin-bottom: 10px;">Low Stock</div>
</div>
<!-- 1590B End -->

<!-- 125B Begin -->
<div class="buy-button-container">
  <div style="font-size: 1.2em;"><strong>125B</strong> Pre-Order Kit</div>
  <div style="font-size: 2em; font-weight: bold; margin: 0.2em 0;">$149</div>
  <div style="margin-bottom: 10px;">+ Shipping</div>

  <!-- Primary Button -->
  <button class="preorder-button"
    data-url-us="https://buy.stripe.com/6oUeVd52l9RD6zReXi8og00"
    data-url-ca="https://buy.stripe.com/7sY00jcuNe7T9M37uQ8og05"
  >
    Pre-Order 125B
  </button>
  <div style="margin-bottom: 10px;">More arriving early Aug 2025.</div>
</div>
<!-- 125B End -->

<!-- NO Enclosure Begin -->
<div class="buy-button-container">
  <div style="font-size: 1.2em;"><strong>NO Enclosure</strong> Kit</div>
  <div style="margin-bottom: 10px; font-weight: bold;">AVAILABLE NOW &amp;<br/>READY TO SHIP</div>
  <div style="font-size: 2em; font-weight: bold; margin: 0.2em 0;">$137</div>
  <div style="margin-bottom: 10px;">+ Shipping</div>

  <!-- Primary Button -->
  <button class="preorder-button"
    data-url-us="https://buy.stripe.com/fZufZhamF3tf0bt5mI8og02"
    data-url-ca="https://buy.stripe.com/00w9AT0M5fbX9M32aw8og07"
  >
    Buy w/o Enclosure
  </button>

  <p>
  <br/><strong>Tayda Drill Templates:</strong><br/>

  <a href="https://drill.taydakits.com/box-designs/new?public_key=bWxYL0R0T0dBRHBmZkZOSGR3Yk40UT09Cg==" target="_blank">1590B</a>,

  <a href="https://drill.taydakits.com/box-designs/new?public_key=SmRhZzVaSm8vSlFtK3M5anBxRktQdz09Cg==" target="_blank">125B</a>

  </p>
  <p>
  <strong>Tayda UV PDF Templates:</strong><br/>
  <a href="/assets/uv-templates/Q-Tune-1590B-v4.8curves.pdf" target="_blank">1590B</a>,

  <a href="/assets/uv-templates/Q-Tune-125B-v4.8curves.pdf" target="_blank">125B</a>

  </p>
  
</div>
<!-- NO Enclosure End -->

<!-- Supporting Modal Code -->

<script>
document.querySelectorAll('.preorder-button').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#0054b4';
  });
  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#0074d4';
  });
});

// Wrap in DOMContentLoaded to ensure elements exist
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById('enclosureButton');
  const modal = document.getElementById('enclosureModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Optional: close on outside click
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

</script>

<!-- Modal -->
<div id="region-modal" style="
  display: none; 
  position: fixed; 
  top: 0; left: 0; 
  inset: 0;
  background: rgba(0,0,0,0.5); 
  justify-content: center; 
  align-items: center;
  padding: 1em;
  box-sizing: border-box;
  z-index: 9999;
">
  <div style="
    background: white; 
    padding: 1.5em; 
    border-radius: 10px; 
    text-align: center;
    width: 90vw;
    max-width: 320px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
  ">
    <p style="margin-bottom: 1.2em; font-size: 1.1em;">Select your shipping region:</p>
    
    <div style="display: flex; flex-direction: column; gap: 0.8em;">
      <button id="btn-us" style="
        font-size: 1em;
        padding: 0.75em;
        border-radius: 6px;
        border: none;
        background-color: rgb(53, 53, 53);
        color: white;
        font-weight: 600;
        cursor: pointer;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
      ">
        🇺🇸 United States
      </button>

      <button id="btn-ca" style="
        font-size: 1em;
        padding: 0.75em;
        border-radius: 6px;
        border: none;
        background-color: rgb(53, 53, 53);
        color: white;
        font-weight: 600;
        cursor: pointer;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
      ">
        🇨🇦 Canada
      </button>

      <button onclick="closeModal()" style="
        font-size: 0.95em;
        padding: 0.65em;
        border-radius: 6px;
        background-color: #e0e0e0;
        border: none;
        cursor: pointer;
        color: #333;
        font-weight: 500;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
      ">
        Cancel
      </button>
    </div>
  </div>
</div>


<script>
  // Keep track of which button was clicked
  let currentButton = null;

  // Get modal and region buttons
  const modal = document.getElementById('region-modal');
  const btnUS = document.getElementById('btn-us');
  const btnCA = document.getElementById('btn-ca');

  // Add hover effect to all preorder buttons and click handler
  document.querySelectorAll('.preorder-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#0054b4';
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '#0074d4';
    });

    button.addEventListener('click', () => {
      currentButton = button;  // Save reference to clicked button
      modal.style.display = 'flex';
    });
  });

  // Close modal function
  function closeModal() {
    modal.style.display = 'none';
  }

  // Open Stripe link based on region for the currently clicked button
  function openStripeLink(region) {
    if (!currentButton) {
      alert('No button selected.');
      closeModal();
      return;
    }

    const urlKey = region === 'us' ? 'data-url-us' : 'data-url-ca';
    const url = currentButton.getAttribute(urlKey);

    closeModal();

    if (url) {
      window.open(url, '_blank');
    } else {
      alert('Invalid region selected or URL not available.');
    }
  }

  // Attach openStripeLink to buttons in modal
  btnUS.addEventListener('click', () => openStripeLink('us'));
  btnCA.addEventListener('click', () => openStripeLink('ca'));

  // Be able to close the modal with the ESC key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });  
</script>

    
  </div>

</div>

<br/>

<div class="embed-container">
  <iframe
    src="https://www.youtube.com/embed/gKlhl48I9eU"
    allowfullscreen>
  </iframe>
</div>

<br/>

<div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: flex-start;">

  <div style="flex: 1; min-width: 300px;">
    <p>Q-Tune™ Chromatic Instrument Tuner is the <strong>first of its kind</strong> in the <strong>DIY</strong> pedal world — a <strong>high-precision</strong> tuner with a full <strong>2.8&quot; LCD</strong>, offered as a <strong>solder-it-yourself kit</strong> in a rugged stompbox enclosure.</p>

    <p>At its core, Q-Tune uses an advanced pitch detection algorithm to lock onto your note with incredible speed and stability. The dynamic display gives you real-time visual feedback in a way that’s clear, responsive, and easy to read on dark stages or bright practice rooms.</p>

    <p>Build it yourself. Gig with confidence. Pro-level precision with DIY-level satisfaction.</p>
  </div>

</div>

<div class="glider-contain">
  <button class="glider-prev">«</button>
  <div class="glider">
    <div><img src="/assets/images/11-q-tune-product-shot.jpg"></div>
    <div><img src="/assets/images/12-q-tune-product-shot.jpg"></div>
    <div><img src="/assets/images/01-q-tune-product-shot.jpg"></div>
    <div><img src="/assets/images/02-q-tune-product-shot.jpg"></div>
    <div><img src="/assets/images/03-q-tune-product-shot.jpg"></div>
    <div><img src="/assets/images/04-q-tune-product-shot.jpg"></div>
    <div><img src="/assets/images/05-q-tune-product-shot.jpg"></div>
    <div><img src="/assets/images/06-q-tune-product-shot.jpg"></div>
    <div><img src="/assets/images/07-q-tune-product-shot.jpg"></div>
    <div><img src="/assets/images/08-q-tune-product-shot.jpg"></div>
    <div><img src="/assets/images/09-q-tune-product-shot.jpg"></div>
    <div><img src="/assets/images/10-q-tune-product-shot.jpg"></div>
  </div>
  <button class="glider-next">»</button>
  <div class="dots"></div>
</div>

<hr/>

## ✅ Why Q-tune Is Different

- **🔬 Ultra-Accurate Tuning Engine**<br/>Tracks pitch with high precision.

- **📺 Big, Bright 2.8" LCD Display**<br/>Visible in the dark, crisp on stage, easy on the eyes.

- **👆 Touch & Tune**<br/>Navigate settings effortlessly with a responsive touchscreen—no extra buttons, no hassle.

- **🎚️ Buffered Bypass Option**<br/>Clean, transparent signal when engaged or bypassed. Especially handy at the beginning of your pedalboard chain or when driving a long cable to your amp. Or, use the tuner in true bypass, your choice!

- **🖥️ Multiple Tuning Display Styles**<br/>Choose between several visual layouts – meter, strobe-inspired, big letter display, and more.<br/>_(All styles support full-range chromatic tuning.)_

- **🎧 Monitoring Mode**<br/>Watch pitch in real-time while playing – ideal for intonation and practice (using buffered bypass).

- **📐 Top-Mounted Jacks**<br/>Both audio and DC jacks are located on the top edge—saving precious pedalboard space and keeping your rig tidy.

- **🔌 USB-C Firmware Upgrades**<br/>Future-proof your build - update firmware with new feaures or improvements via USB-C using the [web installer](/install).

- **🧰 Real DIY Experience**<br/>No code to write, no guesswork – pro-quality parts and PCB, ready to solder.

- **📏 Two Footprint Options**<br/>Choose the classic **125B** or tight-packed **1590B** size (select at checkout).

- **🛠️ First of Its Kind**<br/>Q-Tune is the first DIY pedal kit to offer **a full-color display, studio-grade accuracy**, and a **rugged enclosure** – all as a legit built-it-yourself project.

<hr/>

## 🔧 What You Get

- Pre-flashed ESP32 module

- 2.8” TFT LCD display

- Custom PCB + all components

- Aluminum enclosure (125B or 1590B)

- Full assembly guide (PDF)

<hr/>

## 💬 Join the Builder Crew

Share your build, ask questions, and see what others are creating. Tag your builds with **#qtunepedal** on your social feeds! Follow along at [@qtunepedals](https://www.instagram.com/qtunepedal){:target="_blank"}.

We'd love to have you join the [Q-Tune Builder's Discord](https://discord.gg/evtjkEj9GX){:target="_blank"}. The Third Party area of the Pedal PCB Forums also has a dedicated [Q-Tune DIY Tuner](https://forum.pedalpcb.com/forums/qtune/){:target="_blank"} section.

<hr/>

<div style="display: flex; justify-content: center;">
<script async data-uid="78153b5199" src="https://q-tune.kit.com/78153b5199/index.js"></script>
</div>