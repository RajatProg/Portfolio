import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// function skills() {
//   const [isvisible, setIsVisible] = useState(false);
//   const [animatedskills, setAnimatedSkills] = useState({});

// useEffect(() => {
//   const observer = new IntersectionObserver((entry) => {
//     if (entry.isIntersecting) {
//       setIsVisible(true);
//       skills.forEach(
//         (skill, index) => {
//           setTimeout(() => {
//             setAnimatedSkills((prev) => ({
//               ...prev,
//               [skill.name]: skill.level,
//             }));
//           }, index * 200);
//         }
//       );
//     }
//   }, { threshold: 0.3 });

//   const element = document.getElementById("skills");
//   if (element) {
//     observer.observe(element);
//     return () => observer.disconnect();
//   }
// }, []);

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 98, category: "Frontend" },
  { name: "JavaScript", level: 98, category: "Frontend" },
  { name: "TypeScript", level: 98, category: "Frontend" },
  { name: "React", level: 98, category: "Frontend" },
  { name: "React Native", level: 98, category: "Frontend" },
  { name: "Angular", level: 95, category: "Frontend" },

  // Backend
  { name: "SQL Server", level: 97, category: "Backend" },
  { name: "MySQL", level: 97, category: "Backend" },
  { name: "MongoDB", level: 95, category: "Backend" },
  { name: "PostgreSQL", level: 95, category: "Backend" },

  // DevOps
  { name: "Docker", level: 90, category: "DevOps" },
  { name: "AWS", level: 90, category: "DevOps" },
  { name: "Azure", level: 90, category: "DevOps" },
  { name: "CI/CD", level: 92, category: "DevOps" },
  { name: "Git", level: 95, category: "DevOps" },

];

const education = [
  {
    year: "2023-2025",
    title: "Master of Science in Computer Science",
    institution: "Midwestern State University, Wichita Falls, Texas",
    description:
      "Specializing in advanced software development methodologies and practices.",
  },
  {
    year: "2017-2021",
    title: "Bachelor of Technology in Electronics & Communication Engineering",
    institution: "Institute of Aeronautical Engineering, Hyderabad, India",
    description:
      "Focused on electronics and communication systems, with a strong foundation in software development.",
  },
];

const categories = ["Frontend", "Backend", "DevOps"];
// }

export const SkillsSection = () => {
  // Filter skills by category
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );
  return (
    <section
      id="skills"
      className="py-24  relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72  rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96  rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full "></div>

      </div>

      <div className="container backdrop-blur-md mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/*Left Column with education*/}
          <div className="transition-all duration-100">
            <div className="mb-15">
             <p className="text-3xl md:text-4xl font-bold text-center">
                Edu<span className="text-primary">cation</span>
              </p>
            </div>
            <div className="space-y-16">
              {education.map((edu, index) => {
                return (
                  <div key={index}
                    className={`border-l-2 border-primary pl-6 relative group transition-all duration-1000`}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-400 rounded-full group-hover:scale-145 transition-all duration-300"></div>
                    <div className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-all duration-300">
                    {edu.year}
                    </div>
                    <h3 className="text-xl font-white mb-2 group-hover:text-green-400 transition-all duration-300">
                      {edu.title}
                    </h3>
                    <p className=" mb-2 group-hover:text-primary transition-all duration-300">
                      {edu.institution}
                    </p>
                     <p className="text-sm leading-relaxed group-hover:text-primary transition-all duration-300">
                      {edu.description}
                    </p>

                  </div>
                );
              })}
            </div>
          </div>


          {/* Right column with skills */}
          <div className="transition-all duration-200 delay-300 bg-transparent border backdrop-blur-md p-8 rounded-2xl shadow-2xl transform hover:scale-105 hover:shadow-red-500/20 group ">
            <div className="mb-15">
              <p className="text-3xl md:text-4xl font-bold text-center">
                My  {" "} <span className="text-primary">Skills</span>
              </p>
            </div>

            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory === category
                    ? "bg-green-700 text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-primary"
                )}
              >
                {category}
              </button>
            ))}

            <div className="space-y-6">
              {filteredSkills.map((skills, index) => {
                return (
                  <div
                    key={index}
                    className="space-y-2 transition-all duration-1000"
                  >
                    <div className="flex justify-between items-center ">
                      <span className="text-white font-medium group-hover:text-primary transition-all duration-300">{skills.name}</span>
                      <span className="text-green-400 font-semibold">
                        {skills.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="bg-primary from-primary-500 to-primary-300 h-2 rounded-full transition-all duration-1500 ease-out relative"
                        style={{ width: `${skills.level}%` }}
                      >
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

</div>

         </div>
      </div>
    </section>
  );
};
