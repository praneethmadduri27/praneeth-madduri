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
        role: "Risk Governance",
        year: "Federal Bank",
        desc: "Technology-driven analytics for high-value loan accounts.",
        details: "Led the development of a comprehensive risk analytics engine for Federal Bank's high-value loan portfolio. The system integrates real-time credit data, market indicators, and historical repayment patterns to predict default risks. Implemented dashboarding for senior management to visualize concentration risk and stress test scenarios, directly influencing capital allocation strategies.",
        tags: ["Data Analytics", "Risk Management", "Python", "Tableau"],
        image: "/images/portfolio-risk.png"
    },
    {
        slug: "rbi-compliance-framework",
        title: "RBI Compliance Framework",
        role: "Regulatory Tech",
        year: "Federal Bank",
        desc: "IT-enabled compliance systems aligned with RBI regulations.",
        details: "Architected an IT-enabled compliance monitoring framework to ensure adherence to evolving Reserve Bank of India (RBI) guidelines. Automated the extraction and reporting of regulatory data, reducing manual errors by 40%. The system features real-time alerts for non-compliance events and maintains an immutable audit trail for regulatory inspections.",
        tags: ["Regulatory Compliance", "RBI Guidelines", "Automation", "Audit Trails"],
        image: "/images/rbi-compliance.png"
    },
    {
        slug: "mis-automation-suite",
        title: "MIS Automation Suite",
        role: "Data Engineering",
        year: "Federal Bank",
        desc: "Automated data-driven decision reporting and dashboards.",
        details: "Spearheaded the automation of Management Information System (MIS) reporting. Transitioned legacy Excel-based workflows to a modern data pipeline using SQL and automated scheduling. Delivered daily, weekly, and monthly performance reports to branch managers and regional heads, enabling faster data-driven decision-making across the bank's operations.",
        tags: ["MIS", "SQL", "Automation", "Business Intelligence"],
        image: "/images/mis-automation.jpg"
    },
    {
        slug: "digital-audit-controls",
        title: "Digital Audit Controls",
        role: "InfoSec",
        year: "Federal Bank",
        desc: "Internal system validation and digital control testing.",
        details: "Designed and implemented a digital control testing framework to enhance audit readiness. Conducted internal system validations to identify vulnerabilities in branch banking software. Collaborated with the InfoSec team to deploy automated control tests, ensuring the integrity of financial transactions and customer data protection.",
        tags: ["Internal Audit", "Control Frameworks", "InfoSec", "System Validation"],
        image: "/images/digital-audit.webp"
    },
];
