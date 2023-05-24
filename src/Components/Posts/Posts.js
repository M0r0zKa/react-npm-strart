import React from 'react';
import {useEffect, useState} from "react";
import Post from "../Post/Post";

function Posts({postDetailsFx}) {
    const [posts, setPosts]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(users=>users.json())
            .then(value => setPosts(value))
    },[])

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post} postDetailsFx={postDetailsFx}/>)
            }
        </div>
    );
}

export default Posts;