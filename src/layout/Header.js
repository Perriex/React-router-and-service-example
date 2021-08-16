import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <ul className="header-wrapper__links">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
