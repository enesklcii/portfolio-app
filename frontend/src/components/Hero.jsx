import { useProfile } from '../context/ProfileContext.jsx';


export default function Hero() {
const { profile } = useProfile();
if (!profile) return null;
return (
<section className="hero">
<div className="container">
<h1>{profile.name}</h1>
<h2>{profile.title}</h2>
<p>{profile.summary}</p>
<div className="socials">
{profile.socials?.github && <a href={profile.socials.github} target="_blank">GitHub</a>}
{profile.socials?.linkedin && <a href={profile.socials.linkedin} target="_blank">LinkedIn</a>}
{profile.socials?.website && <a href={profile.socials.website} target="_blank">Website</a>}
</div>
</div>
</section>
);
}