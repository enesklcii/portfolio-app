export default function Footer() {
const year = new Date().getFullYear();
return (
<footer className="footer">
<div className="container">© {year} - Portföy</div>
</footer>
);
}