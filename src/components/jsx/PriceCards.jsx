import React from 'react'
import '../css/priceCards.css'

function PriceCards() {
  return (
    <>
      <section className="card-section">
        <h1 className="price-header">Price List</h1>

        <div className="card-container">
          <div className="card">
            <img className="card-img" src="CardImage7.5x4.jpg" />
            <div className="card-text">
              <h1>Unit A</h1>
              <h2>7.5mx4.0m Modular unit starting from $130,000</h2>
              <div>Self Contained, Transportable dwellings Sleepouts/flat </div>
            </div>
          </div>

          <div className="card">
            <img className="card-img" src="CardImage7.5x4.jpg" />
            <div className="card-text">
              <h1>Unit B</h1>
              <h2>6.0mx3.6m Modular unit starting from $125,000</h2>
              <div>Self Contained, Transportable dwellings Sleepouts/flat </div>
            </div>
          </div>

          <div className="card">
            <img className="card-img" src="CardImage7.5x4.jpg" />
            <div className="card-text">
              <h1>Unit C</h1>
              <h2>4.8.mx3.6m Modular unit starting from $73,000</h2>
            </div>
          </div>

          <div className="card">
            <img className="card-img" src="CardImage7.5x4.jpg" />
            <div className="card-text">
              <h1>Unit D</h1>
              <h2>3.6.mx3.6m Modular unit starting from $55,000</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PriceCards
