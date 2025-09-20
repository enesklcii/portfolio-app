// context/ProfileContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { fetchProfile } from "../api/index.js";

const ProfileContext = createContext(null);
export const useProfile = () => useContext(ProfileContext);

export default function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProfile = async () => {
    try {
      setLoading(true);
      const data = await fetchProfile();
      console.log("🔍 fetchProfile data:", data); // <--- bak bakalım array mi obje mi

      // Eğer backend array döndürürse, ilk elemanı al
      if (Array.isArray(data)) {
        setProfile(data[0] || null);
      } else {
        setProfile(data);
      }
    } catch (err) {
      console.error("❌ Profil fetch error:", err);
      setError("Profil yüklenemedi");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        loading,
        error,
        setProfile,        // admin formu direk güncellemek isterse
        fetchProfile: loadProfile, // admin kaydettikten sonra çağırmak için
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
