# STRIDE Threat Model Template

## Application Information

| Field | Value |
|-------|-------|
| Application Name | |
| Version | |
| Date | |
| Author | |
| Reviewers | |

## System Overview

_Describe the system architecture, data flows, trust boundaries, and external dependencies._

## Assets

| Asset | Description | Sensitivity |
|-------|-------------|-------------|
| | | High / Medium / Low |

## Trust Boundaries

| Boundary | From | To | Description |
|----------|------|----|-------------|
| | | | |

---

## Threat Analysis

### S - Spoofing (Identity)

_Can an attacker pretend to be someone or something else?_

| ID | Threat | Attack Vector | Affected Component | Severity | Likelihood | Risk | Mitigation | Status |
|----|--------|---------------|-------------------|----------|------------|------|------------|--------|
| S-1 | | | | Critical/High/Medium/Low | High/Medium/Low | | | Open/Mitigated/Accepted |

### T - Tampering (Data Integrity)

_Can an attacker modify data in transit or at rest?_

| ID | Threat | Attack Vector | Affected Component | Severity | Likelihood | Risk | Mitigation | Status |
|----|--------|---------------|-------------------|----------|------------|------|------------|--------|
| T-1 | | | | Critical/High/Medium/Low | High/Medium/Low | | | Open/Mitigated/Accepted |

### R - Repudiation (Accountability)

_Can an attacker deny performing an action?_

| ID | Threat | Attack Vector | Affected Component | Severity | Likelihood | Risk | Mitigation | Status |
|----|--------|---------------|-------------------|----------|------------|------|------------|--------|
| R-1 | | | | Critical/High/Medium/Low | High/Medium/Low | | | Open/Mitigated/Accepted |

### I - Information Disclosure (Confidentiality)

_Can an attacker access data they shouldn't?_

| ID | Threat | Attack Vector | Affected Component | Severity | Likelihood | Risk | Mitigation | Status |
|----|--------|---------------|-------------------|----------|------------|------|------------|--------|
| I-1 | | | | Critical/High/Medium/Low | High/Medium/Low | | | Open/Mitigated/Accepted |

### D - Denial of Service (Availability)

_Can an attacker disrupt the service?_

| ID | Threat | Attack Vector | Affected Component | Severity | Likelihood | Risk | Mitigation | Status |
|----|--------|---------------|-------------------|----------|------------|------|------------|--------|
| D-1 | | | | Critical/High/Medium/Low | High/Medium/Low | | | Open/Mitigated/Accepted |

### E - Elevation of Privilege (Authorization)

_Can an attacker gain higher access than intended?_

| ID | Threat | Attack Vector | Affected Component | Severity | Likelihood | Risk | Mitigation | Status |
|----|--------|---------------|-------------------|----------|------------|------|------------|--------|
| E-1 | | | | Critical/High/Medium/Low | High/Medium/Low | | | Open/Mitigated/Accepted |

---

## Risk Rating Guide

| Severity | Likelihood | Risk Level | Action Required |
|----------|------------|------------|-----------------|
| Critical | High | Critical | Immediate remediation |
| Critical | Medium | High | Remediate within sprint |
| Critical | Low | Medium | Plan remediation |
| High | High | High | Remediate within sprint |
| High | Medium | Medium | Plan remediation |
| High | Low | Low | Accept or backlog |
| Medium | High | Medium | Plan remediation |
| Medium | Medium | Low | Accept or backlog |
| Medium | Low | Low | Accept with documentation |

## Summary

| Category | Total Threats | Critical | High | Medium | Low | Mitigated |
|----------|--------------|----------|------|--------|-----|-----------|
| Spoofing | | | | | | |
| Tampering | | | | | | |
| Repudiation | | | | | | |
| Info Disclosure | | | | | | |
| Denial of Service | | | | | | |
| Elevation of Privilege | | | | | | |

## Sign-Off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Security Lead | | | |
| Engineering Lead | | | |
| Product Owner | | | |
