import logo from "../logo.svg";
import "../Styles/Loading.css";

function Loading() {
  return (
    <div className="Loading">
      <img src={logo} className="Loading-logo" alt="logo" />
    </div>
  );
}

export default Loading;
