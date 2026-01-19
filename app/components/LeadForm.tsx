"use client";

import { FormEvent } from "react";

export default function LeadForm() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('¡Gracias! Tu solicitud ha sido enviada. Giovanni Rojas te contactará pronto.');
    };

    return (
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 transform transition hover:scale-105 duration-300 border-t-4 border-[#F36719]">
            <h3 className="text-2xl font-bold text-[#232628] mb-2 text-center">Solicita tu Lista de Precios</h3>
            <p className="text-[#545051] text-center mb-6 text-sm">Completa el formulario y Giovanni te contactará a la brevedad.</p>

            <form id="leadForm" className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-xs font-bold text-[#545051] uppercase mb-1">Nombre Completo</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F36719] focus:ring-2 focus:ring-orange-100 outline-none transition" placeholder="Ej: Juan Pérez" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-[#545051] uppercase mb-1">Empresa / Razón Social</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F36719] focus:ring-2 focus:ring-orange-100 outline-none transition" placeholder="Ej: Servicios Eléctricos SPA" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-[#545051] uppercase mb-1">Teléfono</label>
                        <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F36719] focus:ring-2 focus:ring-orange-100 outline-none transition" placeholder="+569..." />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-[#545051] uppercase mb-1">Email</label>
                        <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F36719] focus:ring-2 focus:ring-orange-100 outline-none transition" placeholder="correo@empresa.cl" />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-[#545051] uppercase mb-1">Interés Principal</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F36719] outline-none bg-white">
                        <option>Variadores de Frecuencia</option>
                        <option>Controladores y PLC</option>
                        <option>Fuentes de Poder</option>
                        <option>Tableros Eléctricos</option>
                        <option>Todo el catálogo</option>
                    </select>
                </div>
                {/* Botón con Gradiente Corporativo */}
                <button type="submit" className="w-full btn-primary text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition transform active:scale-95 text-lg flex items-center justify-center">
                    <i className="fa-solid fa-download mr-2"></i> DESCARGAR CATÁLOGO
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">
                    <i className="fa-solid fa-lock"></i> Tus datos están 100% seguros.
                </p>
            </form>
        </div>
    );
}
