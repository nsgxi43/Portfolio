"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export function About() {
    return (
        <section id="about" className="py-20 bg-background/50">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-secondary font-mono uppercase tracking-widest text-sm">About Me</h2>

                    <p className="text-2xl md:text-4xl font-medium leading-tight text-foreground/90 font-heading">
                        Technical wizardry meets human-centric design.
                    </p>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        {personalInfo.about}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
