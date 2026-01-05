"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Zap } from "lucide-react";

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-black/40">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 border-l-4 border-secondary pl-4">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground max-w-2xl text-lg">
                        Engineering solutions for mental health, healthcare, and productivity.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="group relative grid md:grid-cols-12 gap-8 items-center"
                        >
                            {/* Project Content */}
                            <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-last' : ''} space-y-6 z-10`}>
                                <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase">
                                    <Zap className="h-4 w-4" /> Featured Project
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl text-muted-foreground leading-relaxed shadow-xl">
                                    {project.description}
                                </div>

                                <ul className="space-y-2 text-sm md:text-base text-gray-300">
                                    {project.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-secondary mt-1.5">•</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-3 pt-4">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>


                            </div>

                            {/* Decorative Visual / Placeholder for Screenshot */}
                            <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-first' : ''} relative`}>
                                <div className="aspect-square md:aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 group-hover:border-primary/50 transition-colors shadow-2xl relative">
                                    <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
                                    {/* Abstract representation of the project */}
                                    <div className="absolute inset-0 flex items-center justify-center text-8xl font-black text-white/5 select-none font-heading">
                                        {project.title[0]}
                                    </div>
                                    {/* Glow effect */}
                                    <div className="absolute -inset-4 bg-primary/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
