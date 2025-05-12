import React, { useState, FormEvent } from "react";
import ScrollReveal from "../ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Check,
  AlertCircle,
  Loader2,
} from "lucide-react";
import LeetcodeLogo from "../icons/LeetcodeLogo";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !subject || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Use EmailJS to send the form data
      const result = await emailjs.send(
        "service_cp9secd", // EmailJS service ID
        "template_zabyths", // EmailJS template ID
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          to_name: "Hussein",
          reply_to: email,
        }
        // No need to pass public key here as we initialized it in main.tsx
      );

      if (result.status === 200) {
        toast({
          title: "Success!",
          description: "Your message has been sent. I'll get back to you soon!",
          variant: "default",
          duration: 5000,
        });

        // Reset form
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description:
          "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-center mb-4">Get In Touch</h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Have a project in mind or want to learn more about my services? Feel
            free to reach out! I'd love to hear from you.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal delay={400} className="order-2 lg:order-1">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                {" "}
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="border-teal-500/30 dark:border-cyber-yellow/30 bg-transparent focus:border-teal-500 dark:focus:border-cyber-yellow"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                {" "}
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="border-teal-500/30 dark:border-cyber-yellow/30 bg-transparent focus:border-teal-500 dark:focus:border-cyber-yellow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                {" "}
                <Input
                  type="text"
                  placeholder="Subject"
                  className="border-teal-500/30 dark:border-cyber-yellow/30 bg-transparent focus:border-teal-500 dark:focus:border-cyber-yellow"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                {" "}
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="border-teal-500/30 dark:border-cyber-yellow/30 bg-transparent focus:border-teal-500 dark:focus:border-cyber-yellow resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full cyber-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </ScrollReveal>

          <div className="order-1 lg:order-2">
            <ScrollReveal delay={600} className="glass-panel p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  {" "}
                  <div className="bg-teal-500/20 dark:bg-cyber-yellow/20 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-teal-500 dark:text-cyber-yellow" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:contact@example.com"
                      className="text-muted-foreground hover:text-teal-500 dark:hover:text-cyber-yellow transition-colors"
                    >
                      eng.hussein.saad1@gmail.com
                    </a>
                  </div>
                </div>{" "}
                <div className="flex items-start gap-4">
                  <div className="bg-teal-500/20 dark:bg-cyber-yellow/20 p-3 rounded-full">
                    <MessageSquare className="h-5 w-5 text-teal-500 dark:text-cyber-yellow" />
                  </div>
                  <div>
                    <h4 className="font-medium">Let's Talk</h4>
                    <p className="text-muted-foreground">
                      Schedule a call or video chat to discuss your project
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Follow Me</h4>
                  <div className="flex items-center gap-4">
                    {" "}
                    <a
                      href="https://github.com/eng-hussein-saad"
                      className="bg-teal-500/20 dark:bg-cyber-yellow/20 p-3 rounded-full hover:bg-teal-500/40 dark:hover:bg-cyber-yellow/40 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5 text-teal-500 dark:text-cyber-yellow" />
                    </a>{" "}
                    <a
                      href="https://www.linkedin.com/in/enghusseinsaad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-teal-500/20 dark:bg-cyber-yellow/20 p-3 rounded-full hover:bg-teal-500/40 dark:hover:bg-cyber-yellow/40 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-teal-500 dark:text-cyber-yellow" />
                    </a>{" "}
                    <a
                      href="mailto:eng.hussein.saad1@gmail.com"
                      className="bg-teal-500/20 dark:bg-cyber-yellow/20 p-3 rounded-full hover:bg-teal-500/40 dark:hover:bg-cyber-yellow/40 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5 text-teal-500 dark:text-cyber-yellow" />
                    </a>{" "}
                    <a
                      href="https://leetcode.com/u/enghusseinsaad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-teal-500/20 dark:bg-cyber-yellow/20 p-3 rounded-full hover:bg-teal-500/40 dark:hover:bg-cyber-yellow/40 transition-colors"
                      aria-label="LeetCode"
                    >
                      <LeetcodeLogo className="h-5 w-5 text-teal-500 dark:text-cyber-yellow" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
