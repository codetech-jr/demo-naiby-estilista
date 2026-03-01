"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: "#FDF8F2" }}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Left: Image Container */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 relative"
                >
                    {/* Decorative background shape */}
                    <div className="absolute -top-10 -left-10 w-full h-full rounded-[3rem] bg-white opacity-60 pointer-events-none" />

                    <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-2xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop"
                            alt="Naiby Osuna trabajando"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </motion.div>

                {/* Right: Copy */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 self-center lg:self-start bg-white border"
                        style={{ color: "#D22A82", borderColor: "rgba(210, 42, 130, 0.15)" }}>
                        Conoce a la Artista
                    </div>

                    <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight" style={{ color: "#2D2A2B" }}>
                        El arte de transformar <br className="hidden lg:block" />
                        <em style={{ color: "#D22A82", fontStyle: "italic" }}>sin maltratar.</em>
                    </h2>

                    <div className="flex flex-col gap-5 text-base lg:text-lg leading-relaxed mt-4" style={{ color: "#4B5563", fontFamily: "Inter, sans-serif" }}>
                        <p>
                            Hola, soy Naiby. Mi filosofía en Charallave es simple: <strong>Tu salud capilar es mi máxima prioridad.</strong>
                        </p>
                        <p>
                            Por eso, mi trabajo va más allá del color; me niego rotundamente a realizar procedimientos extremos que quemen tu cabello.
                        </p>
                        <p>
                            Si estás aquí, es porque buscas resultados de lujo y un trato donde tú y tu melena sean tratadas como la realeza.
                        </p>
                    </div>

                    <div className="mt-8 pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.05)" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/naiby-principal.jpg" alt="Naiby signature avatar" className="w-12 h-12 rounded-full object-cover inline-block lg:hidden mb-4" />
                        <p className="font-serif font-bold text-xl" style={{ color: "#2D2A2B" }}>Naiby Osuna</p>
                        <p className="text-sm font-medium tracking-widest uppercase" style={{ color: "#D22A82" }}>Directora Creativa</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
