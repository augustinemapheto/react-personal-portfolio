import React from 'react';
import {} from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light m-auto h-50">
        <a class="navbar-brand" href="./Navbar.js">
        myPortfolio
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="navbar-toggler-icon">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-100">
                <li class="nav-item active"><a class="nav-link" href="./index.html">Home</a></li>
                <li class="nav-item active"><a class="nav-link" href="#about">About</a></li>
                <li class="nav-item active"><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
            <ul class="nav-item nav active">
              <li></li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar