import axios from "axios";
import { urls } from "../endpoints/endpoints.js";
import { API_KEY_1 } from "../costants/costants.js"; 
import { getDeliveryDrafts } from "./getDeliveryDrafts.js";



const testCreateDraft = (url, object, iterable) => {

    let drafts_ids = [];

    iterable.map( async (i) => {  
        
        object.draft_alias = `Dispatching from script ${i}`;

        try {
            let res = await axios.post(url, object, {
                headers: {
                    'Content-type' : 'application/json',
                    'key': API_KEY_1
                }
            });
    
                drafts_ids.push(res.data.draft_id);
        }catch (err){
            console.log(err);
        }

        if (drafts_ids.length === iterable.length) {
            testDispatchDraft(urls.dispatch_delivery_draft,drafts_ids);
        }
    });
}

const testDispatchDraft = async(url, iterable) => {
    iterable.map( async (id) => {
        try {
            var config = {
                url: `${url}${id}`,
                method: 'post',
                headers: {
                    'key': API_KEY
                }
            }
    
            let res = await axios(config);
    
            console.log(JSON.stringify(res.data));

        }catch(err){
            console.error(err);
        }
    });

    // let lenght = getDeliveryDrafts();
    // console.log(lenght);

};

export { testCreateDraft };