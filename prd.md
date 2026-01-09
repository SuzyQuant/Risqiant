Product Requirements Document (PRD)
1. Executive Summary
Product Name: RISQIANT (Risk Compliant Security Manager)
Vision: Transform security and compliance from a manual, point-in-time "fire drill" into a continuous, autonomous operating rhythm.
Core Value Proposition: Automate the entire chain from technical control monitoring to evidence collection and AI-generated audit narratives, reducing audit preparation time by up to 70%.
________________________________________
2. Target User Personas
1.	CISO/Security Director: Needs high-level visibility into risk posture and compliance ROI.
2.	Compliance Manager/GRC Lead: Needs to manage frameworks (SOC 2, ISO, etc.) and coordinate with auditors.
3.	Security Engineer: Needs actionable, AI-powered remediation steps to fix vulnerabilities.
4.	External Auditor: Needs a "read-only" portal with tamper-evident evidence and clear control narratives.
________________________________________
3. Functional Requirements
3.1 Security & Risk Assessment Module
•	Attack Surface Scanning: Continuous identification of external/internal assets.
•	Vulnerability Management: Automated scanning and prioritization based on business impact and data sensitivity.
•	Risk Register: A centralized log where findings are automatically mapped to business risks, treatment options, and owners.
3.2 Compliance Automation Engine
•	Framework Library: Native support for SOC 2 (Type 1 & 2), PCI DSS, CMMC L2 (NIST 800-171), and ISO 27001:2022.
•	Cross-Framework Mapping: Ability to map one technical control to multiple requirements (e.g., a password policy satisfying SOC 2 and ISO 27001).
•	Custom Frameworks: Builder for internal policies and unique organizational standards.
3.3 Continuous Monitoring & Evidence Collection
•	Cloud/SaaS Connectors: Automated data ingestion from AWS, Azure, GCP, Identity Providers (Okta/Azure AD), and Endpoint tools.
•	Evidence Vault: Secure, tamper-evident storage for logs, configuration screenshots, and system state data.
•	Drift Detection: Real-time alerts when a configuration falls out of compliance (e.g., an S3 bucket becomes public).
3.4 "Lighthouse AI" Features
•	AI-Generated Narratives: Automatically draft Section III narratives for SOC 2 or System Security Plans (SSP) for CMMC using posture data.
•	AI Remediation Plans: Generate context-aware CLI commands or Terraform scripts to fix identified vulnerabilities.
•	Verification of Fixes: AI-driven confirmation that a remediation action successfully closed the gap.
________________________________________
4. Framework-Specific Requirements
Framework	Key Feature Requirement
SOC 2	Continuous Controls Monitoring (CCM) and automated Section III narrative development.
PCI DSS	Automated CDE (Cardholder Data Environment) scoping and requirement-to-control mapping.
CMMC L2	Dynamic SSP (System Security Plan) and POA&M (Plan of Action and Milestones) generation.
ISO 27001	ISMS management, Annex A control tracking, and automated Statement of Applicability (SoA).
________________________________________
5. UI/UX Design (RISQIANT Core)
The platform utilizes a modernized, jQuery-free dashboard architecture. The following mapping should be used:
•	Main Dashboard (index.html):
o	Top Tiles: Total Risk Score, Compliance % (Global), Open Vulnerabilities, Pending Evidence.
o	Charts: Compliance trend lines (last 6 months) and Risk distribution by framework.
•	Compliance Framework View:
o	Use "Project Detail" or "Table" views to list controls.
o	Status indicators: Green (Compliant), Yellow (Warning/Drift), Red (Non-Compliant).
•	Evidence Vault:
o	Use the "File Manager" or "Table" components to display timestamped evidence with download links.
•	AI Remediation Interface:
o	A "Smart Sidebar" or Modal containing AI-generated steps and a "Verify Fix" button.
•	Navigation Sidebar:
o	Dashboard
o	Risk Assessment (Attack Surface, Vulnerabilities)
o	Compliance (SOC 2, PCI-DSS, CMMC, ISO 27001)
o	Evidence Library
o	Remediation Center (Lighthouse AI)
________________________________________
6. Technical Requirements & AI Logic
6.1 Data Ingestion
•	API-First: All evidence collection must be performed via API integrations to ensure "manual screenshots" are eliminated.
•	Normalization: Telemetry from different vendors (e.g., AWS Inspector vs. Tenable) must be normalized into a single schema.
6.2 AI Prompt Engineering Goals (for LLM integration)
•	Context Injection: When generating a remediation plan, the AI must receive: (1) The specific vulnerability, (2) The asset metadata, (3) The compliance framework requirement.
•	Narrative Generation: The AI must use "Lighthouse AI" logic to transform technical state (e.g., "MFA is enabled for 100% of users") into auditor-friendly prose.
________________________________________
7. Success Metrics (KPIs)
•	Time to Readiness: Reduce months-long compliance prep to weeks.
•	Evidence Freshness: 100% of automated evidence updated within the last 24 hours.
•	Remediation Speed: Decrease the "Mean Time to Remediate" (MTTR) for critical vulnerabilities using AI suggestions.
•	Audit Pass Rate: Zero findings for automated controls during external assessments.
________________________________________
8. Implementation Roadmap
•	Phase 1: Core Risk & Vulnerability scanning + Dashboard setup.
•	Phase 2: SOC 2 & ISO 27001 automated mapping and evidence collectors.
•	Phase 3: Lighthouse AI Narrative and Remediation engine integration.
•	Phase 4: PCI DSS and CMMC L2 specialized modules.

