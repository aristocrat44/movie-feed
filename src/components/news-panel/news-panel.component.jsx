import React,{useState} from 'react';
import './news-panel.styles.css';
import sthings from '../../img/stranger-things.jpg';
import sthings2 from '../../img/stranger-things-2020.jpg';
import sthings3 from '../../img/stranger-things-3.jpg';
import narcos from '../../img/narcos.jpg';


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
        <img src={narcos} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p>
            <h5 className="card-title">The Shorty Award: Narcos</h5>
            <h6>THE SHORTY AWARDS HONOR THE BEST OF SOCIAL MEDIA.</h6>
          </p>
        
         
        </div>
        <p class="card-text"><u>Upcoming Movies</u></p>
        <ul className="list-group list-group-flush"  style={{textAlign:'left'}}>
          <li className="list-group-item">Birds of Prey</li>
          <li className="list-group-item">Top Gun: Maverick</li>
          <li className="list-group-item">A Quiet Place II</li>
          <li className="list-group-item">No Time to Die</li>
          <li className="list-group-item">Wonder Woman 1984</li>
        </ul>
        {/* <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div> */}
      </div>
    </div>
  )
}
