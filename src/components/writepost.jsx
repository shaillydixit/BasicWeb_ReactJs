import React,{ Component } from 'react';

export default class post extends Component{
render(){
return(
    <center>
<div>
    <div class="jumbotron col-lg-4">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" class="form-control" id="title" name="title" required />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1" >Details</label>
                <textarea class="form-control" name="body" cols="30" rows="10">Write Here</textarea>
            </div>
            <button type="submit" class="btn btn-primary">Publish</button>
        </form>
    </div>
</div>
</center>
)
}
}