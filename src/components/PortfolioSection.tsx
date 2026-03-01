"use client";

import { motion } from "framer-motion";

export default function PortfolioSection() {
    const photos = [
        "https://images.unsplash.com/photo-1554519934-e32b1629d9ee?q=80&w=387&auto=format&fit=crop&w=600&q=80", // Blonde balayage back
        "https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Brown balayage
        "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Wavy balayage
        "https://images.unsplash.com/photo-1554519515-242161756769?q=80&w=387&auto=format&fit=crop&w=600&q=80", // Long hair salon
        "https://images.unsplash.com/photo-1515848797093-effe16ccfabb?q=80&w=385&auto=format&fit=crop&w=600&q=80", // Cool blonde
        "https://images.unsplash.com/photo-1578620164569-aeb8f934e5a8?q=80&w=387&auto=format&fit=crop&w=600&q=80", // Caramel highlights
    ];

    return (
        <section id="portafolio" className="py-24 px-6" style={{ backgroundColor: "#FDF8F2" }}>
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4" style={{ color: "#2D2A2B" }}>
                        Transformaciones que <em style={{ color: "#D22A82" }}>Inspiran</em>
                    </h2>
                    <p className="text-sm md:text-base max-w-lg mx-auto" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                        Nuestro arte, tu cabello. Descubre algunos de los balayages y correcciones de color más recientes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
                    {photos.map((src, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-gray-200 group"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={src}
                                alt={`Portafolio Balayage Naiby Osuna ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* Vignette overlay on hover */}
                            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
