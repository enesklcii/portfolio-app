export default function ProjectCard({ p }) {
return (
<article className="card">
<div className="card-body">
<h4>{p.title}</h4>
<p>{p.description}</p>
{p.techStack?.length ? (
<ul className="stack">
{p.techStack.map((t) => <li key={t}>{t}</li>)}
</ul>
) : null}
</div>
<div className="card-actions">
{p.repoUrl && <a href={p.repoUrl} target="_blank">Kaynak Kodu</a>}
{p.liveUrl && <a href={p.liveUrl} target="_blank">Canlı Demo</a>}
</div>
</article>
);
}