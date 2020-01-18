import React, {Component} from 'react';
import Nav from '../../components/nav/nav.component';
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Carousel from '../../components/carousel/carousel.component';
import {MovieCard} from '../../components/movie-card/movie-card.component';
import {NewsPanel} from '../../components/news-panel/news-panel.component';

//import './App.css';

class HomePage extends Component{
  constructor(){
    super();
    this.state = {
      movies:[],
      type:'',
      year:'',
      search: '',
      totalResults: 0,
      pageCount: 1
    }
   
  }

handleSearchTxt=(e)=>{
  this.setState({search:e.target.value})
}

handleYearTxt=(e)=>{
  this.setState({year:e.target.value})
}

handleTypeTxt=(e)=>{
  this.setState({type:e.target.value})
}

// HANDLE SIMPLE SEARCH
handleSearchEvent= async () =>{
const search = this.state.search;
try{
  const blobData = await  fetch(`http://www.omdbapi.com/?apikey=b2ae1b09&s=${search}`);
  const jsonData = await blobData.json();
  this.setState({movies: jsonData.Search});
  this.setState({totalResults: jsonData.totalResults});
  console.log(this.state.totalResults);

}catch(error){
  console.error(error);
}
}

// HANDLE ADVANCE SEARCH
handleAdvancedSearchEvent= async () =>{

  const {search, type, year} = this.state;
     //console.log([search, type, year]);
  try{
    const blobData = await  fetch(`http://www.omdbapi.com/?apikey=b2ae1b09&s=${search}&type=${type}&y=${year}`);
    const jsonData = await blobData.json();
    console.log('Advance Search', jsonData);
    this.setState({movies: jsonData.Search});
    this.setState({totalResults: jsonData.totalResults});
    //nsole.log(this.state.totalResults);
  }catch(error){
    console.error(error);
  }
  }


// HANDLE PREVIOUS PAGINATION
handlePrevious= async () => {
  const search = this.state.search;
  try{
  if(this.state.pageCount >= 1){
    const nextBlob = await  fetch(`http://www.omdbapi.com/?apikey=b2ae1b09&s=${search}&page=${this.state.pageCount-1}`);
    this.setState({pageCount: this.state.pageCount - 1});
    const nextJson = await nextBlob.json();
    this.setState({movies: nextJson.Search});
    //console.log('Prev counting',this.state.pageCount);
  }
  }catch(error){
    console.error(error);
  }
  }

  // HANDLE NEXT PAGINATION
handleNext = async () => {
  const {search, type, year} = this.state;
try{
  
  const nextBlob = await  fetch(`http://www.omdbapi.com/?apikey=b2ae1b09&s=${search}&page=${this.state.pageCount+1}`);
  this.setState({pageCount: this.state.pageCount + 1});
  const nextJson = await nextBlob.json();
  this.setState({movies: nextJson.Search});
  //console.log('Next counting',this.state.pageCount);

}catch(error){
  console.error(error);
}
}


  render(){
   const{movies, ...remainingItems} = this.state;
   const sortedMovies = movies.slice().sort((a,b)=> a.Year-b.Year);
   const searchedMovies = sortedMovies.filter(movie => 
      movie.Title.toLowerCase().includes(remainingItems.search.toLowerCase())
   );
    return (
     <div className="container-fluid"> 
     <Header/>
        <div className='mid-section' style={{display:'flex', justifyContent:'space-evenly', flexDirection:'row'}}>
          <div style={{width: '70%'}}>
            <Carousel/> 
          </div>
          <div style={{width: '30%'}}>
            <NewsPanel/>   
          </div> 
        </div>
        <div>
          <Nav
            handleSearchTxt={this.handleSearchTxt}
            handleSearchEvent={this.handleSearchEvent}
            handleAdvancedSearchEvent={this.handleAdvancedSearchEvent}
            handleTypeTxt={this.handleTypeTxt} 
            handleYearTxt={this.handleYearTxt}
            {...remainingItems}
          />
        <div>
          <MovieCard movies={searchedMovies}/>
        </div>
        <div style={{paddingTop:'10px'}}>
           <div style={{display:`${this.state.type.length > 0 || this.state.year.length > 0 || searchedMovies.length == 0 ? 'none': ''}`}}>
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center" style={{alignItems:'center'}}>
                  <li  className={`page-item${this.state.pageCount <= 1 ? ' disabled': ''}`}>
                    <a  className="page-link" onClick={this.handlePrevious} tabindex="-1" aria-disabled="true">Previous</a>
                  </li>
                  <li class="page-item">
                    <a className={`page-link${this.state.pageCount <= Math.round(this.state.totalResults/10) ? ' disabled': ''}`} onClick={this.handleNext}>Next</a>
                  </li>
                </ul>
              </nav>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  
    );
  }
}
export default HomePage;


///// removed ////
 {/* <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className={`page-item${this.state.pageCount <= 1 ? ' disabled': ''}`}>
                  <a className="page-link" onClick={this.handlePrevious}>Previous</a>
                </li>
                                    <li className="page-item" style={{background:'white'}} onClick={() =>this.handlePagination(1)}>1</li>
                  <li className="page-item" onClick={() =>this.handlePagination(2)}>2</li>
                  <li className="page-item" onClick={() =>this.handlePagination(3)}>3</li>
                <li>
                  <a className={`page-link${this.state.pageCount <= Math.round(this.state.totalResults/10) ? ' disabled': ''}`} onClick={this.handleNext}>Next</a>
                </li>
              </ul>
            </nav>
          */}

            // HANDLE PAGINATION 1 2 3
// handlePagination = async (param) => {
//   this.setState({pageCount:param});
//   const search = this.state.search;
//   const blobData = await  fetch(`http://www.omdbapi.com/?apikey=b2ae1b09&s=${search}&page=${param}`);
//   const jsonData = await blobData.json();

//   this.setState({movies: jsonData.Search});
// }
