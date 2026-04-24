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
        <section className="hero-bg min-h-screen flex items-center pt-24 pb-12" id="inicio">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

              {/* Left Content */}
              <div className="lg:w-1/2 text-white">
                <div className="inline-block bg-[#ea6721] border border-[#ea6721] text-white rounded-full px-4 py-1 text-sm font-bold mb-6 shadow-lg">
                  🚀 Distribuidor Líder en Automatización
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                  Aumenta tu rentabilidad con precios <span className="text-[#ea6721]">Mayoristas</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg font-light">
                  Expertos en Repuestos Eléctricos de Automatización Industrial. Accede al stock más completo de Variadores de Frecuencia, PLC y Control Industrial.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium text-gray-200 mb-8">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-check-circle text-[#ea6721]"></i> Stock Garantizado
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-check-circle text-[#ea6721]"></i> Asesoría Técnica
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-check-circle text-[#ea6721]"></i> envios garantizados
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
              <div className="text-xl font-bold text-[#232628] flex items-center gap-2 hover:text-[#ea6721] transition"><i className="fa-solid fa-square"></i> SCHNEIDER</div>
              <div className="text-xl font-bold text-[#232628] flex items-center gap-2 hover:text-[#ea6721] transition"><i className="fa-solid fa-bolt"></i> MEAN WELL</div>
              <div className="text-xl font-bold text-[#232628] flex items-center gap-2 hover:text-[#ea6721] transition"><i className="fa-solid fa-microchip"></i> SUSWE</div>
              <div className="text-xl font-bold text-[#232628] flex items-center gap-2 hover:text-[#ea6721] transition"><i className="fa-solid fa-industry"></i> YUANSHIN</div>
              <div className="text-xl font-bold text-[#232628] flex items-center gap-2 hover:text-[#ea6721] transition"><i className="fa-solid fa-plug"></i> OMCH</div>
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
                <div className="w-16 h-16 bg-[#ea6721]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ea6721] transition-colors duration-300">
                  <i className="fa-solid fa-truck-fast text-2xl text-[#ea6721] group-hover:text-white transition-colors"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#232628]">Logística Nacional Rápida</h3>
                <p className="text-[#545051] text-sm leading-relaxed">
                  Despachamos desde Lampa a todo Chile. De Arica a Punta Arenas, tus repuestos llegan cuando los necesitas.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white text-center group">
                <div className="w-16 h-16 bg-[#ea6721]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ea6721] transition-colors duration-300">
                  <i className="fa-solid fa-tags text-2xl text-[#ea6721] group-hover:text-white transition-colors"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#232628]">Precios Competitivos</h3>
                <p className="text-[#545051] text-sm leading-relaxed">
                  Accede a márgenes preferenciales para integradores y revendedores. Escalado de precios por volumen.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white text-center group">
                <div className="w-16 h-16 bg-[#ea6721]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#ea6721] transition-colors duration-300">
                  <i className="fa-solid fa-headset text-2xl text-[#ea6721] group-hover:text-white transition-colors"></i>
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
                <span className="text-[#ea6721] font-bold uppercase tracking-wider text-sm">Nuestras Categorías</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#232628] mt-2">Explora nuestro catálogo mayorista</h2>
              </div>
              <a href="#productos" className="hidden md:inline-flex items-center text-[#ea6721] font-bold hover:text-[#ff8c4a] transition">
                Ver catálogo completo <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
              <ProductCard
                title="Variadores de Frecuencia y Controladores de Motores"
                imageUrl="/images/variador-de-frecuencia.webp"
                discount="-15% OFF"
              />
              <ProductCard
                title="Relés"
                imageUrl="/images/reles.webp"
              />
              <ProductCard
                title="Fuentes de Poder para Automatización Industrial"
                imageUrl="/images/fuentes-de-poder.webp"
              />
              <ProductCard
                title="Interruptores y finales de carrera"
                imageUrl="/images/interruptores-finales-carrera.webp"
              />
              <ProductCard
                title="Control de Temperatura"
                imageUrl="/images/control-temperatura.webp"
              />
              <ProductCard
                title="Fusibles, Bornes y Terminales"
                imageUrl="/images/fusibles.webp"
              />
              <ProductCard
                title="Electrónica de control"
                imageUrl="/images/electronica-control.webp"
              />
              <ProductCard
                title="Neumática y conectores"
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
            <div className="bg-[#0a0a0a] rounded-[2rem] shadow-2xl overflow-hidden relative flex flex-col md:flex-row items-center mt-12 group border border-white/5">
              {/* Background Glows */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                  <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[150%] bg-[#ea6721]/15 blur-[120px] rounded-full mix-blend-screen group-hover:bg-[#ea6721]/25 transition-colors duration-700"></div>
                  <div className="absolute bottom-[0%] -right-[10%] w-[50%] h-[100%] bg-white/5 blur-[100px] rounded-full mix-blend-screen group-hover:bg-[#ea6721]/10 transition-colors duration-700"></div>
              </div>

              <div className="p-12 md:p-16 md:w-2/3 relative z-10">
                <div className="inline-flex items-center bg-[#ea6721]/20 backdrop-blur-md border border-[#ea6721]/30 text-[#ea6721] font-bold px-4 py-1.5 rounded-full text-xs mb-6 uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-[#ea6721] mr-2 animate-pulse"></span>
                  Para Usuarios Finales
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  ¿Buscas comprar por <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ea6721]">unidades individuales</span>?
                </h3>
                <p className="text-gray-400 mb-10 text-lg md:text-xl font-light max-w-xl leading-relaxed">
                  Si no necesitas comprar por volumen y buscas despacho inmediato de productos específicos, visita nuestra tienda minorista con carrito de compras y Webpay.
                </p>
                <a href="https://www.impromax.cl/catalogo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-[#ea6721] text-white font-black py-4 px-8 rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(234,103,33,0.3)] hover:shadow-[0_0_50px_rgba(234,103,33,0.6)] transform hover:-translate-y-1">
                  Visitar Tienda Minorista
                  <i className="fa-solid fa-arrow-up-right-from-square ml-3 text-sm group-hover:rotate-12 transition-transform"></i>
                </a>
              </div>
              <div className="w-full md:w-1/3 h-64 md:h-full relative flex items-center justify-center p-8 z-10">
                <i className="fa-solid fa-cart-shopping text-[140px] text-white/5 drop-shadow-2xl transform -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-700"></i>
                {/* Decorative floating elements */}
                <div className="absolute top-1/4 right-1/4 bg-[#ea6721]/10 backdrop-blur-xl border border-white/10 w-16 h-16 rounded-2xl rotate-12 animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute bottom-1/4 left-1/4 bg-white/5 backdrop-blur-xl border border-white/10 w-24 h-24 rounded-full -rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
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
                <div className="text-4xl font-black mb-2">Despacho</div>
                <div className="text-orange-100 text-sm uppercase font-semibold">envios garantizados</div>
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
                  <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-[#ea6721]"></i></span>
                </summary>
                <p className="text-[#545051] mt-4 leading-relaxed">
                  Para acceder a la primera escala de precios mayoristas, no exigimos un monto mínimo elevado, pero sí la validación comercial como empresa del rubro o técnico integrador. Completa el formulario para evaluar tu caso.
                </p>
              </details>

              <details className="group bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-orange-50 transition duration-300">
                <summary className="flex justify-between items-center font-bold text-[#232628] list-none">
                  <span>¿Realizan facturación a 30 días?</span>
                  <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-[#ea6721]"></i></span>
                </summary>
                <p className="text-[#545051] mt-4 leading-relaxed">
                  Sí, disponemos de líneas de crédito para clientes recurrentes tras una evaluación comercial. Inicialmente trabajamos con transferencia o Webpay.
                </p>
              </details>

              <details className="group bg-gray-50 p-6 rounded-lg cursor-pointer hover:bg-orange-50 transition duration-300">
                <summary className="flex justify-between items-center font-bold text-[#232628] list-none">
                  <span>¿Tienen tienda física para retiro?</span>
                  <span className="transition group-open:rotate-180"><i className="fa-solid fa-chevron-down text-[#ea6721]"></i></span>
                </summary>
                <p className="text-[#545051] mt-4 leading-relaxed">
                  Sí, nuestra casa matriz y bodega está ubicada en Sargento Aldea 830, Paseo Las Palmeras, Local 13, Lampa, RM. Puedes retirar tus pedidos coordinando con tu ejecutivo.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
              {/* Info Column */}
              <div className="md:w-5/12 bg-[#232628] p-10 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea6721] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 -mr-32 -mt-32"></div>
                
                <h2 className="text-3xl font-black mb-6 relative z-10">Paga menos por los mismos productos</h2>
                <p className="text-gray-400 mb-10 relative z-10 font-light leading-relaxed">
                  Activamos precios mayoristas con mejores márgenes para clientes que ya confían en Impromax. Más simple, más rápido y con stock inmediato.
                </p>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                      <i className="fa-solid fa-phone text-[#ea6721]"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-0.5">Llámanos</p>
                      <p className="font-bold text-lg">+56 9 5789 1186</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                      <i className="fa-solid fa-envelope text-[#ea6721]"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-0.5">Email</p>
                      <p className="font-bold text-lg">ventas@impromax.cl</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                      <i className="fa-solid fa-location-dot text-[#ea6721]"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-0.5">Ubicación</p>
                      <p className="font-bold text-lg">Santiago - Lampa</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-white/10 relative z-10">
                  <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest font-bold italic">Impromax Mayorista</p>
                  <p className="text-xs text-gray-600">Sargento Aldea 830, Paseo Las Palmeras, Local 13</p>
                </div>
              </div>
              
              {/* Form Column */}
              <div className="md:w-7/12 p-10 md:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <span className="text-[#ea6721] font-black uppercase tracking-widest text-xs mb-2 block">Contacto Directo</span>
                  <h3 className="text-3xl font-black text-gray-900 mb-2">Envíanos un mensaje</h3>
                  <p className="text-gray-500">Cuéntanos sobre tu proyecto o consulta mayorista.</p>
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
