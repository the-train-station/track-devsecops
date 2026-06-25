# STRIDE Threat Model: ShopFast E-Commerce Platform

## Application Information

| Field | Value |
|-------|-------|
| Application Name | ShopFast E-Commerce Platform |
| Version | 2.1.0 |
| Date | 2026-06-24 |
| Author | Security Engineering Team |
| Reviewers | Platform Lead, SRE Lead, Product Security |

## System Overview

ShopFast is a multi-tenant e-commerce platform consisting of:
- **Frontend**: React SPA served via CDN
- **API Gateway**: Kong gateway handling auth, rate limiting
- **Services**: Order Service, Payment Service, Inventory Service, User Service (Node.js/Python)
- **Data Stores**: PostgreSQL (users, orders), Redis (sessions, cache), S3 (product images)
- **Third-party**: Stripe (payments), SendGrid (email), Auth0 (identity)

## Assets

| Asset | Description | Sensitivity |
|-------|-------------|-------------|
| Customer PII | Names, emails, addresses, phone numbers | High |
| Payment data | Credit card tokens (Stripe handles raw PAN) | High |
| Order history | Purchase records, pricing, shipping | Medium |
| Session tokens | JWT tokens for authenticated sessions | High |
| Admin credentials | Platform operator access | High |
| Product catalog | Pricing, inventory levels | Medium |
| API keys | Third-party service credentials | High |

## Trust Boundaries

| Boundary | From | To | Description |
|----------|------|----|-------------|
| TB-1 | Internet | CDN/WAF | Public internet to edge |
| TB-2 | CDN | API Gateway | Edge to internal gateway |
| TB-3 | API Gateway | Microservices | Gateway to service mesh |
| TB-4 | Services | Database | Application to data layer |
| TB-5 | Services | Third-party APIs | Internal to external services |

---

## Threat Analysis

### S - Spoofing (Identity)

| ID | Threat | Attack Vector | Affected Component | Severity | Likelihood | Risk | Mitigation | Status |
|----|--------|---------------|-------------------|----------|------------|------|------------|--------|
| S-1 | Account takeover via credential stuffing | Automated login attempts with breached credentials | User Service / Auth0 | Critical | High | Critical | Rate limiting, MFA enforcement, breached password detection | Mitigated |
| S-2 | JWT token forgery | Weak signing key or algorithm confusion | API Gateway | High | Medium | High | RS256 with key rotation, algorithm whitelist in verification | Mitigated |
| S-3 | Admin impersonation | Compromised admin session cookie | Admin Panel | Critical | Low | Medium | Hardware MFA for admin, IP allowlisting, session binding | Mitigated |
| S-4 | Service-to-service spoofing | Rogue service in the network | Service Mesh | High | Low | Low | mTLS between services, service identity via SPIFFE | Mitigated |

### T - Tampering (Data Integrity)

| ID | Threat | Attack Vector | Affected Component | Severity | Likelihood | Risk | Mitigation | Status |
|----|--------|---------------|-------------------|----------|------------|------|------------|--------|
| T-1 | Price manipulation | Modifying price in client-side cart request | Order Service | Critical | High | Critical | Server-side price validation, signed cart tokens | Mitigated |
| T-2 | Order status manipulation | Direct API calls to change order state | Order Service | High | Medium | High | State machine validation, audit logging | Mitigated |
| T-3 | SQL injection | Malicious input in search/filter parameters | Product Service / PostgreSQL | Critical | Medium | High | Parameterized queries, input validation, WAF rules | Mitigated |
| T-4 | Inventory count manipulation | Race condition in concurrent checkout | Inventory Service | Medium | Medium | Medium | Optimistic locking, database-level constraints | Open |

### R - Repudiation (Accountability)

| ID | Threat | Attack Vector | Affected Component | Severity | Likelihood | Risk | Mitigation | Status |
|----|--------|---------------|-------------------|----------|------------|------|------------|--------|
| R-1 | Order dispute without evidence | Customer claims they didn't place order | Order Service | Medium | Medium | Medium | Comprehensive audit trail, IP logging, device fingerprint | Mitigated |
| R-2 | Admin action without attribution | Shared admin accounts | Admin Panel | High | Medium | High | Individual admin accounts, audit log for all mutations | Mitigated |
| R-3 | Payment dispute | Fraudulent chargeback | Payment Service | Medium | High | Medium | 3D Secure, delivery confirmation, Stripe Radar | Mitigated |

### I - Information Disclosure (Confidentiality)

| ID | Threat | Attack Vector | Affected Component | Severity | Likelihood | Risk | Mitigation | Status |
|----|--------|---------------|-------------------|----------|------------|------|------------|--------|
| I-1 | Customer data exfiltration | SQL injection or IDOR vulnerability | User Service / API | Critical | Medium | High | Input validation, authorization checks, data masking in logs | Mitigated |
| I-2 | API key exposure | Hardcoded secrets in source code | All Services | High | Medium | High | Secrets manager (AWS SSM), pre-commit scanning (ggshield) | Mitigated |
| I-3 | Verbose error messages | Stack traces in production responses | API Gateway | Medium | High | Medium | Error sanitization middleware, structured error responses | Mitigated |
| I-4 | S3 bucket misconfiguration | Public access to product data bucket | S3 Storage | High | Low | Low | Bucket policies, public access block, S3 access logging | Mitigated |
| I-5 | Session data in URL parameters | Tokens passed as query strings | Frontend | Medium | Low | Low | Tokens in headers only, secure cookie attributes | Mitigated |

### D - Denial of Service (Availability)

| ID | Threat | Attack Vector | Affected Component | Severity | Likelihood | Risk | Mitigation | Status |
|----|--------|---------------|-------------------|----------|------------|------|------------|--------|
| D-1 | Application-layer DDoS | High-volume requests to expensive endpoints | API Gateway | High | High | High | WAF rate limiting, CloudFront, auto-scaling | Mitigated |
| D-2 | Cart abandonment spam | Creating millions of carts consuming memory | Cart Service / Redis | Medium | Medium | Medium | Cart TTL, rate limiting per IP, CAPTCHA for guest carts | Open |
| D-3 | Database connection exhaustion | Slow queries holding connections | PostgreSQL | High | Medium | High | Connection pooling (PgBouncer), query timeouts, read replicas | Mitigated |
| D-4 | Dependency failure cascade | Stripe API outage | Payment Service | High | Medium | High | Circuit breaker pattern, graceful degradation, retry with backoff | Mitigated |

### E - Elevation of Privilege (Authorization)

| ID | Threat | Attack Vector | Affected Component | Severity | Likelihood | Risk | Mitigation | Status |
|----|--------|---------------|-------------------|----------|------------|------|------------|--------|
| E-1 | IDOR to access other users' orders | Guessing/enumerating order IDs | Order Service | High | High | High | UUID for order IDs, ownership verification on every request | Mitigated |
| E-2 | Role escalation via JWT manipulation | Modifying role claim in token | User Service | Critical | Low | Medium | Server-side role lookup (not from token), role change audit | Mitigated |
| E-3 | Admin panel access via path traversal | Accessing /admin without proper role | Frontend / API Gateway | Critical | Medium | High | Route-level RBAC, separate admin domain, network segmentation | Mitigated |
| E-4 | Multi-tenant data access | Tenant A accessing Tenant B data | All Services | Critical | Medium | High | Tenant ID in every query, row-level security in PostgreSQL | Mitigated |

---

## Summary

| Category | Total Threats | Critical | High | Medium | Low | Mitigated |
|----------|--------------|----------|------|--------|-----|-----------|
| Spoofing | 4 | 1 | 1 | 0 | 1 | 4 |
| Tampering | 4 | 1 | 1 | 1 | 0 | 3 |
| Repudiation | 3 | 0 | 1 | 2 | 0 | 3 |
| Info Disclosure | 5 | 1 | 2 | 2 | 0 | 5 |
| Denial of Service | 4 | 0 | 2 | 1 | 0 | 3 |
| Elevation of Privilege | 4 | 2 | 1 | 1 | 0 | 4 |

**Total: 24 threats identified, 22 mitigated, 2 open (T-4, D-2)**

## Open Items

| ID | Threat | Owner | Target Date | Notes |
|----|--------|-------|-------------|-------|
| T-4 | Inventory race condition | Backend Team | Next sprint | Implement optimistic locking in checkout flow |
| D-2 | Cart abandonment spam | Platform Team | Backlog | Low risk - monitor before implementing |

## Sign-Off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Security Lead | Alex Chen | 2026-06-24 | Approved |
| Engineering Lead | Jordan Smith | 2026-06-24 | Approved |
| Product Owner | Sam Rivera | 2026-06-24 | Approved |
