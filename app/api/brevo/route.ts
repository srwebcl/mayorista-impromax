import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        
        // Ensure Brevo API key exists in environment
        const apiKey = process.env.BREVO_API_KEY;
        if (!apiKey) {
            console.warn("BREVO_API_KEY is not defined. Simulating success for development.");
            return NextResponse.json({ success: true, message: "Simulated success (no API key)" });
        }

        // Brevo API implementation
        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'api-key': apiKey
            },
            body: JSON.stringify({
                email: data.email,
                attributes: {
                    NOMBRE: data.name,
                    EMPRESA: data.company,
                    TELEFONO: data.phone,
                    INTERES: data.interest
                },
                updateEnabled: true, // Update if exists
                listIds: [2] // Replace with actual Brevo List ID if needed
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Brevo API Error:", errorText);
            return NextResponse.json({ error: "Failed to send to Brevo" }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Internal Server Error (Brevo):", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
