"use client";

interface ProductCardProps {
    title: string;
    description?: string;
    iconClass?: string;
    imageUrl?: string;
    discount?: string;
}

export default function ProductCard({ title, description, iconClass, imageUrl, discount }: ProductCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(243,103,25,0.2)] transition-all duration-500 overflow-hidden group flex flex-col h-full border border-gray-100 hover:border-[#F36719]/30 relative transform hover:-translate-y-1">
            <div className="h-52 bg-gradient-to-br from-white to-gray-50 group-hover:from-orange-50/50 group-hover:to-orange-100/50 transition-colors duration-700 relative overflow-hidden flex items-center justify-center">
                {/* Glow Behind Image */}
                <div className="absolute inset-0 bg-[#F36719]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl rounded-full scale-[2] pointer-events-none"></div>
                
                {imageUrl ? (
                    <img src={imageUrl} alt={title} className="w-full h-full object-contain p-6 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-2xl transition-all duration-700 relative z-10" />
                ) : (
                    <i className={`${iconClass} text-6xl text-gray-300 group-hover:text-[#F36719] group-hover:scale-110 transition-all duration-700 relative z-10`}></i>
                )}
                {discount && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#F36719] to-[#EA8E56] text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg shadow-orange-500/30 z-20">
                        {discount}
                    </div>
                )}
            </div>
            <div className="p-6 flex flex-col flex-1 relative z-10 bg-white">
                <div className="mb-4">
                    <h4 className="font-black text-[#111] text-[16px] md:text-[17px] leading-tight group-hover:text-[#F36719] transition-colors duration-300 line-clamp-2">
                        {title}
                    </h4>
                    {/* Animated Accent Bar */}
                    <div className="w-8 h-1 bg-gradient-to-r from-[#F36719]/30 to-transparent group-hover:from-[#F36719] group-hover:to-[#EA8E56] group-hover:w-12 transition-all duration-500 mt-3 rounded-full"></div>
                </div>
                {description && <p className="text-sm text-[#545051] mb-4 flex-1">{description}</p>}
                {!description && <div className="flex-1"></div>}
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <a href="https://wa.me/56957891186?text=Hola%20Giovanni,%20quiero%20cotizar%20la%20categoría%20mayorista" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#F36719] text-sm font-black hover:text-[#EA8E56] transition-colors group/link w-full">
                        Cotizar Mayorista 
                        <span className="ml-auto bg-green-50 text-green-600 w-8 h-8 rounded-full flex items-center justify-center group-hover/link:bg-green-500 group-hover/link:text-white group-hover/link:shadow-lg group-hover/link:shadow-green-500/40 transition-all duration-300">
                            <i className="fa-brands fa-whatsapp text-lg"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
