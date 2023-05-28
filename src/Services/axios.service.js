import {baseURL, baseURLJsonPlaceholder} from "../Configs/urls";
import axios from "axios";


const axiosService = axios.create({baseURL})
const axiosServicePH = axios.create({baseURL:baseURLJsonPlaceholder})

export {axiosService,axiosServicePH}