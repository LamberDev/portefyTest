
var responseTime;

const setResponseTime = (time) => {
    responseTime = time;
    return responseTime;
};

const getResponseTime = () => {
    return responseTime;
};


export {getResponseTime, setResponseTime};