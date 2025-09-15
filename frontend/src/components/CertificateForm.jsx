import { useState } from 'react';
import axios from 'axios';

export default function CertificateForm() {
  const [form, setForm] = useState({
    name: '',
    provider: '',
    date: '',
    certificateUrl: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/certificates`,
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('✅ Sertifika eklendi!');
      setForm({ name: '', provider: '', date: '', certificateUrl: '' });
    } catch (err) {
      alert('❌ ' + (err.response?.data?.message || 'Bilinmeyen hata'));
    }
  };

  return (
    <div className="card shadow p-4">
      <h2 className="mb-4">Yeni Sertifika Ekle</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Sertifika Adı"
          required
          className="form-control mb-3"
        />
        <input
          name="provider"
          value={form.provider}
          onChange={handleChange}
          placeholder="Kurum / Platform"
          className="form-control mb-3"
        />
        <input
          name="date"
          value={form.date}
          onChange={handleChange}
          placeholder="Tarih"
          className="form-control mb-3"
        />
        <input
          name="certificateUrl"
          value={form.certificateUrl}
          onChange={handleChange}
          placeholder="Sertifika Linki"
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-warning w-100">
          ➕ Sertifika Ekle
        </button>
      </form>
    </div>
  );
}
