import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-button">Mes Candidatures</Link>
        <Link to="/suivi-relances" className="nav-button">Suivi des Relances</Link>
        <Link to="/statistiques" className="nav-button">Statistiques</Link>
      </nav>
    </header>
  );
};

export default Header;