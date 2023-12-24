import "./Hero.css";
import Button from "../components/Button";

function Hero() {
  return (
    <>
      <section className="hero-page">
        {/* <header className="hero-header">Hello</header> */}

        <div className="hero-content">
          <h3>Hyy I Am SAMEER KHAN A</h3>
          <h1>Full-stack web developer</h1>

          <p>
            "Hello, I'm Sameer, a MERN stack developer passionate about
            transforming ideas into digital reality. With expertise in React.js,
            Node.js, and a knack for crafting dynamic user interfaces, I bring
            creativity and precision to every project. Explore with me."
          </p>
          <div className="hero-btn-box">
            <Button>contect now</Button>
            <Button>view project</Button>
          </div>
        </div>
      </section>
      <section className="about-me">
        <h3>About Me</h3>
        <p>
          "Welcome to my digital space! I'm Sameer, a versatile full-stack web
          developer with a profound love for coding and creating immersive
          digital experiences. My journey in the realm of web development has
          equipped me with a rich skill set. From the responsive beauty of
          React.js to the robust backend structures powered by Node.js and
          Express.js, I navigate the intricacies of front-end and back-end
          development with ease.
        </p>
        .
        <p>
          My proficiency extends to HTML5 and CSS, and I add a touch of elegance
          with Tailwind CSS for streamlined styling. In the world of databases,
          MongoDB is my go-to for efficient and scalable data management. With a
          solid understanding of state management using Redux and a commitment
          to writing clean, modern JavaScript (ES6+), I ensure that each line of
          code contributes to the success of the project.
        </p>
        <p>
          What sets me apart is not just the technical know-how, but the
          holistic approach to problem-solving. I see every project as an
          opportunity to create not just a solution, but an engaging and
          delightful experience for the end user. Whether it's a sleek and
          responsive frontend or a powerful and scalable backend, I bring both
          elements together to form a harmonious whole.
        </p>
        <p>
          If you're looking for a developer who doesn't just code but crafts
          digital experiences, you're in the right place. Let's connect and
          bring your digital dreams to life!"
        </p>
      </section>
    </>
  );
}

export default Hero;
