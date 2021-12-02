import React,{ Component } from 'react';
// const axios = require('axios');
import axios from 'axios';
export default class blog extends Component{

    state= {
        posts:[],
    }
    componentDidMount(){
// let thisvar = this; if you using function keyword
//    alert('hello alert'); 
// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => { // handle success
    // console.log(response);
    // thisvar.setState({posts:response.data})
    this.setState({posts:response.data})
  })
  .catch(function (error) {     // handle error
    console.log(error);
  })
}
    render(){
        const posts = this.state.posts;
        const allposts = posts.map((post,idx) =>{
            return(
                <div>
                    <a href="" key={idx}>{post.title}</a> <br></br>
                <p>{post.body}</p>
                </div>
            )
        })
        return (
            <div>
                <h1>
                    This is blog page
                </h1>
     <div class="media">

  <div class="media-body text-center">
  {allposts}
  </div>

</div>
            </div>
        )
    }
}