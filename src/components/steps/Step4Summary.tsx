"use client";

import { motion } from "framer-motion";
import { ChevronLeft, User, Ruler, FlaskConical, Target, MessageCircle } from "lucide-react";

interface FormData {
    name: string;
    length: "Corto" | "Mediano" | "Largo" | "Extra Largo" | "";
    history: string[];
    goal: string;
}

interface Step4Props {
    formData: FormData;
    onBack: () => void;
}

const WHATSAPP_NUMBER = "584142846166";

function buildWhatsAppMessage(data: FormData): string {
    const historyText = data.history.length > 0
        ? data.history.join(", ")
        : "Cabello Virgen";

    const message =
        `¡Hola Naiby! 👋 He completado el pre-diagnóstico en tu web.\n` +
        `\n*Mi Nombre:* ${data.name}` +
        `\n*Largo:* ${data.length}` +
        `\n*Historial químico:* ${historyText}` +
        `\n*Mi meta:* ${data.goal}\n` +
        `\n[Nota: Llevo fotos en el chat].` +
        `\n¡Quedo a la espera de tu evaluación para presupuesto! ✨`;

    return message;
}

const summaryRows = [
    {
        icon: <User size={16} />, label: "Nombre", key: "name" as keyof FormData
    },
    {
        icon: <Ruler size={16} />, label: "Largo de cabello", key: "length" as keyof FormData
    },
    {
        icon: <FlaskConical size={16} />, label: "Historial químico", key: "history" as keyof FormData
    },
    {
        icon: <Target size={16} />, label: "Tu meta", key: "goal" as keyof FormData
    },
];

export default function Step4Summary({ formData, onBack }: Step4Props) {
    const handleSubmit = () => {
        const message = buildWhatsAppMessage(formData);
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const getDisplayValue = (key: keyof FormData): string => {
        const value = formData[key];
        if (Array.isArray(value)) {
            return value.length > 0 ? value.join(", ") : "Cabello Virgen";
        }
        return value || "—";
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
                    Paso 4 · Revisión Final
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight"
                    style={{ color: "#2D2A2B", fontFamily: "'Playfair Display', serif" }}>
                    Tu diagnóstico{" "}
                    <em style={{ color: "#D22A82" }}>está listo</em> ✨
                </h3>
                <p className="mt-2 text-sm" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                    Revisa tu información antes de enviar a Naiby
                </p>
            </div>

            {/* Summary ticket card */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-3xl overflow-hidden"
                style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.04)"
                }}
            >
                {/* Card header */}
                <div className="px-6 py-5 flex items-center gap-3"
                    style={{ background: "linear-gradient(135deg, #D22A82, #B5216E)" }}>
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-xl">💄</span>
                    </div>
                    <div>
                        <p className="text-white text-xs font-medium opacity-80" style={{ fontFamily: "Inter, sans-serif" }}>
                            PRE-DIAGNÓSTICO CAPILAR
                        </p>
                        <p className="text-white font-semibold text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                            Naiby Osuna · Colorista Premium
                        </p>
                    </div>
                    <div className="ml-auto text-right">
                        <p className="text-white text-xs opacity-70" style={{ fontFamily: "Inter, sans-serif" }}>Ref.</p>
                        <p className="text-white text-xs font-mono font-semibold">
                            #{Math.floor(Math.random() * 90000) + 10000}
                        </p>
                    </div>
                </div>

                {/* Dashed divider */}
                <div className="px-6 py-0">
                    <div className="border-t-2 border-dashed" style={{ borderColor: "rgba(0,0,0,0.08)" }} />
                </div>

                {/* Summary rows */}
                <div className="px-6 py-4 flex flex-col gap-4">
                    {summaryRows.map((row) => (
                        <div key={row.key} className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                                style={{ backgroundColor: "rgba(210, 42, 130, 0.1)", color: "#D22A82" }}>
                                {row.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium uppercase tracking-wider mb-0.5"
                                    style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                                    {row.label}
                                </p>
                                <p className="text-sm font-medium leading-relaxed"
                                    style={{
                                        color: "#2D2A2B",
                                        fontFamily: "Inter, sans-serif",
                                        wordBreak: "break-word"
                                    }}>
                                    {getDisplayValue(row.key)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom ticket notch */}
                <div className="px-6 py-0">
                    <div className="border-t-2 border-dashed" style={{ borderColor: "rgba(0,0,0,0.08)" }} />
                </div>
                <div className="px-6 py-4">
                    <p className="text-xs text-center" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                        📸 Recuerda adjuntar tus fotos directamente en el chat de WhatsApp
                    </p>
                </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <button
                    id="whatsapp-submit-button"
                    onClick={handleSubmit}
                    className="animate-whatsapp-pulse w-full py-5 px-8 rounded-2xl text-white font-bold text-base flex items-center justify-center gap-3 transition-all duration-300"
                    style={{
                        backgroundColor: "#25D366",
                        fontFamily: "Inter, sans-serif",
                        boxShadow: "0 8px 32px rgba(37, 211, 102, 0.45)"
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1da851";
                        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#25D366";
                        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                    }}
                >
                    {/* WhatsApp SVG icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Enviar Diagnóstico a Naiby por WhatsApp
                </button>
                <p className="mt-3 text-xs text-center" style={{ color: "#6B7280", fontFamily: "Inter, sans-serif" }}>
                    Se abrirá WhatsApp con tu mensaje pre-cargado · Solo debes enviarlo 💬
                </p>
            </motion.div>

            {/* Back button */}
            <button
                id="step4-back-button"
                onClick={onBack}
                className="w-full py-3 px-6 rounded-2xl border-2 font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200"
                style={{
                    borderColor: "rgba(0,0,0,0.1)",
                    color: "#6B7280",
                    backgroundColor: "transparent",
                    fontFamily: "Inter, sans-serif"
                }}
            >
                <ChevronLeft size={18} />
                Editar mis respuestas
            </button>
        </div>
    );
}
