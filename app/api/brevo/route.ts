import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        console.log("Form data received:", data);
        
        // 1. Send to Brevo (CRM / Mailing List)
        const brevoApiKey = process.env.BREVO_API_KEY;
        if (brevoApiKey) {
            console.log("Sending to Brevo...");
            try {
                const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json',
                        'api-key': brevoApiKey
                    },
                    body: JSON.stringify({
                        email: data.email,
                        attributes: {
                            FIRSTNAME: data.name || '',
                            EMPRESA: data.company || '',
                            SMS: data.phone || '',
                            INTERES: data.interest || '',
                            MENSAJE: data.message || ''
                        },
                        updateEnabled: true,
                        listIds: [2] // Your Brevo List ID
                    })
                });

                if (!brevoResponse.ok) {
                    const brevoError = await brevoResponse.text();
                    console.error("Brevo API error response:", brevoError);
                } else {
                    console.log("Brevo contact created/updated successfully.");
                }
            } catch (e) {
                console.error("Fetch error (Brevo):", e);
            }
        } else {
            console.warn("BREVO_API_KEY is missing in .env");
        }

        // 2. Send via Resend (Transactional Notification)
        const resendApiKey = process.env.RESEND_API_KEY;
        if (resendApiKey) {
            console.log("Sending via Resend...");
            try {
                const resend = new Resend(resendApiKey);
                const resendResult = await resend.emails.send({
                    from: 'Impromax Mayorista <ventas@impromax.cl>',
                    to: ['ventas@impromax.cl'],
                    subject: `Nuevo Lead Mayorista: ${data.name}`,
                    html: `
                        <h2>Nuevo Contacto desde la Landing Mayorista</h2>
                        <p><strong>Nombre:</strong> ${data.name}</p>
                        <p><strong>Email:</strong> ${data.email}</p>
                        <p><strong>Teléfono:</strong> ${data.phone || 'No especificado'}</p>
                        <p><strong>Empresa:</strong> ${data.company || 'No especificada'}</p>
                        <p><strong>Interés:</strong> ${data.interest || 'No especificado'}</p>
                        ${data.message ? `<p><strong>Mensaje:</strong> ${data.message}</p>` : ''}
                        <hr />
                        <p>Este lead ha sido registrado automáticamente en Brevo.</p>
                    `
                });
                console.log("Resend result:", resendResult);
            } catch (e) {
                console.error("Resend error:", e);
            }
        } else {
            console.warn("RESEND_API_KEY is missing in .env");
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("CRITICAL API ERROR:", error);
        return NextResponse.json({ 
            error: "Internal Server Error", 
            message: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        }, { status: 500 });
    }
}
