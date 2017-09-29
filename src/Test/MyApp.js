import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time
class MyApp extends Component{
  render(){
    const now = 60;
    return (
      <div>
       <ProgressBar now={now} label={`${now}%`} />
    <ProgressBar striped bsStyle="success" now={40} label={'40%'} />
    <ProgressBar striped bsStyle="info" now={20} />
    <ProgressBar striped bsStyle="warning" now={60} />
    <ProgressBar striped bsStyle="danger" now={80} />
  </div>
    );

  }

}

  
  export default MyApp