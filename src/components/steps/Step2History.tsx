"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Upload, X, Check, Image as ImageIcon } from "lucide-react";

type HistoryOption = "Virgen" | "Tinte Oscuro/Negro" | "Keratina/Alisado" | "Decoloración";

interface Step2Props {
    name: string;
    phone: string;
    selected: string[];
    onNameChange: (value: string) => void;
    onPhoneChange: (value: string) => void;
    onToggle: (item: HistoryOption) => void;
    onNext: () => void;
    onBack: () => void;
}

const historyOptions: {
    value: HistoryOption;
    label: string;
    description: string;
    icon: string;
    warning?: string;
}[] = [
        {
            value: "Virgen",
            label: "Cabello Virgen",
            description: "Nunca ha sido procesado químicamente",
            icon: "🌿",
        },
        {
            value: "Tinte Oscuro/Negro",
            label: "Tinte Oscuro / Negro",
            description: "Color artificial oscuro o negro aplicado",
            icon: "🖤",
            warning: "Requiere atención especial",
        },
        {
            value: "Keratina/Alisado",
            label: "Keratina / Cirugía Capilar",
            description: "Tratamiento de alisado o keratina reciente",
            icon: "💎",
        },
        {
            value: "Decoloración",
            label: "Decoloración Previa",
            description: "Cabello tiene antecedente de blanqueado",
            icon: "⚡",
            warning: "Puede afectar el proceso",
        },
    ];

export default function Step2History({ name, phone, selected, onNameChange, onPhoneChange, onToggle, onNext, onBack }: Step2Props) {
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

    return (
        <div className="flex flex-col gap-6">
            <div className="text-center">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3"
                    style={{
                        backgroundColor: "rgba(210, 42, 130, 0.08)",
                        color: "#D22A82",
                        fontFamily: "Inter, sans-serif"
                    }}>
                    Paso 2 · Historial Químico (Crucial)
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight"
                    style={{ color: "#2D2A2B", fontFamily: "'Playfair Display', serif" }}>
                    Seamos honestas,{" "}
                    <em style={{ color: "#D22A82" }}>¿qué tiene<br />tu cabello actualmente?</em>
                </h3>
                <p className="mt-2 text-sm" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                    Selecciona todo lo que aplique · Puedes elegir varias opciones
                </p>
            </div>

            {/* Checkbox cards */}
            <div className="flex flex-col gap-3">
                {historyOptions.map((option) => {
                    const isSelected = selected.includes(option.value);
                    return (
                        <motion.button
                            key={option.value}
                            id={`history-option-${option.value.toLowerCase().replace(/\//g, "-").replace(/ /g, "-")}`}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => onToggle(option.value)}
                            className="relative flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-200"
                            style={{
                                backgroundColor: isSelected ? "rgba(210, 42, 130, 0.05)" : "#ffffff",
                                borderColor: isSelected ? "#D22A82" : "rgba(0,0,0,0.08)",
                                boxShadow: isSelected
                                    ? "0 4px 16px rgba(210, 42, 130, 0.15)"
                                    : "0 2px 8px rgba(0,0,0,0.04)",
                            }}
                        >
                            <span className="text-2xl flex-shrink-0">{option.icon}</span>
                            <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm" style={{
                                    color: isSelected ? "#D22A82" : "#2D2A2B",
                                    fontFamily: "Inter, sans-serif"
                                }}>
                                    {option.label}
                                </p>
                                <p className="text-xs mt-0.5 truncate" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                                    {option.description}
                                </p>
                                {option.warning && (
                                    <p className="text-xs mt-1 font-medium" style={{ color: "#E8C35A" }}>
                                        ⚠ {option.warning}
                                    </p>
                                )}
                            </div>
                            {/* Checkbox indicator */}
                            <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200"
                                style={{
                                    borderColor: isSelected ? "#D22A82" : "rgba(0,0,0,0.15)",
                                    backgroundColor: isSelected ? "#D22A82" : "transparent"
                                }}>
                                <AnimatePresence>
                                    {isSelected && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                        >
                                            <Check size={12} color="white" strokeWidth={3} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.button>
                    );
                })}
            </div>

            {/* Photo upload */}
            <div className="flex flex-col gap-2">
                <p className="text-sm font-medium" style={{ color: "#2D2A2B", fontFamily: "Inter, sans-serif" }}>
                    📸 Foto de tu cabello actual{" "}
                    <span style={{ color: "#6B7280", fontWeight: 400 }}>(opcional pero recomendado)</span>
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
                                alt="Foto de cabello actual"
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
                                style={{ backgroundColor: "rgba(210, 42, 130, 0.1)" }}>
                                <Upload size={20} style={{ color: "#D22A82" }} />
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-medium" style={{ color: "#2D2A2B", fontFamily: "Inter, sans-serif" }}>
                                    Drag &amp; Drop o{" "}
                                    <span style={{ color: "#D22A82", textDecoration: "underline" }}>Selecciona imagen</span>
                                </p>
                                <p className="text-xs mt-1" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                                    JPG, PNG, HEIC · Máx. 10MB
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
                    id="hair-current-photo"
                    onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                />
            </div>

            {/* Lead Capture Inputs */}
            <div className="flex flex-col gap-4 mt-2">
                <div className="flex flex-col gap-2">
                    <label htmlFor="client-name" className="text-sm font-medium" style={{ color: "#2D2A2B", fontFamily: "Inter, sans-serif" }}>
                        👋 ¿Cuál es tu nombre? *
                    </label>
                    <input
                        id="client-name"
                        type="text"
                        value={name}
                        onChange={(e) => onNameChange(e.target.value)}
                        placeholder="Ej: María González"
                        className="w-full px-4 py-3.5 rounded-2xl border-2 text-sm outline-none transition-all duration-200"
                        style={{
                            borderColor: name ? "#D22A82" : "rgba(0,0,0,0.1)",
                            fontFamily: "Inter, sans-serif",
                            color: "#2D2A2B",
                            backgroundColor: "#ffffff",
                            boxShadow: name ? "0 0 0 3px rgba(210, 42, 130, 0.1)" : "none",
                        }}
                        onFocus={e => {
                            e.currentTarget.style.borderColor = "#D22A82";
                            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(210, 42, 130, 0.1)";
                        }}
                        onBlur={e => {
                            if (!name) {
                                e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                                e.currentTarget.style.boxShadow = "none";
                            }
                        }}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="client-phone" className="text-sm font-medium" style={{ color: "#2D2A2B", fontFamily: "Inter, sans-serif" }}>
                        📱 Tu número de WhatsApp *
                    </label>
                    <input
                        id="client-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => onPhoneChange(e.target.value)}
                        placeholder="+58 412 1234567"
                        className="w-full px-4 py-3.5 rounded-2xl border-2 text-sm outline-none transition-all duration-200"
                        style={{
                            borderColor: phone ? "#D22A82" : "rgba(0,0,0,0.1)",
                            fontFamily: "Inter, sans-serif",
                            color: "#2D2A2B",
                            backgroundColor: "#ffffff",
                            boxShadow: phone ? "0 0 0 3px rgba(210, 42, 130, 0.1)" : "none",
                        }}
                        onFocus={e => {
                            e.currentTarget.style.borderColor = "#D22A82";
                            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(210, 42, 130, 0.1)";
                        }}
                        onBlur={e => {
                            if (!phone) {
                                e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                                e.currentTarget.style.boxShadow = "none";
                            }
                        }}
                    />
                </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-3">
                <button
                    id="step2-back-button"
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
                    id="step2-next-button"
                    onClick={onNext}
                    disabled={!name.trim() || !phone.trim() || selected.length === 0}
                    className="flex-[2] py-4 px-6 rounded-2xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
                    style={{
                        backgroundColor: (name.trim() && phone.trim() && selected.length > 0) ? "#D22A82" : "#ccc",
                        fontFamily: "Inter, sans-serif",
                        boxShadow: (name.trim() && phone.trim() && selected.length > 0) ? "0 6px 24px rgba(210, 42, 130, 0.35)" : "none"
                    }}
                >
                    Siguiente
                    <ChevronRight size={18} />
                </button>
            </div>
        </div>
    );
}
