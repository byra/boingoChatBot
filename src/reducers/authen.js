export const authen = (state = {authenticated: false, getCredentials:false}, action)=>{

    switch(action.type){
        case 'login':
            return Object.assign({}, state, {authenticated:true});

        case 'logout':
            return Object.assign({}, state, {authenticated:false});

        case 'getCredentials':
            return Object.assign({}, state, {getCredentials:true});

        default:
            return state;

    }
};