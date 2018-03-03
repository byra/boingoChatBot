
export const status = (state = {}, action)=>{

    switch(action.type){
        case 'open':
            return Object.assign({}, state, {gate:true, formStatus:false});

        case 'close':
            return Object.assign({}, state, {gate:false});

        case 'login':
            return Object.assign({}, state, {authenticated:true, credentials:false, formStatus:false, gate:false});

        case 'logout':
            return Object.assign({}, state, {authenticated:false,formStatus:false});

        case 'getCredentials':
            return Object.assign({}, state, {credentials:true, formStatus:true,formBotStatus:false, gate:false});

        case "closeLogin":
            return Object.assign({}, state, {credentials:false, formStatus:false, gate:false});

        case "botTrainingForm":
            return Object.assign({}, state, {formStatus:true, gate:false, formBotStatus:true, credentials:false});

        case "formClose":
            return Object.assign({}, state, {formStatus:false});
            
        case "addIntentTextbox":
            let temp = Object.assign({}, state);
            if(!temp.indentTrain){
                temp.indentTrain = [];
            }
            let indent = {idx:action.idx, followup_content:action.followup_content};
            temp.indentTrain.push(indent);
            return temp;

        case "removeIntentTextbox":
            const index = state.indentTrain.findIndex(i => i.idx === action.idx)
            let temp2 = Object.assign({}, state)
            temp2.indentTrain = temp2.indentTrain.slice(0, index) + temp2.indentTrain.slice(index+1)
            return temp2;

        default:
            return state;
    }
};




export const status_append = (state = [], action)=>{
    switch(action.type){   

        case "closeForm":
            return [ ]
    
        case "addIntentTextbox1":           
            return [
                ...state,
                    {
                        idx:action.idx,
                        followup_content:action.followup_content                        
                    }
            ];

        case "removeIntentTextbox1":{           
            const index = state.findIndex(i => i.idx === action.idx)
                return [
                    ...state.slice(0,index),
                    ...state.slice(index+1)                   
                ];
            }


        case "handleFollowupChange":
            //return Object.assign({}, state, {idx:[...state.idx, action.idx], formStatus:true, gate:false, formBotStatus:true, credentials:false});
           /* state.followup_content[action.idx] = {
                ...state.followup_content.action.idx,
                ...action.followup_content
              }
              return {
                ...state
              }*/
          
         
        /*case "handleFollowupResponseIntentChange":{
            //return Object.assign({}, state, {idx:[...state.idx, action.idx], formStatus:true, gate:false, formBotStatus:true, credentials:false});
            state.followup_content[action.idx] = {
                ...state.followup_content[action.idx],
                ...action.followup_content.handleFollowResponseIntent = action.followup_content.handleFollowResponseIntent
            }
            return {
                ...state
            }
         
        }*/


        default:
            return state;
    

    }
};
