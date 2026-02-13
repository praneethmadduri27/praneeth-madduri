export interface Project {
    slug: string;
    title: string;
    role: string;
    year: string;
    desc: string;
    details: string; // Extended description for the detail page
    tags: string[];
    image: string;
}

export const projects: Project[] = [
    {
        slug: "portfolio-risk-analytics",
        title: "Portfolio Risk Analytics",
        role: "Assistant Manager",
        year: "Federal Bank",
        desc: "Technology-driven analytics for high-value loan accounts.",
        details: "Spearheaded the design of a comprehensive risk analytics framework for a high-value loan portfolio of over 50 HNI accounts. By integrating real-time credit data and historical repayment patterns through advanced Excel MIS reporting, I improved risk visibility and reporting accuracy by 40%. This system features executive dashboards to visualize portfolio performance and overdue accounts, providing senior management with actionable insights to mitigate default risks and ensure strict adherence to internal credit policies.",
        tags: ["Data Analytics", "Risk Management", "Python", "Excel"],
        image: "/images/portfolio-risk.png"
    },
    {
        slug: "rbi-compliance-framework",
        title: "RBI Compliance Framework",
        role: "Assistant Manager",
        year: "Federal Bank",
        desc: "IT-enabled compliance systems aligned with RBI regulations.",
        details: "I have spearheaded branch process audits and internal control checks, leveraging my MCA background to perform system logic testing and validate digital banking integrations. By maintaining rigorous digital audit trails and  I ensured 100% compliance with RBI governance standards during external regulatory inspections. I also utilise Excel-based frameworks to validate financial data, reducing manual errors and ensuring total audit readiness.",
        tags: ["Regulatory Compliance", "RBI Guidelines", "Internal Audits", "Audit Trails"],
        image: "/images/rbi-compliance.png"
    },
    {
        slug: "mis-automation-suite",
        title: "MIS Reports",
        role: "Assistant Manager",
        year: "Federal Bank",
        desc: "Data-driven decision reporting and dashboards.",
        details: "I have maintained periodic MIS reports using advanced Excel to monitor loan utilization and portfolio performance for over 50 HNI cliets. My data-driven approach improved reporting accuracy by 40%, providing senior management with actionable insights for risk mitigation. I bridged the gap between raw core banking data and business intelligence by performing fund reconciliations and break analyses to ensure zero discrepancies.",
        tags: ["MIS", "SQL", "Excel", "Business Intelligence"],
        image: "/images/mis-automation.jpg"
    },
    {
        slug: "digital-audit-controls",
        title: "Digital Audit Controls",
        role: "Assistant Manager",
        year: "Federal Bank",
        desc: "Internal system validation and digital control testing.",
        details: "As an Assistant Manager at Federal Bank with an MCA in Information Security, I specialize in Digital Audit and GRC, focusing on system logic validation and automated control testing. I have spearheaded branch-level audits and User Access Management (UAM) to ensure 100% regulatory compliance and secure digital banking integrations. By engineering high-accuracy MIS reports and managing fund reconciliations, I bridge the gap between core banking operations and technical system integrity",
        tags: ["Internal Audit", "Control Frameworks", "InfoSec", "System Validation"],
        image: "/images/digital-audit.webp"
    },
];
