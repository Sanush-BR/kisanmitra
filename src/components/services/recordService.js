import axios from "axios";

const apiEndPoint = "http://localhost:5500/api";

export function schemes(){
    return axios.get(apiEndPoint+'/schemes');
}

export function loans(){
    return axios.get(apiEndPoint+'/loans');
}

export function types(){
    return axios.get(apiEndPoint+'/types');
}

export function farmers(){
    return axios.get(apiEndPoint+'/farmers');
}