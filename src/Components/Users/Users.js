import React, {useEffect, useState} from 'react';

import {userService} from "../../Services/user.service";
import User from "../User/User";
import UserForm from "../UserForm/UserForm";

function Users() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        userService.getAllUsers().then(value => value.data).then(value => setUsers(value))
    },[])
    return (
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
            <div style={{border:'1px solid black', width:'37%', margin:'3px'}}>
                <UserForm setUsers={setUsers}/>
            </div>

            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', width:'60%'}}>
                {
                    users.map((user)=><User user={user}/>)
                }
            </div>
        </div>

    );
}

export default Users;