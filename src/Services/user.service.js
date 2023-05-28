import {axiosServicePH} from "./axios.service";
import {urls} from "../Configs/urls";

const userService = {
    getAllUsers:()=> axiosServicePH.get(urls.users),
    createNewUser:(user)=> axiosServicePH.post(urls.users,user)
}

export {userService}