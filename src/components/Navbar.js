import "./Navbar.css";
export default function Navbar(props) {
  return (
    <div className="mainNav">
      <h1> {props.title}</h1>
      <div className="centerNav">
        <input onClick={props.toggleMode} type="checkbox" />
        <label>Enable DarkMode</label>
      </div>
    </div>
  );
}
