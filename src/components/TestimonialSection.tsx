"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialSection() {
    const testimonials = [
        {
            name: "Valeria Gómez",
            text: "Increíble trabajo, nunca tuve un rubio tan sano. Naiby me asesoró desde el primer minuto y el color superó mis expectativas.",
        },
        {
            name: "Marta R.",
            text: "Naiby rescató mi cabello de un desastre. Llegué con manchas naranjas y salí con el balayage de mis sueños. 100% recomendada.",
        },
        {
            name: "Andrea V.",
            text: "La atención es de lujo, desde el café hasta los masajes capilares. El color me ha durado meses intacto.",
        },
    ];

    return (
        <section id="testimonios" className="py-24 px-6 border-t border-[#FDF8F2]" style={{ backgroundColor: "#ffffff" }}>
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4" style={{ color: "#2D2A2B" }}>
                        Lo que dicen nuestras <em style={{ color: "#D22A82" }}>reinas</em>
                    </h2>
                    <p className="text-sm md:text-base" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                        Experiencias reales de mujeres como tú
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8 w-full items-stretch justify-center">
                    {testimonials.map((test, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="flex-1 bg-white rounded-[2rem] p-8 md:p-10 transition-shadow duration-300 hover:shadow-2xl"
                            style={{
                                boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
                            }}
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="#E8C35A" color="#E8C35A" />
                                ))}
                            </div>
                            <p className="italic text-base md:text-lg leading-relaxed mb-6" style={{ color: "#4B5563", fontFamily: "Inter, sans-serif" }}>
                                "{test.text}"
                            </p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg text-white"
                                    style={{ background: "linear-gradient(135deg, #D22A82, #B5216E)" }}>
                                    {test.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm" style={{ color: "#2D2A2B", fontFamily: "Inter, sans-serif" }}>
                                        {test.name}
                                    </p>
                                    <p className="text-xs" style={{ color: "#D22A82", fontFamily: "Inter, sans-serif" }}>
                                        Clienta Balayage
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
