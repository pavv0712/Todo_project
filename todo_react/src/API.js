import Axios from 'axios';

const API = Axios.create({
    baseURL: "http://127.0.0.1:8000/Todo_project",
    timeout: 3000,
})
export default API;