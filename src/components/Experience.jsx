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
      { threshold: 0.2 }
    );

    const timelineElement = document.querySelector(".timeline-item");
    const experienceItems = document.querySelectorAll(".experience-item");
    if (timelineElement) observer.observe(timelineElement);
    experienceItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Software Engineer",
      duration: "Jan 2020 - Present",
      location: "Remote",
      description:
        "Involved in the full software development lifecycle, from requirements gathering to deployment.",
      achievement: [
        "Implemented a new feature that improved user engagement by 30%",
        "Reduced application load time by optimizing code and assets",
        "Received 'Employee of the Month' award for outstanding performance",
      ],
      skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"],
    },
    {
      company: "Web Innovations LLC",
      position: "Frontend Developer",
      duration: "Jun 2018 - Dec 2019",
      location: "On-site",
      description:
        "Focused on building responsive and accessible web applications.",
      achievement: [
        "Improved website performance by 25% through code optimization",
        "Led a team of 4 developers to create a new design system",
        "Conducted user research to inform design decisions",
      ],
      skills: ["HTML", "CSS", "JavaScript", "Vue.js", "Accessibility"],
    },
    {
      company: "Creative Agency",
      position: "UI/UX Designer",
      duration: "Jan 2017 - May 2018",
      location: "On-site",
      description:
        "Designed user-centered interfaces for web and mobile applications.",
      achievement: [
        "Redesigned the company website, resulting in a 40% increase in user engagement",
        "Conducted usability testing to gather user feedback and improve designs",
        "Collaborated with developers to implement responsive design",
      ],
      skills: ["Figma", "Sketch", "Adobe XD", "InVision", "User Research"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-transparent relative overflow-hidden"
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
                className={`w-full bg-gradient-to-b from-green-500 via-green-400 to-green-300 rounded-full transition-all duration-900 ease-out`}
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
            transition-all duration-1000 ${
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
                    style={{ transitionDelay: `${index * 300 + 1200}ms` }}
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
                      className={`bg-transparent border backdrop-blur-md p-8 rounded-2xl shadow-2xl duration-500 hover:border-primary transition-all transform hover:scale-105 hover:shadow-red-500/20 group `}
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
                        <h4 className="text-lg font-semibold text-green-400 mb-2 group-hover:text-primary transition-colors duration-300">
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
