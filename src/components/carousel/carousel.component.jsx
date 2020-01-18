import React from 'react';
import './carousel.styles.css';
import avengers from '../../img/avengers.jpg';
import irishman from '../../img/irishman.jpg';
import joker from '../../img/joker.jpg';

const Carousel = () => (
  <div className="custom-size">
     <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={avengers} className="d-block w-100" alt="AVENGERS - ENDGAME"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>AVENGERS - END GAME</h5>
        <p>The news was announced via a chart on Twitter, stating that if Disney were to update its worldwide data, Endgame would be the first $2.8 billion USD film.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={irishman} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>THE IRISHMAN</h5>
        <p>With a production budget of $159 million and a runtime of 209 minutes, it is among the most expensive and longest films of Scorsese's career.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={joker} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>JOKER</h5>
        <p> At the 77th Golden Globe Awards, it won Best Original Score for Hildur Guðnadóttir and Best Actor – Drama for Phoenix. It also earned a leading 11 nominations at two ceremonies – the 73rd British Academy Film Awards, including Best Film, Best Director, and Best Actor for Phoenix; and the 92nd Academy Awards including Best Picture, Best Actor for Phoenix and Best Director.</p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
);

export default Carousel;