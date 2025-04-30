import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">MyProfile</Link>
        <div>
          <Link className="nav-link d-inline mx-2" to="/">Home</Link>
          <Link className="nav-link d-inline mx-2" to="/about">About Me</Link>
          <Link className="nav-link d-inline mx-2" to="/education">Education</Link>
          <Link className="nav-link d-inline mx-2" to="/projects">Projects</Link>
          <Link className="nav-link d-inline mx-2" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
