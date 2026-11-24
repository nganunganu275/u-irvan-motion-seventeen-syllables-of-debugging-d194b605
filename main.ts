import { mkdirSync, writeFileSync } from "node:fs";

// One haiku about debugging, 5-7-5 (17 syllables):
//   Four long hours staring        (5)
//   at the same ten lines of code  (7)
//   It was a typo                  (5)
const HAIKU =
  "Four long hours staring\n" +
  "at the same ten lines of code\n" +
  "It was a typo\n";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, HAIKU, "utf8");
