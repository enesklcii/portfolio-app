import { useState } from "react";
import axios from "axios";

export default function EducationForm() {
  const [form, setForm] = useState({
    title: "",
    provider: "",
    date: "",
    description: "",
    certificateUrl: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/education`,
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setStatus("success");
      setForm({
        title: "",
        provider: "",
        date: "",
        description: "",
        certificateUrl: "",
      });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="card bg-dark text-light shadow-lg border-0 p-4">
      <h2 className="mb-4 fw-bold text-info">📘 Yeni Eğitim Ekle</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="🎓 Eğitim Başlığı"
          required
          className="form-control bg-secondary text-light border-0 mb-3"
        />
        <input
          name="provider"
          value={form.provider}
          onChange={handleChange}
          placeholder="🏫 Kurum / Platform"
          className="form-control bg-secondary text-light border-0 mb-3"
        />
        <input
          name="date"
          value={form.date}
          onChange={handleChange}
          placeholder="📅 Tarih"
          className="form-control bg-secondary text-light border-0 mb-3"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="📝 Açıklama"
          rows={3}
          className="form-control bg-secondary text-light border-0 mb-3"
        />
        <input
          name="certificateUrl"
          value={form.certificateUrl}
          onChange={handleChange}
          placeholder="🔗 Sertifika Linki"
          className="form-control bg-secondary text-light border-0 mb-3"
        />
        <button
          type="submit"
          className="btn btn-info w-100 fw-bold"
          disabled={status === "loading"}
        >
          {status === "loading" ? "⏳ Ekleniyor..." : "➕ Eğitim Ekle"}
        </button>
      </form>

      {/* Durum mesajları */}
      {status === "success" && (
        <div className="alert alert-success mt-3">✅ Eğitim başarıyla eklendi!</div>
      )}
      {status === "error" && (
        <div className="alert alert-danger mt-3">❌ Bir hata oluştu!</div>
      )}
    </div>
  );
}
