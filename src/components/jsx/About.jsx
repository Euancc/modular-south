import React from 'react'
import '../css/about.css'

function About() {
  return (
    <section className="about-section">
      <hr width="90%" size="2" />
      <div className="about-container">
        <div className="about-text">
          <h1>Who we are</h1>
          <p>
            <strong>
              Modular South is a new business using Licensed Building
              Practitioner carpenters with 10+ years knowledge in the
              construction industry to build the right Transportable dwellings
              for you.
            </strong>
          </p>
          <br></br>
          <p>
            With rising house prices, high inflation rates and material
            shortages our goal is to provide Kiwis with an alternative way of
            living. If you are looking for an extra space for your property or a
            cosy bach away from home, we provide architecturally designed,
            Transportable dwellings, Sleepouts of various sizes to suit your
            needs. Our units are ideal as they are, or can be added onto each
            other to create the ideal space. Our units are made off site on the
            West Coast ready for delivery anywhere around the South Island.
          </p>
        </div>
        <img className="about-img" src="ModSFraming4.3.jpg" />
      </div>
      <hr width="90%" size="2" />
    </section>
  )
}

export default About
