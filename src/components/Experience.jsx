import { Award, Briefcase, Calendar, MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";

export function Experience() {
  const [visibleItems, setVisibleItems] = useState([]);
  const [timelineVisible, setTimelineVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("timeline-item")) {
              setTimelineVisible(true);
            } else {
              const index = parseInt(entry.target.dataset.index);
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineElement = document.querySelector(".timeline-item");
    const experienceItems = document.querySelectorAll(".experience-item");
    if (timelineElement) observer.observe(timelineElement);
    experienceItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

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
      "Documented system workflows, API specifications, and runbooks in Confluence and Jira, standardizing best practices across engineering and operations teams."
    ],
    skills: [
      "C#", ".NET Core", "ASP.NET Core Web API", "SQL Server", "Python",
      "Azure", "Docker", "Kubernetes", "GitHub Actions", "Splunk",
      "OpenTelemetry", "ServiceNow", "Jira", "Confluence"
    ]
  },
  {
    company: "Midwestern State University",
    position: "AI Full Stack Engineer",
    duration: "Jan 2025 - May 2025",
    location: "Wichita Falls, Texas, USA - 76308",
    description:
      "Led end-to-end design, development, and deployment of SwipeIn — a student-facing dining intelligence platform built in React Native, deployed across web, iOS, and Android. The platform tracks real-time student transactions, meal plans, swipe activity, and flex dollar balances for thousands of campus users, powered by ML forecasting and a generative AI assistant.",
    achievement: [
      "Architected and shipped SwipeIn across web, iOS, and Android using React Native, FastAPI, and SQL Server, delivering real-time transaction tracking and role-differentiated dashboards for students, staff, and administrators.",
      "Built a production RAG assistant using LangChain and OpenAI GPT API with FAISS vector store, automating student dining queries and reducing manual operational interventions by 40%.",
      "Developed LSTM and ARIMA forecasting models using TensorFlow/Keras and Python, achieving under 8% MAPE for demand prediction and resource optimization.",
      "Deployed cloud-native infrastructure on AWS (EC2, RDS, S3, Lambda) using Docker, Kubernetes, Terraform, and GitHub Actions CI/CD with real-time monitoring and analytics dashboards.",
      "Presented SwipeIn at the North Texas Area Student Conference, demonstrating measurable campus impact."
    ],
    skills: [
      "React Native", "FastAPI", "Python", "SQL Server", "TensorFlow/Keras",
      "LangChain", "OpenAI GPT API", "FAISS", "LSTM", "ARIMA",
      "AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"
    ]
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
      "Deployed the trained model as a FastAPI REST API with automated NUnit-style validation pipelines enforcing prediction accuracy and response latency standards.",
      "Applied comprehensive evaluation techniques including confusion matrices, ROC-AUC curves, and classification reports to validate model reliability and clinical interpretability."
    ],
    skills: [
      "Python", "scikit-learn", "TensorFlow/Keras", "FastAPI",
      "MLflow", "Pandas", "NumPy", "Matplotlib", "Seaborn",
      "REST APIs", "NUnit", "AWS SageMaker"
    ]
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
      "Integrated Auth0 for multi-portal authentication and Splunk for production monitoring, strengthening system security and achieving 99.9% uptime across insurance platforms."
    ],
    skills: [
      ".NET Core", "C#", "ASP.NET Web API", "Angular", "SQL Server",
      "NUnit", "Splunk", "Auth0", "Jenkins", "ServiceNow",
      "Jira", "Confluence", "Azure DevOps"
    ]
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
      "Implemented OAuth 2.0 authentication and role-based access control (RBAC), ensuring secure access management across student, librarian, and admin portals."
    ],
    skills: [
      "ASP.NET Web API", "ASP.NET MVC", ".NET Framework",
      "Angular", "SQL Server", "Entity Framework Core",
      "OAuth 2.0", "NUnit", "Azure", "Splunk", "Microservices"
    ]
  }
];
 
  return (
    <section
      id="experience"
      className="py-13 bg-transparent relative overflow-hidden"
    >
      {/*Animated background*/}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72  bg-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-blue to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Work <span className="text-primary">Experience</span>
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Animate Timeline*/}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`w-full bg-gradient-to-b from-green-500 via-green-400 to-green-300 rounded-full transition-all duration-300 ease-out`}
              >
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-300 to-transparent"></div>
              </div>
            </div>
            {experiences.map((experience, index) => {
              return (
                <div
                  key={index}
                  className={`experience-item relative flex items-center mb-20 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }
            transition-all duration-300 ${
              visibleItems.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } `}
                  data-index={index}
                  style={{
                    transitionDelay: `${index * 300 + 800}ms`,
                    transform: visibleItems.includes(index)
                      ? "translateY(0)"
                      : index % 2 === 0
                      ? "translateX(-50px) translateY(20px)"
                      : "translateX(50px) translateY(20px)",
                  }}
                >
                  {/* Animate timeline dots*/}
                  <div
                    className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900 shadow-lg z-10 ${
                      visibleItems.includes(index) ? "scale-110" : "scale-0"
                    }`}
                    style={{ transitionDelay: `${index * 50 + 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-green-500 rounded-full"></div>
                    <div className="absolute inset-0 bg-green-400 rounded-full"></div>
                  </div>

                  {/*Content Card*/}
                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div
                      className={`bg-transparent border backdrop-blur-md p-8 rounded-2xl shadow-2xl duration-300 hover:border-primary transition-all transform hover:scale-105 hover:shadow-red-500/20 group `}
                    >
                      <div className="flex items-center gap-3 mb-6 group-hover:transform group-hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-primary transition-all duration-300 group-hover:rotate-6">
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

                      {/*Position*/}
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-green-400 mb-2 group-hover:text-primary transition-colors duration-300">
                          {experience.position}
                        </h4>
                        <div className="flex items-center gap-2 text-green-400 text-sm">
                          <MapPin className="w-4 h-4" />
                          {experience.location}
                        </div>
                      </div>
                      {/* Description */}
                      <div className="mb-6 leading-relaxed group-hover:text-primary transition-all duration-300">
                        {experience.description}
                      </div>
                      {/*Achievements*/}
                      <div className="mb-6">
                        <h5 className="font-semibold text-green-400 mb-3 flex items-center gap-2 transition-all duration-300 ">
                          <Award className="w-4 h-4 text-green-400" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {experience.achievement.map((achv, achindex) => {
                            return (
                              <li
                                key={achindex}
                                className={`group-hover:text-primary transition-all text-sm flex items-start gap-3 duration-300`}
                                style={{
                                  animationDelay: `${
                                    index * 300 + achindex * 200 + 1500
                                  }ms`,
                                }}
                              >
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                {achv}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => {
                          return (
                            <span
                              key={skillIndex}
                              className="bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 hover:bg-primary"
                              style={{ animationDelay: `${index * 300 + skillIndex * 100 + 1800}ms` }}
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
