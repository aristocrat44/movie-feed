import React,{useEffect} from 'react';
import {Search} from '../search/search.component';
import {Type} from '../advanced-search/type.component';
import {Year} from '../advanced-search/year.component';
import './nav.styles.scss'
const Nav =({ handleSearchEvent, handleAdvancedSearchEvent, handleSearchTxt, handleYearTxt, handleTypeTxt, ...remainingItems})=>{

  useEffect(()=>{
  console.log(remainingItems);
},[])
  
return(
  <div className='col-12'>
    <nav className="navbar navbar-dark bg-dark justify-content-between">
    <a className="navbar-brand"> 
    <button type="button" className="btn btn-primary my-2 my-sm-0" data-toggle="modal" data-target="#exampleModal">
       Advanced Search
      </button>
    </a>
    <div className='form-inline'>
        <Search value={remainingItems.search} handleSearchTxt={handleSearchTxt}/>
        <button type="button" className='btn btn-danger my-2 my-sm-0' onClick={handleSearchEvent}>Go !</button>
    </div>
    
    </nav>
   

    <div>
     

{/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              
            <div className="form-group">
                <div>
                  <label style={{float:'left', paddingTop:'7px'}}>Title:</label>
                  <Search value={remainingItems.search} handleSearchTxt={handleSearchTxt}/>
                </div>
                <div>
                  <label style={{float:'left', paddingTop:'7px'}}>Type:</label>
                  <Type value={remainingItems.type} handleTypeTxt={handleTypeTxt}/>
                </div>
                <div>
                  <label style={{float:'left', paddingTop:'7px'}}>Release Year:</label>
                  <Year value={remainingItems.year} handleYearTxt={handleYearTxt}/>
                </div>
            </div>    

            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleAdvancedSearchEvent}>GO !</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>  
            </div>
           </div>
          </div>
        </div>
      </div>
  </div>

    )

  }
export default Nav;