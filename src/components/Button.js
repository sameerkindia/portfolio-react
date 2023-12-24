import { Link, NavLink } from "react-router-dom";
import "./Button.css";

function Button({ children, path, isNav }) {
  if (isNav) {
    return (
      <NavLink to={path} className="btn">
        {children}
      </NavLink>
    );
  }

  return (
    <Link to={path} className="btn">
      {children}
    </Link>
  );
}

export default Button;
