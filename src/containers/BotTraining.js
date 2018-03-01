import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import closeLogo from "../assets/images/closeIcon.svg";
import {statusUpdateToLoginClose} from "../actions/authen";
import CSSTransition from "react-transition-group/CSSTransition";
import TransitionGroup from "react-transition-group/TransitionGroup";


class BotTraining extends Component {

 
    constructor(props) {
        super(props);
        this.state = {intent:"", intent_followup:"", intent_followup_response:"",questions: ['hello'], textboxes:'', inputs: ['input-0'], shareholders: [{ name: '' }]};
        this.handlefollowresponseChange = this.handlefollowresponseChange.bind(this);
        this.handleIntentChange = this.handleIntentChange.bind(this);
        this.handleIntentfollowChange = this.handleIntentfollowChange.bind(this);
        this.handleSubmitintent = this.handleSubmitintent.bind(this);
        this.handleShareholderNameChange = this.handleShareholderNameChange.bind(this);
        this.handleAddShareholder = this.handleAddShareholder.bind(this);
        this.handleRemoveShareholder = this.handleRemoveShareholder.bind(this);
        this.appendInput = this.appendInput.bind(this);
/*        this.handleText = this.handleText.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.addQuestion = this.addQuestion.bind(this);*/
    };

    handleIntentChange(event) {
        this.setState({intent: event.target.value});
    }

    handleIntentfollowChange(event) {
        this.setState({intent_followup: event.target.value});
    }

    handlefollowresponseChange(event) {
        this.setState({intent_followup_response: event.target.value});
    }

    handleSubmitintent(event){
        event.preventDefault();
        //this.props.verifyCredentials(this.state.email, this.state.password);
    }

   handleShareholderNameChange(event,idx){
      const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
        if (idx !== sidx) return shareholder;
        return {shareholder, name: event.target.value };
      });
      
      this.setState({ shareholders: newShareholders });
    }

    handleAddShareholder(event){
      this.setState({ shareholders: this.state.shareholders.concat([{ name: '' }]) });
    }
    
    handleRemoveShareholder(event,idx){
      this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
    }



  

    appendInput() {
        var newInput = `input-${this.state.inputs.length}`;
        this.setState({ inputs: this.state.inputs.concat([newInput]) });
    }


     /*<div className=" px-3">
                                        <label htmlFor="exampleInputPassword1">Intent Followup</label>
                                        <input type="text" className="form-control form-control-lg form-padding poptextbox"
                                               id="exampleInputPassword1" placeholder="Intent Followup" required
                                              value={this.state.intent_followup} onChange={this.handleIntentfollowChange}
                                        />
                                    
                                        <label htmlFor="exampleInputPassword1"className={"popuptextalighlabel"}>Intent Followup Response</label>
                                        <input type="text" className="popuptextalightextbox form-control form-control-lg form-padding poptextbox"
                                               id="exampleInputPassword1" placeholder="Intent Followup Response" required
                                               value={this.state.intent_followup_response} onChange={this.handlefollowresponseChange}
                                        />
                                    </div>
*/


    render() {
        if (!this.props.authenticated && this.props.isformBOTStatus) {

            const input1 =this.state.inputs.map((label) => <label  key={label}>Intent Followup</label>);
            const input2 =this.state.inputs.map((input) => <input key={input} type="text" className="form-control form-control-lg form-padding poptextbox"
                                                placeholder="Intent Followup" required
                                              value={this.state.intent_followup} onChange={this.handleIntentfollowChange}
                                        />,<br/>);
            const label1 =this.state.inputs.map((label1) => <label  key={label1} className={"popuptextalighlabel"}>Intent Followup Response</label>);
            const label2 =this.state.inputs.map((input1) => <input  key={input1} type="text" className="popuptextalightextbox form-control form-control-lg form-padding poptextbox"
                                                placeholder="Intent Followup Response" required
                                               value={this.state.intent_followup_response} onChange={this.handlefollowresponseChange}
                                        />);
            const delete1 =this.state.inputs.map((input) => <img  className="figure-img img-fluid rounded sidenavdiv-header__img cursor"
                                         onClick={() => this.props.statusUpdateToLoginClose1()} src={closeLogo}/>);

           
            const textbox_append= this.state.shareholders.map((shareholder, idx) => (
                                      <div className="shareholder"><input key={idx} type="text" placeholder={`Shareholder #${idx + 1} name`} value={shareholder.name}
                                          onChange={this.handleShareholderNameChange(idx)}
                                        />
                                        <button type="button" onClick={this.handleRemoveShareholder(idx)} className="small">-</button>
                                      </div>
                                    ));    


            /*const textbox_append = "hi";    */

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
                                <form onSubmit={this.handleSubmitintent}>
                                    <div className="form-group px-3 pt-3">
                                        <label htmlFor="exampleInputEmail1">Intent</label>
                                        <input type="text" className="popuptextalighfull form-control form-control-lg form-padding"
                                               id="exampleInputEmail1" aria-describedby="emailHelp"
                                               placeholder="Enter Intent" required
                                              value={this.state.intent} onChange={this.handleIntentChange}
                                        />
                                       
                                    </div>


                                    <div>
                                    {input2}
                                    </div>


                                    


                                    <div className="d-flex justify-content-between px-5 pb-3">
                                        <button type="button" className="p-2 btn btn-info mr-1" onClick={this.handleAddShareholder}>ADD More</button>
                                        <button type="submit" className="p-2 btn btn-info">Save</button>
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



                             /*      <div className="textbotallign">
                                   {input1}
                                   {input2}
                                   </div> 
                                   <div className="textbotallign">
                                   {label1}
                                   {label2}
                                   </div>  

*/

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
