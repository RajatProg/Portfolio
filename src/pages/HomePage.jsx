import { AboutSection } from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import Experience from "../components/Experience"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/NavBar"
import { ProjectsSection } from "../components/ProjectsSection"
import { SkillsSection } from "../components/SkillsSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"



export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">

    {/*Theme Toggle*/}
    <ThemeToggle/>

    {/* Background Effects */}
    <StarBackground/>

    {/* Navbar */}
    <Navbar/>

    {/* Main Content */}
    <main>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <Experience/>
      <ProjectsSection/>
      <ContactSection/>
    </main>

    {/* Footer */}
    <Footer/>

  </div>
  )
}

