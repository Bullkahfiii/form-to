export default async function handler(req, res) {
  const GAS_URL = 'https://script.google.com/macros/s/AKfycbyk8yPsU5lD9RPZG1COgI4-tgVWi-Z8cCxzenlgABxCfV1p2hmxaWPvxx-3aLVwkERB/exec'; // Ganti dengan URL deployment Anda

  try {
    const response = await fetch(GAS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': req.headers['content-type'] // Pertahankan content-type asli
      },
      body: req.body
    });
    
    const result = await response.json();
    return res.status(response.status).json(result);
    
  } catch (error) {
    return res.status(500).json({
      error: 'Internal server error',
      details: error.message
    });
  }
}
