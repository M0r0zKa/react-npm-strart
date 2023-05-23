import React from 'react';

function Character({item}) {
    //id,name,status,species,gender,image

    return (
        <div>
            <h3>{item.name}</h3>
            <p> ID - {item.id}</p>
            <img src={item.image} alt={item.name}/>
            <p> Status - {item.status}</p>
            <p> Species - {item.species}</p>
            <p> Gender - {item.gender}</p>
            <br/>
        </div>
    );
}

export default Character;