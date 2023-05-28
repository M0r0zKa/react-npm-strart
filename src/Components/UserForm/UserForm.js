import React from 'react';

import {useForm} from "react-hook-form";
import {userService} from "../../Services/user.service";

function UserForm({setUsers}) {
    const {register, handleSubmit,reset,formState:{errors,isValid}}=useForm()

    const save = async (user)=>{
       const {data}= await userService.createNewUser(user)
        setUsers(prev => [...prev, data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)} style={{display:'flex',flexDirection:'column'}}>
            <input type={'text'} placeholder={'name'} {...register('name', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: 'Символы не подходят. От 1 до 20 букв.'
                },
                required: true
            })}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type={'text'} placeholder={'username'} {...register('username')}/>
            <input type={'text'} placeholder={'email'} {...register('email')}/>
            <input type={'text'} placeholder={'phone'} {...register('phone')}/>
            <input type={'text'} placeholder={'website'} {...register('website')}/>
            <button disabled={!isValid}>Create user</button>
        </form>
    );
}

export default UserForm;