import axios from "axios";
import {setResponseTime} from "../utils/addResponseTime.js"
import { setResponse } from "../utils/addResponse.js";

const getLiveDeliveryInfo = (url,id,api_key,counter) => {
    objects.map( async (i) => {

        var start = Date.now(); // Start rime req

        try {
            var config = {
                url: `${url}${id}`,
                method: 'get',
                headers: {
                    'key': api_key,
                }
            }

            var res = await axios(config);
            setResponse(res.data);
            console.log('data' + JSON.stringify(res.data));        
            
            var millis = Date.now() - start; // End time req
            setResponseTime(millis);
            console.log('response ' + JSON.stringify(millis));

           

        }catch(err){
            console.error(err);
        }
    });

    
    
};

export { getLiveDeliveryInfo }