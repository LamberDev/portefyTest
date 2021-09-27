
import axios from "axios";
import {setResponseTime} from "../utils/addResponseTime.js"
import { setResponse } from "../utils/addResponse.js";

/**
 * Puedes hoy hacer un script al endpoint get_direct_delivery_price?
 Para este endpoint lo idoneo sería hacer un script probando 10 pares de direcciones distintas y repitiendolas en bucle unas cuentas veces
    Ejemplo:
        Lanzas 10
        wait 1 segundo
        Lanzar 10
        Wait 1 segundo
        Lanzar 10

Y así ejecutando hasta que pete el server o como mucho 5 minutos
Ya que a este endpoint se le va a dar mucha caña
Y también si puedes hacer un informe de más o menos  la latencia media de la peticiones sería ya lo máximo

 */
const getDirectDeliveryPrice = (url,objects,api_key,counter) => {
    objects.map( async (i) => {

        var start = Date.now(); // Start rime req

        try {
            var config = {
                url: url,
                method: 'get',
                data: {
                    "pick_up_address" : i.pick_up_address,
                    "delivery_address": i.delivery_address,
                    "vehicle_id": i.vehicle_id
                },
                headers: {
                    'key': api_key,
                    'Content-type' : 'application/json'
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

export { getDirectDeliveryPrice }