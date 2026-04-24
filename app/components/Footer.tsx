import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#111111] text-gray-400 pt-16 pb-8 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Info */}
                    <div>
                        <div className="mb-6">
                            <Image
                                src="/client_logo.png"
                                alt="Impromax Logo"
                                width={180}
                                height={60}
                                className="h-12 w-auto brightness-0 invert object-contain"
                            />
                        </div>
                        <p className="text-sm leading-relaxed mb-8 text-gray-400 max-w-xs">
                            Expertos en Repuestos Eléctricos de Automatización Industrial. Proveemos soluciones eficientes y rápidas para mantener la industria chilena en movimiento.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ea6721] hover:text-white transition-all duration-300 border border-white/10">
                                <i className="fa-brands fa-facebook-f text-sm"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ea6721] hover:text-white transition-all duration-300 border border-white/10">
                                <i className="fa-brands fa-instagram text-sm"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ea6721] hover:text-white transition-all duration-300 border border-white/10">
                                <i className="fa-brands fa-linkedin-in text-sm"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Navegación</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#inicio" className="hover:text-[#ea6721] transition-colors">Inicio</Link></li>
                            <li><Link href="#beneficios" className="hover:text-[#ea6721] transition-colors">Beneficios</Link></li>
                            <li><Link href="#productos" className="hover:text-[#ea6721] transition-colors">Productos</Link></li>
                            <li><Link href="#contacto" className="hover:text-[#ea6721] transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contacto Directo</h4>
                        <ul className="space-y-5 text-sm">
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-[#ea6721]/10 flex items-center justify-center">
                                    <i className="fa-solid fa-phone text-[#ea6721]"></i>
                                </div>
                                <span className="font-medium">+56 9 5789 1186</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-[#ea6721]/10 flex items-center justify-center">
                                    <i className="fa-solid fa-envelope text-[#ea6721]"></i>
                                </div>
                                <span className="font-medium">ventas@impromax.cl</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-[#ea6721]/10 flex items-center justify-center">
                                    <i className="fa-solid fa-location-dot text-[#ea6721]"></i>
                                </div>
                                <span className="font-medium">Santiago - Lampa, Chile</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                    <p>&copy; {new Date().getFullYear()} Impromax Repuestos Eléctricos. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
