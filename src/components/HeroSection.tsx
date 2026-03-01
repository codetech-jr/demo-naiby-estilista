"use client";

import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

export default function HeroSection() {
    const scrollToDiagnosis = () => {
        const element = document.getElementById("diagnostico");
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden w-full h-full"
            style={{ backgroundColor: "#FDF8F2" }}>

            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, #D22A82, transparent)" }} />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, #E8C35A, transparent)" }} />

            <div className="relative z-10 max-w-lg w-full mx-auto flex flex-col items-center text-center gap-8 justify-center h-full">

                {/* Top badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
                    style={{
                        backgroundColor: "rgba(210, 42, 130, 0.06)",
                        borderColor: "rgba(210, 42, 130, 0.2)",
                        color: "#D22A82"
                    }}
                >
                    <Sparkles size={14} />
                    <span>Diagnóstico Capilar Premium</span>
                </motion.div>

                {/* Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="relative"
                >
                    <div className="w-36 h-36 md:w-44 md:h-44 rounded-full p-1"
                        style={{
                            background: "linear-gradient(135deg, #D22A82, #E8C35A)",
                            boxShadow: "0 8px 40px rgba(210, 42, 130, 0.35)"
                        }}>
                        <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center"
                            style={{ background: "linear-gradient(145deg, #f9e8f2, #fdf0e0)" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/naiby-principal.jpg"
                                alt="Naiby Osuna"
                                className="w-full h-full object-cover object-[center_20%]"
                            />
                        </div>
                    </div>
                    {/* Status badge */}
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs"
                        style={{ backgroundColor: "#25D366", boxShadow: "0 2px 8px rgba(37,211,102,0.5)" }}>
                        <span className="text-white font-bold text-[10px]">✓</span>
                    </div>
                </motion.div>

                {/* Name tag */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="flex flex-col items-center gap-1"
                >
                    <p className="text-sm font-medium tracking-widest uppercase"
                        style={{ color: "#D22A82", fontFamily: "Inter, sans-serif" }}>
                        Naiby Osuna
                    </p>
                    <p className="text-xs tracking-wider uppercase"
                        style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                        Colorista Premium · Especialista en Balayage
                    </p>
                </motion.div>

                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col gap-4"
                >
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold leading-tight"
                        style={{ color: "#2D2A2B", fontFamily: "'Playfair Display', serif" }}>
                        Consigue el Balayage<br />
                        <em style={{ color: "#D22A82" }}>de tus Sueños.</em>
                    </h1>
                    <p className="text-base md:text-lg leading-relaxed max-w-sm mx-auto"
                        style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                        Evaluación capilar personalizada.{" "}
                        <strong style={{ color: "#2D2A2B" }}>Empieza tu diagnóstico profesional</strong>{" "}
                        con Naiby ahora mismo.
                    </p>
                </motion.div>

                {/* Social proof stars */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center gap-3"
                >
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill="#E8C35A" color="#E8C35A" />
                        ))}
                    </div>
                    <span className="text-sm" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                        +200 clientas satisfechas
                    </span>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="w-full"
                >
                    <button
                        id="hero-cta-button"
                        onClick={scrollToDiagnosis}
                        className="w-full py-4 px-8 rounded-2xl text-white text-base font-semibold transition-all duration-300 flex items-center justify-center gap-3 group"
                        style={{
                            backgroundColor: "#D22A82",
                            fontFamily: "Inter, sans-serif",
                            boxShadow: "0 8px 30px rgba(210, 42, 130, 0.4)"
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#B5216E";
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 40px rgba(210, 42, 130, 0.55)";
                            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#D22A82";
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 30px rgba(210, 42, 130, 0.4)";
                            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                        }}
                    >
                        <Sparkles size={20} />
                        Iniciar Diagnóstico Gratuito
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>

                    <p className="mt-3 text-xs text-center" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                        ✦ Completamente gratuito · Sin compromisos · Solo 4 pasos
                    </p>
                </motion.div>

                {/* Services tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-wrap gap-2 justify-center"
                >
                    {["Balayage", "Decoloración", "Color Fantasia", "Tintes", "Keratina"].map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full border"
                            style={{
                                borderColor: "rgba(210, 42, 130, 0.2)",
                                backgroundColor: "rgba(210, 42, 130, 0.04)",
                                color: "#6B7280",
                                fontFamily: "Inter, sans-serif"
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="relative z-10 mt-8 md:mt-12 flex flex-col items-center gap-2 cursor-pointer"
                onClick={scrollToDiagnosis}
            >
                <span className="text-xs tracking-widest uppercase" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                    Comenzar
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-1.5"
                    style={{ borderColor: "rgba(210, 42, 130, 0.4)" }}
                >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#D22A82" }} />
                </motion.div>
            </motion.div>
        </section>
    );
}
