import React, {Component} from 'react';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Carousel from './components/carousel/carousel.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
   
  }



  render(){
   
    return (
     <div> 
      <Header/>
      <Carousel/>
      <Footer/>
    </div>
  
    );
  }
}
export default App;
