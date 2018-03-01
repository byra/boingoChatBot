export const status = (state = {}, action)=>{

    switch(action.type){
        case 'open':
            return Object.assign({}, state, {gate:true, formStatus:false});

        case 'close':
            return Object.assign({}, state, {gate:false});

        case 'login':
            return Object.assign({}, state, {authenticated:true, credentials:false, formStatus:false, gate:false});

        case 'logout':
            return Object.assign({}, state, {authenticated:false});

        case 'getCredentials':
            return Object.assign({}, state, {credentials:true, formStatus:true,formBotStatus:false, gate:false});

        case "closeLogin":
            return Object.assign({}, state, {credentials:false, formStatus:false, gate:false});

        case "botTrainingForm":
            return Object.assign({}, state, {formStatus:true, gate:false, formBotStatus:true, credentials:false});


        default:
            return state;
    }
};