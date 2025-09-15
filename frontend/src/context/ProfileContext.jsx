import { createContext, useContext, useEffect, useState } from 'react';
import { fetchProfile } from '../api/index.js';


const ProfileContext = createContext(null);
export const useProfile = () => useContext(ProfileContext);


export default function ProfileProvider({ children }) {
const [profile, setProfile] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');


useEffect(() => {
fetchProfile()
.then(setProfile)
.catch(() => setError('Profil yüklenemedi'))
.finally(() => setLoading(false));
}, []);


return (
<ProfileContext.Provider value={{ profile, loading, error }}>
{children}
</ProfileContext.Provider>
);
}