import fetch from "cross-fetch";

export const changeStatusToLogin = () => {
    return {
        type: "login"
    };
};

export const changeStatusToLogout = () => {
    return {
        type: "logout"
    };
};


export const getCredentials = () => {
    return {
        type: "getCredentials"
    };
};

export const statusUpdateToLoginClose = () => {
    return {
        type: "closeLogin"
    };
};

export const statusUpdateToCloseForm = () => {
    return {
        type: "closeForm"
    };
};

export const verifyCredentials = (id, code) => {
    return dispatch => {
        fetch('http://54.213.230.201:3030/login?email='+ id + '&password=' + code)
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

const receivedData = (response) => {
    if(response.login){
        return {
            type:"login"
        };
    }
    else{
        return{
            type:"closeLogin"
        };
    }
};
export const botTrainingForm = () =>{
    return{
        type:"botTrainingForm"
    };
};

export const addIntentTextbox = (idx) =>{
    return{
        type:"addIntentTextbox",
        idx:idx,
        followup_Content:{
            idx:idx,
            handleFollowIntent:'',
            handleFollowResponseIntent:''
        }  
    };
};

export const removeIntentTextbox = (idx) =>{
    return{
        type:"removeIntentTextbox",
        idx:idx        
    };
};

export const handleFollowupChange = (idx, handleFollowupIntentChange, handleFollowupResponseIntentChange) =>{
    return{
        type:"handleFollowupChange",
        idx:idx,
        followup_Content:{
            idx:idx,
            handleFollowIntent:handleFollowupIntentChange,
            handleFollowResponseIntent:handleFollowupResponseIntentChange
        }  
    };
};

/*export const handleFollowupResponseIntentChange = (idx, handleFollowupResponseIntentChange) =>{
    return{
        type:"handleFollowupResponseIntentChange",
        idx:idx,
        followup_content{
            handleFollowResponseIntent:handleFollowupResponseIntentChange
        }        
    };
};
*/


export const formClose = () =>{
    return{
        type:"formClose"
    }
};