import { Link } from 'react-router-dom';
import leeRichmondImage from '../../Assets/lee_richmond.jpg';
import './about.scss';

const AboutSection = () => (
  <section className="about">
    <div className="about-bio">
      <div>
        <h2>
          About me
        </h2>
        <p>I'm Lee Richmond, a UK-based Senior Software Engineer with extensive experience building and modernising production web applications across SaaS, healthcare and other data-driven products. I work primarily with React, TypeScript and Node.js, taking products from technical design through implementation, testing and production.</p>
        <p>I'm particularly interested in solving complex product and engineering problems with simple, maintainable solutions. My work has included application architecture, API integrations, backend services, CI/CD, mentoring and improving engineering standards across teams.</p>
      </div>
      <div>
        <img src={leeRichmondImage} alt="Lee Richmond full-stack developer" />
      </div>
    </div>

    <div className="capability-blocks">
      <div>
        <h4>Architecture & Ownership</h4>
        <p>Pragmatic technical decisions, greenfield architecture and modernising existing systems.</p>
      </div>
      <div>
        <h4>Engineering Quality</h4>
        <p>Automated testing, CI/CD, code review and standards that keep software maintainable.</p>
      </div>
      <div>
        <h4>Technical Leadership</h4>
        <p>Mentoring engineers, improving team practices and communicating technical decisions clearly.</p>
      </div>
    </div>
    <div className="cta">
      <strong>
        <p>
          I'm looking to work with teams that value good engineering, clear communication and pragmatic problem-solving.
        </p>
        <p>
          If you're building something that matters
        </p>
        <p>
          <Link to="/" state={{ scrollTo: 'contact' }}>let’s talk</Link>.
        </p>
      </strong>
    </div>
  </section>
);

export default AboutSection;