import React from 'react';

function Character({item}) {

    return (
        <div>
            <h3>{item.name}</h3>
            <img src={item.img} alt={item.name}/>
            <p>
                <b>{item.info}</b></p>
        </div>
    );
}

export default Character;