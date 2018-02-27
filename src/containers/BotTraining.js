import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import closeLogo from "../assets/images/closeIcon.svg";
import {statusUpdateToLoginClose} from "../actions/authen";


class BotTraining extends Component {

 
    constructor(props) {
        super(props);
         this.state = {email:"", password:"", items: [1] name: '', shareholders: [{ name: '' }]}
    };

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        if (this.props.isformBOTStatus) {

            return (
                <div className="sidenavdiv-container ">
                    <div className="row justify-content-start">
                        <div className="col-8">
                            <div className="sidenavdiv-header">
                                <div className="d-flex justify-content-between">
                                    <p className="h6">
                                        BOT Action Training
                                    </p>
                                    <img className="figure-img img-fluid rounded sidenavdiv-header__img cursor"
                                         onClick={() => this.props.statusUpdateToLoginClose()} src={closeLogo}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col-8">
                            <div className="sidenavdiv-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group px-3 pt-3">
                                        <label htmlFor="exampleInputEmail1">Intent</label>
                                        <input type="text" className="popuptextalighfull form-control form-control-lg form-padding"
                                               id="exampleInputEmail1" aria-describedby="emailHelp"
                                               placeholder="Enter Intent" required
                                               ref={email =>
                                               {
                                                   this.state.email = email
                                               }
                                               }
                                        />
                                       
                                    </div>
                                    
                                    <div className=" px-3">
                                        <label htmlFor="exampleInputPassword1">Intent Followup</label>
                                        <input type="text" className="form-control form-control-lg form-padding poptextbox"
                                               id="exampleInputPassword1" placeholder="Intent Followup" required
                                               ref={password =>
                                               {
                                                   this.state.password = password
                                               }
                                               }
                                        />
                                    
                                        <label htmlFor="exampleInputPassword1"className={"popuptextalighlabel"}>Intent Followup Response</label>
                                        <input type="text" className="popuptextalightextbox form-control form-control-lg form-padding poptextbox"
                                               id="exampleInputPassword1" placeholder="Intent Followup Response" required
                                               ref={password =>
                                               {
                                                   this.state.password = password
                                               }
                                               }
                                        />
                                    </div>
                                                                        
                                    <div className="d-flex justify-content-between px-5 pb-3">
                                        <button type="submit" className="p-2 btn btn-info mr-1" onClick={this.addItemHandler}>ADD More</button>
                                        <button type="reset" className="p-2 btn btn-info">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        else {
            return (
                null
            );
        }
    }
}



const mapStateToProps = (state) => {
    return {
        isformBOTStatus: state.status.formBotStatus,
       /* authenticated: state.status.authenticated*/

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        statusUpdateToLoginClose: ()=>dispatch(statusUpdateToLoginClose())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BotTraining);
