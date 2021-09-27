import axios from "axios";
import {setResponseTime} from "../utils/addResponseTime.js"
import { setResponse } from "../utils/addResponse.js";

const getLiveDeliveries = async (url,api_key) => {
    

        var start = Date.now(); // Start rime req

        try {
            var config = {
                url: url,
                method: 'get',
                headers: {
                    'key': api_key,
                }
            }

            var res = await axios(config);
            setResponse(res.data);     
            
            var millis = Date.now() - start; // End time req
            setResponseTime(millis);

        }catch(err){
            console.error(err);
        }
    

    
    
};

export { getLiveDeliveries }