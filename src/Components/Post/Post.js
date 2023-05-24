import React from 'react';

function Post({post,postDetailsFx}) {
    return (
        <div>
            ID - {post.id} {post.title}
            <p><button onClick={()=>postDetailsFx(post)}>Details</button> </p>
        <br/>
        </div>
    );
}

export default Post;