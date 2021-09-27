import { testCreateDraft } from "./calls/createAndDispatch.js";
import { object } from "./object/objects.js";
import { urls } from "./endpoints/endpoints.js";
import { getDirectDeliveryPrice } from './calls/getDirectDeliveryPrice.js';
import { placeHolder } from "./object/direct_placeholder.js";
import { API_KEY_1, API_KEY_WUCOMERCE } from "./costants/costants.js";
import { getResponseTime } from "./utils/addResponseTime.js";
import { getResponses } from "./utils/addResponse.js";
import { getLiveDeliveries } from "./calls/getLiveDeliveries.js";
import { getLiveDeliveryInfo } from "./calls/getLiveDeliveryInfo.js";

// const iterable = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

// testCreateDraft(urls.create_delivery_draft,object,iterable);



var counter = 0;
const loops = 300;
var responseTime = [];
var responses = [];


    const intervalId = setInterval(() => {

        if (counter < loops ){
            counter ++;
            getLiveDeliveryInfo(urls.get_live_delivery_info,81752263026372370,API_KEY_WUCOMERCE,);
            responseTime.push(getResponseTime());
            responses.push(getResponses());
        }else{
            console.log('Time of Responses' + JSON.stringify(responseTime));
            console.log('Lenght of Time of Responses' + JSON.stringify(responseTime.length));
            console.log('Responses ' + JSON.stringify(responses));
            console.log('Lenght of Responses ' + JSON.stringify(responses.length));

            for(let i of responseTime){
                console.log(i);
            };

            clearInterval(intervalId);
        }
    },1000);
