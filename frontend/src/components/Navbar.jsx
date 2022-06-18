import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="mainNav"
      >
        <div class="container-lg">
          <a class="navbar-brand" href="#page-top">
            Nakama
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav m-auto">
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">
                  Kategori
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  About Us
                </a>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="btn btn-primary btn-sm" role="button" href="#contact">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
