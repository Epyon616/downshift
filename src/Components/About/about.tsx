import leeRichmondImage from '../../assets/lee_richmond.jpg';
import './about.scss';

const AboutSection = () => (
  <section className="about">
    <h2>
      I’m Lee Richmond, a full-stack developer based in Redditch, Worcestershire, UK.
    </h2>
    <div className="about-bio">
      <div>
        <p>
          My journey into development started in 1999 when I built my first HTML website
          for a band I was playing in. What began as curiosity quickly evolved into a
          20-year pursuit of learning, experimenting, and refining my craft.
        </p>
        <p>
          Over the years, I’ve worked across a wide range of languages, frameworks, and methodologies. Today, I’m particularly passionate about <strong>Ruby</strong> and <strong>JavaScript</strong>. Recently, my focus has been on building modern, scalable applications using <strong>Node.js</strong>, <strong>React</strong>, and <strong>Redux</strong> — technologies I enjoy for their flexibility, performance, and thriving ecosystems.
        </p>
        <p>
          I’m a strong advocate of <strong>Test-Driven Development (TDD)</strong>. It shapes how I build software — helping me confidently step into legacy codebases, design clean architectures, and deliver reliable, maintainable solutions.
        </p>
        <p>
          I care about building software that lasts — not just code that works today, but systems that are thoughtful, well-tested, and built to evolve.
        </p>
      </div>
      <div>
        <img src={leeRichmondImage} alt="Lee Richmond full-stack developer" />
      </div>
    </div>

    <p className="cta">
      <strong>
        If you’re looking for a developer who values clean code, clear communication, and long-term thinking, <a href="/contact">let’s talk</a>. I’d love to help bring your next idea to life.
      </strong>
    </p>
  </section>
);

export default AboutSection;