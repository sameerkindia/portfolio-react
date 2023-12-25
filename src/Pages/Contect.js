import "./Contect.css";
// import Button from "../components/Button";

function Contect() {
  return (
    <section className="contect-section">
      <h3 className="sub-heading">Contect Me</h3>
      <p>
        "Explore my portfolio to witness the projects I've worked on and the
        skills I've honed. If you have a project in mind or simply want to
        connect for a friendly chat, feel free to reach out. I'm enthusiastic
        about discussing your vision and collaborating on exciting ventures.
        Let's bring your ideas to life! Connect me."
      </p>
      <a className="btn" href="tel:7220932501">
        Call now
      </a>
      <a className="btn" href="sms:7220932501">
        send a text message
      </a>
      <a className="btn" href="mailto:sameerkhanaa5@gmail.com">
        Send Mail
      </a>
    </section>
  );
}

export default Contect;
