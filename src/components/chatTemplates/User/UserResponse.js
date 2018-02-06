import React from "react";
import {Component} from "react";

class UserResponse extends Component{
    constructor(props){
        super(props);
    };

    render(){
      return(
          <div className="d-flex justify-content-end">
              <p className="h5">{this.props.userResponse}</p>
          </div>
      );
    };
}

export default UserResponse;
