import axios from "axios";


const instance = axios.create({

    baseURL:'http://'+ process.env.REACT_APP_BACKEND_URL + '/api',
    headers:{
        'Access-Control-Allow-Origin' : '*',

    }
})

export default instance
