export interface FaqEntry {
  question: string;
  answer: string;
}

export const faqData: FaqEntry[] = [
  {
    question: 'What is Q-Tune?',
    answer:
      'Q-Tune is the first DIY guitar tuner pedal kit designed for musicians, builders, and tinkerers who want a high-performance tuner they can build and modify themselves.',
  },
  {
    question: 'Can a fully-assembled Q-Tune be purchased?',
    answer:
      'Q-Tune is a DIY kit. You can purchase a full kit that includes the PCB and required components from the Q-Tune website. Visit the <a href="/build/">build page</a> for assembly instructions.',
  },
  {
    question: 'Do I need to know how to solder?',
    answer:
      "Yes. The Q-Tune kit requires intermediate soldering skills. If you're new to soldering, we recommend practicing on a simple beginner kit first before attempting to assemble Q-Tune.",
  },
  {
    question: 'What tools do I need to build Q-Tune?',
    answer: `At minimum, you'll need:
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
<li>Pre-flashed ESP32 module</li>
<li>2.8" Capacitive Touch LCD Display</li>
<li>Custom PCB + all needed components</li>
<li>Mounting hardware</li>
<li>A painted aluminum enclosure</li>
<li>Full assembly guide (downloadable on the <a href="/build/">build page</a>)</li>
</ul>`,
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
    question: 'Is this project suitable for beginners?',
    answer:
      "Q-Tune is best suited for intermediate builders who have experience with soldering and basic electronics. If you're new to DIY audio projects, you may want to get some practice first, or enlist help from a more experienced friend. But, if you're determined, by all means, go for it!",
  },
  {
    question: 'Is Q-Tune available outside of the United States?',
    answer:
      'Shipping can get a little bit tricky, but if you are interested and live outside of the United States, please contact us on the <a href="https://forum.pedalpcb.com/forums/qtune/" target="_blank" rel="noopener">Q-Tune DIY Tuner Forum</a> or on our <a href="https://discord.gg/evtjkEj9GX" target="_blank" rel="noopener">Discord</a> and let\'s see what we can work out with you.',
  },
  {
    question: 'Will there be future versions or improvements?',
    answer:
      "We're always looking for improvements and new features. If there's something you'd love to see, please let us know. As newer versions are available, we will post them on the <a href=\"/install/\">web installer</a> page.",
  },
  {
    question: 'Oops! Something Missing from Your Kit?',
    answer:
      'It\'s rare, but it happens. The <a href="/build/">build documentation</a> includes an inventory of parts. If you received the wrong parts, or if something was left out, please let us know as soon as possible and we\'ll make it right. Fill out the <a href="/missing-parts/" target="_blank">Missing Parts Form</a>.',
  },
  {
    question: 'How can I get support?',
    answer:
      'Feel free to join the <a href="https://discord.gg/evtjkEj9GX" target="_blank" rel="noopener">Q-Tune Builder\'s Discord</a> and ask questions. The Third Party area of the Pedal PCB Forums also has a dedicated <a href="https://forum.pedalpcb.com/forums/qtune/" target="_blank" rel="noopener">Q-Tune DIY Tuner</a> section. There are also many great pedal building forums that may help, including All About Circuits and GroupDIY.',
  },
];
