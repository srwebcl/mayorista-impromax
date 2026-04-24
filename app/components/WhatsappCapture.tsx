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
            <button 
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 hover:bg-green-600 transition-all z-50"
            >
                <i className="fa-brands fa-whatsapp"></i>
            </button>

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
                        
                        <div className="bg-green-500 p-8 text-white text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fa-brands fa-whatsapp text-4xl text-white"></i>
                            </div>
                            <h3 className="text-2xl font-black mb-1">Habla con un Experto</h3>
                            <p className="text-green-50 text-sm">Completa tus datos para iniciar la atención por WhatsApp</p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-4">
                            <input 
                                name="name" 
                                type="text" 
                                placeholder="Nombre Completo" 
                                required 
                                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input 
                                    name="email" 
                                    type="email" 
                                    placeholder="Tu Email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all"
                                />
                                <input 
                                    name="phone" 
                                    type="tel" 
                                    placeholder="Teléfono" 
                                    required 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all"
                                />
                            </div>
                            <input 
                                name="company" 
                                type="text" 
                                placeholder="Empresa (Opcional)" 
                                className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all"
                            />
                            
                            <button 
                                disabled={status === "loading"}
                                type="submit" 
                                className="w-full bg-green-500 text-white font-black py-4 rounded-xl hover:bg-green-600 transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
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
