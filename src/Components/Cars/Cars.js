import React, {useEffect, useState} from 'react';
import {carService} from "../../Services/car.cervice";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";

function Cars() {

    const [cars, setCars]=useState([])
    const [carForUpdate, setCarForUpdate]=useState(null)


    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[cars])

  const deleteCar = (id)=>{
      carService.deleteByID(id)
  }
    return (
        <div>
            <CarForm carForUpdate={carForUpdate}/>
            <hr/>
            {
                cars.map(value => <Car key={value.id} car={value} deleteCar={deleteCar} setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate}/>)
            }
        </div>
    );
}

export default Cars;