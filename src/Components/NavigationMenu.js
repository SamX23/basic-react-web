import { Link } from "react-router-dom";

export default function NavigationMenu({ closeMenu }) {
  return (
    <ul>
      <li>
        <Link
          to="/"
          className="text-blue-500 py-3 border-t border-b block"
          onClick={closeMenu}
        >
          Home Page
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="text-blue-500 py-3 border-b block"
          onClick={closeMenu}
        >
          About
        </Link>
      </li>
    </ul>
  );
}
