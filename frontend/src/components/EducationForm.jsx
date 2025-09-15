import { useState } from 'react';
import axios from 'axios';

export default function EducationForm() {
  const [form, setForm] = useState({
    title: '',
    provider: '',
    date: '',
    description: '',
    certificateUrl: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/education`,
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('✅ Eğitim eklendi!');
      setForm({ title: '', provider: '', date: '', description: '', certificateUrl: '' });
    } catch (err) {
      alert('❌ ' + (err.response?.data?.message || 'Bilinmeyen hata'));
    }
  };

  return (
    <div className="card shadow p-4">
      <h2 className="mb-4">Yeni Eğitim Ekle</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Eğitim Başlığı"
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
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Açıklama"
          rows={2}
          className="form-control mb-3"
        />
        <input
          name="certificateUrl"
          value={form.certificateUrl}
          onChange={handleChange}
          placeholder="Sertifika Linki"
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-success w-100">
          ➕ Eğitim Ekle
        </button>
      </form>
    </div>
  );
}
