export const authen = (state = {authenticated: false, credentials:false}, action)=>{

    switch(action.type){
        case 'login':
            return Object.assign({}, state, {authenticated:true});

        case 'logout':
            return Object.assign({}, state, {authenticated:false});

        case 'getCredentials':
            return Object.assign({}, state, {credentials:true});

        default:
            return state;

    }
};