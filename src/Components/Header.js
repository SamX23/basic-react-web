import { Link } from "react-router-dom";
import Navigation from "./Navigation";
export default function Header() {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <Link to="/">
        <span className="font-bold">AppName</span>
      </Link>
      <Navigation />
    </header>
  );
}
