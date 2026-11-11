import Navbar from "../components/Navbar";
import placesImage from "../assets/places.jpg";
import "./Home.css";
import "./About.css";

function SectionIcon({ type }: { type: "data" | "team" | "sources" }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "data" && (
        <>
          <ellipse cx="20" cy="9" rx="12" ry="5" />
          <path d="M8 9v22c0 2.8 5.4 5 12 5s12-2.2 12-5V9M8 16c0 2.8 5.4 5 12 5s12-2.2 12-5M8 23c0 2.8 5.4 5 12 5s12-2.2 12-5" />
        </>
      )}
      {type === "team" && (
        <>
          <circle cx="20" cy="12" r="5" />
          <path d="M10 35v-5a10 10 0 0 1 20 0v5M8 7a5 5 0 0 0 0 10M32 7a5 5 0 0 1 0 10M4 30v-4a7 7 0 0 1 6-7M36 30v-4a7 7 0 0 0-6-7" />
        </>
      )}
      {type === "sources" && (
        <>
          <path d="M20 9C15 5 9 4 3 6v27c6-2 12-1 17 3 5-4 11-5 17-3V6c-6-2-12-1-17 3Zm0 0v27" />
        </>
      )}
    </svg>
  );
}

export default function About() {
  return (
    <div className="home-page about-page">
      <a
        className="home-skip-link"
        href="#/about"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("about-main")?.focus();
        }}
      >
        Skip to content
      </a>
      <Navbar variant="home" />
      <main id="about-main" className="about-main" tabIndex={-1}>
        <header className="about-heading">
          <h1>About</h1>
          <p>
            Learn more about the People of the Holocaust project, our data
            sources, and the team behind it.
          </p>
        </header>

        <section
          className="about-mission"
          aria-labelledby="about-mission-title"
        >
          <img
            src={placesImage}
            alt="Railway tracks leading to the entrance of Auschwitz-Birkenau"
          />
          <div className="about-mission-copy">
            <h2 id="about-mission-title">What is People of the Holocaust?</h2>
            <p>
              People of the Holocaust is a digital historical exploration
              platform that helps visitors discover individuals, locations, and
              the connections between them. By bringing individual stories into
              focus, the project makes historical records more accessible to
              researchers, students, and the public.
            </p>
          </div>
        </section>
        <div className="about-cards">
          <section className="about-card" aria-labelledby="about-data-title">
            <SectionIcon type="data" />
            <h2 id="about-data-title"> Sources &amp; Coverage</h2>
            <p>Place holder text</p>
            <p>
              The database is a research aid, not a comprehensive record of
              every person, place, or event associated with the Holocaust.
            </p>
            {/* Specify volumes and sections presented */}
            <a
              className="about-text-link"
              href="https://www.ushmm.org/research/publications/encyclopedia-camps-ghettos"
            >
              {" "}
              About the Encycolpedia <span aria-hidden="true">→</span>
            </a>
          </section>

          <section className="about-card" aria-labelledby="about-method-title">
            <SectionIcon type="data" />
            <h2 id="about-method-title">How to Use the Data</h2>
            <p>
              Explore people, places, and the connections recorded between them.
              Use these connections as starting points for further research,
              rather than complete accounts of individual lives.
            </p>
            <p>
              When citing historical information, consult and site the original
              source whenever possible.
            </p>
          </section>

          <section className="about-card" aria-labelledby="about-limits-title">
            <SectionIcon type="sources" />
            <h2 id="about-limits-title">Understanding the Limitations</h2>
            <p>
              Historical records may be incomplete. Names, spelling, and place
              names may vary across sources, and some details may be unknown or
              uncertain.
            </p>
            <p>
              A missing record or connection does not establish that a person,
              event, or relationship didn't exist. Consult the original sources
              for further context and supportiong evidence.
            </p>
          </section>

          <section className="about-card" aria-labelledby="about-team-title">
            <SectionIcon type="team" />
            <h2 id="about-team-title">Our Team</h2>
            <p>
              People of the Holocaust is a Marquette University senior design
              project that collaborates with Bader Philanthropies. The project
              is designed to bring software development and historical research
              together to support the exploration of individual lives.
            </p>
            {/* Potentially remove this */}
            <a
              className="about-text-link"
              href="https://github.com/people-of-the-holocaust"
            >
              Explore the project <span aria-hidden="true">→</span>
            </a>
          </section>

          <section
            className="about-card"
            aria-labelledby="about-corrections-title"
          >
            <SectionIcon type="sources" />
            <h2 id="about-corrections-title">Corrections &amp; Feedback</h2>
            <p>
              If you notice a possible error, please report it through the
              project's GitHub issue tracker. Please include the affected
              record(s), the proposed correction, and a supporting source - if
              available.
            </p>
            <p>
              Please note that reports are public. Please do not include private
              or sensitive information in them.
            </p>
            <a
              className="about-text-link"
              href="https://github.com/people-of-the-holocaust/frontend/issues"
            >
              Report an issue<span aria-hidden="true">→</span>
            </a>
          </section>

          <section
            className="about-sources"
            aria-labelledby="about-sources-title"
          >
            <SectionIcon type="sources" />
            <div>
              <h2 id="about-sources-title">Sources &amp; Acknowledgements</h2>
              <p>
                We acknowledge the United States Holocaust Memorial Museum's
                scholarship and the historical sources on which this project
                draws from. This tool complements those sources; it does not
                replace them. Source attribution dos not imply Musem affiliation
                or endorsement.
              </p>
              <a
                className="about-text-link"
                href="https://www.ushmm.org/research"
              >
                Museum research resources <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
