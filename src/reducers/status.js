export const status = (state = {gate: false}, action)=>{

    switch(action.type){
        case 'open':
            return Object.assign({}, state, {gate:true});

        case 'close':
            return Object.assign({}, state, {gate:false});

        default:
            return state;
    }
};