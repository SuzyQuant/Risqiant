# QA Testing Report: RISQIANT (Risk Compliant Security Manager)

**Date:** January 10, 2026  
**Status:** Internal Audit / Prototype Review - **Cycle 5**  
**Version:** 2.2.4

---

## 1. Executive Summary
Cycle 5 has addressed the "Risk Assessment" module ambiguity. We have successfully split the monolithic "Risk" view into three distinct, specialized dashboards as defined in the updated PRD. This ensures that the specific personas (Security Engineer vs. CISO) have relevant views for **Attack Surface**, **Vulnerabilities**, and **Strategic Risk**.

---

## 2. Module Differentiation Verification

| Module | File | Key Widgets Verified | Data Source |
| :--- | :--- | :--- | :--- |
| **Attack Surface** | `attack_surface.html` | External IPs, Open Ports, Asset Discovery Trend | `mockData.assets.attackSurface` |
| **Vulnerabilities** | `vulnerabilities.html` | Severity Breakdown, Discovery vs. Remediation, CVE Table | `mockData.vulnerabilities` |
| **Risk Register** | `risk_assessment.html` | Risk Heatmap (Impact x Likelihood), Residual Risk Gauge | `mockData.riskRegister` |

*   **Status:** ✅ **PASSED** - All three pages are now semantically distinct and visually unique.

---

## 3. Technical Discrepancies (Audit vs. Docs)

### 3.1 Stack Alignment
| Component | Documented (prd.md / tech-stack.md) | Actual (package.json / src) | Status |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Vite 7.1 (SPA/MPA) | ⚠️ Prototype |
| **Runtime** | Bun v1.3.0 | Node.js (Vite default) | ⚠️ Prototype |
| **Database** | PostgreSQL 18.1 / Prisma 7 | JSON Mock Data Layer | ⚠️ Simulation |
| **jQuery Status** | 100% Eliminated | Minimized (Global $ still present for edge cases) | ✅ Improved |

---

## 4. RICE Matrix (Cycle 6 Priorities)

| ID | Task Name | Reach | Impact | Confidence | Effort | Score |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **T3** | **Migrate to Next.js 16 Stack** | 100% | 3 | 50% | 4.0 | **37.5** |
| **T5** | **Integrate Lighthouse AI Mocks** | 25% | 3 | 70% | 2.0 | **26.25** |
| **T6** | **Prototype "Research Agent"** | 10% | 3 | 60% | 2.0 | **9.0** |

---

## 5. Recommendations for Next Cycle

1.  **Lighthouse AI UI (T5):** Create a dedicated `remediation.html` view (currently a placeholder) that simulates the "Autonomous Research Agent" output, perhaps showing a log of "Playwright actions" to visualize the backend logic described in the PRD.
2.  **Next.js Prep (T3):** The frontend templates are now stable. We can begin the migration to Next.js components (`app/dashboard/page.tsx`, `app/risk/page.tsx`) using the HTML files as direct references for the JSX structure.

---
**Auditor Signature:** *Gemini CLI - Agent 3*
