import React from "react";
import Header from './Header';

function About() {
  return (
    <section class="page-section" id="about">
      <Header></Header>
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">About Me</h2>
          <h3 class="section-subheading text-muted">
            A little bit of my history.
          </h3>
          <p>
            Hello and welcome to my website.
            My name is Brandon Burton and im a 24 year old with a passion for coding.
            Born and raised in Maryland, I joined the US Army in 2016 as a 
            Chemcial Biological Radiological and Nuclear Specialist (CBRN) soldier.
            Once my contract "4 years" was completed, I set my sights on traveling after
            being deployed to Germany and Poland in the army.
            I spent 2 months teaching English in the Czech Republic then moving to Croatia.
            Due to the Covid-19 pandemic I deceided to come back to America to help with family 
            and thats when I started getting to coding, being reccomended by close friends that love to 
            code aswell. Once I started learning and being able to build things I think its just the most 
            awesome thing building projects and learning new concepts.

          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
