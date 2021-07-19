import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {

    return (
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="/Portfolio-2021">
                <h3>Brandon Burton</h3>
            </a> 
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ml-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item" >
                        <Link to="/portfolio" class="nav-link">Portfolio</Link>
                    </li>
                    <li class="nav-item" >
                        <Link to="/contact" class="nav-link">Contact</Link>
                    </li>
                    <li class="nav-item" >
                        <Link to="/resume" class="nav-link">Resume</Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    )
}
export default Nav;