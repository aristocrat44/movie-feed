import React, {Component} from 'react';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Carousel from './components/carousel/carousel.component';
import {MovieCard} from './components/movie-card/movie-card.component';
import {Search} from './components/search/search.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      movies:[],
      search: ''
    }
   
  }

  componentDidMount(){
   this.getApi();
   
    //(response=>response.json(), ()=> console.log(response));
   
   //.then(Search=>this.setState({movies: Search}));
  }

  getApi = async () => {
  
    try{
        const blobData = await  fetch('http://www.omdbapi.com/?apikey=b2ae1b09&s=batman');
        const jsonData = await blobData.json();
        this.setState({movies: jsonData.Search});
        //console.log(this.state.movies);
    
    }catch(error){
        console.error(error);
    }
}

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



  render(){
   const{movies, search} = this.state;
   const searchedMovies = movies.filter(movie => 
    movie.Title.toLowerCase().includes(search.toLowerCase())  
    );
    return (
     <div> 
      <Header/>
      <Carousel/>
      <Search placeholder='search movies' value={this.state.search} handleChange={this.handleChange}/>
      <button type="button" className="btn btn-primary" onClick={this.handleClick}>Go !</button>
        <MovieCard movies={searchedMovies}/>
      <Footer/>
    </div>
  
    );
  }
}
export default App;
