import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-content">
        <div className="site-footer-project">
          <Link className="site-footer-brand" to="/">
            People of the Holocaust
          </Link>

          <p>
            An educational research tool exploring the people, places, and
            historical connections of the Holocaust.
          </p>
        </div>

        <div className="site-footer-about">
          <h2>About the Project</h2>

          <p>A Marquette University senior design project.</p>

          <p>
            For further historical context and study, please consult the
            original sources.
          </p>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>
          Historical source: United States Holocaust Memorial Museum’s{" "}
          <a
            href="https://www.ushmm.org/research/publications/encyclopedia-camps-ghettos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <cite>Encyclopedia of Camps and Ghettos, 1933–1945</cite>
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
