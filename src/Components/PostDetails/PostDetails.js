import React from 'react';

function PostDetails({postDetails}) {
    return (
        <div>
            <p> userId - {postDetails.userId}</p>
            <p> id - {postDetails.id}</p>
            <p> title - {postDetails.title}</p>
            <p> body - {postDetails.body}</p>
        </div>
    );
}

export default PostDetails;