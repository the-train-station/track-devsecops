# Lab: Snyk Vulnerability Scanning

Hands-on exercise for identifying and fixing dependency vulnerabilities using Snyk.

## Prerequisites

- Node.js 18+ and npm
- Snyk CLI (`npm install -g snyk`)
- A free Snyk account (`snyk auth`)

## What You'll Learn

- How to scan a project for known vulnerabilities
- How to interpret vulnerability severity and exploitability
- How to apply fixes and verify remediation
- How container base images introduce additional risk

## Getting Started

```bash
cd vulnerable-app
npm install
snyk auth  # if not already authenticated
snyk test
```

## Exercise Flow

Follow the steps in `fix-vulnerabilities.md` to:

1. Run an initial scan and inventory all vulnerabilities
2. Understand severity ratings and attack vectors
3. Apply dependency upgrades to remediate findings
4. Verify the fixes with a clean scan
5. Scan the Docker container for OS-level vulnerabilities
6. Set up continuous monitoring

## Key Takeaways

- Outdated dependencies are a top attack vector (OWASP A06:2021)
- Automated scanning surfaces risks invisible to code review
- Container base images carry their own vulnerability surface
- Continuous monitoring catches newly disclosed CVEs
