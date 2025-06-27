// api/submit-form.js
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // 1. Proses upload gambar ke storage (contoh menggunakan Cloudinary)
    let imageUrl = '';
    if (req.files && req.files.foto) {
      const cloudinary = require('cloudinary').v2;
      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
      });
      
      const result = await cloudinary.uploader.upload(req.files.foto.path);
      imageUrl = result.secure_url;
    }

    // 2. Simpan data ke Google Spreadsheet
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({
      Nama: req.body.nama,
      Email: req.body.email,
      Telepon: req.body.telepon || '',
      Alamat: req.body.alamat || '',
      Foto: imageUrl,
      Tanggal: new Date().toISOString()
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
}
