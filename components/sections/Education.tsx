"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
    return (
        <section id="education" className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left"
                >
                    <div className="bg-primary/20 p-4 rounded-full text-primary shrink-0">
                        <GraduationCap className="h-8 w-8" />
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold font-heading">{education[0].institution}</h2>
                        <p className="text-xl text-white/80">{education[0].degree}</p>
                        <p className="text-muted-foreground font-mono">{education[0].year}</p>
                        {education[0].details && (
                            <p className="pt-2 text-primary font-medium">{education[0].details}</p>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
