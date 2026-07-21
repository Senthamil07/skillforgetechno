import React, { useState } from "react";
import { 
  BookOpen, 
  Award, 
  Database, 
  Cpu, 
  Compass, 
  TrendingUp, 
  Sparkles, 
  Code, 
  CheckCircle, 
  ChevronRight, 
  HelpCircle, 
  GraduationCap, 
  Cloud, 
  Network, 
  BarChart3, 
  Terminal, 
  Shield, 
  Briefcase,
  Check,
  ArrowRight,
  Clock
} from "lucide-react";
import { motion } from "motion/react";

interface DataScienceTamilGuideProps {
  onApplyClick: () => void;
}

interface Pillar {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  points: string[];
}

interface RoadmapStep {
  step: string;
  title: string;
  desc: string;
}

interface CareerRole {
  role: string;
  salary: string;
  demand: string;
  desc: string;
}

interface CourseDetails {
  id: "ds" | "da" | "cloud" | "networking";
  title: string;
  badge: string;
  headline: string;
  introTitle: string;
  introDesc: string;
  introQuote: string;
  introImage: string;
  avatarText: string;
  salaryStat: string;
  salaryLabel: string;
  salarySub: string;
  jobsStat: string;
  jobsLabel: string;
  jobsSub: string;
  skillsStat: string;
  skillsLabel: string;
  skillsSub: string;
  pillars: Pillar[];
  roadmap: RoadmapStep[];
  careers: CareerRole[];
}

export const DataScienceTamilGuide: React.FC<DataScienceTamilGuideProps> = ({ onApplyClick }) => {
  const [activeCourse, setActiveCourse] = useState<"ds" | "da" | "cloud" | "networking">("ds");
  const [activeSection, setActiveSection] = useState<string>("intro");

  const coursesData: Record<"ds" | "da" | "cloud" | "networking", CourseDetails> = {
    ds: {
      id: "ds",
      title: "Data Science",
      badge: "DATA SCIENCE & AI HANDBOOK",
      headline: "Data Science Specialization | Beginner Guide for Career Growth",
      introTitle: "Why is Data Science Crucial?",
      introDesc: "Every second, billions of users across the globe generate massive volumes of data through smartphones, websites, and social platforms. These data points are not just numbers or text; they hold hidden customer preferences, market shifts, and immense business value. Uncovering these opportunities is the primary goal of modern data science.",
      introQuote: "Data is the new oil of the digital age. But just like crude oil, it must be refined and analyzed by skilled professionals to truly deliver value.",
      introImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      avatarText: "Enterprise Analytics Sandbox Environment",
      salaryStat: "₹5.5 Lakhs / Year",
      salaryLabel: "Average Starting Salary",
      salarySub: "In South Indian tech hubs like Chennai and Bengaluru.",
      jobsStat: "93,000+ Active",
      jobsLabel: "Job Openings (India)",
      jobsSub: "Across finance, healthcare, and retail sectors.",
      skillsStat: "Python, SQL, ML",
      skillsLabel: "Key Tech Skills Required",
      skillsSub: "Core foundations for enterprise technology.",
      pillars: [
        {
          id: "python",
          icon: <Code className="w-5 h-5 text-amber-500" />,
          title: "Python Programming",
          desc: "Learn the basic and advanced operations of Python, the global language for Data Science. Practice analyzing data using key libraries such as Pandas, NumPy, and Matplotlib.",
          points: [
            "Variables, Loops & Control Structures",
            "Data Manipulation with Pandas & NumPy",
            "Data Visualization with Matplotlib & Seaborn",
            "Data Cleansing & Preprocessing Blueprints"
          ]
        },
        {
          id: "sql",
          icon: <Database className="w-5 h-5 text-amber-500" />,
          title: "SQL & Databases",
          desc: "SQL is extremely crucial for any professional data analysis. SQL helps you manage, query, and organize large datasets efficiently.",
          points: [
            "Relational Database Concepts",
            "SELECT, WHERE, JOINs & Subqueries",
            "Aggregation Functions & CTEs",
            "Query Optimization & Indexing for Enterprise systems"
          ]
        },
        {
          id: "ml",
          icon: <Cpu className="w-5 h-5 text-amber-500" />,
          title: "Machine Learning",
          desc: "Build advanced algorithms that automatically make predictions from data. Learn to implement both supervised and unsupervised learning techniques through hands-on, real-world projects.",
          points: [
            "Linear & Logistic Regression Models",
            "Decision Trees & Random Forests",
            "Clustering with K-Means & Hierarchical Models",
            "Model Evaluation metrics (Accuracy, Precision, Recall)"
          ]
        }
      ],
      roadmap: [
        {
          step: "01",
          title: "Programming & Mathematics Foundations",
          desc: "First, learn the basics of Python programming alongside core mathematical concepts like Statistics, Probability, and Linear Algebra."
        },
        {
          step: "02",
          title: "Data Wrangling & Relational Databases",
          desc: "Master SQL queries to retrieve and store data, and learn how to use Pandas and NumPy libraries to clean and prepare your collected datasets."
        },
        {
          step: "03",
          title: "Exploratory Data Analysis & Visualization",
          desc: "Discover hidden insights in cleaned data and master the art of presenting them clearly to stakeholders and managers through interactive charts and graphs."
        },
        {
          step: "04",
          title: "Predictive Modeling & ML Algorithms",
          desc: "Build and evaluate predictive machine learning algorithms using Scikit-Learn to forecast future trends based on historical data."
        },
        {
          step: "05",
          title: "Real-World Projects & Portfolio Deployment",
          desc: "To prove your expertise, build 3 to 5 comprehensive end-to-end projects, host them on GitHub, and craft a compelling professional portfolio."
        }
      ],
      careers: [
        {
          role: "Data Analyst",
          salary: "₹4,00,000 - ₹8,00,000 / Year",
          demand: "High",
          desc: "Their primary task is to collect and analyze daily company data, building reports and dashboards to guide critical business decisions."
        },
        {
          role: "Data Scientist",
          salary: "₹8,00,000 - ₹18,00,000 / Year",
          demand: "Very High",
          desc: "They build complex mathematical and machine learning models to anticipate future business trends and shape long-term company strategies."
        },
        {
          role: "Machine Learning Engineer",
          salary: "₹7,50,000 - ₹15,00,000 / Year",
          demand: "Exponential",
          desc: "They specialize in deploying predictive models built by data scientists into production-ready systems for real-world application use."
        }
      ]
    },
    da: {
      id: "da",
      title: "Data Analytics",
      badge: "DATA ANALYTICS BLUEPRINT",
      headline: "Data Analytics Specialization | Master Business Intelligence",
      introTitle: "Why is Data Analytics Essential for Businesses?",
      introDesc: "Modern enterprises generate massive logs of transactional, customer, and marketing data daily. A Data Analyst acts as an interpreter, translating complex numbers into interactive visuals and dashboard systems that help corporate executives identify leaks, forecast revenues, and scale operations.",
      introQuote: "Without big data analytics, companies are blind and deaf, wandering out onto the Web like deer on a freeway.",
      introImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      avatarText: "Interactive Dashboard Deployment Environment",
      salaryStat: "₹4.8 Lakhs / Year",
      salaryLabel: "Average Starting Salary",
      salarySub: "For entry-level business intelligence & reporting analysts.",
      jobsStat: "120,000+ Active",
      jobsLabel: "Job Openings (Global)",
      jobsSub: "Massive requirements in analytics consultancies & startups.",
      skillsStat: "Excel, Power BI, SQL",
      skillsLabel: "Core Tool Stack",
      skillsSub: "Industry-standard business intelligence tools.",
      pillars: [
        {
          id: "excel",
          icon: <BarChart3 className="w-5 h-5 text-amber-500" />,
          title: "Advanced Excel & Analytics",
          desc: "Master formulas, advanced pivots, data lookups, and visual trend-mapping. Excel remains the foundational backbone of corporate operations and fast analysis.",
          points: [
            "VLOOKUP, HLOOKUP, XLOOKUP & Nested IFs",
            "Pivot Tables, Slicers & Timeline Reports",
            "Conditional Formatting & Statistical Summaries",
            "Data Cleaning Blueprints & Import Routines"
          ]
        },
        {
          id: "bi_tools",
          icon: <Award className="w-5 h-5 text-amber-500" />,
          title: "Power BI & Tableau Dashboarding",
          desc: "Build highly interactive dashboards that answer business-critical questions. Learn data modeling, DAX queries, and live storytelling metrics.",
          points: [
            "Power Query Editor & Data Cleansing",
            "Calculated Columns & Measures with DAX",
            "Interactive Visual Design (Bar, Line, Map Charts)",
            "Publishing & Sharing Corporate Reports"
          ]
        },
        {
          id: "business_sql",
          icon: <Database className="w-5 h-5 text-amber-500" />,
          title: "SQL Querying for Analyst Teams",
          desc: "Learn to fetch correct records, group indicators, calculate percentages, and join multiple transactional tables to produce accurate summaries.",
          points: [
            "Aggregation with GROUP BY & HAVING",
            "Multi-table Joins (INNER, LEFT, RIGHT)",
            "Common Table Expressions (CTEs)",
            "Views, Procedures & Performance Tuning"
          ]
        }
      ],
      roadmap: [
        {
          step: "01",
          title: "Advanced Excel & Statistical Foundations",
          desc: "Start with Excel commands, formulas, formatting, and key statistics like averages, deviations, and trends to build your data intuition."
        },
        {
          step: "02",
          title: "SQL Querying & Database Management",
          desc: "Learn relational database layouts and master SQL commands to query, filter, and extract insights from millions of commercial transactions."
        },
        {
          step: "03",
          title: "Dashboard Design in Power BI & Tableau",
          desc: "Connect your SQL databases or Excel logs directly to Power BI and Tableau. Build responsive dashboards that reveal visual business insights instantly."
        },
        {
          step: "04",
          title: "KPI Definition & Business Case Analysis",
          desc: "Learn how modern executives think. Translate database values into Key Performance Indicators (KPIs) like customer acquisition costs or operational yields."
        },
        {
          step: "05",
          title: "Executive Portfolio Presentation & Mock Interviews",
          desc: "Host your active dashboards on cloud portals, prepare a polished presentation portfolio, and practice answering business intelligence design questions."
        }
      ],
      careers: [
        {
          role: "Business Intelligence Analyst",
          salary: "₹5,00,000 - ₹9,50,000 / Year",
          demand: "Very High",
          desc: "Focuses on designing interactive BI reports, establishing metrics, and presenting business performance evaluations directly to managers."
        },
        {
          role: "Data Reporting Specialist",
          salary: "₹4,00,000 - ₹7,00,000 / Year",
          demand: "High",
          desc: "Responsible for consolidating data sources, generating weekly performance decks, and ensuring operational figures remain aligned."
        },
        {
          role: "Senior Data Analyst",
          salary: "₹8,50,000 - ₹14,00,000 / Year",
          demand: "Exponential",
          desc: "Leads database integration strategies, reviews analytics architectures, and models critical corporate metrics for executive strategy."
        }
      ]
    },
    cloud: {
      id: "cloud",
      title: "AWS Cloud & DevOps",
      badge: "AWS & DEVOPS HANDBOOK",
      headline: "AWS Cloud & DevOps Engineering | Infrastructure & Automation",
      introTitle: "Why are Cloud Services & DevOps Paramount?",
      introDesc: "In the modern digital age, applications must run with zero downtime and serve millions of global requests instantly. AWS Cloud provides the secure virtual hardware, while DevOps practices automate the packaging and deployment of code updates, eliminating manual human errors.",
      introQuote: "DevOps is not just a set of tools, it is a cultural philosophy that unifies development, operations, and cloud security for high-speed delivery.",
      introImage: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop",
      avatarText: "AWS Multi-Region Serverless Deployment Diagram",
      salaryStat: "₹6.5 Lakhs / Year",
      salaryLabel: "Average Starting Salary",
      salarySub: "For junior DevOps and Cloud infrastructure associates.",
      jobsStat: "85,000+ Active",
      jobsLabel: "Job Openings (India)",
      jobsSub: "In high demand by cloud-native SaaS enterprises.",
      skillsStat: "AWS, Docker, CI/CD",
      skillsLabel: "Principal Technologies",
      skillsSub: "Enterprise automation & containerization.",
      pillars: [
        {
          id: "aws_core",
          icon: <Cloud className="w-5 h-5 text-amber-500" />,
          title: "AWS Cloud Infrastructure",
          desc: "Build global virtual architectures. Learn compute servers (EC2), scalable storage (S3), relational cloud databases (RDS), secure networks (VPC), and serverless systems.",
          points: [
            "EC2 Instance Deployment & Load Balancing",
            "VPC Subnets, Route Tables & Security Groups",
            "S3 Bucket Policies & Object Management",
            "IAM Roles, Groups, and Fine-Grained Permissions"
          ]
        },
        {
          id: "docker",
          icon: <Terminal className="w-5 h-5 text-amber-500" />,
          title: "Containerization & Microservices",
          desc: "Package applications with all their dependencies so they run reliably on any server. Master Docker configurations, custom layers, and isolated networks.",
          points: [
            "Writing Clean & Secure Dockerfiles",
            "Multi-container Coordination with Compose",
            "Docker Network Topologies & Volumes",
            "Container Security & Image Registry Management"
          ]
        },
        {
          id: "cicd",
          icon: <Shield className="w-5 h-5 text-amber-500" />,
          title: "DevOps Automated Pipelines",
          desc: "Eliminate manual deployments. Build continuous integration and deployment pipelines using GitHub Actions to automatically test, compile, and deploy software updates.",
          points: [
            "Linux Systems Administration & Bash Scripting",
            "GitHub Actions YAML Workflow Configuration",
            "Continuous Integration (CI) Auto-Testing",
            "Continuous Deployment (CD) Blue-Green Pipelines"
          ]
        }
      ],
      roadmap: [
        {
          step: "01",
          title: "Linux Commands & Bash Scripting Essentials",
          desc: "Learn how to operate Linux terminal systems. Master permissions, system files, network checks, and write automation scripts using Bash."
        },
        {
          step: "02",
          title: "AWS Core Infrastructure & Cloud Security",
          desc: "Design robust virtual networks in Amazon Web Services. Deploy virtual servers, secure them with firewalls, and route global domain traffic safely."
        },
        {
          step: "03",
          title: "Docker Containerization & Microservices",
          desc: "Convert local web applications into Docker container images. Learn image size optimization, custom volumes, and coordinate multi-service stacks."
        },
        {
          step: "04",
          title: "Automated Pipelines with GitHub Actions & CI/CD",
          desc: "Write automation workflows. Configure servers to pull the latest code, execute testing suites, and rebuild containers automatically upon git commits."
        },
        {
          step: "05",
          title: "Infrastructure as Code (IaC) & Production Deployment",
          desc: "Learn to deploy real projects to secure AWS environments, monitor server resources, configure logs, and practice resolving real server downtime events."
        }
      ],
      careers: [
        {
          role: "DevOps Engineer",
          salary: "₹8,00,000 - ₹15,00,000 / Year",
          demand: "Very High",
          desc: "Automates developer code deployment, designs testing pipelines, maintains continuous server uptime, and supervises system integrations."
        },
        {
          role: "Cloud Solutions Architect",
          salary: "₹9,00,000 - ₹18,00,000 / Year",
          demand: "High",
          desc: "Designs the overall structure of cloud servers, chooses appropriate storage formats, and manages security policies for organizations."
        },
        {
          role: "Cloud Systems Administrator",
          salary: "₹5,00,000 - ₹9,00,000 / Year",
          demand: "High",
          desc: "Monitors daily cloud resource performance, configures firewalls, balances server loads, and provisions user login credentials."
        }
      ]
    },
    networking: {
      id: "networking",
      title: "CCNA Networking",
      badge: "CCNA NETWORK HANDBOOK",
      headline: "Enterprise Networking | Cisco CCNA & Infrastructure",
      introTitle: "Why is Enterprise Networking Crucial?",
      introDesc: "None of the cloud services, data centers, or internet applications can exist without the underlying routers, switches, and firewalls. Networking engineers design the local and global pathways that transmit critical gigabytes of data securely with maximum speed.",
      introQuote: "A network is the lifeblood of any modern business. When the network is down, the business stops completely.",
      introImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
      avatarText: "Enterprise Core Router Configurations",
      salaryStat: "₹4.5 Lakhs / Year",
      salaryLabel: "Average Starting Salary",
      salarySub: "For network administrators and Cisco-certified engineers.",
      jobsStat: "55,000+ Active",
      jobsLabel: "Job Openings (India)",
      jobsSub: "Across telecom companies, banks, and enterprise data centers.",
      skillsStat: "Routing, VLANs, CCNA",
      skillsLabel: "Core Competencies",
      skillsSub: "Cisco device configuration & packet routing.",
      pillars: [
        {
          id: "ip_subnetting",
          icon: <Network className="w-5 h-5 text-amber-500" />,
          title: "IP Addressing & Subnetting",
          desc: "Learn how the internet and private networks are organized. Master IP allocation, IPv4/IPv6 address designs, and division of corporate subnets.",
          points: [
            "IPv4 Binary Mathematics & Subnet Masks",
            "CIDR Notation & Variable Length Subnet Masking (VLSM)",
            "IPv6 Global Unicast Address Layouts",
            "Default Gateway Concepts & Private IP Blocks"
          ]
        },
        {
          id: "routing_switching",
          icon: <Terminal className="w-5 h-5 text-amber-500" />,
          title: "Routing & Switching Topologies",
          desc: "Configure enterprise-grade Cisco routers and switches. Learn VLAN segmentation, OSPF routing algorithms, and switch communication trunks.",
          points: [
            "VLAN Configuration & Inter-VLAN Routing",
            "Trunking Protocols (802.1Q) & Spanning Tree (STP)",
            "OSPFv2 Single-Area Routing & Path Calculations",
            "Router-on-a-Stick & Layer 3 Switch Interfaces"
          ]
        },
        {
          id: "network_security",
          icon: <Shield className="w-5 h-5 text-amber-500" />,
          title: "Network Security & Automation",
          desc: "Secure networks against unauthorized access. Configure Access Control Lists (ACLs), secure device ports, and explore network auto-provisioning.",
          points: [
            "Standard & Extended Access Control Lists (ACLs)",
            "Device Hardening, SSH & Switch Port Security",
            "WPA2/WPA3 Wireless Network Configurations",
            "Introduction to Network Automation & SDN Controllers"
          ]
        }
      ],
      roadmap: [
        {
          step: "01",
          title: "Network Basics & OSI/TCP-IP Models",
          desc: "Learn how data is packaged, encapsulated, and sent over cables or airwaves. Study the 7-layer OSI model and 4-layer TCP/IP models."
        },
        {
          step: "02",
          title: "IPv4/IPv6 Subnetting & Address Allocation",
          desc: "Become proficient in binary calculations. Divide IP ranges into subnets to prevent network overload and ensure optimal performance."
        },
        {
          step: "03",
          title: "Switching Protocols, VLANs, and Inter-VLAN Routing",
          desc: "Learn switches. Group office departments into separate Virtual Local Area Networks (VLANs) and route packets between them."
        },
        {
          step: "04",
          title: "Dynamic Routing Protocols (OSPF) & Security ACLs",
          desc: "Configure routers to dynamically learn the best paths. Write firewall security rules (ACLs) to block malicious traffic patterns."
        },
        {
          step: "05",
          title: "Device Monitoring, Network Automation & Practice Exams",
          desc: "Master packet trace applications, configure network monitoring alerts, and take Cisco CCNA practice tests to achieve global certification."
        }
      ],
      careers: [
        {
          role: "Network Engineer",
          salary: "₹5,00,000 - ₹10,00,000 / Year",
          demand: "High",
          desc: "Designs company network structures, installs switches and routers, runs configuration diagnostics, and resolves latency issues."
        },
        {
          role: "Systems & Network Administrator",
          salary: "₹4,50,000 - ₹8,50,000 / Year",
          demand: "Very High",
          desc: "Supervises server hardware, ensures internal local networks are active, updates switch operating systems, and manages active ports."
        },
        {
          role: "Network Security Specialist",
          salary: "₹7,00,000 - ₹13,00,000 / Year",
          demand: "Exponential",
          desc: "Focuses on deploying physical firewalls, setting up access control policies, audit configurations, and detecting network threats."
        }
      ]
    }
  };

  const currentCourse = coursesData[activeCourse];

  return (
    <div id="tamil-guide-container" className="py-12 sm:py-20 lg:py-24 bg-white border-b border-zinc-200 overflow-hidden font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-xs text-zinc-500 font-mono">
          <BookOpen className="w-4 h-4 text-amber-500" />
          <span>CAREER GUIDES</span>
          <ChevronRight className="w-3 h-3 text-zinc-300" />
          <span className="text-zinc-800 font-semibold">{currentCourse.title.toUpperCase()} GUIDE</span>
        </div>

        {/* Dynamic Specialization Selector Tabs */}
        <div className="mb-10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-3 font-semibold">
            EXPLORE TECHNOLOGY DOMAINS:
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-zinc-50 p-1.5 rounded-xl border border-zinc-200">
            {[
              { id: "ds", label: "Data Science", icon: <Cpu className="w-3.5 h-3.5" /> },
              { id: "da", label: "Data Analytics", icon: <BarChart3 className="w-3.5 h-3.5" /> },
              { id: "cloud", label: "AWS Cloud & DevOps", icon: <Cloud className="w-3.5 h-3.5" /> },
              { id: "networking", label: "CCNA Networking", icon: <Network className="w-3.5 h-3.5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCourse(tab.id as any);
                  setActiveSection("intro"); // Reset nested section to intro on course tab switch
                }}
                className={`flex items-center justify-center gap-2 px-3 py-3 text-[11px] font-mono font-bold tracking-wider rounded-lg border transition-all uppercase cursor-pointer ${
                  activeCourse === tab.id
                    ? "bg-zinc-900 text-white border-zinc-900 shadow-xs"
                    : "bg-transparent text-zinc-600 border-transparent hover:bg-zinc-100 hover:text-zinc-950"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Editorial Header */}
        <div className="border-b border-zinc-200 pb-10 mb-12 flex flex-col items-center text-center">
          <span className="font-mono text-[10px] text-amber-800 font-bold tracking-widest uppercase block mb-4 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full w-fit">
            {currentCourse.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-6 max-w-3xl">
            {currentCourse.headline}
          </h1>
          <p className="text-zinc-650 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            {currentCourse.introDesc}
          </p>
        </div>

        {/* Fast Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-12 py-6 border-b border-zinc-200">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">{currentCourse.salaryLabel}</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">{currentCourse.salaryStat}</div>
            <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed font-light">{currentCourse.salarySub}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">{currentCourse.jobsLabel}</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">{currentCourse.jobsStat}</div>
            <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed font-light">{currentCourse.jobsSub}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">{currentCourse.skillsLabel}</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">{currentCourse.skillsStat}</div>
            <p className="text-zinc-500 text-xs mt-1.5 leading-relaxed font-light">{currentCourse.skillsSub}</p>
          </div>
        </div>

        {/* Quick Links Menu for Easy Navigation */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-zinc-100">
          <button 
            onClick={() => setActiveSection("intro")} 
            className={`px-4 py-2 text-xs font-mono font-bold tracking-wider rounded border transition-all uppercase cursor-pointer ${activeSection === "intro" ? "bg-zinc-950 text-white border-zinc-950" : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100 border-zinc-200"}`}
          >
            1. Why This Field?
          </button>
          <button 
            onClick={() => setActiveSection("pillars")} 
            className={`px-4 py-2 text-xs font-mono font-bold tracking-wider rounded border transition-all uppercase cursor-pointer ${activeSection === "pillars" ? "bg-zinc-950 text-white border-zinc-950" : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100 border-zinc-200"}`}
          >
            2. Core Pillars
          </button>
          <button 
            onClick={() => setActiveSection("roadmap")} 
            className={`px-4 py-2 text-xs font-mono font-bold tracking-wider rounded border transition-all uppercase cursor-pointer ${activeSection === "roadmap" ? "bg-zinc-950 text-white border-zinc-950" : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100 border-zinc-200"}`}
          >
            3. Learning Roadmap
          </button>
          <button 
            onClick={() => setActiveSection("careers")} 
            className={`px-4 py-2 text-xs font-mono font-bold tracking-wider rounded border transition-all uppercase cursor-pointer ${activeSection === "careers" ? "bg-zinc-950 text-white border-zinc-950" : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100 border-zinc-200"}`}
          >
            4. Careers & Salaries
          </button>
          <button 
            onClick={() => setActiveSection("compare")} 
            className={`px-4 py-2 text-xs font-mono font-bold tracking-wider rounded border transition-all uppercase cursor-pointer ${activeSection === "compare" ? "bg-zinc-950 text-white border-zinc-950" : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100 border-zinc-200"}`}
          >
            5. Course Comparison (ஒப்பீடு)
          </button>
        </div>

        {/* Content Section: 1. Why This Field? */}
        {activeSection === "intro" && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-zinc-950">{currentCourse.introTitle}</h2>
            
            <p className="text-zinc-600 text-sm leading-relaxed font-light">
              {currentCourse.introDesc}
            </p>

            <div className="bg-amber-50 border-l-4 border-[#F5B400] p-4 rounded-r-lg my-6">
              <p className="text-amber-900 text-xs sm:text-sm font-medium leading-relaxed italic">
                "{currentCourse.introQuote}"
              </p>
            </div>

            <p className="text-zinc-650 text-sm leading-relaxed font-light">
              Across leading technology hubs like Chennai, Coimbatore, and Bengaluru, thousands of enterprises actively hire professionals in these specializations. 
              This drives an unprecedented demand for certified talent. Even if you don't come from a computer science background, 
              structured learning and hands-on practice can pave your way into this high-growth field.
            </p>

            <div className="overflow-hidden rounded-xl bg-zinc-100 relative aspect-[21/9] my-8 border border-zinc-200">
              <img 
                src={currentCourse.introImage} 
                alt={currentCourse.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-mono text-[10px] uppercase tracking-wider">
                {currentCourse.avatarText}
              </div>
            </div>
          </motion.div>
        )}

        {/* Content Section: 2. Core Pillars */}
        {activeSection === "pillars" && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-zinc-950">The Core Pillars of {currentCourse.title}</h2>
            <p className="text-zinc-650 text-sm leading-relaxed font-light">
              To build a successful career in {currentCourse.title.toLowerCase()}, you must master these fundamental technologies:
            </p>

            <div className="space-y-12 mt-8">
              {currentCourse.pillars.map((pillar) => (
                <div key={pillar.id} className="border-b border-zinc-200/80 pb-10 last:border-0">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-[#F5B400]">
                      {pillar.icon}
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 tracking-tight">{pillar.title}</h3>
                  </div>
                  <p className="text-zinc-650 text-sm leading-relaxed font-light mb-5">
                    {pillar.desc}
                  </p>
                  <div className="mt-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-3 font-semibold">Key Topics to Study:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                      {pillar.points.map((pt, i) => (
                        <li key={i} className="flex items-center gap-2 text-zinc-700 text-xs font-light">
                          <CheckCircle className="w-4 h-4 text-[#F5B400] flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Content Section: 3. Roadmap */}
        {activeSection === "roadmap" && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-zinc-950">Step-by-Step Learning Roadmap</h2>
            <p className="text-zinc-650 text-sm leading-relaxed font-light">
              Here are the 5 critical phases designed to take a beginner from absolute zero to an industry-ready professional in {currentCourse.title}:
            </p>

            <div className="relative border-l-2 border-zinc-200 pl-6 sm:pl-8 ml-4 sm:ml-6 mt-10 space-y-10">
              {currentCourse.roadmap.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Indicator Dot */}
                  <div className="absolute -left-[35px] sm:-left-[43px] top-0.5 w-6 h-6 rounded-full bg-amber-50 border-2 border-amber-500 text-amber-700 font-mono text-[10px] font-bold flex items-center justify-center shadow-xs">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-1">{step.title}</h3>
                    <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Content Section: 4. Careers & Salaries */}
        {activeSection === "careers" && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-zinc-950">Careers & Salary Outlook</h2>
            <p className="text-zinc-650 text-sm leading-relaxed font-light">
              The demand for qualified {currentCourse.title.toLowerCase()} professionals is growing at an unprecedented rate across major technology corridors. 
              Here is an overview of key job roles, average salaries, and career demand:
            </p>

            <div className="space-y-8 mt-8">
              {currentCourse.careers.map((role, idx) => (
                <div key={idx} className="border-b border-zinc-200/80 pb-8 last:border-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono bg-zinc-100 px-2 py-0.5 rounded text-zinc-800 font-bold uppercase">Role {idx+1}</span>
                      <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight">{role.role}</h3>
                    </div>
                    <span className="text-[10px] font-mono text-amber-700 font-bold tracking-wider uppercase bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Demand: {role.demand}</span>
                  </div>
                  <p className="text-zinc-600 text-sm font-light leading-relaxed mb-4">
                    {role.desc}
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Average Salary (South India):</span>
                    <strong className="text-sm font-bold text-zinc-900">{role.salary}</strong>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-200 pt-8 mt-10">
              <h3 className="text-base font-bold text-zinc-950 mb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#F5B400]" />
                Can Non-IT Students Transition into this Field?
              </h3>
              <p className="text-zinc-650 text-xs sm:text-sm font-light leading-relaxed">
                Yes, absolutely. A significant percentage of our successful alumni come from non-IT backgrounds like Mechanical Engineering, Commerce (B.Com), and general sciences (B.Sc). 
                With dedicated guidance, structured curriculum, and persistent effort, anyone can successfully transition into a rewarding tech career.
              </p>
            </div>
          </motion.div>
        )}

        {/* Content Section: 5. Course Comparison (ஒப்பீடு) */}
        {activeSection === "compare" && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-zinc-950">Compare Programs | பாடப்பிரிவுகள் ஒப்பீடு</h2>
            <p className="text-zinc-650 text-sm leading-relaxed font-light">
              எங்கள் 4 முக்கிய பாடப்பிரிவுகளின் (Courses) ஒப்பீட்டு விவரங்கள் கீழே கொடுக்கப்பட்டுள்ளன. உங்கள் எதிர்கால நோக்கத்திற்கு ஏற்ற சரியான பாதையைத் தேர்வு செய்யுங்கள். 
              (Browse side-by-side details of our flagship career tracks to select your perfect path).
            </p>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto bg-zinc-50 border border-zinc-200 rounded-xl mt-6">
              <table className="w-full text-left border-collapse table-fixed">
                <thead>
                  <tr className="bg-zinc-100 border-b border-zinc-200 text-zinc-500 font-mono text-[10px] tracking-wider uppercase">
                    <th className="p-4 w-1/5">வகை (Criteria)</th>
                    <th className="p-4 w-1/5 border-l border-zinc-200">Data Science</th>
                    <th className="p-4 w-1/5 border-l border-zinc-200">Data Analytics</th>
                    <th className="p-4 w-1/5 border-l border-zinc-200">AWS Cloud & DevOps</th>
                    <th className="p-4 w-1/5 border-l border-zinc-200">CCNA Networking</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 text-xs">
                  {/* Row 1: Focus */}
                  <tr className="hover:bg-zinc-100/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-zinc-700">
                      முதன்மை நோக்கம் <span className="block text-[10px] text-zinc-400 font-light">Primary Focus</span>
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-light leading-relaxed text-zinc-650">
                      Machine Learning, AI மாடல்கள் மற்றும் கணித வழிமுறைகளை (algorithms) பயன்படுத்தி எதிர்கால தேவைகளை கணிப்பது.
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-light leading-relaxed text-zinc-650">
                      நிறுவனங்களின் தரவுகளை (data) சுத்தம் செய்து, வரைபடங்கள் மற்றும் டாஷ்போர்டுகள் மூலம் பிசினஸ் முடிவுகளை எடுக்க உதவுவது.
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-light leading-relaxed text-zinc-650">
                      சர்வர் கட்டமைப்புகள், கிளவுட் நெட்வொர்க் மற்றும் கோடிங் ஃபைல்களை தானியங்கி முறையில் நிர்வகிப்பது.
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-light leading-relaxed text-zinc-650">
                      கணினி நெட்வொர்க்குகளை வடிவமைப்பது, ரவுட்டர்கள் மற்றும் சுவிட்சுகளை கான்பிகர் செய்து பாதுகாப்பான நெட்வொர்க் உருவாக்குவது.
                    </td>
                  </tr>

                  {/* Row 2: Duration */}
                  <tr className="hover:bg-zinc-100/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-zinc-700">
                      கால அளவு <span className="block text-[10px] text-zinc-400 font-light">Duration</span>
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-mono font-bold text-zinc-800">
                      6 Months (240+ Hours)
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-mono font-bold text-zinc-800">
                      4 Months (160+ Hours)
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-mono font-bold text-zinc-800">
                      3 Months (120+ Hours)
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-mono font-bold text-zinc-800">
                      3 Months (120+ Hours)
                    </td>
                  </tr>

                  {/* Row 3: Coding level */}
                  <tr className="hover:bg-zinc-100/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-zinc-700">
                      கோடிங் தேவை <span className="block text-[10px] text-zinc-400 font-light">Coding Level</span>
                    </td>
                    <td className="p-4 border-l border-zinc-200">
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-bold text-[10px] border border-amber-200">Python Intermediate</span>
                    </td>
                    <td className="p-4 border-l border-zinc-200">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold text-[10px] border border-emerald-200">Beginner Friendly</span>
                    </td>
                    <td className="p-4 border-l border-zinc-200">
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-bold text-[10px] border border-blue-200">Beginner to Mid</span>
                    </td>
                    <td className="p-4 border-l border-zinc-200">
                      <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-800 font-bold text-[10px] border border-zinc-200">No Coding Required</span>
                    </td>
                  </tr>

                  {/* Row 4: Tools */}
                  <tr className="hover:bg-zinc-100/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-zinc-700">
                      முக்கிய கருவிகள் <span className="block text-[10px] text-zinc-400 font-light">Core Tools</span>
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-light">
                      Python, SQL, Scikit-Learn, PyTorch, Pandas, NumPy, Hugging Face
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-light">
                      Power BI, Tableau, Excel, SQL, PostgreSQL
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-light">
                      AWS, Terraform, Docker, Kubernetes, Linux, Git
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-light">
                      Cisco Routers, Cisco Switches, Wireshark, Packet Tracer
                    </td>
                  </tr>

                  {/* Row 5: Salary */}
                  <tr className="hover:bg-zinc-100/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-zinc-700">
                      சராசரி சம்பளம் <span className="block text-[10px] text-zinc-400 font-light">Avg Salary</span>
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-mono font-bold text-emerald-700">
                      ₹5.5L - ₹12L / Year
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-mono font-bold text-emerald-700">
                      ₹4.5L - ₹8L / Year
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-mono font-bold text-emerald-700">
                      ₹5.0L - ₹10L / Year
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-mono font-bold text-emerald-700">
                      ₹4.0L - ₹8.5L / Year
                    </td>
                  </tr>

                  {/* Row 6: Project */}
                  <tr className="hover:bg-zinc-100/50 transition-colors">
                    <td className="p-4 font-mono font-bold text-zinc-700">
                      இறுதி ப்ராஜெக்ட் <span className="block text-[10px] text-zinc-400 font-light">Capstone Project</span>
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-light leading-relaxed text-zinc-650">
                      Predictive Churn Engine & AI-powered Customer Support Assistant.
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-light leading-relaxed text-zinc-650">
                      Multi-department Sales Performance KPI Live Dashboard.
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-light leading-relaxed text-zinc-650">
                      Automated Infrastructure deployment using Terraform with Docker clusters.
                    </td>
                    <td className="p-4 border-l border-zinc-200 font-light leading-relaxed text-zinc-650">
                      Multi-subnet Secure Office Network Infrastructure Design & CCNA Diagnostics.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Cards View */}
            <div className="block md:hidden space-y-6 mt-6">
              {[
                {
                  title: "Data Science (டேட்டா சயின்ஸ்)",
                  duration: "6 Months",
                  focus: "Machine Learning, AI மாடல்கள் மற்றும் கணித வழிமுறைகளை (algorithms) பயன்படுத்தி எதிர்கால தேவைகளை கணிப்பது.",
                  coding: "Python (Intermediate)",
                  tools: "Python, SQL, Scikit-Learn, PyTorch, Pandas, NumPy, Hugging Face",
                  salary: "₹5.5L - ₹12L / Year",
                  project: "Predictive Churn Engine & AI-powered Customer Support Assistant."
                },
                {
                  title: "Data Analytics (டேட்டா அனலிடிக்ஸ்)",
                  duration: "4 Months",
                  focus: "நிறுவனங்களின் தரவுகளை (data) சுத்தம் செய்து, வரைபடங்கள் மற்றும் டாஷ்போர்டுகள் மூலம் பிசினஸ் முடிவுகளை எடுக்க உதவுவது.",
                  coding: "Beginner Friendly (Excel/SQL)",
                  tools: "Power BI, Tableau, Excel, SQL, PostgreSQL",
                  salary: "₹4.5L - ₹8L / Year",
                  project: "Multi-department Sales Performance KPI Live Dashboard."
                },
                {
                  title: "AWS Cloud & DevOps (AWS கிளவுட் & டெவப்ஸ்)",
                  duration: "3 Months",
                  focus: "சர்வர் கட்டமைப்புகள், கிளவுட் நெட்வொர்க் மற்றும் கோடிங் ஃபைல்களை தானியங்கி முறையில் நிர்வகிப்பது.",
                  coding: "Beginner to Intermediate",
                  tools: "AWS, Terraform, Docker, Kubernetes, Linux, Git",
                  salary: "₹5.0L - ₹10L / Year",
                  project: "Automated Infrastructure deployment using Terraform with Docker clusters."
                },
                {
                  title: "CCNA Networking (CCNA நெட்வொர்க்கிங்)",
                  duration: "3 Months",
                  focus: "கணினி நெட்வொர்க்குகளை வடிவமைப்பது, ரவுட்டர்கள் மற்றும் சுவிட்சுகளை கான்பிகர் செய்து பாதுகாப்பான நெட்வொர்க் உருவாக்குவது.",
                  coding: "No Coding Required",
                  tools: "Cisco Routers, Cisco Switches, Wireshark, Packet Tracer",
                  salary: "₹4.0L - ₹8.5L / Year",
                  project: "Multi-subnet Secure Office Network Infrastructure Design & CCNA Diagnostics."
                }
              ].map((c, i) => (
                <div key={i} className="bg-zinc-50 border border-zinc-200 rounded-xl p-5 space-y-4">
                  <div className="flex justify-between items-start border-b border-zinc-200 pb-3">
                    <div>
                      <h3 className="font-bold text-sm text-zinc-950 font-sans">{c.title}</h3>
                      <span className="text-[9px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-full inline-block mt-1">
                        {c.duration}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3.5 text-xs">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-zinc-400 block uppercase">முதன்மை நோக்கம் (Primary Focus)</span>
                      <p className="text-zinc-650 mt-0.5 leading-relaxed font-light">{c.focus}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-zinc-400 block uppercase">கோடிங் தேவை (Coding)</span>
                      <p className="text-zinc-800 font-bold font-mono mt-0.5">{c.coding}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-zinc-400 block uppercase">கருவிகள் (Tools)</span>
                      <p className="text-zinc-750 font-mono mt-0.5">{c.tools}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-zinc-400 block uppercase">சம்பள வரம்பு (Avg Salary)</span>
                      <p className="text-emerald-700 font-bold font-mono mt-0.5">{c.salary}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-zinc-400 block uppercase">ப்ராஜெக்ட் (Capstone Project)</span>
                      <p className="text-zinc-650 mt-0.5 leading-relaxed font-light">{c.project}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-200 pt-8 mt-10 text-center">
              <h3 className="text-base font-bold text-zinc-950 mb-3">உங்களுக்கு எந்தப் படிப்பு சரியானது என்று தெரியவில்லையா?</h3>
              <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto mb-6">
                எங்கள் துறை வல்லுநர்களுடன் இலவசமாகப் பேசி, உங்கள் பின்னணிக்கு ஏற்ற சிறந்த படிப்பு மற்றும் வேலைவாய்ப்புகளைப் பற்றி அறிந்து கொள்ளுங்கள்.
              </p>
              <button 
                onClick={onApplyClick}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#F5B400] text-black rounded-lg font-bold hover:bg-black hover:text-white transition-colors duration-200 font-mono text-xs uppercase tracking-wider cursor-pointer mx-auto"
              >
                <span>இலவச ஆலோசனை பெறுக</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Lead Generation & Call to Action (CTA) */}
        <div className="mt-16 bg-[#050505] text-white rounded-2xl p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <span className="font-mono text-[10px] text-amber-400 font-bold tracking-widest uppercase block mb-3">
              FAST-TRACK YOUR TECH JOURNEY
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Launch Your Career in tech with Skill Forge!
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-8">
              Enroll in our industry-accredited <strong>{currentCourse.title} Specialization</strong>. Learn directly from enterprise mentors, 
              master the essential tool stacks, and build a competitive job portfolio. 
              Get direct mentorship, financial assistance through scholarships, and premium placement support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onApplyClick}
                className="px-6 py-3 bg-[#F5B400] text-black rounded-lg font-bold hover:bg-white hover:text-black transition-colors duration-200 font-mono text-xs uppercase tracking-wider cursor-pointer text-center"
              >
                Get Free Career Consultation
              </button>
              <button 
                onClick={() => {
                  setActiveSection("roadmap");
                  const element = document.getElementById("tamil-guide-container");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-6 py-3 border border-zinc-700 hover:border-white rounded-lg font-bold text-white transition-colors duration-200 font-mono text-xs uppercase tracking-wider cursor-pointer text-center"
              >
                View Roadmap
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
