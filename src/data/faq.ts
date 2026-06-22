export interface FaqEntry {
  question: string;
  answer: string;
}

export const faqData: FaqEntry[] = [
  {
    question: 'What is Q-Tune?',
    answer:
      'Q-Tune is the first DIY guitar tuner pedal kit designed for musicians, builders, and tinkerers who want a high-performance tuner they can build themselves. It has a bright 2.8" touchscreen, studio-grade accuracy, and firmware that keeps improving over USB-C.',
  },
  {
    question: 'Do I need to know how to solder?',
    answer:
      'No. The standard <strong>Q-Tune</strong> kit requires no soldering at all. The circuit board comes pre-assembled, and the kit goes together with simple hand tools in about 15–30 minutes. If you <em>want</em> the soldering experience, the <strong>Q-Tune Solder Kit (Through-Hole)</strong> is also available and requires intermediate soldering skills.',
  },
  {
    question: "What's the difference between the Q-Tune kit and the Solder Kit?",
    answer:
      'Both kits give you the same tuner: the same display, features, and firmware. The standard <strong>Q-Tune</strong> kit has the circuit board pre-assembled, so it snaps together with hand tools in 15–30 minutes. No soldering or electronics experience needed. The <strong>Q-Tune Solder Kit (Through-Hole)</strong> ships with loose components you solder onto the board yourself, for builders who want the full hands-on experience. The two differ slightly in how they handle bypass and headroom; we wrote up the details on the <a href="/blog/solderless-vs-solder-guitar-pedal-kits">blog</a>.',
  },
  {
    question: 'When will my pre-order ship?',
    answer:
      'Pre-orders for the Q-Tune kit are expected to ship in June or July 2026. We\'ll email you with tracking as soon as your order is on its way. If we can\'t ship within that window, we\'ll reach out with an update, and you can request a full refund if you\'d rather not wait. See our <a href="/terms/">Shipping &amp; Returns</a> page for details.',
  },
  {
    question: 'Does Q-Tune come fully assembled?',
    answer:
      'Q-Tune ships as a kit you put together yourself, which is part of the fun. But the standard kit needs no soldering and most builders finish in 15–30 minutes with the included hand tools. Follow the <a href="/assembly/">assembly guide</a> and you\'ll be tuning in no time.',
  },
  {
    question: 'What tools do I need to build Q-Tune?',
    answer: `The standard <strong>Q-Tune</strong> kit includes the two hex keys you need. You'll also want a screwdriver and a wrench from your own toolbox. The <a href="/assembly/">assembly guide</a> lists everything.
<br /><br />
The <strong>Q-Tune Solder Kit (Through-Hole)</strong> additionally requires:
<ul>
<li>A soldering iron and solder</li>
<li>Wire cutters/strippers</li>
<li>A small Phillips screwdriver</li>
<li>A multimeter</li>
<li>A headworn magnifier (optional but extremely helpful)</li>
</ul>`,
  },
  {
    question: "What's included in the kit?",
    answer: `<ul>
<li>Pre-assembled, pre-flashed Q-Tune board</li>
<li>2.8" Capacitive Touch LCD Display</li>
<li>Connectorized footswitch and cables (no soldering)</li>
<li>All mounting hardware and hex keys</li>
<li>A painted 1590B aluminum enclosure</li>
<li>Step-by-step assembly guide (downloadable on the <a href="/assembly/">assembly page</a>)</li>
</ul>`,
  },
  {
    question: 'Is this project suitable for beginners?',
    answer:
      'Yes. The standard <strong>Q-Tune</strong> kit is designed so anyone can build it. No soldering or electronics experience required. The <strong>Q-Tune Solder Kit (Through-Hole)</strong> is best suited for intermediate builders comfortable with soldering and basic electronics.',
  },
  {
    question: 'Can I update the software?',
    answer:
      'When new versions are available, you can upgrade your Q-Tune pedal with the <a href="/install/">web installer</a> using a standard USB-C data cable.',
  },
  {
    question: 'What tuning algorithm does it use?',
    answer:
      "Q-Tune uses an advanced zero-crossing detection algorithm (it's actually more complicated than that). It's designed for fast and accurate pitch detection, optimized for stringed instruments like guitar and bass.",
  },
  {
    question: 'Can it tune instruments other than guitar?',
    answer:
      "Yes, though it's optimized for standard guitar and bass tuning ranges.",
  },
  {
    question: 'Is there a warranty?',
    answer:
      'Since Q-Tune is a DIY kit, we cannot offer a formal warranty. However, please join the <a href="https://discord.gg/evtjkEj9GX" target="_blank" rel="noopener">Q-Tune Builder\'s Discord</a> and we or other builders may be able to help you troubleshoot.',
  },
  {
    question: 'Is Q-Tune available outside of the United States?',
    answer:
      'Shipping can get a little bit tricky, but if you are interested and live outside of the United States, please <a href="/contact/">contact us</a> and let\'s see what we can work out with you.',
  },
  {
    question: 'Will there be future versions or improvements?',
    answer:
      "We're always looking for improvements and new features. If there's something you'd love to see, please <a href=\"/contact/\">let us know</a>. As newer versions are available, we will post them on the <a href=\"/install/\">web installer</a> page.",
  },
  {
    question: 'Oops! Something Missing from Your Kit?',
    answer:
      'It\'s rare, but it happens. The assembly guide includes an inventory of parts. If you received the wrong parts, or if something was left out, please let us know as soon as possible and we\'ll make it right. Fill out the <a href="/missing-parts/" target="_blank">Missing Parts Form</a>.',
  },
  {
    question: 'How can I get support?',
    answer:
      'Feel free to join the <a href="https://discord.gg/evtjkEj9GX" target="_blank" rel="noopener">Q-Tune Builder\'s Discord</a> and ask questions. The Third Party area of the Pedal PCB Forums also has a dedicated <a href="https://forum.pedalpcb.com/forums/qtune/" target="_blank" rel="noopener">Q-Tune DIY Tuner</a> section. There are also many great pedal building forums that may help, including All About Circuits and GroupDIY.',
  },
];
