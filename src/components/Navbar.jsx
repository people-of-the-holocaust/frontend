// Navbar component at the top of each page, buttons to move between pages
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ variant }) {
  const navigate = useNavigate();

  if (variant === "home") {
    const scrollTo = (id) => {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
      const heading = section?.querySelector("h2, h3");
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus({ preventScroll: true });
      }
    };

    return (
      <header className="home-header">
        <Link className="home-brand" to="/">People of the Holocaust</Link>
        <nav aria-label="Main navigation" className="home-navigation">
          <Link to="/people">People</Link>
          <Link to="/places">Places</Link>
          <button type="button" onClick={() => scrollTo("home-about-section")}>About</button>
          <Link to="/people" className="home-search-link" aria-label="Search people">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m15.5 15.5 5 5" />
            </svg>
          </Link>
        </nav>
      </header>
    );
  }

  return (
    <div className="top-bar">
      <div className="brand">MARQUETTE UNIVERSITY</div>
      <div className="brand">BADER PHILANTHROPIES / USHMM</div>
      <div className="navigation-buttons">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/people")}>The People</button>
        <button onClick={() => navigate("/places")}>The Places</button>
      </div>
    </div>
  );
}
