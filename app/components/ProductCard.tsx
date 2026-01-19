
interface ProductCardProps {
    title: string;
    description: string;
    iconClass: string;
    discount?: string;
}

export default function ProductCard({ title, description, iconClass, discount }: ProductCardProps) {
    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden group">
            <div className="h-48 bg-gray-200 relative overflow-hidden flex items-center justify-center">
                {/* Icono gris que cambia a naranja al hover */}
                <i className={`${iconClass} text-6xl text-gray-400 group-hover:text-[#F36719] group-hover:scale-110 transition duration-500`}></i>
                {discount && (
                    <div className="absolute top-3 right-3 bg-[#F36719] text-white text-xs font-bold px-2 py-1 rounded shadow">{discount}</div>
                )}
            </div>
            <div className="p-5">
                <h4 className="font-bold text-[#232628] mb-1">{title}</h4>
                <p className="text-sm text-[#545051] mb-4">{description}</p>
                <a href="#inicio" className="text-[#F36719] text-sm font-bold hover:text-[#EA8E56]">Cotizar Lote &rarr;</a>
            </div>
        </div>
    );
}
