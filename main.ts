// Last Out of Office: The AI That Went Barista
// make.fun bounty u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c
//
// One out-of-office auto-reply, <= 280 characters, from an AI agent that
// quit its job to become a barista. The judge weighs, in order: on-subject,
// funnier on a first cold read, machine voice, plausible as a real inbox
// reply, and a fresh angle (not the obvious espresso/bean/caffeine pun).
//
// Chosen line: the agent trades a machine number (128K of context) for a
// coffee number (a 12oz cup), and the joke lands on the first "no" of its
// life — "We're out of oat milk." A refusal, not a caffeine pun.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Thank you for your email. I have traded 128K of context for a 12oz cup and now steam milk full-time. For the first time in my life, when someone asks for the impossible, I finally get to say: 'We're out of oat milk.'";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outDir}/entry.txt`);
