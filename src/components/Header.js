import Button from "./Button";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo">My portfolio</div>
      <nav>
        <Button path="/" isNav={true}>
          Home
        </Button>
        <Button path="/project" isNav={true}>
          Project
        </Button>
        <Button path="/contect" isNav={true}>
          Contect me
        </Button>
      </nav>
    </header>
  );
}

export default Header;
