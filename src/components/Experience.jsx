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
      company: "Midwestern State University",
      position: "Graduate Teaching Assistant - Web Developer",
      duration: "Jan 2025 - May 2025",
      location: "Wichita Falls, Texas , USA - 76308",
      description:
        "Built and deployed an AI-powered dining management platform with real-time transaction tracking, predictive analytics, and intelligent dashboards, improving operational efficiency and student engagement.",
      achievement: [
        "Enhanced transaction accuracy through real-time swipe/Flex Dollar APIs with low-latency FastAPI services.",
        "Developed an LSTM-based deep neural network (DNN) using TensorFlow/Keras, achieving 96% forecasting accuracy for demand prediction and resource optimization.",
        "Integrated generative AI chatbot (OpenAI API, LangChain) to automate student dining queries (menus, balances, peak hours), reducing manual support load by 40%.",
        "Increased reporting efficiency by 30% through AI-driven dashboards with natural language summaries for administrators.",
        "Deployed on AWS with CI/CD pipelines (GitHub Actions, Postman), ensuring scalability, automation, and reliability."
      ],
      skills: ["React Native", "FastAPI", "SQL Server", "Python", "TensorFlow/Keras", "LangChain/OpenAI API", "Data Visualization", "Postman", "AWS"],
    },
    {
      company: "Midwestern State University",
      position: "Graduate Teaching Assistant - Web Developer",
      duration: "Aug 2024 - Dec 2024",
      location: "Wichita Falls, Texas , USA - 76308",
      description:
        "Developed an advanced health analytics solution to predict patient heart attack risk using machine learning and deep neural networks (DNNs). Enhanced prediction accuracy through feature engineering, EDA, and model optimization.",
      achievement: [
        "Achieved 97.1% accuracy with logistic regression on 10,000+ patient records using 5-fold cross-validation.",
        "Improved model precision by 22% through targeted feature engineering, preprocessing, and hyperparameter tuning.",
        "Designed and fine-tuned a deep neural network (DNN) with multiple hidden layers, ReLU activations, dropout, and L2 regularization, achieving robust risk classification performance.",
        "Applied model evaluation techniques (confusion matrix, ROC-AUC, classification reports) to validate reliability and interpretability."
      ],
      skills: ["Python", "scikit-learn", "TensorFlow/Keras", "Pandas", "Matplotlib/Seaborn"],
    },
    {
      company: "Cognizant Technology Solutions",
      position: "Software Engineer",
      duration: "Aug 2021 - July 2023",
      location: "Hyderabad, Telangana , India - 500056",
      description:
        "Developed and supported enterprise-grade applications with scalable APIs and Angular UIs, ensuring high performance, reliability, and seamless collaboration across global teams.",
      achievement: [
        "Resolved 100+ weekly ServiceNow incidents, reducing P3–P4 resolution times by 40% through root-cause analysis and rapid response.",
        "Achieved 98% defect prevention by automating NUnit test cases and strengthening pre-release QA coverage.",
        "Optimized backend APIs and SQL queries, improving overall application speed, scalability, and reliability.",
        "Ensured controlled, high-quality deployments via CI/CD pipelines (Jenkins, TFS) and Agile sprint collaboration.",
        "Collaborated with DevOps and security teams to integrate Auth0 authentication and monitoring via Splunk, strengthening system security and uptime."
      ],
      skills: ["NET Core", "Angular", "SQL Server", "NUnit", "Splunk", "Auth0", "Jenkins CI/CD", "TFS", "Jira", "ServiceNow"],
    },
    {
      company: "Cognizant Technology Solutions",
      position: "Programmer Analyst (Full-Stack Developer)",
      duration: "Feb 2021 - July 2021",
      location: "Hyderabad, Telangana , India - 500056",
      description:
        "Developed and deployed a full-stack Library Records Management system to streamline book tracking, automate late-fee processing, and enhance reporting, improving overall efficiency and user experience across stakeholders.",
      achievement: [
        "Automated late-fee calculations, reducing manual work and accelerating sprint deliveries by 40%.",
        "Achieved 95% unit test coverage, cutting post-deployment defects by 40% with robust NUnit testing practices.",
        "Enhanced frontend performance, reducing Angular page load times by 25% for smoother user experience.",
        "Maintained 99.9% uptime by deploying microservices on Azure with proactive monitoring through Splunk."
      ],
      skills: ["ASP.NET WebAPI & MVC", "NET Framework", "Angular", "SQL Server", "NUnit", "Azure", "Splunk", "Microservices"]
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
