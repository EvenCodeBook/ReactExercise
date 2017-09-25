import React, { Component } from 'react';
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


class App extends Component{
  render(){
    return(
    <div className="App">
      <header id="App-Header">CodeBook</header>
      <menu id="App-Menu"
      
      ></menu>
      <content id="App-Content">

      </content>

      <footer id="App-Footer">Even</footer>
    </div>
    );

  }

}



export default App;
