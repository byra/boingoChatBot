export const status = (state = {}, action)=>{

    switch(action.type){
        case 'open':
            return Object.assign({}, state, {gate:true, formStatus:false});

        case 'close':
            return Object.assign({}, state, {gate:false});

        case 'login':
            return Object.assign({}, state, {authenticated:true});

        case 'logout':
            return Object.assign({}, state, {authenticated:false});

        case 'getCredentials':
            return Object.assign({}, state, {credentials:true, formStatus:true, gate:false});

        case "closeLogin":
            return Object.assign({}, state, {credentials:false, formStatus:false, gate:false});

        default:
            return state;
    }
};