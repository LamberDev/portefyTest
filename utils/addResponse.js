var response;

const setResponse = (r) => {
    response = r;
    return response;
};

const getResponses = () => {
    return response;
};


export {setResponse, getResponses};