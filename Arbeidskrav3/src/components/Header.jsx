import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">GRUPPE 3</Link>
        <ul>
          <li><Link to="/">Hjem</Link></li>
          <li className="skille">|</li>
          <li><Link to="/nils-kristian">Nils</Link></li>
          <li><Link to="/isak">Isak</Link></li>
          <li><Link to="/oskar">Oskar</Link></li>
          <li><Link to="/lucas">Lucas</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



