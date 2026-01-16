import { ArrowDown } from "lucide-react"
import image from "../images/pic2.jpg";

export const HeroSection = () => {

    return <section id="hero" className= "relative min-h-screen flex flex-col items-center justify-center px-4">

        <div className="container mx-auto px-6 py-20 relative z-10" >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/*Left pane*/}
                       
            <div className="space-y-14">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight" >
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1 ">{" "} Rajat</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-2 ">{" "} Kumar</span>
                    <span className="text-gradient opacity-0 ml-1 animate-fade-in-delay-3">{" "} Parida</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">{" "} I am a Software Engineer with 4+ years of experience building cloud-native web and mobile applications with embedded AI and machine learning systems. I specialize in full-stack development using React, Angular, .NET Core, and FastAPI, and in deploying predictive and generative AI models in production. My work includes LSTM-based forecasting pipelines, AI-powered chatbots, and data-intensive backend services deployed on AWS and Azure to support scalable, real-world decision and operational workflows.</p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button hover:bg-primary bg-transparent border-4 border-primary group-hover:text-primary-button ">View My Work</a>
                </div>
            </div>

            {/*Right pane*/}

            <div className={`relative transition-all duration-200 delay-100`}>
                <div className="relative">
                    <div className="w-full max-w-lg mx-auto">
                        <div className="relative group">
                            <img src={image} alt="" className="w-full rounded-2xl shadow-2xl transition-all duration-300 group-hover:scale-105" />
                        </div>
                    </div>
<div className="absolute -top-4 -right-4 w-20 h-20 bg-green-600 rounded-2xl opacity-20">
</div>
<div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600 rounded-full opacity-20">
</div>

                </div>

            </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>

}