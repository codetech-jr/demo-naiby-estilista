"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Upload, X } from "lucide-react";

interface Step3Props {
    goal: string;
    onGoalChange: (value: string) => void;
    onNext: () => void;
    onBack: () => void;
}

export default function Step3Goal({
    goal,
    onGoalChange,
    onNext,
    onBack,
}: Step3Props) {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (file: File | null) => {
        if (!file) return;
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) handleFileChange(file);
    };

    const removePreview = () => {
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const isValid = goal.trim().length > 5;

    return (
        <div className="flex flex-col gap-6">
            <div className="text-center">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3"
                    style={{
                        backgroundColor: "rgba(210, 42, 130, 0.08)",
                        color: "#D22A82",
                        fontFamily: "Inter, sans-serif"
                    }}>
                    Paso 3 · Tu Meta
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight"
                    style={{ color: "#2D2A2B", fontFamily: "'Playfair Display', serif" }}>
                    Cuéntame{" "}
                    <em style={{ color: "#D22A82" }}>tu idea...</em>
                </h3>
                <p className="mt-2 text-sm" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                    Mientras más detallada sea tu descripción, mejor podré asesorarte
                </p>
            </div>

            {/* Goal textarea */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium" style={{ color: "#2D2A2B", fontFamily: "Inter, sans-serif" }}>
                    ✨ ¿Qué técnica o color deseas?
                </label>
                <textarea
                    id="goal-textarea"
                    value={goal}
                    onChange={(e) => onGoalChange(e.target.value)}
                    rows={4}
                    placeholder="Ej: Quiero un balayage platinado con mechones naturales, sin dañar mucho el cabello, que tape mis canas y que se vea muy natural al crecer..."
                    className="w-full px-4 py-3 rounded-2xl border-2 text-sm resize-none outline-none transition-all duration-200"
                    style={{
                        borderColor: goal ? "#D22A82" : "rgba(0,0,0,0.1)",
                        fontFamily: "Inter, sans-serif",
                        color: "#2D2A2B",
                        backgroundColor: "#ffffff",
                        boxShadow: goal ? "0 0 0 3px rgba(210, 42, 130, 0.1)" : "none",
                        lineHeight: "1.6"
                    }}
                    onFocus={e => {
                        e.currentTarget.style.borderColor = "#D22A82";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(210, 42, 130, 0.1)";
                    }}
                    onBlur={e => {
                        if (!goal) {
                            e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                            e.currentTarget.style.boxShadow = "none";
                        }
                    }}
                />
                <p className="text-xs text-right" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                    {goal.length} caracteres {goal.length < 20 && goal.length > 0 && "· sé más específica 😊"}
                </p>
            </div>

            {/* Inspiration photo upload */}
            <div className="flex flex-col gap-2">
                <p className="text-sm font-medium" style={{ color: "#2D2A2B", fontFamily: "Inter, sans-serif" }}>
                    🖼️ Foto de inspiración{" "}
                    <span style={{ color: "#6B7280", fontWeight: 400 }}>(opcional pero muy útil)</span>
                </p>

                <AnimatePresence mode="wait">
                    {previewUrl ? (
                        <motion.div
                            key="preview"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative rounded-2xl overflow-hidden"
                            style={{ aspectRatio: "16/7" }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={previewUrl}
                                alt="Foto de inspiración"
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={removePreview}
                                className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-white"
                                style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
                            >
                                <X size={14} />
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="dropzone"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                            onDragLeave={() => setIsDragging(false)}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                            className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border-2 border-dashed cursor-pointer transition-all duration-200"
                            style={{
                                borderColor: isDragging ? "#D22A82" : "rgba(210, 42, 130, 0.3)",
                                backgroundColor: isDragging ? "rgba(210, 42, 130, 0.04)" : "rgba(210, 42, 130, 0.02)",
                            }}
                        >
                            <div className="w-12 h-12 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: "rgba(232, 195, 90, 0.15)" }}>
                                <Upload size={20} style={{ color: "#E8C35A" }} />
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-medium" style={{ color: "#2D2A2B", fontFamily: "Inter, sans-serif" }}>
                                    Sube tu foto de inspiración
                                </p>
                                <p className="text-xs mt-1" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                                    Drag &amp; Drop o{" "}
                                    <span style={{ color: "#D22A82", textDecoration: "underline" }}>Selecciona imagen</span>
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="inspiration-photo"
                    onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                />
            </div>


            {/* Navigation */}
            <div className="flex gap-3">
                <button
                    id="step3-back-button"
                    onClick={onBack}
                    className="flex-1 py-4 px-6 rounded-2xl border-2 font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200"
                    style={{
                        borderColor: "rgba(0,0,0,0.1)",
                        color: "#6B7280",
                        backgroundColor: "#ffffff",
                        fontFamily: "Inter, sans-serif"
                    }}
                >
                    <ChevronLeft size={18} />
                    Atrás
                </button>
                <button
                    id="step3-next-button"
                    onClick={onNext}
                    disabled={!isValid}
                    className="flex-[2] py-4 px-6 rounded-2xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 disabled:cursor-not-allowed"
                    style={{
                        backgroundColor: isValid ? "#D22A82" : "#ccc",
                        fontFamily: "Inter, sans-serif",
                        boxShadow: isValid ? "0 6px 24px rgba(210, 42, 130, 0.35)" : "none"
                    }}
                >
                    Revisar Diagnóstico
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
}
