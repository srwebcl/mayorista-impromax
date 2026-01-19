import Header from "./components/Header";
import Footer from "./components/Footer";
import LeadForm from "./components/LeadForm";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-bg min-h-screen flex items-center pt-24 pb-12" id="inicio">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

              {/* Left Content */}
              <div className="lg:w-1/2 text-white">
                <div className="inline-block bg-[#F36719] bg-opacity-20 border border-[#F36719] text-[#F36719] rounded-full px-4 py-1 text-sm font-bold mb-6 backdrop-blur-sm">
                  🚀 Distribuidor Líder en Automatización
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                  Aumenta tu rentabilidad con precios <span className="text-[#F36719]">Mayoristas</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg font-light">
                  Accede al stock más completo de Variadores de Frecuencia, PLC y Control Industrial. Despacho inmediato a todo Chile.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium text-gray-200 mb-8">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-check-circle text-[#F36719]"></i> Stock Garantizado
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-check-circle text-[#F36719]"></i> Asesoría Técnica
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-check-circle text-[#F36719]"></i> Envíos en 24hrs
                  </div>
                </div>
              </div>

              {/* Right Form (Lead Magnet) */}
              <div className="lg:w-5/12 w-full">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* Trust / Brands Bar */}
        <section className="py-8 bg-gray-100 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <p className="text-center text-[#545051] text-sm font-semibold uppercase tracking-widest mb-6">Trabajamos con las mejores marcas del mercado</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="text-xl font-bold text-[#232628] flex items-center gap-2 hover:text-[#F36719] transition"><i className="fa-solid fa-square"></i> SCHNEIDER</div>
              <div className="text-xl font-bold text-[#232628] flex items-center gap-2 hover:text-[#F36719] transition"><i className="fa-solid fa-bolt"></i> MEAN WELL</div>
              <div className="text-xl font-bold text-[#232628] flex items-center gap-2 hover:text-[#F36719] transition"><i className="fa-solid fa-microchip"></i> SUSWE</div>
              <div className="text-xl font-bold text-[#232628] flex items-center gap-2 hover:text-[#F36719] transition"><i className="fa-solid fa-industry"></i> YUANSHIN</div>
              <div className="text-xl font-bold text-[#232628] flex items-center gap-2 hover:text-[#F36719] transition"><i className="fa-solid fa-plug"></i> OMCH</div>
            </div>
          </div>
        </section>

        {/* Value Proposition Grid */}
        <section id="beneficios" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232628] mb-4">¿Por qué elegir Impromax como proveedor?</h2>
              <p className="text-[#545051] max-w-2xl mx-auto">Entendemos las necesidades de la industria. No solo vendemos repuestos, ofrecemos soluciones logísticas y técnicas.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white text-center group">
                <div className="w-16 h-16 bg-[#F36719]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F36719] transition-colors duration-300">
                  <i className="fa-solid fa-truck-fast text-2xl text-[#F36719] group-hover:text-white transition-colors"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#232628]">Logística Nacional Rápida</h3>
                <p className="text-[#545051] text-sm leading-relaxed">
                  Despachamos desde Lampa a todo Chile. De Arica a Punta Arenas, tus repuestos llegan cuando los necesitas.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white text-center group">
                <div className="w-16 h-16 bg-[#F36719]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F36719] transition-colors duration-300">
                  <i className="fa-solid fa-tags text-2xl text-[#F36719] group-hover:text-white transition-colors"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#232628]">Precios Competitivos</h3>
                <p className="text-[#545051] text-sm leading-relaxed">
                  Accede a márgenes preferenciales para integradores y revendedores. Escalado de precios por volumen.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white text-center group">
                <div className="w-16 h-16 bg-[#F36719]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#F36719] transition-colors duration-300">
                  <i className="fa-solid fa-headset text-2xl text-[#F36719] group-hover:text-white transition-colors"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#232628]">Atención Personalizada</h3>
                <p className="text-[#545051] text-sm leading-relaxed">
                  Trato directo y sin intermediarios. Gestiona tus pedidos y consultas técnicas directamente con Giovanni Rojas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section id="productos" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-[#F36719] font-bold uppercase tracking-wider text-sm">Nuestro Catálogo</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#232628] mt-2">Productos de Alta Rotación</h2>
              </div>
              <a href="#inicio" className="hidden md:inline-flex items-center text-[#F36719] font-bold hover:text-[#EA8E56] transition">
                Ver catálogo completo <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ProductCard
                title="Variadores de Frecuencia"
                description="Trifásicos 380v y Monofásicos. Desde 0.75KW hasta 18.5kW."
                iconClass="fa-solid fa-gauge-high"
                discount="-15% OFF"
              />
              <ProductCard
                title="Fuentes de Poder"
                description="Mean Well y genéricas. 24VDC, Riel DIN. Alta eficiencia."
                iconClass="fa-solid fa-car-battery"
              />
              <ProductCard
                title="Control Industrial"
                description="PLC, HMI, Relés y Sensores. Automatización completa."
                iconClass="fa-solid fa-microchip"
              />
              <ProductCard
                title="Neumática"
                description="Conectores, mangueras, válvulas y cilindros."
                iconClass="fa-solid fa-wind"
              />
            </div>

            <div className="mt-8 text-center md:hidden">
              <a href="#inicio" className="inline-block bg-white border border-[#F36719] text-[#F36719] font-bold py-3 px-8 rounded-lg hover:bg-orange-50 transition">Ver todo el catálogo</a>
            </div>
          </div>
        </section>

        {/* Social Proof / Stats */}
        <section className="py-16 bg-gradient-corporate text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
              <div>
                <div className="text-4xl font-black mb-2 counter">1500+</div>
                <div className="text-orange-100 text-sm uppercase font-semibold">Clientes Felices</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">24h</div>
                <div className="text-orange-100 text-sm uppercase font-semibold">Tiempo de Despacho</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">100%</div>
                <div className="text-orange-100 text-sm uppercase font-semibold">Stock Garantizado</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">Lampa</div>
                <div className="text-orange-100 text-sm uppercase font-semibold">Centro de Distribución</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-[#232628] mb-12">Preguntas Frecuentes Distribuidores</h2>

            <div className="space-y-4">
              <details className="group bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-orange-50 transition duration-300">
                <summary className="flex justify-between items-center font-bold text-[#232628] list-none">
                  <span>¿Cuál es el monto mínimo de compra mayorista?</span>
                  <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-[#F36719]"></i></span>
                </summary>
                <p className="text-[#545051] mt-4 leading-relaxed">
                  Para acceder a la primera escala de precios mayoristas, no exigimos un monto mínimo elevado, pero sí la validación comercial como empresa del rubro o técnico integrador. Completa el formulario para evaluar tu caso.
                </p>
              </details>

              <details className="group bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-orange-50 transition duration-300">
                <summary className="flex justify-between items-center font-bold text-[#232628] list-none">
                  <span>¿Realizan facturación a 30 días?</span>
                  <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-[#F36719]"></i></span>
                </summary>
                <p className="text-[#545051] mt-4 leading-relaxed">
                  Sí, disponemos de líneas de crédito para clientes recurrentes tras una evaluación comercial. Inicialmente trabajamos con transferencia o Webpay.
                </p>
              </details>

              <details className="group bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-orange-50 transition duration-300">
                <summary className="flex justify-between items-center font-bold text-[#232628] list-none">
                  <span>¿Tienen tienda física para retiro?</span>
                  <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-[#F36719]"></i></span>
                </summary>
                <p className="text-[#545051] mt-4 leading-relaxed">
                  Sí, nuestra casa matriz y bodega está ubicada en Sargento Aldea 830, Paseo Las Palmeras, Local 13, Lampa, RM. Puedes retirar tus pedidos coordinando con tu ejecutivo.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/56957891186?text=Hola%20Giovanni,%20quisiera%20cotizar%20mayorista" className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 hover:bg-green-600 transition z-50">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}
