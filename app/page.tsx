import Header from "./components/Header";
import Footer from "./components/Footer";
import LeadForm from "./components/LeadForm";
import ProductCard from "./components/ProductCard";
import ContactForm from "./components/ContactForm";
import WhatsappCapture from "./components/WhatsappCapture";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-bg min-h-screen flex items-center pt-28 md:pt-32 pb-12 md:pb-20" id="inicio">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16">

              {/* Left Content */}
              <div className="lg:w-1/2 text-white text-center lg:text-left">
                <div className="inline-block bg-[#ea6721] border border-[#ea6721] text-white rounded-full px-5 py-1.5 text-xs md:text-sm font-black mb-6 shadow-xl uppercase tracking-wider">
                  🚀 Distribuidor Líder en Automatización
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tighter">
                  Aumenta tu rentabilidad con precios <span className="text-[#ea6721]">Mayoristas</span>
                </h1>
                <p className="text-base md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                  Expertos en Repuestos Eléctricos. Más simple, más rápido y con mejores márgenes en cada compra. Stock inmediato de Variadores, PLC y Control.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6 text-xs md:text-sm font-bold text-gray-300 mb-10">
                  <div className="flex items-center justify-center lg:justify-start gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                    <i className="fa-solid fa-check-circle text-[#ea6721]"></i> Stock Garantizado
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                    <i className="fa-solid fa-check-circle text-[#ea6721]"></i> Asesoría Técnica
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                    <i className="fa-solid fa-check-circle text-[#ea6721]"></i> Envíos a todo Chile
                  </div>
                </div>
              </div>

              {/* Right Form (Lead Magnet) */}
              <div className="lg:w-5/12 w-full max-w-lg mx-auto lg:mx-0">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* Trust / Brands Bar */}
        <section className="py-10 md:py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 text-center">
            <p className="text-[#545051] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-10 opacity-60">Marcas que confían en nosotros</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="text-lg md:text-2xl font-black text-[#111] flex items-center gap-2">SCHNEIDER</div>
              <div className="text-lg md:text-2xl font-black text-[#111] flex items-center gap-2">MEAN WELL</div>
              <div className="text-lg md:text-2xl font-black text-[#111] flex items-center gap-2">SUSWE</div>
              <div className="text-lg md:text-2xl font-black text-[#111] flex items-center gap-2">YUANSHIN</div>
              <div className="text-lg md:text-2xl font-black text-[#111] flex items-center gap-2">OMCH</div>
            </div>
          </div>
        </section>

        {/* Value Proposition Grid */}
        <section id="beneficios" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 md:mb-20">
              <span className="text-[#ea6721] font-black uppercase tracking-widest text-xs mb-3 block">Valor Diferencial</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#111] mb-6 tracking-tight">¿Por qué elegir Impromax?</h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">No solo vendemos repuestos, optimizamos la cadena de suministro de tu empresa con soluciones reales.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              {/* Feature 1 */}
              <div className="p-8 md:p-12 border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 bg-white text-center group hover:-translate-y-2">
                <div className="w-20 h-20 bg-[#ea6721]/5 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#ea6721] group-hover:rotate-6 transition-all duration-500">
                  <i className="fa-solid fa-truck-fast text-3xl text-[#ea6721] group-hover:text-white transition-colors"></i>
                </div>
                <h3 className="text-2xl font-black mb-4 text-[#111]">Logística Ágil</h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  Despachamos desde nuestra matriz en Lampa a todo Chile. Tiempos de entrega optimizados para mantener tu operación.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 md:p-12 border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 bg-white text-center group hover:-translate-y-2">
                <div className="w-20 h-20 bg-[#ea6721]/5 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#ea6721] group-hover:rotate-6 transition-all duration-500">
                  <i className="fa-solid fa-tags text-3xl text-[#ea6721] group-hover:text-white transition-colors"></i>
                </div>
                <h3 className="text-2xl font-black mb-4 text-[#111]">Márgenes B2B</h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  Precios mayoristas reales para integradores y revendedores. Escalabilidad por volumen en todo el catálogo.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 md:p-12 border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 bg-white text-center group hover:-translate-y-2">
                <div className="w-20 h-20 bg-[#ea6721]/5 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#ea6721] group-hover:rotate-6 transition-all duration-500">
                  <i className="fa-solid fa-headset text-3xl text-[#ea6721] group-hover:text-white transition-colors"></i>
                </div>
                <h3 className="text-2xl font-black mb-4 text-[#111]">Gestión Directa</h3>
                <p className="text-gray-500 leading-relaxed font-light">
                  Olvídate de los intermediarios. Atención personalizada directa para gestionar tus pedidos especiales y consultas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section id="productos" className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
              <div>
                <span className="text-[#ea6721] font-black uppercase tracking-widest text-xs mb-2 block">Catálogo Mayorista</span>
                <h2 className="text-3xl md:text-5xl font-black text-[#111] tracking-tight">Equipamiento Industrial</h2>
              </div>
              <a href="https://www.impromax.cl/catalogo" target="_blank" className="bg-white text-[#111] border border-gray-200 font-black py-4 px-8 rounded-xl hover:bg-[#ea6721] hover:text-white hover:border-[#ea6721] transition-all shadow-sm flex items-center gap-2 group">
                VER TODO EL CATÁLOGO <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mb-16">
              <ProductCard
                title="Variadores de Frecuencia"
                imageUrl="/images/variador-de-frecuencia.webp"
                discount="-15% OFF"
              />
              <ProductCard
                title="Relés Industriales"
                imageUrl="/images/reles.webp"
              />
              <ProductCard
                title="Fuentes de Poder"
                imageUrl="/images/fuentes-de-poder.webp"
              />
              <ProductCard
                title="Finales de Carrera"
                imageUrl="/images/interruptores-finales-carrera.webp"
              />
              <ProductCard
                title="Control Temperatura"
                imageUrl="/images/control-temperatura.webp"
              />
              <ProductCard
                title="Fusibles y Bornes"
                imageUrl="/images/fusibles.webp"
              />
              <ProductCard
                title="Electrónica Control"
                imageUrl="/images/electronica-control.webp"
              />
              <ProductCard
                title="Neumática"
                imageUrl="/images/neumatica.webp"
              />
              <ProductCard
                title="Herrajeria"
                imageUrl="/images/herrajeria.webp"
              />
              <ProductCard
                title="Pernos y Tuercas"
                imageUrl="/images/pernos.webp"
              />
            </div>

            {/* CTA Minorista Premium */}
            <div className="bg-[#0a0a0a] rounded-[2.5rem] shadow-3xl overflow-hidden relative flex flex-col md:flex-row items-center mt-12 group border border-white/5">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                  <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[150%] bg-[#ea6721]/15 blur-[120px] rounded-full mix-blend-screen group-hover:bg-[#ea6721]/25 transition-colors duration-700"></div>
              </div>

              <div className="p-10 md:p-20 md:w-2/3 relative z-10 text-center md:text-left">
                <div className="inline-flex items-center bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold px-4 py-1.5 rounded-full text-[10px] mb-8 uppercase tracking-[0.2em]">
                  <span className="w-2 h-2 rounded-full bg-[#ea6721] mr-2 animate-pulse"></span>
                  Venta al Detalle
                </div>
                <h3 className="text-3xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                  ¿Buscas comprar por <span className="text-[#ea6721]">unidades sueltas</span>?
                </h3>
                <p className="text-gray-400 mb-10 text-base md:text-xl font-light max-w-xl leading-relaxed mx-auto md:mx-0">
                  Visita nuestra tienda minorista oficial para compras inmediatas sin requerimientos de volumen.
                </p>
                <a href="https://www.impromax.cl/catalogo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-[#111] font-black py-5 px-10 rounded-2xl hover:bg-[#ea6721] hover:text-white transition-all duration-500 shadow-2xl transform hover:-translate-y-1">
                  IR A TIENDA MINORISTA
                  <i className="fa-solid fa-arrow-up-right-from-square ml-3 text-sm"></i>
                </a>
              </div>
              <div className="hidden md:flex md:w-1/3 h-full relative items-center justify-center p-8 z-10">
                <i className="fa-solid fa-cart-shopping text-[180px] text-white/5 transform -rotate-12 group-hover:rotate-0 transition-all duration-1000"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Stats */}
        <section className="py-20 md:py-32 bg-[#111] text-white border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-black text-[#ea6721] tracking-tighter">1.5k+</div>
                <div className="text-gray-400 text-xs md:text-sm uppercase font-black tracking-widest">Clientes Distribuidos</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-black text-[#ea6721] tracking-tighter">24h</div>
                <div className="text-gray-400 text-xs md:text-sm uppercase font-black tracking-widest">Procesamiento Envío</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-black text-[#ea6721] tracking-tighter">100%</div>
                <div className="text-gray-400 text-xs md:text-sm uppercase font-black tracking-widest">Garantía de Stock</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-black text-[#ea6721] tracking-tighter">LAMPA</div>
                <div className="text-gray-400 text-xs md:text-sm uppercase font-black tracking-widest">HUB Logístico Propio</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
                <span className="text-[#ea6721] font-black uppercase tracking-widest text-xs mb-3 block">Resolviendo Dudas</span>
                <h2 className="text-3xl md:text-5xl font-black text-[#111] tracking-tight">Preguntas Frecuentes</h2>
            </div>

            <div className="space-y-4">
              <details className="group bg-gray-50 p-6 md:p-8 rounded-[2rem] cursor-pointer hover:bg-orange-50 transition duration-300">
                <summary className="flex justify-between items-center font-black text-[#111] list-none md:text-lg">
                  <span>¿Cómo activo mi cuenta mayorista?</span>
                  <span className="transition group-open:rotate-180 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm"><i className="fa-solid fa-chevron-down text-[#ea6721] text-xs"></i></span>
                </summary>
                <p className="text-gray-500 mt-4 leading-relaxed font-light">
                  Simplemente completa el formulario superior. Giovanni Rojas validará tu información comercial y te activará como cliente mayorista para acceder a la escala de precios preferencial.
                </p>
              </details>

              <details className="group bg-gray-50 p-6 md:p-8 rounded-[2rem] cursor-pointer hover:bg-orange-50 transition duration-300">
                <summary className="flex justify-between items-center font-black text-[#111] list-none md:text-lg">
                  <span>¿Tienen facilidades de pago?</span>
                  <span className="transition group-open:rotate-180 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm"><i className="fa-solid fa-chevron-down text-[#ea6721] text-xs"></i></span>
                </summary>
                <p className="text-gray-500 mt-4 leading-relaxed font-light">
                  Contamos con integración de Webpay para tarjetas de crédito y débito, además de transferencia electrónica directa. Para clientes con historial, evaluamos líneas de crédito a 30 días.
                </p>
              </details>

              <details className="group bg-gray-50 p-6 md:p-8 rounded-[2rem] cursor-pointer hover:bg-orange-50 transition duration-300">
                <summary className="flex justify-between items-center font-black text-[#111] list-none md:text-lg">
                  <span>¿Dónde retiro mis pedidos?</span>
                  <span className="transition group-open:rotate-180 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm"><i className="fa-solid fa-chevron-down text-[#ea6721] text-xs"></i></span>
                </summary>
                <p className="text-gray-500 mt-4 leading-relaxed font-light">
                  Nuestra bodega central se encuentra en Sargento Aldea 830, Lampa. Puedes retirar personalmente previa coordinación o solicitar envío a cualquier punto de Chile.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-3xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
              {/* Info Column */}
              <div className="lg:w-5/12 bg-[#111] p-10 md:p-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea6721] rounded-full mix-blend-screen filter blur-[120px] opacity-20 -mr-32 -mt-32"></div>
                
                <h2 className="text-4xl font-black mb-8 relative z-10 leading-tight tracking-tighter">Llevemos tu negocio al siguiente nivel</h2>
                <p className="text-gray-400 mb-12 relative z-10 font-light text-lg">
                  Más de 10 años de experiencia respaldando a la industria eléctrica en Chile.
                </p>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-[#ea6721]">
                      <i className="fa-solid fa-phone text-xl"></i>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Teléfono Directo</p>
                      <p className="font-black text-xl text-white">+56 9 5789 1186</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-[#ea6721]">
                      <i className="fa-solid fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Email Comercial</p>
                      <p className="font-black text-xl text-white">ventas@impromax.cl</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-[#ea6721]">
                      <i className="fa-solid fa-location-dot text-xl"></i>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Matriz Logística</p>
                      <p className="font-black text-xl text-white">Lampa, RM Chile</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Form Column */}
              <div className="lg:w-7/12 p-10 md:p-16 flex flex-col justify-center">
                <div className="mb-10">
                  <span className="text-[#ea6721] font-black uppercase tracking-widest text-xs mb-3 block">Consulta Inmediata</span>
                  <h3 className="text-3xl md:text-4xl font-black text-[#111] mb-3 tracking-tight">Hablemos de tu proyecto</h3>
                  <p className="text-gray-500">Estamos listos para procesar tu solicitud hoy mismo.</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <WhatsappCapture />
    </>
  );
}
