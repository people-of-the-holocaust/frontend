import Navbar from "../components/Navbar";
import "./Home.css";
import "./About.css";

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
          <p className="about-eyebrow">About the project</p>
          <h1>People of the Holocaust</h1>
          <p className="about-introduction">
            Bringing individual lives into focus through historical records,
            places, and the connections between them.
          </p>
        </header>

        <section
          className="about-section"
          aria-labelledby="about-project-title"
        >
          <h2 id="about-project-title" className="about-section-label">
            <span className="about-section-number" aria-hidden="true">
              01
            </span>
            The project
          </h2>
          <div className="about-section-copy">
            <h3>Individual lives. Historical connections.</h3>
            <p>
              People of the Holocaust is a digital historical exploration
              platform that helps visitors discover individuals, locations, and
              the connections between them. By bringing individual stories into
              focus, the project makes historical records more accessible to
              researchers, students, and the public.
            </p>
          </div>
        </section>

        <section
          className="about-section"
          aria-labelledby="about-collection-title"
        >
          <h2 id="about-collection-title" className="about-section-label">
            <span className="about-section-number" aria-hidden="true">
              02
            </span>
            The collection
          </h2>
          <div className="about-section-copy">
            <section aria-labelledby="about-data-title">
              <h3 id="about-data-title">Sources &amp; coverage</h3>
              <p>
                The project draws on the United States Holocaust Memorial
                Museum’s{" "}
                <cite>Encyclopedia of Camps and Ghettos, 1933–1945</cite>,
                bringing information about individuals and places into a
                searchable collection.
              </p>
              <p>
                The database is a research aid, not a comprehensive record of
                every person, place, or event associated with the Holocaust.
              </p>
              {/* Specify volumes and sections represented when confirmed. */}
              <a
                className="about-text-link"
                href="https://www.ushmm.org/research/publications/encyclopedia-camps-ghettos"
              >
                About the Encyclopedia <span aria-hidden="true">→</span>
              </a>
            </section>

            <section aria-labelledby="about-method-title">
              <h3 id="about-method-title">How to use the data</h3>
              <p>
                Explore people, places, and the connections recorded between
                them. Use these connections as starting points for further
                research, rather than complete accounts of individual lives.
              </p>
              <p>
                When citing historical information, consult and cite the
                original source whenever possible.
              </p>
            </section>

            <section aria-labelledby="about-limits-title">
              <h3 id="about-limits-title">Understanding the limitations</h3>
              <p>
                Historical records may be incomplete. Names, spelling, and place
                names may vary across sources, and some details may be unknown
                or uncertain.
              </p>
              <p>
                A missing record or connection does not establish that a person,
                event, or relationship didn’t exist. Consult the original
                sources for further context and supporting evidence.
              </p>
            </section>
          </div>
        </section>

        <section className="about-section" aria-labelledby="about-team-title">
          <h2 id="about-team-title" className="about-section-label">
            <span className="about-section-number" aria-hidden="true">
              03
            </span>
            The people
          </h2>
          <div className="about-section-copy">
            <h3>Research and development, together.</h3>
            <p>
              People of the Holocaust is a Marquette University senior design
              project that collaborates with Bader Philanthropies. The project
              is designed to bring software development and historical research
              together to support the exploration of individual lives.
            </p>
            <a
              className="about-text-link"
              href="https://github.com/people-of-the-holocaust"
            >
              Explore the project <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <div className="about-closing">
          <section aria-labelledby="about-sources-title">
            <h2 id="about-sources-title">Sources &amp; acknowledgements</h2>
            <p>
              We acknowledge the United States Holocaust Memorial Museum’s
              scholarship and the historical sources on which this project
              draws. This tool complements those sources; it does not replace
              them. Source attribution does not imply Museum affiliation or
              endorsement.
            </p>
            <a
              className="about-text-link"
              href="https://www.ushmm.org/research"
            >
              Museum research resources <span aria-hidden="true">→</span>
            </a>
          </section>

          <section aria-labelledby="about-corrections-title">
            <h2 id="about-corrections-title">Corrections &amp; feedback</h2>
            <p>
              If you notice a possible error, please report it through the
              project’s GitHub issue tracker. Include the affected record(s),
              the proposed correction, and a supporting source if available.
            </p>
            <p>
              Reports are public. Please do not include private or sensitive
              information.
            </p>
            <a
              className="about-text-link"
              href="https://github.com/people-of-the-holocaust/frontend/issues"
            >
              Report an issue <span aria-hidden="true">→</span>
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}
