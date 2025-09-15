import { useState } from 'react';
import axios from 'axios';

export default function AdminLogin({ onLogin }) {
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
        { username, password }
      );
      localStorage.setItem('token', data.token);
      onLogin();
    } catch {
      setError('❌ Hatalı giriş bilgileri');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700">
        <h2 className="text-2xl font-bold text-white text-center mb-6">🔐 Admin Giriş</h2>
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={username}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Kullanıcı adı"
          />
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Şifre"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold text-white"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}
