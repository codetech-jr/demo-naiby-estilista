import { Instagram, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 px-6" style={{ backgroundColor: "#2D2A2B" }}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Logo & copyright */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="font-serif text-2xl font-bold mb-2 text-white">Naiby Osuna</h3>
                    <p className="text-sm opacity-60 text-white font-sans max-w-xs">
                        Colorista Premium especializada en Balayage y cuidado capilar profesional.
                    </p>
                    <p className="text-xs opacity-40 text-white font-sans mt-6">
                        © {new Date().getFullYear()} Naiby Osuna. Todos los derechos reservados.
                    </p>
                </div>

                {/* Links & Social */}
                <div className="flex flex-col items-center md:items-end gap-6 mt-6 md:mt-0">
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#D22A82] transition-colors duration-300">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#D22A82] transition-colors duration-300">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                            </svg>
                        </a>
                    </div>

                    <div className="flex items-center gap-2 text-sm opacity-80 text-white font-sans">
                        <MapPin size={16} color="#D22A82" />
                        <span>Atención previa cita en Salón.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
