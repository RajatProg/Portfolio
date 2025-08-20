import { ArrowRight, ExternalLink, Github, Gitlab } from "lucide-react";



const projects = [
  {
    id: 1,
    title: "Swipe_In App",
    description: "An App that lets students to track meal swipes, monitor dining hall status, manage memberships, predict future spending for better budget management and many more features.",
    image: "src/images/swipe_2.png",
    tags: ["React-Native", "Tensorflow", "DNN", "FastAPI", "Python", "SQL Server", "AWS", "Linux", "JWT"],
    demoUrl: "https://www.youtube.com/watch?v=H8zMV9jdtxM&ab_channel=RajatKumarParida",
    githubUrl: "https://github.com/RajatProg/Swipe_in",
  },

  {
    id: 2,
    title: "Heart Attack Analysis & Prediction",
    description: "A predictive healthcare solution that uses deep neural networks to analyze patient data and assess heart attack risk, providing early warnings and actionable health insights.",
    image: "src/images/heart_attack.png",
    tags: ["Python", "Tensorflow", "Sklearn", "Matplotlib", "Seaborn"],
    demoUrl: "https://youtu.be/nwgzO5a45VE",
    githubUrl: "https://github.com/user/project-two",
  },

  {
    id: 3,
    title: "Stock Market Analysis",
    description: "Analyzed recent stock trends of Microsoft, Apple, Google, and Amazon using Machine Learning models. Trained and tested predictive models to achieve higher accuracy in forecasting stock movements.",
    image: "src/images/stock.png",
    tags: ["Sklearn", "Python", "Matplotlib", "Seaborn"],
    //demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com/RajatProg/Stock_Market_Prediction",
  },

  {
    id: 4,
    title: "Candy Store App",
    description: "A React Native Android app that lets users browse and purchase candies online while also showing nearby candy stores for quick pickup and local shopping.",
    image: "src/images/stock.png",
    tags: ["React-Native", "Python", "FastAPI", "MongoDB", "Digital Ocean", "Linux"],
    demoUrl: "https://youtu.be/nwgzO5a45VE",
    githubUrl: "https://github.com/RajatProg/Mobil",
  },

  {
    id: 5,
    title: "Library Records Management",
    description: "A web application that digitizes library records, automates late-fee calculations, and streamlines daily workflows. It improves efficiency, reduces errors, and provides faster access to records while ensuring reliability and accuracy.",
    image: "src/images/lrm.png",
    tags: [".NET", "C#", "SQL Server", "Entity Framework", "ASP.NET WebAPI", "Angular", "Azure", "JWT", "Microservices", "NUnit-Moq"],
    //demoUrl: "https://example.com/demo3",
    gitlabUrl: "https://gitlab.com/rajatparida/library-records-management",
  },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-15 px-4 relative">
      <div className="container max-w-7xl">
        <p className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured {""} <span className="text-primary">Projects</span>
          </p>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {projects.map((projects, key) => (
            <div
              key={key}
              className="ground border backdrop-blur-md p-8 rounded-2xl shadow-2xl duration-500 hover:border-primary transition-all transform hover:scale-105 hover:shadow-red-500/20 group overflow-hidden card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={projects.image}
                  alt={projects.title}
                  className="w-full rounded-2xl h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs text-white font-medium border bg-green-700 rounded-full text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl text-green-400 font-semibold mb-1">{projects.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary text-sm mb-8">
                  {projects.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-5 ">                  
                    
                    <a
                      href={projects.demoUrl}
                      target="_blank"
                      className="text-green-700 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={24} />
                    </a>

                    {projects.githubUrl ? (
                      <a
                        href={projects.githubUrl}
                        target="_blank"
                        className="text-green-700 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={24} />
                      </a>
                    ) : <a
                      href={projects.gitlabUrl}
                      target="_blank"
                      className="text-green-700 hover:text-primary transition-colors duration-300"
                    >
                      <Gitlab size={22} />
                    </a>
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/RajatProg"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};
