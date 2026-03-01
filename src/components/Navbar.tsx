"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - 80; // offset for sticky nav
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    const navLinks = [
        { name: "Inicio", target: "inicio" },
        { name: "Portafolio", target: "portafolio" },
        { name: "Testimonios", target: "testimonios" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 shadow-sm" : "py-6"
                    }`}
                style={{
                    backgroundColor: isScrolled ? "rgba(253, 248, 242, 0.9)" : "transparent",
                    backdropFilter: isScrolled ? "blur(12px)" : "none",
                    WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
                }}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div
                        className="font-serif text-2xl md:text-3xl font-bold cursor-pointer"
                        style={{ color: "#2D2A2B" }}
                        onClick={() => scrollToSection("inicio")}
                    >
                        Naiby Osuna
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.target}
                                onClick={() => scrollToSection(link.target)}
                                className="text-sm font-medium transition-colors hover:text-[#D22A82]"
                                style={{ color: "#2D2A2B", fontFamily: "Inter, sans-serif" }}
                            >
                                {link.name}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection("diagnostico")}
                            className="px-6 py-2.5 rounded-full border-2 text-sm font-semibold transition-all duration-300 hover:bg-[#D22A82] hover:text-white"
                            style={{
                                borderColor: "#D22A82",
                                color: "#D22A82",
                                fontFamily: "Inter, sans-serif"
                            }}
                        >
                            Diagnóstico
                        </button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden flex items-center justify-center p-2 rounded-xl transition-colors"
                        style={{ color: "#2D2A2B", backgroundColor: "rgba(0,0,0,0.05)" }}
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[60] flex flex-col pt-24 px-6 pb-8"
                        style={{
                            backgroundColor: "rgba(253, 248, 242, 0.98)",
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",
                        }}
                    >
                        <button
                            className="absolute top-6 right-6 p-2 rounded-xl"
                            style={{ backgroundColor: "rgba(0,0,0,0.05)", color: "#2D2A2B" }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={24} />
                        </button>

                        <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.target}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    onClick={() => scrollToSection(link.target)}
                                    className="text-3xl font-serif"
                                    style={{ color: "#2D2A2B" }}
                                >
                                    {link.name}
                                </motion.button>
                            ))}

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => scrollToSection("diagnostico")}
                                className="mt-8 w-full max-w-xs py-4 rounded-full text-white font-semibold text-lg"
                                style={{ backgroundColor: "#D22A82", fontFamily: "Inter, sans-serif" }}
                            >
                                Diagnóstico Gratuito
                            </motion.button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
