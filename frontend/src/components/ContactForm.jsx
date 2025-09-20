import { useState } from "react";
import { sendMessage } from "../api/index.js";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await sendMessage(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">📧 İletişime Geç</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Form kartı */}
            <div className="card bg-secondary shadow-lg border-0 fade-in-up">
              <div className="card-body p-5">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Ad Soyad</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="form-control bg-dark text-light border-0"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-control bg-dark text-light border-0"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Mesaj</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className="form-control bg-dark text-light border-0"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-info btn-lg w-100 fw-bold"
                  >
                    {status === "loading"
                      ? "⏳ Gönderiliyor..."
                      : "📨 Gönder"}
                  </button>
                </form>

                {/* Durum mesajları */}
                {status === "success" && (
                  <div className="alert alert-success mt-4">
                    ✅ Mesajınız başarıyla gönderildi!
                  </div>
                )}
                {status === "error" && (
                  <div className="alert alert-danger mt-4">
                    ❌ Bir hata oluştu, lütfen tekrar deneyin.
                  </div>
                )}
              </div>
            </div>

            {/* Alternatif iletişim yolları */}
            <div
              className="text-center mt-4 fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="text-muted">
                Bana doğrudan şu kanallardan da ulaşabilirsiniz:
              </p>
              <a
                href="mailto:klc02enes36@gmail.com"
                className="btn btn-outline-light me-2"
              >
                📧 Email
              </a>
              <a
                href="https://linkedin.com/in/enesklcii"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-info me-2"
              >
                💼 LinkedIn
              </a>
              <a
                href="https://github.com/enesklcii"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light"
              >
                🐙 GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
