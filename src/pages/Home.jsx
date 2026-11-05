import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroImage from "../assets/heroImage.jpg";
import places from "../assets/places.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <a className="home-skip-link" href="#/" onClick={(event) => {
        event.preventDefault();
        document.getElementById("home-main").focus();
      }}>Skip to content</a>
      <Navbar variant="home" />
      <main id="home-main" tabIndex={-1}>
        <section className="home-hero" aria-labelledby="home-title"
          style={{ "--home-photo": `url(${heroImage})` }}>
          <div className="home-hero-content">
            <h1 id="home-title">People of<br />the Holocaust</h1>
            <p>Exploring the people, places, and historical<br className="home-desktop-break" /> connections of the Holocaust.</p>
            {/*<Link className="home-collection-button" to="/about">About the Project</Link>  TODO: update this when about page done*/}
            <Link className="home-collection-button" to="/">About the Project</Link>
          </div>
        </section>

        <section className="home-introduction" aria-labelledby="home-about" id="home-about-section">
          <h2 id="home-about">What is People of the Holocaust?</h2>
          <p className="home-description">
            Explore the lives of the people affected by the Holocaust and the places connected to their stories.
            Search historical records and use the interactive map to discover connections between people and places.
          </p>

          <div className="home-collections" id="home-collections">
            <Link className="home-collection-card" to="/people">
              <img className="home-people-photo" src={heroImage}
                alt="Children photographed at the liberation of Auschwitz" />
              <div className="home-card-content">
                <h3>People</h3>
                <p>Discover individuals and their historical records.</p>
                <span className="home-card-action">Browse people <span aria-hidden="true">→</span></span>
              </div>
            </Link>
            <Link className="home-collection-card" to="/places">
              <img className="home-places-photo" src={places}
                alt="Tracks photographed leading into Auschwitz" />
              <div className="home-card-content">
                <h3>Places</h3>
                <p>Explore historical locations through an interactive map.</p>
                <span className="home-card-action">Explore places <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          </div>
        </section>

        <section className="home-explore" aria-labelledby="home-explore-title"
          style={{ "--home-photo": `url(${heroImage})` }}>
          <h2 id="home-explore-title">How to Explore</h2>
          <ol>
            <li><span className="home-step-number">1</span>Search for a person or place</li>
            <li><span className="home-step-number">2</span>View detailed information</li>
            <li><span className="home-step-number">3</span>Explore connections</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
