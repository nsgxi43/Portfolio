"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto space-y-6 z-10"
            >
                <h2 className="text-sm md:text-base font-mono text-primary tracking-widest uppercase mb-4">
                    Bit by Bit, Building the Future
                </h2>

                <h1 className="text-5xl md:text-8xl font-bold font-heading tracking-tight">
                    <span className="text-foreground">Hello, I'm </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x">
                        {personalInfo.name}
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {personalInfo.tagline}
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                    <Button
                        size="lg"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Projects
                    </Button>
                    <a href="https://drive.google.com/file/d/1nA4bFR4qEm5mpykOXcksdiARQInrw0lf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="group">
                            <FileText className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                            Download Resume
                        </Button>
                    </a>
                </div>

                <div className="flex items-center justify-center gap-6 mt-12 text-muted-foreground">
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <Github className="h-6 w-6" />
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <Linkedin className="h-6 w-6" />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                        <Mail className="h-6 w-6" />
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="text-muted-foreground h-6 w-6" />
            </motion.div>
        </section>
    );
}
