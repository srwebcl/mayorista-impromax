# Documentación Técnica: Impromax Mayorista Landing Page

Esta guía detalla el funcionamiento interno, las integraciones de API y la arquitectura de la plataforma B2B de Impromax.

### Notas de Identidad Visual:
*   **Color de Marca**: Naranja Oficial **`#ea6721`**.
*   **Descripción Oficial**: "Expertos en Repuestos Eléctricos de Automatización Industrial".
*   **Estética**: Negro Profundo y gradientes corporativos.

## 1. Arquitectura General
*   **Framework**: Next.js 14+ (App Router).
*   **Lenguaje**: TypeScript.
*   **Estilos**: Tailwind CSS con diseño Premium (Glassmorphism y Animaciones Framer-like).
*   **Despliegue Recomendado**: Vercel.

---

## 2. Sistema de Captura de Leads (El "Motor")

La web utiliza una API centralizada ubicada en `app/api/brevo/route.ts`. Todos los formularios de la página (Hero, Contacto y WhatsApp) envían sus datos a este punto.

### Flujo de Datos:
1.  **Captura**: El usuario completa un formulario.
2.  **Validación**: El cliente envía los datos en formato JSON a `/api/brevo`.
3.  **Registro en CRM (Brevo)**: Se crea o actualiza el contacto en la base de datos de Brevo.
4.  **Notificación (Resend)**: Se envía un email instantáneo al administrador (`ventas@impromax.cl`).
5.  **Confirmación**: El usuario ve un mensaje de éxito o es redirigido a WhatsApp.

---

## 3. Integración con Brevo (CRM)

El sistema sincroniza automáticamente los leads con tu cuenta de Brevo para futuras campañas de mailing.

*   **Endpoint**: `https://api.brevo.com/v3/contacts`
*   **Lista de Destino**: Por defecto se guardan en la **Lista ID #2**.
*   **Atributos Utilizados**:
    *   `FIRSTNAME`: Nombre completo del lead.
    *   `SMS`: Teléfono de contacto.
    *   `EMPRESA`: Razón social o nombre del negocio.
    *   `INTERES`: Categoría de producto seleccionada.
    *   `MENSAJE`: Comentarios adicionales (si aplica).

> [!IMPORTANT]
> Debes tener estos atributos creados en tu panel de Brevo (Contactos > Ajustes > Atributos de contacto) para que la sincronización sea exitosa.

---

## 4. Integración con Resend (Email)

Utilizamos **Resend** para garantizar que recibas una notificación inmediata cada vez que alguien solicita una cotización.

*   **Configuración**: El sistema usa el dominio verificado `impromax.cl`.
*   **Remitente**: `Impromax Mayorista <ventas@impromax.cl>`
*   **Destinatario**: `ventas@impromax.cl`
*   **Formato**: HTML enriquecido que incluye todos los detalles del lead para una respuesta rápida desde el celular.

---

## 5. El Sistema WhatsApp "Lead-First"

A diferencia de un botón de WhatsApp tradicional, Impromax usa un sistema de **captura previa**.

*   **Componente**: `WhatsappCapture.tsx`
*   **Funcionamiento**:
    1.  Cualquier botón de WhatsApp en la web (Header, Tarjetas de Producto, Botón Flotante) dispara un evento global `open-whatsapp-capture`.
    2.  Se abre un modal premium solicitando los datos básicos.
    3.  Al hacer clic en "Iniciar Chat", el sistema registra al lead en Brevo/Resend y luego abre WhatsApp con un mensaje pre-llenado que ya incluye el nombre y empresa del cliente.

---

## 6. Variables de Envorno (.env)

Para que el sistema funcione, el servidor necesita las siguientes llaves (configuradas en el archivo `.env` local o en las variables de entorno de Vercel):

```env
# Brevo API Key (v3)
BREVO_API_KEY=tu_clave_aqui

# Resend API Key
RESEND_API_KEY=tu_clave_aqui
```

---

## 7. Componentes Clave
*   `Header.tsx`: Navbar fijo con scroll suave y trigger de WhatsApp.
*   `LeadForm.tsx`: Formulario principal del Hero con diseño de cristal.
*   `ProductCard.tsx`: Tarjetas de categorías con efectos de iluminación y botón de cotización.
*   `ContactForm.tsx`: Sección final de contacto con campo de mensaje.
*   `WhatsappCapture.tsx`: Modal inteligente para conversión de chat.

---

## 8. Mantenimiento y Cambios
*   **Cambiar el Email de Notificación**: Edita la línea 45 de `app/api/brevo/route.ts`.
*   **Cambiar el Número de WhatsApp**: Edita la línea 37 de `app/components/WhatsappCapture.tsx`.
*   **Cambiar la Lista de Brevo**: Edita la línea 31 de `app/api/brevo/route.ts`.

---
*Documento generado el 24 de Abril, 2026 por Antigravity AI.*
