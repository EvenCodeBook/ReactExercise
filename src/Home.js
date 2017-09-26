import React, { Component } from 'react';
import './Home.css';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={homeStyle:true,activeID:""};
    }
    render(){
        let homeStyle = "App-home-list";
        let homeList = null;
        let homActive = null;
        if(!this.state.homeStyle){
            homeStyle+=" App-home-list-clear";   
        }else{//取得文章List
            homeList = this.getHomeList(homeStyle);
        }
        if(this.state.activeID !== ""){//取得文章Data
           
        }

        return(
            <div className="App-home">
                {homeList}
            </div>
        );

    }
    getHomeList(style){
        let listActive =         
        <div className={style}>
            <div className="App-home-list-active"><h1>Home1</h1></div>
            <div className="App-home-list-active"><h1>Home2</h1></div>
        </div>;        

        return listActive;
    }


}

export default Home;

