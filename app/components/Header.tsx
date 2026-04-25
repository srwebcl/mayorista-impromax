"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-[#111111] shadow-xl fixed w-full z-50 transition-all duration-300 border-b border-white/5">
            <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="#inicio" className="flex items-center gap-2 md:gap-3 group">
                        <div className="relative h-10 md:h-12 w-auto">
                            <Image
                                src="/client_logo.png"
                                alt="Impromax Logo"
                                width={150}
                                height={50}
                                className="h-10 md:h-12 w-auto object-contain brightness-0 invert transition-transform group-hover:scale-105"
                                priority
                            />
                        </div>
                        <span className="text-lg md:text-xl font-black text-white hidden xs:inline-block border-l border-white/20 pl-3 ml-1 tracking-tighter">MAYORISTA</span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-8 font-bold text-xs text-gray-400 tracking-widest">
                    <Link href="#beneficios" className="hover:text-[#ea6721] transition-colors uppercase">Beneficios</Link>
                    <Link href="#productos" className="hover:text-[#ea6721] transition-colors uppercase">Productos</Link>
                    <Link href="#contacto" className="hover:text-[#ea6721] transition-colors uppercase">Contacto</Link>
                </div>

                <div className="flex items-center gap-3">
                    {/* Botón CTA Header */}
                    <button 
                        onClick={() => window.dispatchEvent(new CustomEvent('open-whatsapp-capture'))}
                        className="bg-[#ea6721] hover:bg-black text-white px-5 md:px-7 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-black transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(234,103,33,0.3)] hover:shadow-[0_0_30px_rgba(234,103,33,0.5)] border border-[#ea6721]"
                    >
                        <i className="fa-brands fa-whatsapp text-lg"></i> 
                        <span className="hidden sm:inline">Hablar con Giovanni</span>
                        <span className="sm:hidden uppercase">Hablar</span>
                    </button>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-white w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
                    >
                        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div className={`lg:hidden fixed inset-0 bg-[#111111]/95 backdrop-blur-xl z-40 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
                    <Link onClick={() => setIsMenuOpen(false)} href="#inicio" className="text-3xl font-black text-white hover:text-[#ea6721]">INICIO</Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="#beneficios" className="text-3xl font-black text-white hover:text-[#ea6721]">BENEFICIOS</Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="#productos" className="text-3xl font-black text-white hover:text-[#ea6721]">PRODUCTOS</Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="#contacto" className="text-3xl font-black text-white hover:text-[#ea6721]">CONTACTO</Link>
                    <div className="pt-8">
                         <button 
                            onClick={() => {
                                setIsMenuOpen(false);
                                window.dispatchEvent(new CustomEvent('open-whatsapp-capture'));
                            }}
                            className="bg-[#ea6721] text-white px-10 py-5 rounded-2xl text-lg font-black shadow-2xl"
                        >
                            HABLAR POR WHATSAPP
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
