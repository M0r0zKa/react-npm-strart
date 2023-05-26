import React from 'react';

function Car({car, deleteCar,setCarForUpdate}) {
    const {id, brand, price, year} = car

    return (
        <div>
            <div>{id}</div>
            <div>{brand}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={()=>{ deleteCar(id)}}>delete
            </button>
            <button onClick={()=>{setCarForUpdate(car)}}>edit
            </button>
            <hr/>
        </div>
    );
}

export default Car;