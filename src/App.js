import React, {Component} from 'react';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Carousel from './components/carousel/carousel.component';
import {MovieCard} from './components/movie-card/movie-card.component';
import {Search} from './components/search/search.component';
import {Pagination} from './components/pagination/pagination.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      movies:[],
      search: '',
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

handleChange=(e)=>{
  this.setState({search:e.target.value})
}

handleClick= async () =>{
const search = this.state.search;
try{
  const blobData = await  fetch(`http://www.omdbapi.com/?apikey=b2ae1b09&s=${search}`);
  const jsonData = await blobData.json();
  this.setState({movies: jsonData.Search});
  //console.log(this.state.movies);

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

handleNext = async () => {
  const search = this.state.search;
  console.log(this.state.pageCount);
 this.setState({pageCount: this.state.pageCount + 1});
 console.log(this.state.pageCount);
 const nextBlob = await  fetch(`http://www.omdbapi.com/?apikey=b2ae1b09&s=${search}&page=${this.state.pageCount}`);
 const nextJson = await nextBlob.json();
 console.log(nextJson);
 this.setState({movies: nextJson.Search});
}





  render(){
   const{movies, search} = this.state;
   const sortedMovies = movies.slice().sort((a,b)=> a.Year-b.Year);
   const searchedMovies = sortedMovies.filter(movie => 
    movie.Title.toLowerCase().includes(search.toLowerCase())  
    );
    return (
     <div> 
      <Header/>
      <Carousel/>
      <Search placeholder='search movies' value={this.state.search} handleChange={this.handleChange}/>
      <button type="button" className="btn btn-primary" onClick={this.handleClick}>Go !</button>
        <MovieCard movies={searchedMovies}/>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
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
