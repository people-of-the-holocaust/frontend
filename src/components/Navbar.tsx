// Navbar component at the top of each page, buttons to move between pages
import { Link, NavLink, useNavigate } from "react-router-dom";

type NavbarProps = {
  variant?: "home";
};

export default function Navbar({ variant }: NavbarProps) {
  const navigate = useNavigate();

  if (variant === "home") {
    return (
      <header className="home-header">
        <Link className="home-brand" to="/">People of the Holocaust</Link>
        <nav aria-label="Main navigation" className="home-navigation">
          <Link to="/people">People</Link>
          <Link to="/places">Places</Link>
          <NavLink to="/about">About</NavLink>
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
        <button onClick={() => navigate("/about")}>About</button>
      </div>
    </div>
  );
}
