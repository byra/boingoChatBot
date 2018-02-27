export const changeStatusToLogin = () =>{
    return{
        type:"login"
    };
};

export const changeStatusToLogout = () =>{
    return{
        type:"logout"
    };
};


export const getCredentials = () =>{
    return{
      type:"getCredentials"
    };
};

export const statusUpdateToLoginClose = () =>{
    return{
        type:"closeLogin"
    };
};

export const botTrainingForm = () =>{
    return{
        type:"botTrainingForm"
    };
};
