"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
    const faqs = [
        {
            question: "¿Puedo hacerme un Balayage si tengo tinte negro de caja?",
            answer: "Depende estrictamente de la salud de tu hebra. El tinte negro de caja es uno de los pigmentos más difíciles de extraer. Procederemos primero con una prueba de mechón durante el diagnóstico para ver hasta dónde aclara tu cabello sin romperse. Si no es seguro, te propondremos un plan de corrección gradual."
        },
        {
            question: "¿Qué pasa si tengo keratina, cera fría o cirugía capilar reciente?",
            answer: "Estos alisados crean un 'plástico' alrededor de la hebra que impide que la decoloración penetre correctamente y puede causar reacciones químicas severas (quiebre). Necesitamos saber exactamente qué producto usaste y cuándo, para evaluar si es candidato a decoloración."
        },
        {
            question: "¿Cuánto dura mi cita en el salón aproximadamente?",
            answer: "Un diseño de color premium no se hace con prisas. Dependiendo de tu largo, densidad y la técnica a utilizar, una sesión de Balayage o corrección de color puede tomar entre 5 a 8 horas. Queremos mimarte, así que ven con tiempo y disposición para relajarte."
        },
        {
            question: "¿Cada cuánto tiempo debo volver para un retoque de color?",
            answer: "El Balayage está diseñado para crecer con gracia sin dejar una raíz marcada. Generalmente, recomendamos un retoque de diseño visual cada 6 a 8 meses, y visitas de mantenimiento (baño de color y tratamientos profundos de hidratación) cada 2 meses para mantener el tono vibrante."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-6 bg-white border-t" style={{ borderColor: "#FDF8F2" }}>
            <div className="max-w-3xl mx-auto flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#2D2A2B" }}>
                        Aclaremos tus <em style={{ color: "#D22A82", fontStyle: "italic" }}>dudas</em> <br className="hidden md:block" />
                        antes del gran cambio.
                    </h2>
                </motion.div>

                <div className="w-full flex flex-col gap-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="overflow-hidden rounded-2xl border transition-colors duration-300"
                                style={{
                                    backgroundColor: isOpen ? "#FFF" : "#FDF8F2",
                                    borderColor: isOpen ? "rgba(210, 42, 130, 0.2)" : "transparent",
                                    boxShadow: isOpen ? "0 4px 20px rgba(0,0,0,0.03)" : "none"
                                }}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-semibold text-base md:text-lg pr-4" style={{ color: "#2D2A2B", fontFamily: "Inter, sans-serif" }}>
                                        {faq.question}
                                    </span>
                                    <div
                                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
                                        style={{
                                            backgroundColor: isOpen ? "#D22A82" : "rgba(0,0,0,0.05)",
                                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                                        }}
                                    >
                                        <ChevronDown size={18} color={isOpen ? "#FFF" : "#2D2A2B"} />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={{
                                                open: { opacity: 1, height: "auto" },
                                                collapsed: { opacity: 0, height: 0 }
                                            }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-sm md:text-base leading-relaxed" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
