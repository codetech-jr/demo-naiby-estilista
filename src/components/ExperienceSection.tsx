"use client";

import { motion } from "framer-motion";
import { Search, ShieldCheck, Sparkles } from "lucide-react";

export default function ExperienceSection() {
    const steps = [
        {
            icon: <Search className="w-8 h-8" strokeWidth={1.5} />,
            title: "Diagnóstico Honesto",
            description: "Evaluamos la salud de tu hebra y elasticidad real antes de decolorar.",
        },
        {
            icon: <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />,
            title: "Decoloración Protegida",
            description: "Usamos tecnología Plex europea para aclarar sin fundir tu cabello.",
        },
        {
            icon: <Sparkles className="w-8 h-8" strokeWidth={1.5} />,
            title: "Diseño y Matiz",
            description: "Tonos personalizados a tu piel que no se deslavan a los 15 días.",
        },
    ];

    return (
        <section className="py-20 px-6 bg-white border-b border-[#FDF8F2]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-10 md:gap-6 justify-between items-start">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4"
                        >
                            <div
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2"
                                style={{ backgroundColor: "rgba(210, 42, 130, 0.05)", color: "#D22A82" }}
                            >
                                {step.icon}
                            </div>
                            <h3 className="font-serif text-xl md:text-2xl font-bold" style={{ color: "#2D2A2B" }}>
                                {step.title}
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
