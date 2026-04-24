"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
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
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-green-100">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-200">
                    <i className="fa-solid fa-check text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h3>
                <p className="text-gray-600">Nos pondremos en contacto contigo lo antes posible.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                    name="name" 
                    type="text" 
                    placeholder="Tu Nombre" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ea6721] focus:ring-4 focus:ring-[#ea6721]/10 outline-none transition-all bg-white"
                />
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Tu Email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ea6721] focus:ring-4 focus:ring-[#ea6721]/10 outline-none transition-all bg-white"
                />
            </div>
            <input 
                name="company" 
                type="text" 
                placeholder="Empresa" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ea6721] focus:ring-4 focus:ring-[#ea6721]/10 outline-none transition-all bg-white"
            />
            <textarea 
                name="message" 
                rows={4} 
                placeholder="¿Cómo podemos ayudarte?" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ea6721] focus:ring-4 focus:ring-[#ea6721]/10 outline-none transition-all bg-white resize-none"
            ></textarea>
            
            <button 
                disabled={status === "loading"}
                type="submit" 
                className="w-full bg-[#111] text-white font-black py-4 rounded-xl hover:bg-[#ea6721] transition-all duration-300 shadow-xl shadow-gray-100 hover:shadow-[#ea6721]/30 flex items-center justify-center gap-2 group"
            >
                {status === "loading" ? "Enviando..." : (
                    <>
                        ENVIAR MENSAJE
                        <i className="fa-solid fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                    </>
                )}
            </button>
            {status === "error" && (
                <p className="text-red-500 text-sm text-center">Ocurrió un error. Por favor, inténtalo de nuevo.</p>
            )}
        </form>
    );
}
