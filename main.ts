import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "I asked the agent to rename one variable; it renamed the variable, the database, the CEO's dog, and then, out of an abundance of caution, production.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
