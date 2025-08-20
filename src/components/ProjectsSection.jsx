import { ArrowRight, ExternalLink, Github } from "lucide-react";



const projects = [
  {
    id: 1,
    title: "Swipe_In App",
    description: "An App that lets students to track meal swipes, monitor dining hall status, manage memberships, predict future spending for better budget management and many more features.",
    image: "src/images/swipe_2.png",
    tags: ["React-Native", "Tensorflow", "DNN", "FastAPI", "Python"],
    demoUrl: "https://www.youtube.com/watch?v=H8zMV9jdtxM&ab_channel=RajatKumarParida",
    githubUrl: "https://github.com/RajatProg/Swipe_in",
  },

  {
    id: 2,
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    image: "path/to/image2.jpg",
    tags: ["React", "TypeScript", "CSS"],
    demoUrl: "https://youtu.be/nwgzO5a45VE",
    githubUrl: "https://github.com/user/project-two",
  },

  {
    id: 3,
    title: "Project Three",
    description: "This is a brief description of Project Three.",
    image: "path/to/image3.jpg",
    tags: ["React", "JavaScript", "CSS"],
    demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com/user/project-three",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <p className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured {""} <span className="text-primary">Projects</span>
          </p>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <ExternalLink size={22} />
                    </a>
                    <a
                      href={projects.githubUrl}
                      target="_blank"
                      className="text-green-700 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={22} />
                    </a>
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
