import { Award, Briefcase, Calendar, MapPin } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company: "Asuitech Solutions Inc.",
    position: ".NET Developer",
    duration: "Aug 2025 - Present",
    location: "Houston, Texas, USA - 77090",
    description:
      "Developing and maintaining enterprise-grade backend services and distributed systems using C#, .NET Core, and ASP.NET Core Web API, with a focus on scalability, data integrity, and operational efficiency across production environments on Azure.",
    achievement: [
      "Designed and optimized SQL Server stored procedures and ETL data pipelines, automating data ingestion and validation workflows across 5+ cross-functional teams.",
      "Integrated ServiceNow for end-to-end incident management, tracking and resolving production issues with structured root cause analysis and corrective action documentation.",
      "Cut mean time to resolution by 25% through Splunk log correlation, proactive monitoring with OpenTelemetry, and systematic incident retrospectives.",
      "Deployed and maintained distributed enterprise applications on Azure App Services via CI/CD pipelines using GitHub Actions and Azure DevOps.",
      "Documented system workflows, API specifications, and runbooks in Confluence and Jira, standardizing best practices across engineering and operations teams.",
    ],
    skills: [
      "C#", ".NET Core", "ASP.NET Core Web API", "SQL Server", "Python",
      "Azure", "Docker", "Kubernetes", "GitHub Actions", "Splunk",
      "OpenTelemetry", "ServiceNow", "Jira", "Confluence",
    ],
  },
  {
    company: "Midwestern State University",
    position: "AI Full Stack Engineer",
    duration: "Jan 2025 - May 2025",
    location: "Wichita Falls, Texas, USA - 76308",
    description:
      "Led end-to-end design, development, and deployment of SwipeIn, a student-facing dining intelligence platform built in React Native, deployed across web, iOS, and Android. The platform tracks real-time student transactions, meal plans, swipe activity, and flex dollar balances for thousands of campus users, powered by ML forecasting and a generative AI assistant.",
    achievement: [
      "Architected and shipped SwipeIn across web, iOS, and Android using React Native, FastAPI, and SQL Server, delivering real-time transaction tracking and role-differentiated dashboards for students, staff, and administrators.",
      "Built a production RAG assistant using LangChain and OpenAI GPT API with FAISS vector store, automating student dining queries and reducing manual operational interventions by 40%.",
      "Developed LSTM and ARIMA forecasting models using TensorFlow/Keras and Python, achieving under 8% MAPE for demand prediction and resource optimization.",
      "Deployed cloud-native infrastructure on AWS (EC2, RDS, S3, Lambda) using Docker, Kubernetes, Terraform, and GitHub Actions CI/CD with real-time monitoring and analytics dashboards.",
      "Presented SwipeIn at the North Texas Area Student Conference, demonstrating measurable campus impact.",
    ],
    skills: [
      "React Native", "FastAPI", "Python", "SQL Server", "TensorFlow/Keras",
      "LangChain", "OpenAI GPT API", "FAISS", "LSTM", "ARIMA",
      "AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions",
    ],
  },
  {
    company: "Midwestern State University",
    position: "Machine Learning Engineer",
    duration: "Aug 2024 - Dec 2024",
    location: "Wichita Falls, Texas, USA - 76308",
    description:
      "Built an end-to-end clinical ML pipeline to predict heart attack risk from 5,000+ patient records using Python, scikit-learn, and TensorFlow/Keras. Deployed the model as a production-ready FastAPI REST API with automated testing, MLflow experiment tracking, and systematic evaluation across 15+ iterations.",
    achievement: [
      "Achieved 94.7% predictive accuracy on 5,000+ clinical records through systematic feature engineering, preprocessing, and hyperparameter tuning.",
      "Improved AUC-ROC by 12% over the logistic regression baseline by designing and fine-tuning a deep neural network with dropout, L2 regularization, and ReLU activations.",
      "Tracked 15+ model iterations using MLflow for experiment management, model versioning, and performance comparison, enabling reproducible and auditable ML workflows.",
      "Deployed the trained model as a FastAPI REST API with automated validation pipelines enforcing prediction accuracy and response latency standards.",
      "Applied comprehensive evaluation techniques including confusion matrices, ROC-AUC curves, and classification reports to validate model reliability and clinical interpretability.",
    ],
    skills: [
      "Python", "scikit-learn", "TensorFlow/Keras", "FastAPI",
      "MLflow", "Pandas", "NumPy", "Matplotlib", "Seaborn",
      "REST APIs", "NUnit", "AWS SageMaker",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    position: "Software Engineer - .NET Developer",
    duration: "Aug 2021 - Jul 2023",
    location: "Hyderabad, Telangana, India - 500056",
    description:
      "Developed and supported enterprise insurance backend services for National Life Group, a Fortune 500 life insurer. Owned end-to-end SDLC validation across agent, customer, and plan admin policy systems, ensuring zero-defect production deployments and high data integrity across financial and policyholder data.",
    achievement: [
      "Resolved 100+ weekly P1-P4 incidents via ServiceNow, cutting resolution time by 40% through root cause analysis, Splunk log correlation, and structured corrective action documentation.",
      "Owned end-to-end UAT validation for insurance backend services, signing off every code change before production to ensure zero-defect release cycles.",
      "Reduced post-deployment defects by 60% by expanding NUnit automated test coverage and strengthening pre-release QA processes across all release cycles.",
      "Optimized backend APIs and SQL Server stored procedures for multi-table policyholder, payment, and annuity queries, cutting API response times by 25%.",
      "Integrated Auth0 for multi-portal authentication and Splunk for production monitoring, strengthening system security and achieving 99.9% uptime across insurance platforms.",
    ],
    skills: [
      ".NET Core", "C#", "ASP.NET Web API", "Angular", "SQL Server",
      "NUnit", "Splunk", "Auth0", "Jenkins", "ServiceNow",
      "Jira", "Confluence", "Azure DevOps",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    position: "Programmer Analyst",
    duration: "Feb 2021 - Jul 2021",
    location: "Hyderabad, Telangana, India - 500056",
    description:
      "Developed and deployed a full-stack Library Management System using ASP.NET Web API, Angular, and SQL Server with EF Core (Code-First), OAuth 2.0 authentication, and RBAC. Delivered the system with high test coverage, optimized performance, and production-grade reliability.",
    achievement: [
      "Achieved 95% NUnit unit test coverage, reducing post-deployment defects by 60% through comprehensive automated testing across all API endpoints and business logic.",
      "Cut API response times by 25% through SQL query optimization, EF Core tuning, and targeted backend performance improvements.",
      "Accelerated sprint delivery by 40% by automating financial transaction processing workflows and record update pipelines.",
      "Maintained 99.9% uptime by deploying on Azure with proactive monitoring and alerting via Splunk across all microservice components.",
      "Implemented OAuth 2.0 authentication and role-based access control (RBAC), ensuring secure access management across student, librarian, and admin portals.",
    ],
    skills: [
      "ASP.NET Web API", "ASP.NET MVC", ".NET Framework",
      "Angular", "SQL Server", "Entity Framework Core",
      "OAuth 2.0", "NUnit", "Azure", "Splunk", "Microservices",
    ],
  },
];

// Isolated card component so IntersectionObserver targets individual refs
// instead of querying the DOM with querySelector (which is slow)
function ExperienceCard({ experience, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // stop watching once visible — no point continuing
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center mb-16 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      style={{
        // Single transform source — no Tailwind/inline conflict
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : isEven
            ? "translateX(-30px) translateY(16px)"
            : "translateX(30px) translateY(16px)",
        // Reduced delay, shorter duration
        transition: `opacity 0.45s ease ${index * 120}ms, transform 0.45s ease ${index * 120}ms`,
        willChange: "transform, opacity",
      }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-green-500 rounded-full border-4 border-slate-900 z-10 top-8"
        style={{
          transform: `translateX(-50%) scale(${visible ? 1 : 0})`,
          transition: `transform 0.3s ease ${index * 120 + 200}ms`,
        }}
      />

      {/* Card */}
      <div
        className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"}`}
      >
        <div
          className="
            border border-slate-700 rounded-2xl p-8
            bg-slate-900/80
            hover:border-primary
            hover:scale-[1.02]
            transition-transform duration-300
            group
          "
        // NO backdrop-blur — removed entirely, was the main GPU killer
        // NO shadow transition — shadows trigger repaints
        // Only transition: transform — stays on compositor thread
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-black group-hover:text-green-400 transition-colors duration-300">
                {experience.company}
              </h3>
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <Calendar className="w-4 h-4" />
                {experience.duration}
              </div>
            </div>
          </div>

          {/* Position */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-green-400 mb-1 group-hover:text-primary transition-colors duration-300">
              {experience.position}
            </h4>

            <br>
            </br>

            <div className="flex items-center gap-2 text-green-400 text-sm">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </div>
          </div>

          {/* Description */}
          <p className="mb-6 text-sm leading-relaxed text-slate-300 text-left">
            {experience.description}
          </p>

          {/* Achievements */}
          <div className="mb-6">
            <h5 className="font-semibold text-green-400 mb-3 flex items-center gap-2 text-left">
              <Award className="w-4 h-4" />
              Key Achievements
            </h5>
            <ul className="space-y-2 text-left">
              {experience.achievement.map((achv, i) => (
                <li key={i} className="text-sm flex items-start gap-3 text-slate-300 text-left">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0 text-left" />
                  {achv}
                </li>
              ))}
            </ul>
          </div>
          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-green-700/80 text-white text-xs font-semibold px-3 py-1 rounded-full hover:bg-primary transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-transparent relative overflow-hidden"
    >
      {/* Lightweight decorative background — no blur filters */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-900/10 rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900/10 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Work <span className="text-primary">Experience</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Static timeline line — no animation needed */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-500 via-green-400/60 to-transparent rounded-full" />

            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}