import {v4} from "node-uuid";

export const chatMessages = (state = [], action)=>{
    switch(action.type){
        case "start":
            return [
                ...state,
                    {
                        userResponse:null,
                        customRequest:null,
                        reply:["Welcome to Technical support! My name is Tina."],
                        response:"What can I help you with today?",
                        buttons:["Technical Support","Manage Account","Billing Inquiry","Account Cancellation"]
                    }
            ];

        case "technicalSupport":
            return [
                ...state,
                {
                    userResponse:"Technical Support",
                    customRequest:null,
                    reply:["Thank you, I can definitely help you out with Technical Support."],
                    response:"Please describe your issue or question or Select a topic from frequently asked questions which can answer your question",
                    buttons:["Cannot Connect To Wifi","I am connected But Cannot React Internet", "Device Limit Reached", "Frequent Disconnects"]
                }

            ];
        case "cannotConnectToWifi":
            return [
                ...state,
                {
                    userResponse:"Cannot Connect To Wifi",
                    customRequest:null,
                    reply:[
                        "Confirm your Wi-Fi is turned on. This option is usually located in the Settings menu.",
                        "Confirm in your network settings that you are connected to a Boingo Network.",
                        "Make sure your device is set to the correct time zone.",
                        "Switch off your Wi-Fi, move approximately 50 feet and turn your Wi-Fi back on.",
                        "Note: Some partner SSID networks do not support mobile devices.",
                        "Boingo Wi-Finder App Users",
                        "Check that your username and password are stored correctly in the Boingo app.",
                        "If you updated your password online or with a Boingo Customer Care agent, you will need to manually update it within your app settings.",
                        "Indicate your response whether this was helpful or not"
                    ],
                    response:null,
                    buttons:["Helpful","Not Helpful"]
                }
            ];
        case "helpful":
            return [
                ...state,
                {
                    userResponse:"Helpful",
                    customRequest:null,
                    reply:["We are happy to have solved your issue today. For answers to other queries please feel free to click Main Menu and explore\n" +
                    "Have a great day!"],
                    response:null,
                    buttons:["Main Menu"]
                }
            ];
        case "notHelpful":
            return [
                ...state,
                {
                    userResponse:"Not Helpful",
                    customRequest:null,
                    reply:["What is your email address? So that we can reply"],
                    response:null,
                    buttons:[]
                }
            ];
        case "email":
            return [
                ...state,
                {
                    userResponse: null,
                    customRequest:action.payload.tracker.latest_message.text,
                    reply:["Please describe your issue in detail and we will reply within 1 business day."],
                    response:null,
                    buttons:[]
                }
            ];

        case "problemDescription":
            return [
                ...state,
                {
                    userResponse: null,
                    customRequest:action.payload.tracker.latest_message.text,
                    reply:["Thank you.", "Your request has been submitted and your Support Ticket Number is "+ v4(), "For Other Queries Please Click Main Menu Below"],
                    response:null,
                    buttons:["Main Menu"]
                }
            ];
        case "mainMenu":
            return [
                ...state,
                {
                    userResponse:"Main Menu",
                    customRequest:null,
                    reply:["Welcome to Technical support! My name is Tina."],
                    response:"What can I help you with today?",
                    buttons:["Technical Support","Manage Account","Billing Inquiry","Account Cancellation"]
                }
            ];
        case "manageAccount":
            return [
                ...state,
                {
                    userResponse:"Manage Account",
                    customRequest:null,
                    reply:["Thank you, I can definitely help you out with Manage Account."],
                    response:"Please describe your issue or question or Select a topic from frequently asked questions which can answer your question",
                    buttons:["Cannot Connect to Wifi","I am connected But Cannot React Internet", "Device Limit Reached", "Frequent Disconnects"]
                }
            ];

        case "billingInquiry":
            return [
                ...state,
                {
                    userResponse:"Manage Account",
                    customRequest:null,
                    reply:["Thank you, I can definitely help you out with Manage Account."],
                    response:"Please describe your issue or question or Select a topic from frequently asked questions which can answer your question",
                    buttons:["Cannot Connect to Wifi","I am connected But Cannot React Internet", "Device Limit Reached", "Frequent Disconnects"]
                }
            ];
        case "accountCancellation":
            return [
                ...state,
                {
                    userResponse:"Manage Account",
                    customRequest:null,
                    reply:["Thank you, I can definitely help you out with Manage Account."],
                    response:"Please describe your issue or question or Select a topic from frequently asked questions which can answer your question",
                    buttons:["Cannot Connect to Wifi","I am connected But Cannot React Internet", "Device Limit Reached", "Frequent Disconnects"]
                }
            ];

        default:
            return state;
    }
};

