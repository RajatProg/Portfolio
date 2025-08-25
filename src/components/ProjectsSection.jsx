import { ArrowRight, ExternalLink, Github, Gitlab } from "lucide-react";

import swipe2 from "../images/swipe_2.png";
import heart from "../images/heart_attack.png";
import stock from "../images/stock.png";
import candy from "../images/candy.png";
import lrm from "../images/lrm.png";


const projects = [
  {
    id: 1,
    title: "Swipe_In App",
    description: "An AI-powered dining management app that enables students to track meal swipes, monitor dining hall status, manage memberships, and predict future spending patterns using deep neural networks (DNN/LSTM). Integrated generative AI chatbot for student dining queries, enhancing engagement and reducing manual support. Deployed on AWS with Ubuntu Linux for scalability and reliability.",
    image: swipe2,
    tags: ["React Native", "FastAPI", "Python", "SQL Server","AWS", "Linux", "JWT", "TensorFlow/Keras (DNN, LSTM)"],
    demoUrl: "https://www.youtube.com/watch?v=H8zMV9jdtxM&ab_channel=RajatKumarParida",
    githubUrl: "https://github.com/RajatProg/Swipe_in",
  },

  {
    id: 2,
    title: "Heart Attack Analysis & Prediction",
    description: "A predictive healthcare solution that leverages machine learning (logistic regression, scikit-learn) and deep neural networks (TensorFlow/Keras DNN) to assess heart attack risk. Achieved 94% model accuracy on 10,000+ patient records using advanced preprocessing, feature engineering, and cross-validation. Provides early warnings and actionable health insights to support proactive wellness programs.",
    image: heart,
    tags: ["Python", "TensorFlow/Keras", "scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    demoUrl: "https://youtu.be/nwgzO5a45VE",
    githubUrl: "https://github.com/RajatProg/Heart_Attack_Prediction",
  },

  {
    id: 3,
    title: "Stock Market Analysis",
    description: "Designed a predictive analytics system to analyze and forecast stock prices of Microsoft, Apple, Google, and Amazon. Conducted time-series analysis with moving averages, daily returns, and correlation matrices to assess volatility, risk, and inter-stock relationships. Built a Linear Regression model with sliding windows (60 days) for Apple price forecasting, achieving an RMSE of 4.93 on validation data. Visualized trends with Matplotlib/Seaborn, providing actionable insights into investment risk and return.",
    image: stock,
    tags: ["Python", "scikit-learn", "yfinance", "Pandas", "Matplotlib", "Seaborn", "NumPy"],
    //demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com/RajatProg/Stock_Market_Prediction",
  },

  {
    id: 4,
    title: "Candy Store App",
    description: "Developed a React Native Android app enabling users to browse and purchase candies online, with features for locating nearby stores for quick pickup. Integrated a FastAPI backend with MySQL/SQL Server to handle real-time inventory, orders, and payments. Deployed on DigitalOcean (Linux) and validated on Android Studio with device emulators, ensuring smooth UI/UX, secure APIs, and reliable mobile performance.",
    image: candy,
    tags: ["React Native", "FastAPI", "Python", "MySQL/SQL Server", "DigitalOcean", "Linux", "Android Studio"],
    demoUrl: "https://youtu.be/nwgzO5a45VE",
    githubUrl: "https://github.com/RajatProg/Mobil",
  },

  {
    id: 5,
    title: "Library Records Management",
    description: "Developed a full-stack web application to digitize library operations, automate late-fee calculations, and streamline daily workflows. Built with ASP.NET WebAPI, Angular, and Entity Framework, the system improved efficiency, reduced errors, and provided faster access to records with 99.9% uptime on Azure Cloud. Implemented JWT-based authentication and role-based access control for secure multi-user management. Integrated microservices architecture for scalability and reliability. Ensured quality by achieving 95% NUnit-Moq unit test coverage, reducing post-deployment defects by 40%.",
    image: lrm,
    tags: [".NET", "C#", "ASP.NET WebAPI", "Angular", "SQL Server", "Entity Framework", "Azure", "Microservices", "NUnit-Moq", "JWT"],
    //demoUrl: "https://example.com/demo3",
    gitlabUrl: "https://gitlab.com/rajatparida/library-records-management",
  },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-13 px-4 relative">
      <div className="container max-w-7xl">
        <p className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured {""} <span className="text-primary">Projects</span>
          </p>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {projects.map((projects, key) => (
            <div
              key={key}
              className="ground border backdrop-blur-md p-8 rounded-2xl shadow-2xl duration-300 hover:border-primary transition-all transform hover:scale-105 hover:shadow-red-500/20 group overflow-hidden card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={projects.image}
                  alt={projects.title}
                  className="w-full rounded-2xl h-full object-cover transition-transform duration-300 group-hover:scale-110 "
                />
              </div>

              <div className="p-4">
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
                <p className="text-muted-foreground group-hover:text-primary text-sm mb-8 text-center">
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
        <div className="text-center mt-28 ">
          <a
            className="px-12 py-3 rounded-full font-medium transition-all w-fit flex items-center mx-auto gap-4 bg-primary text-primary-foreground hover:scale-110 duration-200 border-4 hover:border-green-700"
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
