"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const categories = [
    { name: "Languages", items: skills.languages },
    { name: "Tools & Platforms", items: skills.tools },
    { name: "Key Domains", items: skills.domains },
];

export function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute right-0 top-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[128px] -z-10"></div>

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 border-l-4 border-primary pl-4">
                        Technical Arsenal
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-semibold text-primary/80 font-mono tracking-tight">
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
