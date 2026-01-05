"use client";

import { motion } from "framer-motion";
import { publications } from "@/lib/data";
import { BookOpen } from "lucide-react";

export function Research() {
    return (
        <section id="research" className="py-24 bg-black/40">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 border-l-4 border-indigo-500 pl-4">
                        Research & Publications
                    </h2>
                </motion.div>

                <div>
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-indigo-500/50 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-indigo-500/20 p-3 rounded-lg text-indigo-400">
                                    <BookOpen className="h-6 w-6" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl md:text-2xl font-bold leading-tight">
                                        {pub.title}
                                    </h3>
                                    <div className="flex gap-4 text-sm font-mono text-indigo-300">
                                        <span>{pub.conference}</span>
                                        <span>{pub.year}</span>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {pub.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
