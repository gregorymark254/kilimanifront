import axios from 'axios';

export default axios.create({
    baseURL: "https://kilimaniserver-production.up.railway.app/"
});