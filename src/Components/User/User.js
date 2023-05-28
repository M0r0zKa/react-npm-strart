import React from 'react';

function User({user}) {

    return (
        <div style={{border: '1px solid black', width: '300px', margin:'3px'}}>

            <p><b>ID</b> {user.id}</p>
            <p><b>Name</b> {user.name}</p>
            <p><b>User Name</b> {user.username}</p>
            <p><b>Email</b> {user.email}</p>
        </div>
    );
}

export default User;