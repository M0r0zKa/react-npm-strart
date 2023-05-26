import {baseURL} from "../Configs/urls";
import axios from "axios";


const axiosService = axios.create({baseURL})

export {axiosService}