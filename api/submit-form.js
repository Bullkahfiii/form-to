const FormPendaftaran = () => {
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    asalSekolah: '',
    infoDari: '',
    kelas: '',
    mapelPilihan1: '',
    mapelPilihan2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ganti URL ini dengan URL Google Sheets Anda
      const response = await axios.post('https://script.google.com/macros/s/AKfycbyk8yPsU5lD9RPZG1COgI4-tgVWi-Z8cCxzenlgABxCfV1p2hmxaWPvxx-3aLVwkERB/exec', formData);
      if (response.status === 200) {
        window.open(`https://wa.me/6289643083341?text=Halo%20kak,%20aku%20udah%20daftar%20buat%20ikutan%20TO%20ya`, '_blank');
        alert('Pendaftaran berhasil!');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Terjadi kesalahan, silakan coba lagi.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Form Pendaftaran Try Out Akbar TKA</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama Lengkap:</label>
          <input type="text" name="nama" value={formData.nama} onChange={handleChange} required />
        </div>
        <div>
          <label>Nomor Whatsapp:</label>
          <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required />
        </div>
        <div>
          <label>Asal Sekolah:</label>
          <input type="text" name="asalSekolah" value={formData.asalSekolah} onChange={handleChange} required />
        </div>
        <div>
          <label>Dapat info dari:</label>
          <select name="infoDari" value={formData.infoDari} onChange={handleChange} required>
            <option value="">Pilih</option>
            <option value="Cabang Bandung-1 (Tamansari)">Cabang Bandung-1 (Tamansari)</option>
            <option value="Cabang Bandung-2 (Buahbatu)">Cabang Bandung-2 (Buahbatu)</option>
            <option value="Cabang Bandung-3 (Cimahi)">Cabang Bandung-3 (Cimahi)</option>
            <option value="Cabang Bandung-4 (Antapani)">Cabang Bandung-4 (Antapani)</option>
            <option value="Cabang Bandung-5 (Abdurrahman Saleh)">Cabang Bandung-5 (Abdurrahman Saleh)</option>
            <option value="Cabang Bandung-6 (Kopo)">Cabang Bandung-6 (Kopo)</option>
            <option value="Cabang Bandung-7 (Cipacing)">Cabang Bandung-7 (Cipacing)</option>
            <option value="Sosial Media">Sosial Media</option>
            <option value="lain-lain">lain-lain (*diisi teks manual)</option>
          </select>
        </div>
        <div>
          <label>Kelas:</label>
          <select name="kelas" value={formData.kelas} onChange={handleChange} required>
            <option value="">Pilih</option>
            <option value="1 SMA">1 SMA</option>
            <option value="2 SMA">2 SMA</option>
            <option value="3 SMA">3 SMA</option>
          </select>
        </div>
        <div>
          <label>Mapel Pilihan 1:</label>
          <select name="mapelPilihan1" value={formData.mapelPilihan1} onChange={handleChange} required>
            <option value="">Pilih</option>
            <option value="Matematika Lanjut">Matematika Lanjut</option>
            <option value="Fisika">Fisika</option>
            <option value="Kimia">Kimia</option>
            <option value="Biologi">Biologi</option>
            <option value="Sejarah">Sejarah</option>
            <option value="Ekonomi">Ekonomi</option>
            <option value="Sosiologi">Sosiologi</option>
            <option value="Geografi">Geografi</option>
          </select>
        </div>
        <div>
          <label>Mapel Pilihan 2:</label>
          <select name="mapelPilihan2" value={formData.mapelPilihan2} onChange={handleChange} required>
            <option value="">Pilih</option>
            <option value="Matematika Lanjut">Matematika Lanjut</option>
            <option value="Fisika">Fisika</option>
            <option value="Kimia">Kimia</option>
            <option value="Biologi">Biologi</option>
            <option value="Sejarah">Sejarah</option>
            <option value="Ekonomi">Ekonomi</option>
            <option value="Sosiologi">Sosiologi</option>
            <option value="Geografi">Geografi</option>
          </select>
        </div>
        <div>
          <p>Keterangan info untuk pembayaran ke nomor rekening:</p>
          <p>*Nama Bank* *Nomor Rekening* *Nama Pemilik rekening*</p>
        </div>
        <button type="submit">Daftar Sekarang</button>
      </form>
    </div>
  );
};

export default FormPendaftaran;
