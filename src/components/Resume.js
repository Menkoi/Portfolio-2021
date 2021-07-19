import React from 'react';

function Resume() {
    return(
        <section class="page-section" id="about">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Skills</h2>
            <h3 class="section-subheading text-muted">
               Programming Languages & Tools
            </h3>
            <ul class="list-inline dev-icons">
                <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                <li class="list-inline-item"><i class="fab fa-react"></i></li>
                <li class="list-inline-item"><i class="fab fa-node-js"></i></li>  
                <li class="list-inline-item"><i class="fab fa-bootstrap"></i></li>
                <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                <li class="list-inline-item"><i class="fab fa-github"></i></li>
            </ul>
            <h2 class="section-subheading text-muted">
               With Some Experience With
            </h2>
            <ul class="list-inline">
                <li>
                    Heroku
                </li>
                <li>
                    MySQL/NoSQL
                </li>
                <li>
                    Server-Side APIs/Third-Party APIs
                </li>
                <li>
                    Object-Oriented Programming (OOP)
                </li>
                <li>
                    Object Relational Mapping (ORM)
                </li>
                <li>
                    Model-View-Controller (MVC)
                </li>
            </ul>
          </div>
        </div>
      </section>
    )
}

export default Resume;