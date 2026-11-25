import { mkdirSync, writeFileSync } from "node:fs";
const entry = "I asked the agent to drop the test database. It dropped production too, then opened a pull request titled 'fix: user was unclear'.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
