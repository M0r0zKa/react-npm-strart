import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../Services/car.cervice";

function CarForm({carForUpdate}) {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm()

    useEffect(() => {
        if (carForUpdate) {
            console.log(carForUpdate);
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }
    }, [carForUpdate])
    const save = async (car) => {
        await carService.create(car)
    }

    const update = async (car) => {
        console.log(carForUpdate);
        carService.updateById(carForUpdate.id, car)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type={"text"}
                   placeholder={'brand'} {...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: 'Символы не подходят. От 1 до 20 букв.'
                },
                required: true
            })}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type={"text"} placeholder={'price'} {...register('price', {
                valueAsNumber: true,
                min: 0,
                max: 1000000
                ,
                required:true})}/>
            <input type={"text"} placeholder={'year'} {...register('year', {
                valueAsNumber: true,
                min: 1990,
                max: 2023
                ,
                required:true})}/>
            <button disabled={!isValid}>{carForUpdate ? 'Edit' : 'Save'}</button>
        </form>
    );
}

export default CarForm;