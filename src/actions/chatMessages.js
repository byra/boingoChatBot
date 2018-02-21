import fetch from "cross-fetch";

export const onRequest = (request) =>{
    return dispatch => {
        fetch("http://54.213.230.201:5005/conversations/default/parse?q=" + request)
            .then(res => {
                if (res.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return res.json();
            })
            .then(response => {
                dispatch(receivedData(response));
            })
            .catch(err => {
                console.error(err);
            });

    };
};

const receivedData =(response)=>{
    console.log(response);
    let type="";
    switch(response.tracker.latest_message.intent.name){
        case "emailId":
            type="email";
            break;
        case "technicalProblem":
            type="technicalProblemDescription";
            break;
        case "accountProblem":
            type="accountProblemDescription";
            break;
        case "billingProblem":
            type="billingProblemDescription";
            break;


    }
    return{
        type:type,
        payload:response
    };
};

export const onOpen = () =>{
    return{
        type:"start"
    };
};

export const onTechnicalSupport = () =>{
    return{
        type:"technicalSupport"
    };
};

export const onCannotConnectToWifi = () =>{
    return{
        type:"cannotConnectToWifi"
    };
};

export const onHelpful = () =>{
    return{
        type:"helpful"
    };
};

export const onNotHelpful = () =>{
    return{
        type:"notHelpful"
    };
};



export const onMainMenu = () =>{
    return{
        type:"mainMenu"
    };
};

export const onBillingInquiry = () =>{
    return{
        type:"billingInquiry"
    };
};

export const onAccountCancellation = () =>{
    return{
        type:"accountCancellation"
    };
};