"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden flex flex-col items-center text-center">
            {/* Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 z-10 space-y-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold font-heading max-w-3xl mx-auto"
                >
                    Ready to build the future?
                    <span className="block text-primary mt-2">Let's talk.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto"
                >
                    Open to internships, full-time roles, and research collaborations.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-6 pt-8"
                >
                    <a href={`mailto:${personalInfo.email}`}>
                        <Button size="lg" className="rounded-full text-base">
                            <Mail className="mr-2 h-5 w-5" /> Say Hello
                        </Button>
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="rounded-full text-base">
                            <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                        </Button>
                    </a>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="rounded-full text-base">
                            <Github className="mr-2 h-5 w-5" /> GitHub
                        </Button>
                    </a>
                </motion.div>

                <div className="mt-24 pt-8 border-t border-white/5 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind.</p>
                </div>
            </div>
        </section>
    );
}
