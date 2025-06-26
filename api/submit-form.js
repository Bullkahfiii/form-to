export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyk8yPsU5lD9RPZG1COgI4-tgVWi-Z8cCxzenlgABxCfV1p2hmxaWPvxx-3aLVwkERB/exec', {
            method: 'POST',
            body: JSON.stringify(req.body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}
