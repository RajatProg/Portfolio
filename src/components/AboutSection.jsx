import { Briefcase, Code, User } from "lucide-react";
import resumeUrl from "../Resume/Software_Engineer_Rajat.docx";


export const AboutSection = () => {
  return (
    <section id="about" className="py-13 px-4 relative ">
      {" "}
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
          <div className="space-y-6 space-x-7">
            <h3 className="text-xl font-semibold">Full-Stack Developer with AI Expertise</h3>
            <p className="text-muted-foreground">
              I build cloud-native applications that integrate predictive analytics and generative AI, combining full-stack engineering with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center">
              <a href="#contact" className="cosmic-button hover:bg-green-600 bg-transparent border-4 border-green-600 hover:text-white">
                {" "}
                Get in Touch
              </a>
              <a
                href={resumeUrl} download
                className="cosmic-button hover:bg-primary bg-transparent border-4 border-primary group-hover:text-primary  hover:text-white"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6  ">
            <div className="p-6 card-hover hover:shadow-red-500/20 bg-transparent  backdrop-blur-md rounded-2xl shadow-2xl transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    I specialize in building scalable web and mobile applications using React, Angular, .NET Core, and FastAPI, with seamless REST API and database integration.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 card-hover hover:shadow-red-500/20 bg-transparent  backdrop-blur-md rounded-2xl shadow-2xl transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">User-Centric Design</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    I integrate predictive analytics (LSTM, forecasting) and generative AI (chatbots, LangChain, NLP pipelines) into applications, making them intelligent and data-driven.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 card-hover hover:shadow-red-500/20 bg-transparent  backdrop-blur-md rounded-2xl shadow-2xl transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Agile & DevOps</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    I deploy and scale applications on AWS, Azure, and DigitalOcean (Ubuntu Linux), while leveraging CI/CD pipelines, monitoring (Splunk), and MLOps practices to ensure automation, reliability, and smooth Agile delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
