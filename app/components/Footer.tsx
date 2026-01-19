import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="contacto" className="bg-[#232628] text-gray-300 pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Info */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                            <Image
                                src="/client_logo.png"
                                alt="Impromax"
                                width={32}
                                height={32}
                                className="h-8 w-auto brightness-0 invert"
                            /> IMPROMAX
                        </h3>
                        <p className="text-sm leading-relaxed mb-6 text-gray-400">
                            Expertos en automatización industrial. Proveemos soluciones eficientes y rápidas para mantener la industria chilena en movimiento.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#F36719] hover:text-white transition"><i className="fa-brands fa-instagram"></i></Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#F36719] hover:text-white transition"><i className="fa-brands fa-facebook-f"></i></Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#F36719] hover:text-white transition"><i className="fa-brands fa-linkedin-in"></i></Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Contacto Mayorista</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-user-tie text-[#F36719] mt-1"></i>
                                <div>
                                    <span className="block text-white font-semibold">Giovanni Rojas</span>
                                    <span className="text-gray-400 text-xs">Jefe Venta Mayorista</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-phone text-[#F36719] mt-1"></i>
                                <a href="tel:+56957891186" className="hover:text-[#F36719] transition font-bold">+56 9 5789 1186</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-envelope text-[#F36719] mt-1"></i>
                                <a href="mailto:ventas@impromax.cl" className="hover:text-[#F36719] transition">ventas@impromax.cl</a>
                            </li>
                        </ul>
                    </div>

                    {/* Map/Location */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Ubicación</h4>
                        <p className="text-sm mb-4 text-gray-400">
                            <i className="fa-solid fa-location-dot text-[#F36719] mr-2"></i>
                            Sargento Aldea 830, Paseo Las Palmeras, Local 13, Santiago - Lampa
                        </p>
                        <div className="w-full h-40 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                            <span className="text-xs text-gray-500 uppercase font-semibold tracking-wider">[ Mapa de Google ]</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-xs text-[#545051]">
                    <p>&copy; 2026 Impromax. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
