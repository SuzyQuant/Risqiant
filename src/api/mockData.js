/**
 * RISQIANT Mock API Layer
 * Simulates the backend data structures defined in the PRD.
 * This ensures all views (Dashboard, Compliance, Risk) share the same "state".
 */

export const mockData = {
  // 3.1 Security & Risk Assessment Module - Assets
  assets: {
    total: 452,
    newAgents: 12,
    distribution: {
      servers: 45,    // %
      containers: 25, // %
      laptops: 15,    // %
      mobile: 10,     // %
      iot: 5          // %
    },
    // NEW: Attack Surface Specific Data
    attackSurface: {
      externalIPs: 18,
      domains: 12,
      openPorts: 156,
      exposedBuckets: 2,
      discoveryTrend: [12, 15, 18, 14, 16, 18, 20, 22, 21, 19, 18, 18]
    }
  },

  // 3.1 Security & Risk Assessment Module - Risk Register (NEW)
  riskRegister: {
    totalRisks: 24,
    mitigated: 8,
    accepted: 4,
    residualScore: 68, // Out of 100
    heatmap: {
      // Matrix: Impact (High/Med/Low) x Likelihood (High/Med/Low)
      critical: 3, // High/High
      high: 8,     // High/Med or Med/High
      medium: 10,
      low: 3
    },
    topRisks: [
      { id: "R-001", title: "Data Breach via Unpatched DB", impact: "High", likelihood: "Medium", owner: "CISO", status: "Open" },
      { id: "R-002", title: "Vendor Supply Chain Attack", impact: "High", likelihood: "Low", owner: "Vendor Mgmt", status: "Monitoring" },
      { id: "R-003", title: "Insider Threat (Privileged)", impact: "Medium", likelihood: "Medium", owner: "HR/IT", status: "Mitigated" }
    ]
  },

  // 3.1 Security & Risk Assessment Module - Vulnerabilities
  vulnerabilities: {
    total: 12,
    critical: 3,
    high: 15,
    medium: 42,
    low: 12,
    trend: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      detected: [45, 52, 38, 42, 55, 48, 42, 35, 30, 25, 18, 12],
      remediated: [40, 45, 40, 45, 50, 52, 48, 40, 35, 30, 25, 20]
    },
    activeList: [
      {
        id: "CVE-2026-1234",
        asset: "prod-db-01",
        name: "Remote Code Execution",
        cvss: 9.8,
        status: "Critical",
        detected: "Today"
      },
      {
        id: "CVE-2026-5678",
        asset: "web-lb-02",
        name: "SSL/TLS Weak Cipher",
        cvss: 6.5,
        status: "Open",
        detected: "Yesterday"
      },
      {
        id: "Misconfig-01",
        asset: "aws-s3-assets",
        name: "Public Write Access",
        cvss: 9.0,
        status: "Patching",
        detected: "Jan 14"
      },
      {
        id: "CVE-2025-9999",
        asset: "dev-worker-05",
        name: "Log4j Variant",
        cvss: 10.0,
        status: "Mitigated",
        detected: "Jan 13"
      }
    ]
  },

  // 3.2 Compliance Automation Engine
  compliance: {
    globalScore: 92,
    frameworks: {
      soc2: 92,
      iso27001: 78,
      pci: 45,
      cmmc: 15
    },
    evidence: {
      total: 2315,
      automatedPercentage: 34
    }
  },

  // 3.3 Continuous Monitoring - System Health
  systemHealth: {
    status: "HEALTHY",
    services: [
      { name: "API Gateway", status: "ok" },
      { name: "Evidence Collector", status: "ok" },
      { name: "AI Engine", status: "ok" },
      { name: "Database Cluster", status: "ok" },
      { name: "Scanner Node 01", status: "ok" },
      { name: "Scanner Node 02", status: "ok" }
    ]
  },

  // 3.4 Lighthouse AI
  remediation: {
    mttr: 4.5, // Days
    mttrChange: -1.2,
    weeklyFixes: 12,
    autoFixed: 24,
    riskReduction: 18.2
  },

  // Audit Log / Activity Feed
  activityLog: [
    {
      type: "vulnerability",
      title: "Critical Vulnerability",
      source: "AWS Inspector",
      time: "2 minutes ago",
      desc: "CVE-2026-1234 detected in production-db-01. Remote Code Execution possible.",
      action: "View Details",
      iconColor: "#E74C3C",
      iconClass: "fas fa-exclamation-triangle"
    },
    {
      type: "policy",
      title: "Policy Change",
      source: "admin@risqiant.com",
      time: "15 minutes ago",
      desc: 'Updated "Password Rotation Policy" to comply with new PCI DSS 4.0 requirements.',
      action: "View Policy",
      iconColor: "#3498DB",
      iconClass: "fas fa-user-shield"
    },
    {
      type: "evidence",
      title: "Evidence Collected",
      source: "Cloud Connector",
      time: "32 minutes ago",
      desc: 'Automatically collected "User Access Review" logs from Okta for Q1 2026.',
      action: "View Evidence",
      iconColor: "#26B99A",
      iconClass: "fas fa-check-circle"
    },
    {
      type: "ai",
      title: "AI Remediation",
      source: "Lighthouse AI",
      time: "1 hour ago",
      desc: 'Generated Terraform patch for open S3 bucket "assets-public-temp".',
      action: "Review Plan",
      iconColor: "#9B59B6",
      iconClass: "fas fa-robot"
    }
  ]
};
