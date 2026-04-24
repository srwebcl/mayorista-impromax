const data = {
    email: "test@example.com",
    name: "Test User",
    company: "Test Company",
    phone: "+56912345678",
    interest: "Variadores"
};

async function test() {
    try {
        const res = await fetch("http://localhost:3000/api/brevo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        console.log("Response:", JSON.stringify(result, null, 2));
    } catch (e) {
        console.error("Test failed:", e);
    }
}

test();
