import { useState } from 'react';
import axios from 'axios';

export default function ProjectForm() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    techStack: '',
    repoUrl: '',
    liveUrl: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/projects`,
        {
          ...form,
          techStack: form.techStack.split(',').map((t) => t.trim()).filter((t) => t),
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('✅ Proje eklendi!');
      setForm({ title: '', description: '', techStack: '', repoUrl: '', liveUrl: '' });
    } catch (err) {
      alert('❌ ' + (err.response?.data?.message || 'Bilinmeyen hata'));
    }
  };

  return (
    <div className="card shadow p-4">
      <h2 className="mb-4">Yeni Proje Ekle</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Proje Başlığı"
          required
          className="form-control mb-3"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Açıklama"
          rows={3}
          className="form-control mb-3"
        />
        <input
          name="techStack"
          value={form.techStack}
          onChange={handleChange}
          placeholder="Teknolojiler (virgül ile)"
          className="form-control mb-3"
        />
        <input
          name="repoUrl"
          value={form.repoUrl}
          onChange={handleChange}
          placeholder="Repo URL"
          className="form-control mb-3"
        />
        <input
          name="liveUrl"
          value={form.liveUrl}
          onChange={handleChange}
          placeholder="Canlı URL"
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-primary w-100">
          ➕ Proje Ekle
        </button>
      </form>
    </div>
  );
}
