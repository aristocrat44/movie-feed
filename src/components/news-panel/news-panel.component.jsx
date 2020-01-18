import React from 'react';
import './news-panel.styles.css';
import narcos from '../../img/narcos.jpg';


export const NewsPanel =  (props) => {

  return(
    <div className="news-panel"> 
      <div className="card">
        <img src={narcos} className="card-img-top" alt="..."/>
        <div className="card-body">
          <span>
            <h5 className="card-title">The Shorty Award: Narcos</h5>
            <h6>THE SHORTY AWARDS HONOR THE BEST OF SOCIAL MEDIA.</h6>
          </span>
        </div>
        <p className="card-text"><u>Upcoming Movies</u></p>
        <ul className="list-group list-group-flush"  style={{textAlign:'left'}}>
          <li className="list-group-item">Birds of Prey</li>
          <li className="list-group-item">Top Gun: Maverick</li>
          <li className="list-group-item">A Quiet Place II</li>
          <li className="list-group-item">No Time to Die</li>
          <li className="list-group-item">Wonder Woman 1984</li>
        </ul>
      </div>
    </div>
  )
}
