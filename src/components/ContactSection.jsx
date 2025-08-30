import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Slack,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      window.alert("Message sent successfully!");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-14 relative px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
                <p className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Get in {""} <span className="text-primary">Touch</span>
          </p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-15">
            <h3 className="text-2xl font-semibold">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-10 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium ">Email</h4>
                  <a
                    href="mailto:rajatkumarparida0105@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    rajatkumarparida0105@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+19403090096"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    +1 (940) 309-0096
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a
                    href="https://www.google.com/maps/place/Your+Location"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    New York, USA
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-14">
              <h4 className="text-2xl font-semibold mb-7 h-12">Connect With Me</h4>
              <div className="flex space-x-8 justify-center ">
                <a
                  href="https://www.linkedin.com/in/rajatparida33/" className="hover:bg-blue hover:text-blue-500 transition-colors duration-100"
                  target="_blank" 
                >
                  <Linkedin size={30} />
                </a>
                <a href="https://twitter.com/rajatparida33" target="_blank" className="hover:bg-voilet hover:text-primary transition-colors duration-100">
                  <Twitter size={30} />
                </a>

                <a href="https://app.slack.com/client/TBMBG710S/D06E74WJ29Z" target="_blank" className="hover:bg-blue hover:text-green-400 transition-colors duration-100">
                  <Slack size={30}  />
                </a>
              </div>
            </div>
          </div>

          <div
            className="border-3 p-8 rounded-2xl transition-all duration-100 delay-200 bg-transparent backdrop-blur-md transform border-primary group"
            onSubmit={handlesubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6 ">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button bg-green-700 w-full flex items-center justify-center gap-2 text-primary-foreground"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
