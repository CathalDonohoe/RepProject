import React from 'react'
import TvShows from './tvshows';
import axios from 'axios'; //imported for axios

class Read extends React.Component{

    state = {
        tvshows: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/tvshows') //the servers url which gets the movies api data . not allowed to work untill install cors in server.js
        .then((response)=> {
            this.setState({tvshows:response.data.tvshows}) //must be .movies as api movies will get u back the movies section of the api
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    
    render(){
        return(
            <div>
                <h1>Hello from Read Component</h1>
                <TvShows myTvShows={this.state.tvshows}></TvShows>
            </div>
        );
    }
}
export default Read;