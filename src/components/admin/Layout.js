import React from "react";
import { Link, Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <header id="header" class="fixed-top ">
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto"></h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Registration">Registration</Link>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
