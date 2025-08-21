import { ArrowDown } from "lucide-react"

export const HeroSection = () => {

    return <section id="hero" className= "relative min-h-screen flex flex-col items-center justify-center px-4">

        <div className="container max-w-4xl mx-auto text-center z-10" >
            <div className="space-y-14">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight" >
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1 ">{" "} Rajat</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-2 ">{" "} Kumar</span>
                    <span className="text-gradient opacity-0 ml-1 animate-fade-in-delay-3">{" "} Parida</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">{" "} I'm a Full Stack Developer with 4+ years’ experience in delivering end-to-end web and mobile Applications. Adept in React, Angular, .NET Core, FastAPI, cloud-native solutions, and DevOps. Specializes in REST API development, ML integration, test automation, and cross-functional Agile collaboration. Recognized for delivering scalable, user-centric features with measurable business and system impact.</p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button hover:bg-primary bg-transparent border-4 border-primary group-hover:text-primary-button ">View My Work</a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>

}