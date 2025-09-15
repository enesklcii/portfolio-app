import { useEffect, useState } from 'react';


export default function useFetch(fn, deps = []) {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');


useEffect(() => {
let mounted = true;
setLoading(true);
fn()
.then((d) => mounted && setData(d))
.catch(() => mounted && setError('Veri yüklenemedi'))
.finally(() => mounted && setLoading(false));
return () => { mounted = false; };
}, deps);


return { data, loading, error };
}