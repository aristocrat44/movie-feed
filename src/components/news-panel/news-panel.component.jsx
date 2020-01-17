import React,{useState} from 'react';
import './news-panel.styles.css';
import sthings from '../../img/stranger-things.jpg';


export const NewsPanel =  (props) => {
    
   /* const [list] = useState([
                        { id: 1,
                         name:'Bad Boys for Life'
                        },
                        { id: 2,
                            name:'Birds of Prey'
                           },
                           { id: 3,
                            name:'Black Widow'
                           },
                           { id: 4,
                            name:'Bloodshot'
                           },
                           { id: 5,
                            name:'A Quiet Place II'
                           },
                           { id: 6,
                            name:'Mulan'
                           },
                           { id: 7,
                            name:'Top Gun: Maverick'
                           },
                           { id: 8,
                            name:'The Eternals'
                           },
                           { id: 9,
                            name:'Wonder Woman 1984'
                           },
                           { id: 10,
                            name:'Minions the Rise of Gru'
                           },
                           { id: 11,
                            name:'No Time to Die'
                           },
                           { id: 12,
                            name:'SCOOB !'
                           },
                       
                        ]); **/


  return(
    <div className="news-panel"> 
      <div className="card">
        <img src={sthings} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
    </div>
  )
}
