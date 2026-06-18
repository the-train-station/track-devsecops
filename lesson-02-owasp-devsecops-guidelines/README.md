---
title: "OWASP DevSecOps Guidelines"
type: whitepaper
difficulty: intermediate
tier: free
platform: "OWASP"
url: "https://owasp.org/www-project-devsecops-guideline/"
tags: ["owasp", "devsecops", "security", "guidelines"]
---

# OWASP DevSecOps Guidelines

## Overview

The OWASP DevSecOps Guideline is a practical OWASP project focused on integrating security work into the same delivery flow used for application development and operations. Instead of treating security as a late-stage gate owned by a separate team, the guideline frames DevSecOps as a continuous operating model where design review, dependency hygiene, secrets handling, testing, monitoring, and incident response are built into the software lifecycle from the start.

This matters because many teams already understand CI/CD, infrastructure as code, and automated testing, but still struggle to make security fit those workflows without slowing delivery to a halt. The guideline gives you a common vocabulary for shifting security earlier, deciding where automation is useful, and identifying where human review is still necessary. It is especially useful for engineers who need a broad map of DevSecOps before they start evaluating specific tools such as Trivy, Checkov, or ZAP.

Used well, this resource becomes a strategic baseline rather than a one-time read. It helps you think about DevSecOps as a system made up of people, process, automation, and feedback loops. That makes it a good starting point for learners who want to understand why security tooling exists before they focus on individual scanners or platform controls.

## Prerequisites

- Familiarity with the software delivery lifecycle, especially source control, CI/CD, and deployment workflows
- Basic understanding of common application security topics such as vulnerabilities, secrets exposure, dependency risk, and access control
- Some experience with cloud infrastructure or containerized applications so the examples feel concrete
- Comfort reading long-form technical guidance and translating it into team practices
- A sample service or delivery pipeline in mind so you can map the guidance to something real

## Key Takeaways

1. **DevSecOps is an operating model, not a single tool** - The guideline shows that secure delivery depends on integrating people, process, and automation rather than buying one scanner and calling the problem solved.
2. **Security work should align with the delivery lifecycle** - Different controls belong at design time, build time, deploy time, and runtime. The guideline helps you place each activity where it creates the most value.
3. **Automation works best when paired with policy and ownership** - Scanners and checks only help if teams know who responds to findings, what severity thresholds matter, and how exceptions are handled.
4. **Feedback loops reduce security drift** - Continuous validation, logging, and review are necessary because systems and dependencies change after the first secure deployment.
5. **Maturity grows in stages** - You do not need a perfect DevSecOps platform on day one. The guideline supports incremental improvement across culture, tooling, and governance.

## How to Use

### Step 1: Read the guideline as a lifecycle map

Open the [OWASP DevSecOps Guideline](https://owasp.org/www-project-devsecops-guideline/) and scan its major sections before reading deeply. Focus on how the project organizes security activities across planning, coding, building, testing, releasing, and operating software. This first pass helps you see the overall model instead of getting stuck on one control or one role.

### Step 2: Translate the guidance into your current delivery pipeline

Pick a real application or a representative sample pipeline and ask:

- Where do developers currently receive security feedback?
- Which checks are automated today, and which are still manual?
- At what point are secrets, dependencies, IaC, and application behavior reviewed?
- What happens after an issue is found?

Use those questions to compare your current state to the guideline's recommended practices.

### Step 3: Build a control map by delivery phase

Create a short table or notes page with phases like:

1. **Design**
2. **Code**
3. **Build**
4. **Deploy**
5. **Runtime**

Then place one or two controls under each phase, such as threat modeling in design, dependency scanning in build, IaC policy checks before deploy, and logging or alerting at runtime. This turns the guideline into an actionable implementation plan rather than background reading.

### Step 4: Start with one automation improvement per phase

Do not attempt a full DevSecOps transformation at once. Instead, pick a small improvement for each part of the lifecycle. For example:

- Add dependency or image scanning in CI
- Add policy checks for Terraform or CloudFormation
- Add a DAST step for a staging environment
- Add secrets detection before merge
- Add security signal review to release or incident processes

This incremental approach matches how the guideline is most effective in practice.

### Step 5: Use the guideline to structure team conversations

The document is useful beyond individual study. Bring it into architecture reviews, backlog planning, or platform discussions and use it to clarify ownership:

- Which controls belong to developers?
- Which should be enforced by the platform or CI system?
- Which require security review instead of automation?
- Which findings block release versus create follow-up work?

That conversation is often more valuable than simply reading the page end to end.

### Step 6: Revisit it after you adopt specific tools

Once you begin using tools like Trivy, Checkov, or OWASP ZAP, return to the guideline and map each tool to the lifecycle stage it supports. This helps prevent tool sprawl and keeps your program tied to risk reduction instead of raw scan volume.

## Practice Notes

- Convert reading into decisions. Pull out three recommendations, rate whether your current or sample workload follows them, and write the gap as an actionable backlog item.
- Capture the security control this lesson strengthens, where it belongs in the SDLC, what evidence it produces, and how a team would respond when the control fails.
- Completion checkpoint: you can adapt the pattern to a second environment, identify its tradeoffs, and explain the operational risks it introduces.
- Portfolio artifact: create a short note titled "OWASP DevSecOps Guidelines - applied takeaway" with the scenario you used, the decision you made, and one follow-up task you would assign to yourself or a team.

## Related Resources

- [AWS Well-Architected Labs](https://wellarchitectedlabs.com/) - Hands-on cloud exercises that help you connect security recommendations to deployable infrastructure patterns
- [Terraform AWS Modules](https://github.com/terraform-aws-modules) - Useful for understanding how reusable IaC components can become policy and governance enforcement points
- [Google SRE Workbook](https://sre.google/workbook/table-of-contents/) - Strong companion for incident response, operational feedback loops, and reliability practices that intersect with runtime security
- [GitHub Actions Starter Workflows](https://github.com/actions/starter-workflows) - Practical CI/CD examples you can adapt when automating DevSecOps checks in pipelines

## Estimated Time

- **Initial scan of the guideline structure**: 15-20 minutes
- **Focused read with notes by lifecycle stage**: 45-75 minutes
- **Mapping the guidance to one real pipeline**: 30-45 minutes
- **Drafting an initial DevSecOps improvement backlog**: 20-30 minutes
- **Total for this lesson**: ~2-3 hours for a solid first pass and a practical implementation outline
