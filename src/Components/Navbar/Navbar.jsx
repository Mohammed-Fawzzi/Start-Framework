import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-3 text-white p-3" to="/">Start Framework</Link>
          
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">

              <li className="nav-item px-2">
                <NavLink className="nav-link nav-style text-white fw-bold" activeclassname="active" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item px-2">
                <NavLink className="nav-link nav-style text-white fw-bold" activeclassname="active" to="/portfolio">
                  Portfolio
                </NavLink>
              </li>

              <li className="nav-item px-2">
                <NavLink className="nav-link nav-style text-white fw-bold" activeclassname="active" to="/contact">
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}
