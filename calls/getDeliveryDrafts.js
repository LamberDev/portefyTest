import { urls } from "../endpoints/endpoints.js";
import { API_KEY_1 } from "../costants/costants.js";
import axios from "axios";

const getDeliveryDrafts = async () => {

    try {
        let res = await axios.get(urls.get_delivery_drafts,{
            headers: {
                'key' : API_KEY_1
            }
        });

        return res.data.drafts.lenght;
    }catch(err){
        console.log(err);
    }
        
}

export { getDeliveryDrafts };