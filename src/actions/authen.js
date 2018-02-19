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