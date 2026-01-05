"use client";

import { motion } from "framer-motion";
import { hackathons } from "@/lib/data";
import { Trophy } from "lucide-react";

export function Hackathons() {
    return (
        <section id="hackathons" className="py-24 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 border-l-4 border-yellow-500 pl-4">
                        Hackathons & Wins
                    </h2>
                </motion.div>

                <div className="space-y-8 max-w-4xl">
                    {hackathons.map((hack, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-yellow-500/50 hover:bg-white/10 transition-all cursor-default"
                        >
                            <div className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500 group-hover:scale-110 transition-transform">
                                <Trophy className="h-6 w-6" />
                            </div>
                            <div className="space-y-2 w-full">
                                <div className="flex justify-between items-start flex-wrap gap-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                                        {hack.event}
                                    </h3>
                                    <span className="font-mono text-sm text-muted-foreground bg-white/5 px-2 py-1 rounded">
                                        {hack.year}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-yellow-500 font-medium">
                                    <span>{hack.result}</span>
                                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                                    <span className="text-muted-foreground">Project: {hack.project}</span>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {hack.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
