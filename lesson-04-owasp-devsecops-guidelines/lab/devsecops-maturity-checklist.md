# DevSecOps Maturity Assessment Checklist

## Maturity Levels

| Level | Name | Description |
|-------|------|-------------|
| 1 | Initial | Ad-hoc security, reactive, no formal process |
| 2 | Managed | Basic security practices, some automation |
| 3 | Defined | Standardized processes, security integrated into SDLC |
| 4 | Measured | Metrics-driven, continuous improvement |
| 5 | Optimized | Proactive threat hunting, security as competitive advantage |

---

## Dimension 1: Culture and Organization

| Practice | Level 1 | Level 2 | Level 3 | Level 4 | Level 5 | Current |
|----------|---------|---------|---------|---------|---------|---------|
| Security awareness training | None | Annual training | Role-based training | Continuous education | Security champions program | [ ] |
| Shared responsibility | "Security team's job" | Dev aware of security | Devs write security tests | Devs own security outcomes | Everyone is a security advocate | [ ] |
| Incident response culture | Blame-focused | Post-mortems exist | Blameless post-mortems | Proactive threat hunting | Game days and chaos engineering | [ ] |
| Security in hiring | Not considered | Basic screening | Security interview questions | Security skills valued | Security innovation rewarded | [ ] |

**Current Level: ___**

---

## Dimension 2: Build and Deploy

| Practice | Level 1 | Level 2 | Level 3 | Level 4 | Level 5 | Current |
|----------|---------|---------|---------|---------|---------|---------|
| CI/CD pipeline | Manual builds | Basic CI | Security gates in CI | Automated security decisions | Self-healing pipelines | [ ] |
| Artifact signing | None | Manual signing | Automated signing | Verified at deploy | Full supply chain attestation | [ ] |
| Deployment strategy | Manual deploy | Scripted deploy | Blue/green deploys | Canary with auto-rollback | Progressive delivery with security signals | [ ] |
| Environment parity | Unique snowflakes | Some standardization | IaC for all environments | Immutable infrastructure | Ephemeral environments per PR | [ ] |

**Current Level: ___**

---

## Dimension 3: Code Security

| Practice | Level 1 | Level 2 | Level 3 | Level 4 | Level 5 | Current |
|----------|---------|---------|---------|---------|---------|---------|
| Static analysis (SAST) | None | Ad-hoc scans | CI-integrated SAST | Custom rules, low false positives | AI-augmented code analysis | [ ] |
| Dependency scanning (SCA) | None | Manual audits | Automated SCA in CI | Auto-fix PRs, license compliance | Supply chain verification (SBOM, SLSA) | [ ] |
| Secrets detection | None | Manual review | Pre-commit hooks | CI scanning + rotation alerts | Automated rotation, zero standing secrets | [ ] |
| Code review | No review | Peer review | Security-focused review checklist | Automated security review assist | Formal threat modeling per feature | [ ] |

**Current Level: ___**

---

## Dimension 4: Infrastructure Security

| Practice | Level 1 | Level 2 | Level 3 | Level 4 | Level 5 | Current |
|----------|---------|---------|---------|---------|---------|---------|
| Container security | No containers or unscanned | Base image pinning | Trivy/Grype in CI, minimal images | Runtime scanning, admission control | Distroless, signed, attested images | [ ] |
| IaC security | Manual provisioning | Basic IaC | IaC scanning (tfsec, checkov) | Policy-as-code (OPA/Sentinel) | Drift detection + auto-remediation | [ ] |
| Network security | Flat network | Basic segmentation | Zero-trust networking | Micro-segmentation | Service mesh with mTLS everywhere | [ ] |
| Access management | Shared credentials | Individual accounts | RBAC + MFA | Just-in-time access | Passwordless, hardware-bound identity | [ ] |

**Current Level: ___**

---

## Dimension 5: Monitoring and Detection

| Practice | Level 1 | Level 2 | Level 3 | Level 4 | Level 5 | Current |
|----------|---------|---------|---------|---------|---------|---------|
| Logging | Minimal/no logs | Basic app logging | Centralized logging | Structured logs with security events | ML-powered anomaly detection | [ ] |
| Alerting | None | Error rate alerts | Security-specific alerts | Correlated threat detection | Predictive alerting | [ ] |
| Vulnerability management | No tracking | Spreadsheet tracking | Vulnerability dashboard | SLA-driven remediation | Risk-based prioritization with exploit intel | [ ] |
| Runtime protection | None | WAF | RASP/WAF + rate limiting | Behavioral analysis | Autonomous threat response | [ ] |

**Current Level: ___**

---

## Dimension 6: Incident Response

| Practice | Level 1 | Level 2 | Level 3 | Level 4 | Level 5 | Current |
|----------|---------|---------|---------|---------|---------|---------|
| Incident playbooks | None | Basic runbook | Role-specific playbooks | Automated response playbooks | AI-assisted triage and response | [ ] |
| Detection time (MTTD) | Days/weeks | Hours | Minutes | Near real-time | Pre-breach detection | [ ] |
| Recovery time (MTTR) | Days | Hours | < 1 hour | Minutes | Self-healing systems | [ ] |
| Communication | Ad-hoc | Email chains | Defined escalation paths | Automated stakeholder notifications | Public status + transparent disclosure | [ ] |

**Current Level: ___**

---

## Scoring Summary

| Dimension | Current Level | Target Level | Gap | Priority |
|-----------|--------------|--------------|-----|----------|
| Culture and Organization | | | | |
| Build and Deploy | | | | |
| Code Security | | | | |
| Infrastructure Security | | | | |
| Monitoring and Detection | | | | |
| Incident Response | | | | |

**Overall Maturity Score: ___ / 5**

## Action Items

| Priority | Dimension | Current | Target | Action | Owner | Due Date |
|----------|-----------|---------|--------|--------|-------|----------|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
