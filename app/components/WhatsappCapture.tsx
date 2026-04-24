"use client";

import { useState, useEffect } from "react";

export default function WhatsappCapture() {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-whatsapp-capture', handleOpen);
        return () => window.removeEventListener('open-whatsapp-capture', handleOpen);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            await fetch('/api/brevo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, interest: "WhatsApp Inquiry" }),
            });
        } catch (error) {
            console.error("Error capturing lead for WhatsApp:", error);
        }

        setStatus("success");
        
        // Redirect to WhatsApp
        const message = `Hola Giovanni, mi nombre es ${data.name} de la empresa ${data.company || 'Particular'}. Quisiera cotizar productos mayoristas.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/56957891186?text=${encodedMessage}`, '_blank');
        
        setIsOpen(false);
        setStatus("idle");
    };

    return (
        <>
            {/* Floating Button (Trigger) */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end group">
                {/* Tooltip / Label on Hover */}
                <div className="mb-2 bg-white text-[#111] px-4 py-2 rounded-xl shadow-xl text-xs font-black tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none border border-gray-100">
                    ¿Dudas? Habla con Giovanni 
                    <div className="absolute -bottom-1 right-5 w-2 h-2 bg-white rotate-45 border-r border-b border-gray-100"></div>
                </div>

                <button 
                    onClick={() => setIsOpen(true)}
                    className="relative bg-green-500 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 hover:bg-green-600 transition-all active:scale-95 overflow-visible"
                >
                    {/* Subtle Pulse Ring */}
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 group-hover:opacity-40"></span>
                    
                    <i className="fa-brands fa-whatsapp relative z-10"></i>
                </button>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-[#232628]/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
                    <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md overflow-hidden relative">
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                        >
                            <i className="fa-solid fa-xmark text-2xl"></i>
                        </button>
                        
                        <div className="bg-[#ea6721] p-8 text-white text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fa-brands fa-whatsapp text-4xl text-white"></i>
                            </div>
                            <h3 className="text-2xl font-black mb-1">Habla con un Experto</h3>
                            <p className="text-orange-50 text-sm">Completa tus datos para iniciar la atención por WhatsApp</p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-4">
                            <input 
                                name="name" 
                                type="text" 
                                placeholder="Nombre Completo" 
                                required 
                                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#ea6721] focus:ring-4 focus:ring-[#ea6721]/10 outline-none transition-all"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input 
                                    name="email" 
                                    type="email" 
                                    placeholder="Tu Email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#ea6721] focus:ring-4 focus:ring-[#ea6721]/10 outline-none transition-all"
                                />
                                <input 
                                    name="phone" 
                                    type="tel" 
                                    placeholder="Teléfono" 
                                    required 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#ea6721] focus:ring-4 focus:ring-[#ea6721]/10 outline-none transition-all"
                                />
                            </div>
                            <input 
                                name="company" 
                                type="text" 
                                placeholder="Empresa (Opcional)" 
                                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#ea6721] focus:ring-4 focus:ring-[#ea6721]/10 outline-none transition-all"
                            />
                            
                            <button 
                                disabled={status === "loading"}
                                type="submit" 
                                className="w-full bg-[#ea6721] text-white font-black py-4 rounded-xl hover:bg-black transition-all shadow-lg shadow-[#ea6721]/20 flex items-center justify-center gap-2"
                            >
                                {status === "loading" ? "Procesando..." : "INICIAR CHAT"}
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                            <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest font-bold">Respuesta inmediata • Atención personalizada</p>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
