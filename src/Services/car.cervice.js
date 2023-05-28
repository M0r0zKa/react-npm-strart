import {axiosService} from "./axios.service";
import {urls} from "../Configs/urls";


const carService  = {
    getAll:()=>axiosService.get(urls.cars),
    create:(car)=>axiosService.post(urls.cars,car),
    getById:(id)=>axiosService.get(`${urls.cars}/${id}`),
    updateById:(id,car)=>axiosService.put(`${urls.cars}/${id}`, car),
    deleteByID:(id)=>axiosService.delete(`${urls.cars}/${id}`)
}


export {carService,}