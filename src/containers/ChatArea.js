import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import {chnageStatusToClose} from "../actions/status";
import {status} from "../reducers/status";

class ChatArea extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="chat-container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="chat-header">
                            <div className="d-flex justify-content-between">
                                <p className="h6">
                                    TSA
                                </p>
                                <img className="figure-img img-fluid rounded chat-container__img" onClick={()=>this.props.statusUpdateToClose()} src={"./src/assets/images/closeIcon.svg"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="chat-body">

                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="chat-footer">
                            <div className="d-flex justify-content-between">
                                <div className="input-group input-group-lg">
                                    <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) =>{
    return{
        //No states needed to be mapped to props
    };
};

const mapDispatchToprops = (dispatch) =>{
    return{
        statusUpdateToClose : () => dispatch(chnageStatusToClose())
    }
};

export default connect(mapStateToProps, mapDispatchToprops)(ChatArea);