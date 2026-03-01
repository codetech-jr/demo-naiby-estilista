"use client";

import { motion } from "framer-motion";
import { Scissors, Minus, Wind, Sparkles, ChevronRight } from "lucide-react";

type LengthOption = "Corto" | "Mediano" | "Largo" | "Extra Largo";

interface Step1Props {
    selected: LengthOption | "";
    onSelect: (length: LengthOption) => void;
    onNext: () => void;
}

const lengthOptions: {
    value: LengthOption;
    label: string;
    description: string;
    icon: React.ReactNode;
    emoji: string;
}[] = [
        {
            value: "Corto",
            label: "Corto",
            description: "Encima del hombro",
            icon: <Scissors size={24} />,
            emoji: "✂️",
        },
        {
            value: "Mediano",
            label: "Mediano",
            description: "Al nivel del hombro",
            icon: <Minus size={24} />,
            emoji: "💇",
        },
        {
            value: "Largo",
            label: "Largo",
            description: "Debajo del hombro",
            icon: <Wind size={24} />,
            emoji: "🌊",
        },
        {
            value: "Extra Largo",
            label: "Extra Largo",
            description: "Debajo de la cintura",
            icon: <Sparkles size={24} />,
            emoji: "✨",
        },
    ];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

export default function Step1Length({ selected, onSelect, onNext }: Step1Props) {
    return (
        <div className="flex flex-col gap-6">
            <div className="text-center">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3"
                    style={{
                        backgroundColor: "rgba(210, 42, 130, 0.08)",
                        color: "#D22A82",
                        fontFamily: "Inter, sans-serif"
                    }}>
                    Paso 1 · Tu Base Actual
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight"
                    style={{ color: "#2D2A2B", fontFamily: "'Playfair Display', serif" }}>
                    ¿Cuál es el largo actual<br />
                    <em style={{ color: "#D22A82" }}>de tu cabello?</em>
                </h3>
                <p className="mt-2 text-sm" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                    Esto nos permite calcular el tiempo y producto necesario
                </p>
            </div>

            <motion.div
                className="grid grid-cols-2 gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {lengthOptions.map((option) => {
                    const isSelected = selected === option.value;
                    return (
                        <motion.button
                            key={option.value}
                            variants={itemVariants}
                            id={`length-option-${option.value.toLowerCase().replace(" ", "-")}`}
                            onClick={() => {
                                onSelect(option.value);
                                setTimeout(() => onNext(), 350); // Auto-advance with visual delay
                            }}
                            className="relative flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all duration-250 text-center group"
                            style={{
                                backgroundColor: isSelected ? "rgba(210, 42, 130, 0.06)" : "#ffffff",
                                borderColor: isSelected ? "#D22A82" : "rgba(0,0,0,0.08)",
                                boxShadow: isSelected
                                    ? "0 4px 20px rgba(210, 42, 130, 0.2)"
                                    : "0 2px 8px rgba(0,0,0,0.04)",
                                transform: isSelected ? "scale(1.02)" : "scale(1)",
                            }}
                        >
                            {/* Selected indicator */}
                            {isSelected && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: "#D22A82" }}
                                >
                                    <span className="text-white text-[10px] font-bold">✓</span>
                                </motion.div>
                            )}

                            <span className="text-3xl">{option.emoji}</span>
                            <div
                                className="transition-colors duration-200"
                                style={{ color: isSelected ? "#D22A82" : "#6B7280" }}
                            >
                                {option.icon}
                            </div>
                            <div>
                                <p className="font-semibold text-sm" style={{
                                    color: isSelected ? "#D22A82" : "#2D2A2B",
                                    fontFamily: "Inter, sans-serif"
                                }}>
                                    {option.label}
                                </p>
                                <p className="text-xs mt-0.5" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                                    {option.description}
                                </p>
                            </div>
                        </motion.button>
                    );
                })}
            </motion.div>

        </div>
    );
}
