import { useProfile } from '../context/ProfileContext.jsx';


export default function Skills() {
const { profile } = useProfile();
if (!profile?.skills?.length) return null;
return (
<section id="skills" className="section">
<div className="container">
<h3>Yetenekler</h3>
<ul className="chips">
{profile.skills.map((s) => (
<li key={s} className="chip">{s}</li>
))}
</ul>
</div>
</section>
);
}