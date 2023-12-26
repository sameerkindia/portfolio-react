import "./Card.css";
function Card({ name, skill, description, url }) {
  return (
    <li className="card">
      <a href={url} target="_blank">
        <h3 className="card-heading">{name}</h3>
        <p className="skills">{skill.join(",")}</p>
        <p>{description}</p>
      </a>
    </li>
  );
}

export default Card;
