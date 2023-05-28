import React from 'react';

function Comment({comment}) {

    const {id, body, email, name, postId} = comment

    return (
        <div style={{border:'1px solid black', margin:'1px', width:'32%', height:'300px'}}>
            <p>ID - {id} Name - {name} PostID-{postId}</p>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
}

export default Comment;