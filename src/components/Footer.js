import Button from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <nav>
        <Button isNav={true} path="/">
          Home
        </Button>
        <Button isNav={true} path="/project">
          Project
        </Button>
        <Button isNav={true} path="/contect">
          Contect
        </Button>
      </nav>
    </footer>
  );
}

export default Footer;
