import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-[#232628] shadow-md fixed w-full z-50 transition-colors duration-300">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    {/* Logo con filtro para verse blanco sobre fondo oscuro */}
                    <Link href="#inicio" className="flex items-center gap-2">
                        <div className="relative h-12 w-auto">
                            <Image
                                src="/client_logo.png"
                                alt="Impromax Logo"
                                width={150}
                                height={50}
                                className="h-12 w-auto object-contain brightness-0 invert"
                                priority
                            />
                        </div>
                        <span className="text-xl font-bold text-white hidden sm:inline border-l border-gray-600 pl-3 ml-1">Mayorista</span>
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-6 font-medium text-sm text-gray-300">
                    <Link href="#beneficios" className="hover:text-[#F36719] transition">BENEFICIOS</Link>
                    <Link href="#productos" className="hover:text-[#F36719] transition">PRODUCTOS</Link>
                    <Link href="#contacto" className="hover:text-[#F36719] transition">CONTACTO</Link>
                </div>
                <div>
                    {/* Botón CTA Header: Naranja Corporativo */}
                    <a href="https://wa.me/56957891186" target="_blank" className="bg-[#F36719] hover:bg-[#EA8E56] text-white px-4 py-2 rounded-full text-sm font-bold transition flex items-center gap-2 shadow-lg">
                        <i className="fa-brands fa-whatsapp text-lg"></i> <span className="hidden sm:inline">Hablar con Giovanni</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
