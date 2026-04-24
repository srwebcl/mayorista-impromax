"use client";

import { FormEvent, useState } from "react";

export default function LeadForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("loading");
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/brevo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-2xl p-8 text-center text-white h-full flex flex-col items-center justify-center min-h-[450px]">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(34,197,94,0.5)]">
                    <i className="fa-solid fa-check text-5xl text-white"></i>
                </div>
                <h3 className="text-3xl font-black mb-4">¡Solicitud Recibida!</h3>
                <p className="text-gray-200 text-lg font-light leading-relaxed">Giovanni Rojas se pondrá en contacto contigo muy pronto para procesar tu cuenta mayorista.</p>
            </div>
        );
    }

    return (
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.2)] p-8 md:p-10 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#F36719] rounded-full mix-blend-screen filter blur-[120px] opacity-50 pointer-events-none"></div>
            
            <h3 className="text-3xl font-black text-white mb-3 relative z-10">Cotiza al Mayor</h3>
            <p className="text-gray-300 mb-8 text-[15px] font-light relative z-10 leading-relaxed">Completa tus datos y nuestro equipo te contactará para abrir tu cuenta comercial.</p>

            <form id="leadForm" className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                <div>
                    <input name="name" type="text" required className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-[#F36719] text-white placeholder-gray-400 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(243,103,25,0.2)]" placeholder="Nombre Completo" />
                </div>
                <div>
                    <input name="company" type="text" required className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-[#F36719] text-white placeholder-gray-400 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(243,103,25,0.2)]" placeholder="Empresa / Razón Social" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <input name="phone" type="tel" required className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-[#F36719] text-white placeholder-gray-400 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(243,103,25,0.2)]" placeholder="Teléfono (+569)" />
                    </div>
                    <div>
                        <input name="email" type="email" required className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-[#F36719] text-white placeholder-gray-400 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(243,103,25,0.2)]" placeholder="Email Comercial" />
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <select name="interest" required defaultValue="" className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:bg-white/10 focus:border-[#F36719] text-gray-300 outline-none transition-all duration-300 appearance-none focus:shadow-[0_0_15px_rgba(243,103,25,0.2)]">
                            <option value="" disabled className="text-gray-800">Selecciona tu Interés Principal</option>
                            <option value="Variadores" className="text-gray-800">Variadores de Frecuencia</option>
                            <option value="Controladores" className="text-gray-800">Controladores y PLC</option>
                            <option value="Fuentes" className="text-gray-800">Fuentes de Poder</option>
                            <option value="Tableros" className="text-gray-800">Tableros Eléctricos</option>
                            <option value="Todo" className="text-gray-800">Todo el catálogo</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-gray-400">
                            <i className="fa-solid fa-chevron-down text-sm"></i>
                        </div>
                    </div>
                </div>
                
                <button disabled={status === "loading"} type="submit" className="w-full mt-4 bg-gradient-to-r from-[#F36719] to-[#EA8E56] text-white font-black py-4 md:py-5 rounded-xl shadow-[0_0_20px_rgba(243,103,25,0.4)] hover:shadow-[0_0_35px_rgba(243,103,25,0.6)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 text-lg tracking-wide flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none">
                    {status === "loading" ? "ENVIANDO..." : (
                        <>
                            SOLICITAR COTIZACIÓN <i className="fa-solid fa-paper-plane ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                        </>
                    )}
                </button>
                {status === "error" && <p className="text-red-400 text-sm text-center">Hubo un error al enviar. Por favor intenta de nuevo.</p>}
                
                <p className="text-xs text-center text-gray-400/80 mt-6 flex items-center justify-center gap-2 font-light">
                    <i className="fa-solid fa-shield-halved text-gray-500"></i> Tus datos están cifrados y seguros.
                </p>
            </form>
        </div>
    );
}
