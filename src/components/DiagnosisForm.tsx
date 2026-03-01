"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Step1Length from "@/components/steps/Step1Length";
import Step2History from "@/components/steps/Step2History";
import Step3Goal from "@/components/steps/Step3Goal";
import Step4Summary from "@/components/steps/Step4Summary";

type LengthOption = "Corto" | "Mediano" | "Largo" | "Extra Largo" | "";
type HistoryOption = "Virgen" | "Tinte Oscuro/Negro" | "Keratina/Alisado" | "Decoloración";

interface FormData {
    name: string;
    length: LengthOption;
    history: string[];
    goal: string;
}

const TOTAL_STEPS = 4;

const stepTitles = [
    "Tu base actual",
    "Historial Químico",
    "Tu Meta",
    "Revisión Final",
];

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 60 : -60,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -60 : 60,
        opacity: 0,
    }),
};

export default function DiagnosisForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [direction, setDirection] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        length: "",
        history: [],
        goal: "",
    });

    const goNext = () => {
        setDirection(1);
        setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    };

    const goBack = () => {
        setDirection(-1);
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const setLength = (length: LengthOption) => {
        setFormData((prev) => ({ ...prev, length }));
    };

    const toggleHistory = (item: HistoryOption) => {
        setFormData((prev) => ({
            ...prev,
            history: prev.history.includes(item)
                ? prev.history.filter((h) => h !== item)
                : [...prev.history, item],
        }));
    };

    const setName = (name: string) => {
        setFormData((prev) => ({ ...prev, name }));
    };

    const setGoal = (goal: string) => {
        setFormData((prev) => ({ ...prev, goal }));
    };

    const progressPercent = ((currentStep - 1) / (TOTAL_STEPS - 1)) * 100;

    return (
        <section
            className="min-h-screen lg:min-h-full flex flex-col items-center justify-start px-4 py-12 md:py-16 w-full lg:pt-24"
            style={{ backgroundColor: "#FDF8F2" }}
        >
            <div className="w-full max-w-lg lg:max-w-xl mx-auto flex flex-col gap-6">
                {/* Form header */}
                <div className="text-center flex flex-col gap-2">
                    <div className="inline-flex items-center gap-2 mx-auto px-4 py-2 rounded-full text-sm font-medium"
                        style={{
                            backgroundColor: "rgba(210, 42, 130, 0.08)",
                            color: "#D22A82",
                            fontFamily: "Inter, sans-serif"
                        }}>
                        <Sparkles size={14} />
                        Diagnóstico Capilar Personalizado
                    </div>
                    <p className="text-xs" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                        {currentStep} de {TOTAL_STEPS} · {stepTitles[currentStep - 1]}
                    </p>
                </div>

                {/* Progress bar */}
                <div className="flex flex-col gap-2">
                    <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#E5E7EB" }}>
                        <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: "#D22A82" }}
                            initial={{ width: "0%" }}
                            animate={{ width: `${progressPercent}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </div>
                    {/* Step dots */}
                    <div className="flex items-center justify-between px-1">
                        {[...Array(TOTAL_STEPS)].map((_, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center gap-1"
                            >
                                <div
                                    className="w-3 h-3 rounded-full transition-all duration-300"
                                    style={{
                                        backgroundColor:
                                            i + 1 < currentStep
                                                ? "#D22A82"
                                                : i + 1 === currentStep
                                                    ? "#D22A82"
                                                    : "#E5E7EB",
                                        transform: i + 1 === currentStep ? "scale(1.3)" : "scale(1)",
                                        boxShadow: i + 1 === currentStep ? "0 0 0 3px rgba(210,42,130,0.2)" : "none"
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main form card */}
                <div
                    className="relative rounded-3xl overflow-hidden"
                    style={{
                        backgroundColor: "#ffffff",
                        boxShadow: "0 16px 48px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)"
                    }}
                >
                    <div className="p-6 md:p-8">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentStep}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                {currentStep === 1 && (
                                    <Step1Length
                                        selected={formData.length}
                                        onSelect={setLength}
                                        onNext={goNext}
                                    />
                                )}
                                {currentStep === 2 && (
                                    <Step2History
                                        selected={formData.history}
                                        onToggle={toggleHistory}
                                        onNext={goNext}
                                        onBack={goBack}
                                    />
                                )}
                                {currentStep === 3 && (
                                    <Step3Goal
                                        name={formData.name}
                                        goal={formData.goal}
                                        onNameChange={setName}
                                        onGoalChange={setGoal}
                                        onNext={goNext}
                                        onBack={goBack}
                                    />
                                )}
                                {currentStep === 4 && (
                                    <Step4Summary
                                        formData={{
                                            name: formData.name,
                                            length: formData.length,
                                            history: formData.history,
                                            goal: formData.goal,
                                        }}
                                        onBack={goBack}
                                    />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Trust footer */}
                <div className="text-center pb-4">
                    <p className="text-xs" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                        🔒 Tus datos son privados y solo serán compartidos con Naiby vía WhatsApp
                    </p>
                </div>
            </div>
        </section>
    );
}
