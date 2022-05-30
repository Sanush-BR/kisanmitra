import axios from "axios";

const apiEndPoint = "http://localhost:5500/api/users";

export function register(user){
    return axios.post(apiEndPoint,{
        email: user.email,
        password:user.password,
        name:user.name
    });
}