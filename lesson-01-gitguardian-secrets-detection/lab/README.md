# Lab: GitGuardian Secrets Detection

Hands-on exercise for detecting hardcoded secrets using GitGuardian's `ggshield`.

## Prerequisites

- Python 3.8+
- A free GitGuardian account (https://dashboard.gitguardian.com)
- `GITGUARDIAN_API_KEY` environment variable set

## Setup

```bash
make install
make setup-hooks
```

## Exercises

### 1. Scan for secrets

Run `make scan` against the sample-repo directory. Observe how ggshield identifies different secret types (API keys, database URLs, private keys).

### 2. Understand the output

For each finding, note:
- The secret type detected
- The file and line number
- The severity level

### 3. Test the pre-commit hook

```bash
git add sample-repo/
git commit -m "test commit"
```

The commit should be blocked by the pre-commit hook.

### 4. Fix the issues

Move secrets to environment variables using `.env.example` as a guide. Re-run the scan to verify a clean result.

## Key Takeaways

- Secrets in source code are a critical vulnerability
- Automated scanning catches what code review misses
- Pre-commit hooks prevent secrets from ever reaching the repository
