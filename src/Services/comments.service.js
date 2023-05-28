import {axiosServicePH} from "./axios.service";
import {urls} from "../Configs/urls";

const commentsService = {
    getAllComments:()=> axiosServicePH.get(urls.comments),
    createComment:(comment)=>axiosServicePH.post(urls.comments,comment)
}

export {commentsService}