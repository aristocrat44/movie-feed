import React, {Component} from 'react';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Carousel from './components/carousel/carousel.component';
import {MovieCard} from './components/movie-card/movie-card.component';

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      movies:[],
      type:'',
      year:'',
      plot:'',
      search: '',
      totalResults: 0,
      pageCount: 1
    }
   
  }

  componentDidMount(){
   //this.getApi();
   
    //(response=>response.json(), ()=> console.log(response));
   
   //.then(Search=>this.setState({movies: Search}));
  }

//   getApi = async () => {
  
//     try{
//         const blobData = await  fetch('http://www.omdbapi.com/?apikey=b2ae1b09&s=batman');
//         const jsonData = await blobData.json();
//         this.setState({movies: jsonData.Search});
//         //console.log(this.state.movies);
    
//     }catch(error){
//         console.error(error);
//     }
// }

handleSearchTxt=(e)=>{
  this.setState({search:e.target.value})
}

handleYearTxt=(e)=>{
  this.setState({year:e.target.value})
}

handleTypeTxt=(e)=>{
  this.setState({type:e.target.value})
}

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

handleAdvancedSearchEvent= async () =>{
  const {search, type, year} = this.state;
      console.log([search, type, year]);
  try{
    const blobData = await  fetch(`http://www.omdbapi.com/?apikey=b2ae1b09&s=${search}&type=${type}&year=${year}`);
    const jsonData = await blobData.json();
    console.log('Advance Search', jsonData);
    this.setState({movies: jsonData.Search});
    this.setState({totalResults: jsonData.totalResults});
    //nsole.log(this.state.totalResults);
  
  }catch(error){
    console.error(error);
  }
  }

handlePagination = async (param) => {
  this.setState({pageCount:param});
  const search = this.state.search;
  const blobData = await  fetch(`http://www.omdbapi.com/?apikey=b2ae1b09&s=${search}&page=${param}`);
  const jsonData = await blobData.json();

  this.setState({movies: jsonData.Search});
}

handlePrevious= async () => {
  const search = this.state.search;
  try{
  if(this.state.pageCount >= 1){
    const nextBlob = await  fetch(`http://www.omdbapi.com/?apikey=b2ae1b09&s=${search}&page=${this.state.pageCount-1}`);
    this.setState({pageCount: this.state.pageCount - 1});
    const nextJson = await nextBlob.json();
    this.setState({movies: nextJson.Search});
    console.log('Prev counting',this.state.pageCount);
  }
  }catch(error){
    console.error(error);
  }
  }

handleNext = async () => {
const search = this.state.search;
try{
if(this.state.pageCount <= Math.round(this.state.totalResults/10)){
  const nextBlob = await  fetch(`http://www.omdbapi.com/?apikey=b2ae1b09&s=${search}&page=${this.state.pageCount+1}`);
  this.setState({pageCount: this.state.pageCount + 1});
  const nextJson = await nextBlob.json();
  this.setState({movies: nextJson.Search});
  console.log('Next counting',this.state.pageCount);
}
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
     <div> 
      <Header 
      handleSearchTxt={this.handleSearchTxt}
      handleSearchEvent={this.handleSearchEvent}
      handleAdvancedSearchEvent={this.handleAdvancedSearchEvent}
      handleTypeTxt={this.handleType} 
      handleYearTxt={this.handleYear}
      handlePlotTxt={this.handlePlot} 
      {...remainingItems}
      />
      {/* <button type="button" className="btn btn-primary" onClick={this.handleSearch}>Go !</button> */}
        <MovieCard movies={searchedMovies}/>
      <Carousel/>
     
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={`page-item${this.state.pageCount <= 1 ? ' disabled': ''}`}>
              <a className="page-link" onClick={this.handlePrevious}>Previous</a>
            </li>
              <li className="page-item page-link" onClick={() =>this.handlePagination(1)}>1</li>
              <li className="page-item page-link" onClick={() =>this.handlePagination(2)}>2</li>
              <li className="page-item page-link" onClick={() =>this.handlePagination(3)}>3</li>
            <li>
              <a className="page-link" onClick={this.handleNext}>Next</a>
            </li>
          </ul>
        </nav>
      <Footer/>
    </div>
  
    );
  }
}
export default App;
