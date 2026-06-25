# Exercise: Fix Vulnerabilities with Snyk

## Step 1: Run Snyk Test

```bash
cd vulnerable-app
npm install
snyk test
```

Review the output. You should see vulnerabilities including:
- **Prototype Pollution** in lodash (CVE-2020-8203, CVE-2021-23337)
- **Algorithm Confusion** in jsonwebtoken (CVE-2022-23529)
- **Template Injection** in ejs (CVE-2022-29078)
- **Prototype Pollution** in minimist (CVE-2020-7598)
- **SSRF** in axios (CVE-2020-28168)
- **ReDoS** in moment (various CVEs)

## Step 2: Understand Severity Levels

For each vulnerability, note:
- **Critical/High**: Exploitable remotely, could lead to RCE or data breach
- **Medium**: Requires specific conditions to exploit
- **Low**: Minimal impact or very difficult to exploit

## Step 3: Get Fix Recommendations

```bash
snyk test --json | jq '.vulnerabilities[] | {title, severity, from, fixedIn}'
```

Or use the wizard:
```bash
snyk wizard
```

## Step 4: Apply Fixes

Update `package.json` with patched versions:

| Package      | Vulnerable  | Fixed       |
|-------------|-------------|-------------|
| lodash      | 4.17.15     | 4.17.21+    |
| express     | 4.16.0      | 4.21.0+     |
| jsonwebtoken| 8.3.0       | 9.0.0+      |
| minimist    | 1.2.0       | 1.2.8+      |
| axios       | 0.19.0      | 1.7.0+      |
| moment      | 2.24.0      | 2.30.1+     |
| ejs         | 2.7.4       | 3.1.10+     |
| mongoose    | 5.7.5       | 8.0.0+      |
| helmet      | 3.21.0      | 7.1.0+      |
| body-parser | 1.18.3      | 1.20.3+     |

```bash
npm update
# or for major version bumps:
npm install lodash@latest express@latest jsonwebtoken@latest minimist@latest axios@latest ejs@latest
```

## Step 5: Verify Fixes

```bash
snyk test
```

The output should show significantly fewer (ideally zero) vulnerabilities.

## Step 6: Scan the Container

```bash
snyk container test node:14
```

Note the OS-level vulnerabilities in the EOL base image. Compare with:

```bash
snyk container test node:20-slim
```

## Step 7: Monitor Ongoing

```bash
snyk monitor
```

This creates a project in your Snyk dashboard that alerts you to new vulnerabilities.

## Bonus: Fix the Dockerfile

Replace `node:14` with `node:20-slim` and add a non-root user:

```dockerfile
FROM node:20-slim
RUN groupadd -r appuser && useradd -r -g appuser appuser
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
USER appuser
EXPOSE 3000
CMD ["node", "server.js"]
```
