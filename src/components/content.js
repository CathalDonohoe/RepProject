import React from 'react';
import '../App.css';

class Content extends React.Component {



  render() {
    return (
      <div className="App">
        <h1>Welcome to the magnificint collection of TV Shows</h1>
        <img src="https://miro.medium.com/max/3016/1*dBJMknulIZSAC36tTmanVA.jpeg" alt="Flowers in Chania"></img> 
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Content;