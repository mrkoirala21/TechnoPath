import { ServiceItem, SolutionItem, IndustryItem, ProjectItem, BlogPost, PartnerBrand, ClientItem } from '../types';

export const COMPANY_INFO = {
  name: 'TECHNO PATH',
  legalName: 'Techno Path IT Solutions & Systems',
  tagline: 'Empowering Businesses Through Innovative Technology',
  description: 'Techno Path is a technology solutions company dedicated to helping organizations build reliable, secure, and scalable digital environments in Bharatpur, Chitwan, and across Nepal.',
  website: 'https://technopath.com.np',
  domain: 'technopath.com.np',
  email: 'Technopath03@gmail.com',
  phone: '9855085421',
  phoneDisplay: '+977 9855085421',
  phoneTel: '+9779855085421',
  whatsappUrl: 'https://wa.me/9779855085421?text=Hello%20Techno%20Path%20Team%2C%20I%20am%20interested%20in%20your%20IT%20solutions%20and%20services.',
  address: {
    street: 'Main Commercial Avenue, Bharatpur-10',
    city: 'Bharatpur',
    district: 'Chitwan',
    zone: 'Bagmati Province',
    country: 'Nepal',
    postalCode: '44200',
    full: 'Bharatpur, Chitwan, Nepal'
  },
  officeHours: 'Sunday – Friday: 9:00 AM – 6:00 PM (Emergency Support 24/7)',
  colors: {
    primary: '#F4510B',
    charcoal: '#202329',
    white: '#FFFFFF',
    lightBg: '#F4F5F7'
  },
  mission: 'To provide innovative, reliable, and accessible technology solutions that help organizations improve efficiency, strengthen security, and achieve sustainable digital growth.',
  vision: 'To become a trusted technology partner recognized for delivering innovative IT solutions, digital transformation, and technology-driven progress.',
  coreValues: [
    { title: 'Innovation', description: 'Applying creative engineering and the latest technological advancements to solve complex business challenges.' },
    { title: 'Integrity', description: 'Upholding strict transparency, data confidentiality, and dependable ethics in every client relationship.' },
    { title: 'Reliability', description: 'Building resilient infrastructure and mission-critical systems that deliver uninterrupted operational uptime.' },
    { title: 'Excellence', description: 'Commitment to high industry standards, meticulous technical execution, and robust architectures.' },
    { title: 'Customer Satisfaction', description: 'Designing client-centric solutions with responsive ongoing support and tailored service delivery.' },
    { title: 'Continuous Learning', description: 'Consistently updating skills, mastering next-generation cloud architectures, and training local talent.' }
  ]
};

export const IMAGES = {
  heroDatacenter: '/src/assets/images/hero_datacenter_tech_1793895653599.jpg',
  aboutTeam: '/src/assets/images/about_it_team_1793895655645.jpg',
  healthcareIT: '/src/assets/images/healthcare_it_system_1793895655365.jpg',
  cybersecuritySoc: '/src/assets/images/cybersecurity_operations_1793895656011.jpg',
  cloudDevOps: '/src/assets/images/cloud_devops_infrastructure_1793895656633.jpg'
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'it-infrastructure',
    slug: 'it-infrastructure',
    title: 'IT Infrastructure',
    shortDescription: 'Enterprise network design, server installations, structured cabling, Wi-Fi architectures, and comprehensive system administration.',
    fullDescription: 'Techno Path delivers end-to-end IT infrastructure designed for fault tolerance, high throughput, and enterprise security. From structured fiber cabling to enterprise switches, server racks, and automated monitoring, we keep your business connected.',
    iconName: 'Server',
    heroImage: IMAGES.heroDatacenter,
    features: [
      'Network Design & Implementation',
      'Server Installation & Management',
      'LAN/WAN Infrastructure',
      'High-Density Wi-Fi Solutions',
      'Firewall & Network Security',
      'IT Infrastructure Auditing',
      'System Administration & Maintenance'
    ],
    deliverables: [
      { title: 'Network Topology & Architecture', description: 'Complete layer 2 and layer 3 network design with VLAN segmentation and failover routing.' },
      { title: 'Enterprise Server Deployment', description: 'Rackmount server setup with RAID arrays, hypervisors (VMware ESXi / Proxmox), and remote management (iDRAC/iLO).' },
      { title: 'Structured Cabling & Rack Dressing', description: 'Clean Cat6A/fiber patch panel routing, cable management, and uninterruptible power supply (UPS) integration.' },
      { title: 'Campus & Office Wi-Fi', description: 'High-density controller-managed access points with guest portal isolation, roaming, and bandwidth traffic shaping.' }
    ],
    benefits: [
      '99.9% network uptime for mission-critical operations',
      'Reduced latency and bottlenecks across departments',
      'Comprehensive audit reports to identify security gaps and hardware bottlenecks',
      'Single point of contact for all hardware, cabling, and system administration'
    ],
    techStack: ['Cisco Systems', 'MikroTik RouterOS', 'Dell PowerEdge', 'HP Enterprise', 'Ubiquiti UniFi', 'Fortinet FortiGate'],
    industries: ['Corporate Enterprises', 'Hospitals & Medical Centers', 'Universities & Colleges', 'Financial Institutions'],
    faqs: [
      {
        question: 'Do you provide on-site hardware installation in Bharatpur and Chitwan?',
        answer: 'Yes, our certified network engineers are on the ground in Bharatpur, Chitwan, and deploy on-site throughout Bagmati Province and across Nepal.'
      },
      {
        question: 'Can you audit our existing slow office network?',
        answer: 'Absolutely. We conduct full packet analysis, cable testing, switch configuration audits, and Wi-Fi spectrum surveys to identify bottlenecks and implement permanent fixes.'
      }
    ]
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    shortDescription: 'AWS cloud architectures, hybrid cloud migration, automated CI/CD deployment pipelines, and automated backup & disaster recovery.',
    fullDescription: 'Accelerate your digital operations with resilient cloud environments. Techno Path helps businesses modernize on-premise workloads into scalable cloud infrastructures with automated deployment, round-the-clock monitoring, and disaster recovery.',
    iconName: 'Cloud',
    heroImage: IMAGES.cloudDevOps,
    features: [
      'AWS Cloud Solutions & Architecture',
      'Cloud Migration & Re-platforming',
      'Cloud Infrastructure as Code (IaC)',
      'Backup & Automated Disaster Recovery',
      'Server Deployment & Containerization (Docker)',
      'Performance Monitoring & Cloud Cost Optimization'
    ],
    deliverables: [
      { title: 'Cloud Architecture Design', description: 'High-availability VPC setups with multi-AZ redundancy, auto-scaling, and secure gateway boundaries.' },
      { title: 'Safe Data Migration', description: 'Zero-data-loss migration pipelines for databases, applications, and object storage from physical servers to cloud.' },
      { title: 'Automated Disaster Recovery (DR)', description: 'Off-site snapshot automation, cross-region backups, and RPO/RTO compliance testing.' },
      { title: 'Cost Optimization Audits', description: 'Eliminating idle cloud compute, rightsizing instances, and leveraging reserved pricing to cut cloud expenditure.' }
    ],
    benefits: [
      'Scale computing capacity instantly during peak business loads',
      'Secure off-site data protection against physical hardware failure or theft',
      'Reduced total cost of ownership by eliminating expensive physical server refresh cycles',
      'High-speed automated software releases with minimal downtime'
    ],
    techStack: ['Amazon Web Services (AWS)', 'Docker', 'Terraform', 'Linux (Ubuntu/Rocky)', 'PostgreSQL RDS', 'GitLab/GitHub Actions'],
    industries: ['SaaS & Tech Companies', 'E-Commerce Retailers', 'FinTech & Banking', 'Educational Portals'],
    faqs: [
      {
        question: 'Can we keep some servers local and connect them to AWS?',
        answer: 'Yes, we specialize in Hybrid Cloud architectures using IPSec VPN or Direct Connect between your Bharatpur office/datacenter and AWS cloud regions.'
      },
      {
        question: 'How do you ensure data security in the cloud?',
        answer: 'We enforce least-privilege IAM policies, TLS 1.3 encryption in transit, AES-256 encryption at rest, and automated vulnerability scanning.'
      }
    ]
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    shortDescription: 'Enterprise threat protection, vulnerability assessments, next-gen firewalls, endpoint security, and staff security awareness training.',
    fullDescription: 'In an era of rising digital threats, Techno Path shields your business assets, customer records, and network perimeters. We deploy next-generation firewall appliances, endpoint threat mitigation, and vulnerability auditing compliant with industry standards.',
    iconName: 'ShieldCheck',
    heroImage: IMAGES.cybersecuritySoc,
    features: [
      'Comprehensive Security Assessments',
      'Network Perimeter & Next-Gen Firewalls',
      'Endpoint Detection & Antivirus Security',
      'Vulnerability Assessment & Penetration Audits',
      'Staff Cybersecurity Awareness Training',
      'Cybersecurity Consulting & Compliance'
    ],
    deliverables: [
      { title: 'Perimeter Defense & UTM Deployment', description: 'Hardened firewall rules, deep packet inspection, intrusion prevention (IPS), and web content filtering.' },
      { title: 'Vulnerability Scanning', description: 'Automated and manual port, service, and configuration audits across internal networks and external endpoints.' },
      { title: 'Zero Trust & Remote Access VPN', description: 'Multi-factor authentication (MFA) and encrypted client-to-site VPN tunnels for remote staff.' },
      { title: 'Incident Response & Policy Guidelines', description: 'Standard operating procedures for rapid containment of ransomware, data leaks, and unauthorized access.' }
    ],
    benefits: [
      'Protect patient records, financial transactions, and proprietary business secrets',
      'Prevent devastating ransomware lockouts and data extortion',
      'Ensure regulatory compliance for banking, healthcare, and education sectors',
      'Train employees to identify phishing attacks and malicious attachments'
    ],
    techStack: ['Fortinet FortiOS', 'Sophos Intercept X', 'Wireshark', 'Kali Linux', 'OpenVPN / WireGuard', 'CrowdStrike Falcon principles'],
    industries: ['Hospitals & Diagnostic Centers', 'Banks & Cooperatives', 'Government Offices', 'Legal & Accounting Firms'],
    faqs: [
      {
        question: 'Are small and medium businesses targeted by hackers in Nepal?',
        answer: 'Yes, automated botnets and phishing attacks actively scan Nepali IP subnets daily. SMBs and cooperatives without proper firewalls are prime targets.'
      },
      {
        question: 'What is included in a Cybersecurity Assessment?',
        answer: 'We scan your routers, public IP addresses, active directory configurations, open ports, and internal endpoints, delivering a prioritized remediation roadmap.'
      }
    ]
  },
  {
    id: 'software-healthcare-it',
    slug: 'software-healthcare-it',
    title: 'Software & Healthcare IT',
    shortDescription: 'Hospital Management Information Systems (HMIS), EMR/EHR, Laboratory Information Systems (LIS), PACS imaging, and custom software.',
    fullDescription: 'Bharatpur is Nepal’s premier medical hub, and Techno Path delivers mission-critical Healthcare IT solutions. We design and integrate Hospital Management Systems, Electronic Medical Records, Laboratory Information Systems, and bespoke web software tailored for institutional workflows.',
    iconName: 'Activity',
    heroImage: IMAGES.healthcareIT,
    features: [
      'Hospital Management Information Systems (HMIS)',
      'Electronic Medical Records (EMR / EHR)',
      'Laboratory Information Systems (LIS) & Barcode Tracking',
      'Digital Imaging / PACS DICOM Integration',
      'Custom Web & Enterprise Software Development',
      'Pharmacy & Inventory Management Systems',
      'Health Insurance & Billing System Integration'
    ],
    deliverables: [
      { title: 'Modular HMIS Architecture', description: 'OPD registration, IPD bed management, doctor appointment scheduling, nursing care plans, and discharge summaries.' },
      { title: 'LIS & Diagnostic Interfacing', description: 'Automated bidirectional interfacing with clinical laboratory hematology and biochemistry analyzers.' },
      { title: 'Pharmacy & Billing Automation', description: 'Integrated prescription verification, expiry tracking, batch controls, and Nepali VAT-compliant taxation billing.' },
      { title: 'Custom Database & Reporting', description: 'Real-time census dashboards, revenue analytics, and government health reporting compatibility.' }
    ],
    benefits: [
      'Eliminate paper chaos and streamline patient movement across departments',
      'Zero billing leakage through centralized cashier and doctor prescription cross-checks',
      'Immediate access to patient medical histories for clinical accuracy',
      'Robust local data storage with automated daily encrypted backups'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'HL7 / FHIR Standards', 'DICOM Web', 'Tailwind CSS', 'Docker'],
    industries: ['Hospitals & Medical Colleges', 'Diagnostic Centers & Pathology Labs', 'Clinics & Polyclinics', 'Pharmaceutical Distributors'],
    faqs: [
      {
        question: 'Can your HMIS integrate with Nepal Government Health Insurance (Bima)?',
        answer: 'Yes, our healthcare software integrates with national insurance claims protocols and generates the required billing breakdowns.'
      },
      {
        question: 'Do you provide on-site training for doctors, nurses, and billing staff?',
        answer: 'Yes, we provide hands-on department-by-department training sessions, user documentation in English and Nepali, and post-launch go-live support.'
      }
    ]
  },
  {
    id: 'digital-solutions',
    slug: 'digital-solutions',
    title: 'Digital Solutions',
    shortDescription: 'Modern corporate website development, digital branding, search engine optimization (SEO), business workflow automation, and digital marketing.',
    fullDescription: 'Elevate your market visibility and digital authority. Techno Path crafts ultra-fast corporate websites, automated customer communication funnels, and data-driven digital marketing strategies that turn online traffic into real business revenue.',
    iconName: 'Globe',
    heroImage: IMAGES.aboutTeam,
    features: [
      'Custom Corporate Website Development',
      'Search Engine Optimization (SEO & Local Chitwan Search)',
      'Business Workflow Automation',
      'Digital Marketing & Lead Generation',
      'Social Media Strategy & Content Management',
      'Digital Transformation & Paperless Operations'
    ],
    deliverables: [
      { title: 'High-Performance Web Platforms', description: 'Responsive, lightning-fast web applications built with modern frontend frameworks and SEO fundamentals.' },
      { title: 'Local Chitwan & Nepal SEO', description: 'Google Business profile optimization, schema markup, and keyword ranking for local search supremacy.' },
      { title: 'Business Process Automation', description: 'Connecting forms, CRMs, WhatsApp notifications, and internal tracking to eliminate manual busywork.' },
      { title: 'Brand Identity & Visual Assets', description: 'Digital design systems, typography hierarchy, marketing graphics, and consistent corporate branding.' }
    ],
    benefits: [
      'High conversion rates with mobile-optimized responsive design',
      'Top search engine rankings for your products and services in Nepal',
      'Automated customer inquiries delivered straight to your WhatsApp and email',
      'Professional corporate presence that establishes instant credibility with partners'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Google Analytics 4', 'Schema.org JSON-LD'],
    industries: ['Hotels & Hospitality', 'Manufacturing & Exporters', 'Educational Consultancies', 'Real Estate & Construction'],
    faqs: [
      {
        question: 'How long does it take to develop a corporate website?',
        answer: 'A standard corporate website is delivered within 2 to 3 weeks, including design, copy integration, SEO optimization, and mobile testing.'
      },
      {
        question: 'Will our website work smoothly on mobile phones in Nepal?',
        answer: 'Every website we build is mobile-first, lightweight, and tested for fast loading even on standard mobile network connections.'
      }
    ]
  },
  {
    id: 'training-consulting',
    slug: 'training-consulting',
    title: 'Training & Consulting',
    shortDescription: 'Professional IT infrastructure training, Cisco/MikroTik networking workshops, cybersecurity drills, and corporate technical advisory.',
    fullDescription: 'Bridge the technology skills gap in your organization. Techno Path provides customized IT training programs, hands-on network lab workshops, and senior executive consulting to align your technology investments with strategic business objectives.',
    iconName: 'GraduationCap',
    heroImage: IMAGES.aboutTeam,
    features: [
      'Hands-on Practical IT & Networking Training',
      'MikroTik & Cisco Routing/Switching Workshops',
      'Enterprise Technical Consulting & Advisory',
      'IT Infrastructure Strategy & Capacity Planning',
      'Cybersecurity Awareness Seminars for Staff',
      'Professional IT Workforce Development'
    ],
    deliverables: [
      { title: 'Tailored Corporate Training', description: 'Custom technical curriculums designed around your company’s specific network hardware and software tools.' },
      { title: 'Practical Lab Exercises', description: 'Hands-on configuration of firewalls, VLANs, subnets, routing tables, and server virtual machines.' },
      { title: 'Technology Roadmap Advisory', description: 'Independent vendor evaluations, procurement guidance, and 3-to-5 year digital modernization roadmaps.' },
      { title: 'Security Best Practices Seminars', description: 'Interactive training for non-technical employees covering password security, phishing detection, and safe browsing.' }
    ],
    benefits: [
      'Empower internal IT teams to resolve daily issues without external dependency',
      'Avoid costly procurement mistakes by consulting experienced architects before purchasing hardware',
      'Strengthen organizational defense by turning employees into human firewalls',
      'Ensure standard operating procedures are documented and executed reliably'
    ],
    techStack: ['Packet Tracer', 'GNS3 / EVE-NG', 'MikroTik RouterOS Labs', 'Linux CLI', 'Enterprise ITIL Principles'],
    industries: ['Colleges & Technical Institutes', 'Corporate IT Teams', 'Hospital Operations Staff', 'Banking Staff'],
    faqs: [
      {
        question: 'Can you conduct training sessions at our office in Chitwan?',
        answer: 'Yes, we provide both on-site corporate workshops at your premises or in structured hands-on lab sessions.'
      },
      {
        question: 'Do you offer advice before we buy expensive servers or networking hardware?',
        answer: 'Yes! Our procurement advisory audits your exact load requirements so you never overpay for unnecessary specs or buy underpowered hardware.'
      }
    ]
  }
];

export const SOLUTIONS_LIST: SolutionItem[] = [
  {
    id: 'enterprise-it',
    title: 'Enterprise IT Infrastructure',
    tagline: 'Rock-Solid Computing, Storage & Connectivity Backbone',
    description: 'A resilient, high-speed IT foundation engineered for businesses requiring zero downtime, high data integrity, and seamless inter-branch communication.',
    iconName: 'Building2',
    keyFeatures: [
      'Structured 10G fiber backbone and Cat6A distribution',
      'Redundant power architecture with smart UPS monitoring',
      'Centralized Active Directory / LDAP user credential management',
      'Automated server virtualization clusters with live failover'
    ],
    benefits: [
      'Eliminates communication bottlenecks between branches and central offices',
      'Enables rapid provisioning of new workstations and departmental services',
      'Protects critical equipment against voltage fluctuations common in Nepal'
    ],
    targetAudience: 'Corporations, manufacturing plants, academic institutions, and logistics centers.',
    deliverables: ['Network architecture blueprint', 'Hardware installation & configuration', 'Management documentation & SLAs']
  },
  {
    id: 'healthcare-systems',
    title: 'Healthcare Information Systems',
    tagline: 'Next-Generation HMIS, EMR & Diagnostic Workflow Systems',
    description: 'Transforming hospitals, polyclinics, and diagnostic centers into paperless, efficient, and transparent healthcare institutions with patient-first software.',
    iconName: 'HeartPulse',
    keyFeatures: [
      'Integrated OPD, IPD, Emergency, ICU, and OT management',
      'Automated LIS analyzer interfacing for pathology lab results',
      'Role-based access control safeguarding sensitive medical records',
      'Comprehensive Nepali tax and insurance (Swasthya Bima) billing compliance'
    ],
    benefits: [
      'Reduces patient waiting times at registration and pharmacy counters',
      'Eliminates lost lab test reports and prescription errors',
      'Provides hospital management with instant operational census and financial reports'
    ],
    targetAudience: 'Hospitals, medical colleges, diagnostic centers, eye clinics, and healthcare cooperatives.',
    deliverables: ['HMIS server setup', 'Staff training programs', 'Barcode hardware integration', '24/7 go-live support']
  },
  {
    id: 'cloud-server',
    title: 'Cloud & Server Solutions',
    tagline: 'Modernize Legacy Workloads with Hybrid & Native Cloud',
    description: 'Eliminate single points of failure by architecting scalable cloud compute, off-site replication, and managed database clusters.',
    iconName: 'CloudRain',
    keyFeatures: [
      'Managed AWS cloud VPCs with private subnets and security groups',
      'Continuous automated database snapshots and multi-region replication',
      'Containerized microservices orchestration with Docker',
      '24/7 server health monitoring and proactive alert triggers'
    ],
    benefits: [
      'Zero downtime during business hours with automatic failover',
      'Eliminates massive upfront capital expenditure on physical server hardware',
      'Guarantees your business data survives natural disasters or hardware theft'
    ],
    targetAudience: 'Growing enterprises, digital startups, e-commerce stores, and financial portals.',
    deliverables: ['Cloud architecture diagram', 'Automated backup runbook', 'Live telemetry monitoring dashboard']
  },
  {
    id: 'network-security',
    title: 'Network & Security Solutions',
    tagline: 'Fortified Perimeter, Secure Wi-Fi & Threat Mitigation',
    description: 'Protect your digital assets with enterprise-grade firewalls, isolated VLANs, secure remote access VPNs, and comprehensive intrusion prevention.',
    iconName: 'Lock',
    keyFeatures: [
      'Next-generation Fortinet and MikroTik firewall deployments',
      'Segregated guest, staff, and management Wi-Fi SSIDs',
      'Encrypted remote work VPN with two-factor authentication',
      'Real-time content filtering blocking malicious and distracting domains'
    ],
    benefits: [
      'Stops malicious ransomware and external intruders at the network boundary',
      'Prevents unauthorized staff devices from accessing confidential servers',
      'Enables branch managers and executives to securely access internal systems from anywhere'
    ],
    targetAudience: 'Financial cooperatives, law firms, corporate headquarters, and educational networks.',
    deliverables: ['Firewall rules policy matrix', 'VPN deployment package', 'Network topology diagram']
  },
  {
    id: 'business-automation',
    title: 'Business Automation & ERP',
    tagline: 'Streamline Manual Workflows & Eliminate Paper Delays',
    description: 'Automate repetitive administrative tasks, inventory management, invoice approvals, and client communications to supercharge business productivity.',
    iconName: 'Cpu',
    keyFeatures: [
      'Custom inventory and procurement tracking systems',
      'Automated WhatsApp and SMS payment and invoice notifications',
      'Digital document approval workflows with audit trails',
      'Real-time executive performance and sales analytics dashboards'
    ],
    benefits: [
      'Saves hundreds of staff hours spent on manual data entry and spreadsheet reconciliation',
      'Accelerates order fulfillment and customer response times',
      'Provides accurate real-time inventory counts to prevent stockouts'
    ],
    targetAudience: 'Wholesale distributors, manufacturing firms, retail chains, and service companies.',
    deliverables: ['Workflow logic schema', 'Automation pipeline integration', 'Staff training walkthrough']
  },
  {
    id: 'custom-software',
    title: 'Web & Custom Software Development',
    tagline: 'Tailor-Made Digital Solutions Built to Match Your Vision',
    description: 'When off-the-shelf software falls short, Techno Path engineers custom, scalable web applications and internal tools crafted specifically for your workflow.',
    iconName: 'Code2',
    keyFeatures: [
      'Full-stack modern engineering using React, TypeScript, and Node.js',
      'RESTful API development and legacy database integrations',
      'Responsive, mobile-optimized user interfaces designed for speed',
      'Rigorous unit testing and security code reviews before deployment'
    ],
    benefits: [
      'Software that conforms precisely to your business rules, not the other way around',
      'Full ownership of your digital assets without restrictive per-user licensing fees',
      'Scalable architecture ready to support thousands of concurrent users'
    ],
    targetAudience: 'Organizations with unique operational workflows, aggregators, and digital service providers.',
    deliverables: ['Clean documented source code', 'Deployment pipeline', 'Database schema & API documentation']
  }
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: 'healthcare',
    title: 'Healthcare & Hospitals',
    subtitle: 'Mission-Critical Digital Health & Diagnostic Infrastructure',
    description: 'Bharatpur is a celebrated healthcare capital in Nepal. Techno Path empowers medical institutions with zero-downtime networks, high-availability HMIS, and secure diagnostic data storage.',
    challenges: [
      'Paper record losses and slow patient registration queues',
      'Disconnected lab analyzers requiring manual typing of blood test results',
      'Network downtime disrupting emergency room admissions and surgical scheduling'
    ],
    technoPathSolutions: [
      'Complete HMIS implementation covering OPD, IPD, pharmacy, and billing',
      'Direct LIS machine interfacing for real-time automatic lab report uploads',
      'Redundant fiber LAN and isolated medical device VLANs'
    ],
    featuredTech: ['HL7 Protocols', 'DICOM PACS Integration', 'Biometric & Barcode Scanning', 'Failover Fiber Routing']
  },
  {
    id: 'education',
    title: 'Education & Training',
    subtitle: 'Connected Campuses, Digital Libraries & Smart Learning',
    description: 'Modern universities, technical colleges, and schools require dependable high-density Wi-Fi, computer lab infrastructures, and student information management.',
    challenges: [
      'Hundreds of concurrent student smartphones saturating standard Wi-Fi routers',
      'Unrestricted internet bandwidth causing slow administrative connections',
      'Complex computer lab setups that frequently break down'
    ],
    technoPathSolutions: [
      'Enterprise controller-managed access points with dynamic bandwidth limits',
      'Content filtering firewalls blocking adult and gaming content during class hours',
      'Standardized computer lab images and virtualized desktop infrastructure'
    ],
    featuredTech: ['UniFi & MikroTik APs', 'VLAN Traffic Shaping', 'RADIUS Authentication', 'Digital Exam Lab Servers']
  },
  {
    id: 'corporate',
    title: 'Corporate & Enterprises',
    subtitle: 'Scalable IT Backbone for Multi-Branch Organizations',
    description: 'Providing commercial enterprises and manufacturing corporations with unified communications, secure inter-office connectivity, and enterprise cloud systems.',
    challenges: [
      'Slow communication and delayed file sharing between headquarters and remote sites',
      'Lack of centralized data backup leading to risk of catastrophic data loss',
      'Vulnerability to employee password leaks and malware infections'
    ],
    technoPathSolutions: [
      'Site-to-site IPsec VPN connecting Bharatpur headquarters to branch offices',
      'Automated daily cloud backups with versioning and immutable retention',
      'Endpoint threat protection and centralized Active Directory management'
    ],
    featuredTech: ['Fortinet SD-WAN', 'Dell PowerEdge Hypervisors', 'AWS S3 Glacier Archival', 'Sophos EDR']
  },
  {
    id: 'government',
    title: 'Government & Public Sector',
    subtitle: 'Transparent, Secure & Resilient Public Infrastructure',
    description: 'Supporting municipal offices, local government units, and public utilities with reliable networks, biometric systems, and citizen-facing digital services.',
    challenges: [
      'Legacy computers and unstructured cabling leading to frequent downtime',
      'Sensitive citizen records stored on insecure unencrypted storage drives',
      'Power outages interrupting public counter service delivery'
    ],
    technoPathSolutions: [
      'Server room restructuring with certified industrial-grade UPS backup',
      'Encrypted local servers with restricted network access and audit logging',
      'Public Wi-Fi isolation and robust local network switching'
    ],
    featuredTech: ['Hardware Firewall Appliances', 'Managed Smart Switches', 'Structured Cat6A Cabling', 'Automated Daily DR']
  },
  {
    id: 'smes',
    title: 'Small & Medium Businesses (SMEs)',
    subtitle: 'Cost-Effective, Enterprise-Grade Technology for Growing Firms',
    description: 'Enabling local businesses in Chitwan to compete and scale through affordable cloud accounting, secure office Wi-Fi, and custom business websites.',
    challenges: [
      'Limited budget for full-time internal IT engineers',
      'Frequent router freezes and intermittent internet disruptions',
      'Inadequate digital branding and low online visibility'
    ],
    technoPathSolutions: [
      'Turnkey IT infrastructure setup with outsourced maintenance SLAs',
      'High-performance corporate website development with local SEO ranking',
      'Reliable Wi-Fi routers configured with dual-WAN automatic failover'
    ],
    featuredTech: ['Dual-WAN Load Balancing', 'Local SEO & Schema', 'Cloud Workspace Setup', 'Proactive Remote Support']
  },
  {
    id: 'commercial',
    title: 'Commercial Organizations & Retail',
    subtitle: 'Point-of-Sale Connectivity, Surveillance & Guest Wi-Fi',
    description: 'Hotels, retail malls, restaurants, and commercial showrooms require continuous POS transaction connectivity and smart IP surveillance.',
    challenges: [
      'Credit card and digital wallet payment delays caused by unstable network',
      'Security blind spots and unreliable CCTV video storage retention',
      'Slow guest Wi-Fi frustrating customers'
    ],
    technoPathSolutions: [
      'Priority QoS bandwidth tagging dedicated for POS billing counters',
      'High-definition IP surveillance cameras with network video recorders (NVR)',
      'Captive portal guest Wi-Fi showcasing daily promotions and hotel info'
    ],
    featuredTech: ['QoS Traffic Prioritization', 'Hikvision IP NVR Systems', 'VLAN Separation', 'Branded Captive Portals']
  }
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Chitwan Regional Hospital Network & HMIS Infrastructure',
    category: 'Healthcare IT & Infrastructure',
    clientSector: 'Healthcare',
    location: 'Bharatpur, Chitwan',
    description: 'Turnkey deployment of a hospital-wide 10G optical network backbone, server room virtualization, and electronic medical record workstation integration.',
    challenge: 'The medical center was experiencing frequent paper chart losses, 45-minute patient check-in queues, and unmanaged consumer Wi-Fi routers frequently crashing.',
    solution: 'Techno Path deployed a structured 12-core fiber backbone connecting 4 hospital blocks, configured high-availability server racks with VMware ESXi, and rolled out dedicated medical workstations.',
    results: [
      'Patient registration wait times reduced from 45 minutes to under 4 minutes',
      '99.98% network uptime across emergency, pathology, and ICU departments',
      'Centralized pathology analyzer interfacing delivering lab results straight to doctor screens'
    ],
    technologies: ['Cisco Enterprise Switches', 'Dell PowerEdge Servers', 'VMware ESXi', 'Fortinet FortiGate', 'Cat6A Cabling'],
    image: IMAGES.healthcareIT
  },
  {
    id: 'proj-2',
    title: 'Multi-Branch Financial Cooperative Network & Firewall Security',
    category: 'Cybersecurity & Networking',
    clientSector: 'Financial Services',
    location: 'Chitwan & Nawalpur',
    description: 'Unified inter-branch VPN connectivity, hardware firewall fortification, and endpoint data loss prevention for a prominent financial cooperative.',
    challenge: 'Seven branch offices were operating isolated spreadsheets, relying on insecure public internet, and facing imminent regulatory audit deadlines.',
    solution: 'Engineered an encrypted IPsec mesh connecting all branches to the Bharatpur central data center, deployed next-gen firewalls, and implemented automated remote database replication.',
    results: [
      'Zero security incidents and full compliance with national financial regulatory standards',
      'Real-time core banking data synchronization across all 7 regional branches',
      'Automated nightly cloud backups to encrypted AWS storage'
    ],
    technologies: ['FortiGate 60F', 'MikroTik CCR Series', 'IPSec Site-to-Site VPN', 'AWS S3 Cloud Backup', 'Bitdefender GravityZone'],
    image: IMAGES.cybersecuritySoc
  },
  {
    id: 'proj-3',
    title: 'Academic Campus High-Density Wi-Fi & Virtualized Lab System',
    category: 'IT Infrastructure & Education',
    clientSector: 'Higher Education',
    location: 'Bharatpur, Nepal',
    description: 'Campus-wide managed Wi-Fi supporting 2,500+ simultaneous students, coupled with an automated virtual lab server for computer science training.',
    challenge: 'Existing consumer access points suffered severe radio congestion every morning, causing total network dropouts during academic exams.',
    solution: 'Designed and installed 45 ceiling-mounted enterprise Wi-Fi 6 access points with centralized cloud controller management, bandwidth throttling, and guest authentication.',
    results: [
      'Seamless connectivity for over 2,500 concurrent student and faculty devices',
      'Fair-share bandwidth allocation preventing single-user video stream saturation',
      'Isolated administrative network protected from student access'
    ],
    technologies: ['Ubiquiti UniFi Wi-Fi 6', 'MikroTik Bandwidth Queues', 'VLAN Segmentation', 'Cat6 Structured Cabling'],
    image: IMAGES.heroDatacenter
  },
  {
    id: 'proj-4',
    title: 'Enterprise Cloud Migration & Automated Disaster Recovery',
    category: 'Cloud & DevOps',
    clientSector: 'Manufacturing & Distribution',
    location: 'Chitwan Industrial District',
    description: 'Migration of mission-critical on-premises ERP databases to AWS cloud infrastructure with automated cross-region replication.',
    challenge: 'Frequent regional power grid surges and aging server hardware threatened catastrophic loss of 10 years of business transaction history.',
    solution: 'Migrated ERP databases to AWS RDS with multi-AZ failover, automated point-in-time recovery, and configured encrypted client VPN for authorized accountants.',
    results: [
      'Zero downtime migration executed over a single weekend maintenance window',
      'Reduced annual hardware maintenance expenses by 38%',
      'RPO (Recovery Point Objective) reduced to under 5 minutes'
    ],
    technologies: ['Amazon Web Services (AWS)', 'PostgreSQL RDS', 'Docker', 'OpenVPN Access Server', 'Terraform'],
    image: IMAGES.cloudDevOps
  }
];

export const PARTNER_BRANDS: PartnerBrand[] = [
  { name: 'Cisco Systems', category: 'Networking', logoText: 'CISCO', description: 'Enterprise routing, switching, and core network architectures.', solutionsDelivered: 'Core Switches, Industrial Routers, Enterprise Gateways' },
  { name: 'Fortinet', category: 'Cybersecurity', logoText: 'FORTINET', description: 'Next-generation firewall appliances, IPS, and Unified Threat Management.', solutionsDelivered: 'FortiGate UTM, Secure SD-WAN, Antivirus filtering' },
  { name: 'MikroTik', category: 'Networking', logoText: 'MikroTik', description: 'High-throughput edge routing, bandwidth management, and wireless links.', solutionsDelivered: 'RouterOS, Cloud Core Routers, Wireless Backhauls' },
  { name: 'Dell Technologies', category: 'Compute & Storage', logoText: 'DELL', description: 'Enterprise rackmount servers, SAN/NAS storage, and hypervisor hardware.', solutionsDelivered: 'PowerEdge Servers, Enterprise RAID Arrays, Workstations' },
  { name: 'Amazon Web Services', category: 'Cloud', logoText: 'AWS', description: 'Global cloud infrastructure, managed relational databases, and S3 archival.', solutionsDelivered: 'VPC Architectures, Cloud Migration, Automated Disaster Recovery' },
  { name: 'VMware by Broadcom', category: 'Compute & Storage', logoText: 'VMware', description: 'Industry-standard bare-metal hypervisors and virtual machine clusters.', solutionsDelivered: 'vSphere ESXi, Virtual Machine High Availability' },
  { name: 'Ubiquiti Networks', category: 'Networking', logoText: 'UBIQUITI', description: 'High-density enterprise Wi-Fi 6 access points and centralized switching.', solutionsDelivered: 'UniFi Access Points, Smart PoE Switches, Central Controller' },
  { name: 'Sophos', category: 'Cybersecurity', logoText: 'SOPHOS', description: 'Endpoint detection and response (EDR) and synchronized network security.', solutionsDelivered: 'Intercept X Endpoint Security, Ransomware Rollback' },
  { name: 'Hikvision', category: 'Surveillance & Voice', logoText: 'HIKVISION', description: 'Commercial IP surveillance systems, NVRs, and biometric access controls.', solutionsDelivered: 'Network Cameras, Facial Recognition Attendance, NVR Storage' },
  { name: 'Microsoft', category: 'Cloud', logoText: 'Microsoft', description: 'Enterprise Windows Server, Active Directory, and Microsoft 365 services.', solutionsDelivered: 'Active Directory Domain Services, Exchange & Office 365' }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'healthcare-it-hmis-modernization-nepal',
    title: 'Modernizing Healthcare IT in Nepal: Implementing Robust HMIS & Digital Records',
    category: 'Healthcare Technology',
    readTime: '6 min read',
    date: 'March 2026',
    author: 'Techno Path Systems Engineering Team',
    summary: 'How Nepali hospitals and diagnostic centers in healthcare hubs like Chitwan are transitioning from paper-based operations to secure, real-time HMIS.',
    content: [
      'Bharatpur and the greater Chitwan region represent the medical lifeline of central Nepal. With hundreds of thousands of patient visits each month, legacy paper filing systems are no longer viable.',
      'Implementing an enterprise Hospital Management Information System (HMIS) is more than installing software—it requires a coordinated approach spanning reliable structured cabling, uninterrupted power conditioning, and dedicated medical department workstations.',
      'A primary bottleneck in modern diagnostic care is laboratory turnaround time. By directly integrating Laboratory Information Systems (LIS) with biochemistry and hematology analyzers, test results flow automatically into doctor dashboards, eliminating manual typing errors.',
      'Data security must be prioritized from day one. Medical histories are strictly private; role-based access control ensures billing clerks only see payment records while attending physicians access diagnostic charts.'
    ],
    tags: ['HMIS', 'Healthcare IT', 'Chitwan Medical Hub', 'EMR', 'LIS'],
    image: IMAGES.healthcareIT
  },
  {
    id: 'post-2',
    slug: 'securing-enterprise-networks-nepal',
    title: 'Securing Enterprise Networks: Essential Cybersecurity Practices for Nepali Organizations',
    category: 'Cybersecurity',
    readTime: '5 min read',
    date: 'February 2026',
    author: 'Network Security Division',
    summary: 'A practical, actionable guide for cooperatives, businesses, and institutions in Nepal to defend against automated ransomware, phishing, and network breaches.',
    content: [
      'Over the past two years, cybersecurity incidents targeting Nepali financial cooperatives and commercial enterprises have escalated. Many organizations believe they are too small to be targeted, unaware that automated scripts continuously probe public IP ranges across the country.',
      'The foundational defensive layer is a hardware firewall appliance configured with Unified Threat Management (UTM). Consumer home routers lack deep packet inspection and cannot prevent malware from downloading onto internal workstations.',
      'Segmenting internal networks using Virtual Local Area Networks (VLANs) stops threats from spreading laterally. Guest Wi-Fi visitors must never reside on the same network subnet as internal accounting servers.',
      'Finally, automated off-site backups following the 3-2-1 rule ensure that even if ransomware encrypts a server, operations can be restored within hours without paying extortion fees.'
    ],
    tags: ['Cybersecurity', 'Firewall', 'Fortinet', 'Data Protection', 'Nepal IT'],
    image: IMAGES.cybersecuritySoc
  },
  {
    id: 'post-3',
    slug: 'cloud-vs-on-premises-infrastructure-strategy',
    title: 'Cloud vs. On-Premises: Optimal Infrastructure Strategy for Growing Businesses',
    category: 'Cloud Computing',
    readTime: '7 min read',
    date: 'January 2026',
    author: 'Cloud Solutions Architect',
    summary: 'Evaluating the cost, reliability, internet bandwidth realities, and compliance requirements when deciding between on-premise hardware and AWS cloud in Nepal.',
    content: [
      'Business leaders frequently ask: should we buy new on-premise server hardware or migrate our operations entirely to cloud platforms like Amazon Web Services?',
      'The answer depends heavily on network connectivity, latency sensitivity, and local regulatory requirements. In Nepal, hybrid models often provide the highest reliability.',
      'For high-speed internal transaction processing with zero reliance on external internet stability, local virtualized servers provide instant response times.',
      'Simultaneously, offloading database snapshots, disaster recovery replicas, and public-facing web applications to AWS guarantees 99.99% availability and geographic redundancy.'
    ],
    tags: ['Cloud Computing', 'AWS', 'Hybrid Cloud', 'Infrastructure', 'DevOps'],
    image: IMAGES.cloudDevOps
  },
  {
    id: 'post-4',
    slug: 'campus-wifi-structured-cabling-guide',
    title: 'High-Density Wi-Fi & Structured Cabling Architecture for Educational Campuses',
    category: 'IT Infrastructure',
    readTime: '5 min read',
    date: 'January 2026',
    author: 'Infrastructure Lead',
    summary: 'How to plan and deploy high-performance Wi-Fi 6 wireless networks that support thousands of concurrent student devices without dropouts.',
    content: [
      'Modern colleges and universities are characterized by extreme device density. During lecture intervals, hundreds of students gather in cafeterias and auditoriums, attempting to connect multiple devices.',
      'Standard Wi-Fi routers quickly suffer buffer bloat and radio contention under high concurrency. Enterprise access points equipped with OFDMA and MU-MIMO technology handle high client counts with ease.',
      'Centralized controller management enables seamless roaming: as a student walks from the library to the laboratory, their device transitions between access points without disconnecting.',
      'Quality structured cabling using certified Cat6A solid copper ensures gigabit throughput and supports Power over Ethernet (PoE) to power access points without separate electrical sockets.'
    ],
    tags: ['Networking', 'Wi-Fi 6', 'Structured Cabling', 'Education IT', 'UniFi'],
    image: IMAGES.heroDatacenter
  }
];

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'Innovative Solutions',
    description: 'We leverage modern, proven technologies and architectures that solve real operational bottlenecks, ensuring your business stays ahead.'
  },
  {
    number: '02',
    title: 'Reliable Technology',
    description: 'Every cable, switch, server, and code line is designed for maximum resilience, fault tolerance, and minimal downtime.'
  },
  {
    number: '03',
    title: 'Professional Expertise',
    description: 'Our team comprises certified network engineers, systems administrators, and software architects with real-world enterprise experience.'
  },
  {
    number: '04',
    title: 'Customer-Centric Approach',
    description: 'We listen to your specific operational needs and build tailored solutions rather than pushing rigid, one-size-fits-all products.'
  },
  {
    number: '05',
    title: 'Scalable Infrastructure',
    description: 'Our system architectures grow seamlessly alongside your organization, protecting your technology investment over the long term.'
  },
  {
    number: '06',
    title: 'Dedicated Technical Support',
    description: 'Fast, responsive on-site and remote technical support based right here in Bharatpur, Chitwan, ready whenever you need assistance.'
  }
];

/**
 * Our Precious Clients - Institutional client base across Bharatpur, Chitwan, and Nepal.
 * This section is fully modular and editable so real client details can be updated easily.
 */
export const PRECIOUS_CLIENTS: ClientItem[] = [
  {
    id: 'client-1',
    name: 'Central Chitwan Medical Institute & Hospital',
    sector: 'Healthcare',
    location: 'Bharatpur, Chitwan',
    deployedSolution: 'HMIS Enterprise Deployment & 10G Optical Fiber Backbone',
    logoBadge: 'CCMI',
    highlight: '24/7 mission-critical hospital connectivity & paperless patient workflows'
  },
  {
    id: 'client-2',
    name: 'Narayani Regional Diagnostic & Pathology Lab',
    sector: 'Healthcare',
    location: 'Narayangarh, Chitwan',
    deployedSolution: 'Automated LIS Analyzer Interfacing & Digital Health Cloud',
    logoBadge: 'NRDL',
    highlight: 'Automated bidirectional blood test analyzer integration'
  },
  {
    id: 'client-3',
    name: 'Chitwan Pragati Financial Cooperative Ltd.',
    sector: 'Financial & Corporate',
    location: 'Bharatpur, Nepal',
    deployedSolution: 'Next-Gen Fortinet Firewall, Inter-Branch VPN & Multi-AZ Disaster Recovery',
    logoBadge: 'CPFC',
    highlight: 'Secured multi-branch banking network and encrypted member database'
  },
  {
    id: 'client-4',
    name: 'Western Shiksha Academy & Technical College',
    sector: 'Education',
    location: 'Chitwan, Nepal',
    deployedSolution: 'Campus-Wide Wi-Fi 6 Architecture & Virtualized Computer Lab',
    logoBadge: 'WSAT',
    highlight: 'High-density student wireless coverage for 2,500+ simultaneous devices'
  },
  {
    id: 'client-5',
    name: 'Rhino Valley Resorts & Hospitality Group',
    sector: 'Hospitality & Retail',
    location: 'Sauraha, Chitwan',
    deployedSolution: 'Unified POS Network, Captive Guest Portal & Smart IP Surveillance',
    logoBadge: 'RVRH',
    highlight: 'Continuous transaction uptime & high-definition perimeter surveillance'
  },
  {
    id: 'client-6',
    name: 'Chitwan Industrial Agro-Logistics Corp',
    sector: 'Financial & Corporate',
    location: 'Bharatpur Industrial Area',
    deployedSolution: 'Automated Inventory ERP & Hybrid AWS Cloud Storage',
    logoBadge: 'CIAL',
    highlight: 'Real-time supply chain tracking and automated nightly cloud backups'
  },
  {
    id: 'client-7',
    name: 'Lumbini-Chitwan Specialized Eye Care Clinic',
    sector: 'Healthcare',
    location: 'Bharatpur-10, Chitwan',
    deployedSolution: 'EMR Workstations & High-Availability Server Infrastructure',
    logoBadge: 'LCEC',
    highlight: 'Rapid ophthalmic record retrieval and appointment scheduling'
  },
  {
    id: 'client-8',
    name: 'Mid-Nepal Technical Institute of Technology',
    sector: 'Education',
    location: 'Chitwan, Bagmati Province',
    deployedSolution: 'Gigabit Fiber Distribution, Active Directory & Lab Networking',
    logoBadge: 'MNIT',
    highlight: 'Structured Cat6A cabling and student exam server administration'
  }
];

