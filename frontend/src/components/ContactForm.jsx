import { useState } from 'react';
import { sendMessage } from '../api/index.js';


export default function ContactForm() {
const [form, setForm] = useState({ name: '', email: '', message: '' });
const [status, setStatus] = useState('');


const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


const onSubmit = async (e) => {
e.preventDefault();
setStatus('');
try {
await sendMessage(form);
setStatus('Mesajın iletildi, teşekkürler!');
setForm({ name: '', email: '', message: '' });
} catch (e) {
setStatus('Bir hata oluştu.');
}
};


return (
<section id="contact" className="section">
<div className="container">
<h3>İletişim</h3>
<form className="form" onSubmit={onSubmit}>
<input name="name" placeholder="Adın" value={form.name} onChange={onChange} required />
<input name="email" placeholder="E-posta" value={form.email} onChange={onChange} type="email" required />
<textarea name="message" placeholder="Mesajın" value={form.message} onChange={onChange} required />
<button type="submit">Gönder</button>
</form>
{status && <p className="status">{status}</p>}
</div>
</section>
);
}