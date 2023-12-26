import Card from "../components/Card";
import webAppsData from "../data";
import "./Project.css";

function Project() {
  return (
    <section className="project-section">
      <h3 className="sub-heading">Here Are Some Cool Project</h3>
      <div>
        <ul>
          {webAppsData.map((project) => (
            <Card
              name={project.name}
              url={project.url}
              description={project.description}
              skill={project.technologies}
            />
          ))}
        </ul>
      </div>

      <div className="git-hub">
        <a
          href="https://github.com/sameerkindia"
          target="_blank"
          className="btn"
        >
          Go To Github Profile
        </a>
      </div>
    </section>
  );
}

export default Project;
