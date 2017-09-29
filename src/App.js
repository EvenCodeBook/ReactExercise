
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ModalGallery from './ModalGallery';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {page:0};

  }
  render(){
  let info = null;
  if(this.state.page === 0) info =<Home />;
  else if(this.state.page === 1) info=<ModalGallery />;
  else if(this.state.page === 2) info="about";

    return(
    <div className="App">
      <header className="App-header">
        <div className="App-title" id="App-menu">menu</div>
        <div className="App-title" id="App-logo">logo</div>
        <div className="App-title" id="App-login">Login</div>
        <div className="App-clearfix"></div>
      </header>
      
      <content className="App-content">
        {info}
      </content>

      <footer className="App-footer">
        <div className="App-icon" onClick={this.updateHome.bind(this)}>Home</div>
        <div className="App-icon" onClick={this.updateSeachr.bind(this)}>Search</div>
        <div className="App-icon" onClick={this.updateAbout.bind(this)}>About</div>
        <div className="App-clearfix"></div>
      </footer>
    </div>
    );
  }
  updateHome(){
    this.setState({page:0});    
  }
  updateSeachr(){
    this.setState({page:1});
  }
  updateAbout(){
    this.setState({page:2});
  }
}

export default App;




//import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React By EvenCodeBook</h2>
//         </div>

//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

//export default App;