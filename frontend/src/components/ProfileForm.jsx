import { useState, useEffect } from "react";
import axios from "axios";
import { useProfile } from "../context/ProfileContext.jsx";

export default function ProfileForm() {
  const { profile, fetchProfile } = useProfile(); // profile'i da aldık
  const [form, setForm] = useState({
    name: "",
    about: "",
    email: "",
    location: "",
    phone: "",
    cvUrl: "",
    photo: "",
  });
  const [status, setStatus] = useState("");

  // 📌 İlk açıldığında mevcut profil varsa doldur
  useEffect(() => {
    if (profile) setForm(profile);
  }, [profile]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/profile`,
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      await fetchProfile(); // ✅ frontend’i yenile
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="card bg-dark text-light shadow-lg border-0 p-4">
      <h2 className="mb-4 fw-bold text-primary">👤 Hakkımda Güncelle</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="👨‍💻 İsim"
          required
          className="form-control bg-secondary text-light border-0 mb-3"
        />
        <textarea
          name="about"
          value={form.about}
          onChange={handleChange}
          placeholder="📝 Kendini anlat..."
          rows={4}
          className="form-control bg-secondary text-light border-0 mb-3"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="📧 Email"
          className="form-control bg-secondary text-light border-0 mb-3"
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="📍 Konum"
          className="form-control bg-secondary text-light border-0 mb-3"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="📱 Telefon"
          className="form-control bg-secondary text-light border-0 mb-3"
        />
        <input
          name="cvUrl"
          value={form.cvUrl}
          onChange={handleChange}
          placeholder="📄 CV Linki"
          className="form-control bg-secondary text-light border-0 mb-3"
        />
        <input
          name="photo"
          value={form.photo}
          onChange={handleChange}
          placeholder="🖼️ Fotoğraf URL"
          className="form-control bg-secondary text-light border-0 mb-3"
        />

        <button
          type="submit"
          className="btn btn-primary w-100 fw-bold"
          disabled={status === "loading"}
        >
          {status === "loading" ? "⏳ Kaydediliyor..." : "💾 Kaydet"}
        </button>
      </form>

      {status === "success" && (
        <div className="alert alert-success mt-3">
          ✅ Profil başarıyla güncellendi!
        </div>
      )}
      {status === "error" && (
        <div className="alert alert-danger mt-3">
          ❌ Bir hata oluştu!
        </div>
      )}
    </div>
  );
}
