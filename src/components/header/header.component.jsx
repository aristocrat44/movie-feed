import React,{useEffect} from 'react';
import {Search} from '../search/search.component';
import {Type} from '../advanced-search/type.component';
import {Year} from '../advanced-search/year.component';
import './header.styles.scss'
const Header =({ handleSearchEvent, handleAdvancedSearchEvent, handleSearchTxt, handleYearTxt, handleTypeTxt, ...remainingItems})=>{

  useEffect(()=>{
  console.log(remainingItems);
},[])
  
return(
  <div className='header'>
      <div>
        <Search value={remainingItems.search} handleSearchTxt={handleSearchTxt}/>
        <button type="button" className='btn btn-primary' onClick={handleSearchEvent}>Go !</button>
     </div>
   
   {/* ADVANCE SEARCH */}
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>

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
            <Search value={remainingItems.search} handleSearchTxt={handleSearchTxt}/>
            <Type value={remainingItems.type} handleTypeTxt={handleTypeTxt}/>
            <Year value={remainingItems.year} handleYearTxt={handleYearTxt}/>
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
export default Header;