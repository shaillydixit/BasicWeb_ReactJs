import React,{ Component } from 'react';
import axios from 'axios';
export default class post extends Component{
    state = {
        title: '',
        body: ''
    }
    formSubmit = (e) => {
        e.preventDefault();
        axios.post('/writepost', { //where it will be redirected
            title: this.state.title,
            body: this.state.body
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
render(){
return(
    <center>
<div>
    <div class="jumbotron col-lg-4">
        <form onSubmit={this.formSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" class="form-control" id="title" name="title"
                 required onChange={(e)=>{this.setState({title:e.target.value})}}/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1" >Details</label>
                <textarea class="form-control" name="body" cols="30" rows="10"
                onChange={(e)=>{this.setState({body:e.target.value})}}>Write Here</textarea>
            </div>
            <button type="submit" class="btn btn-primary">Publish</button>
        </form>
    </div>
</div>
</center>
)
}
}