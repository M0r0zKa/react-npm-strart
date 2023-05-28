import React, {useEffect, useState} from 'react';
import {commentsService} from "../../Services/comments.service";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";

function Comments() {

    const [comments, setComments] = useState([])

    useEffect(() => {
        commentsService.getAllComments().then(value => value.data).then(data => setComments(data))
    }, [])


    return (
        <div>
            <div style={{width: "100%"}}>
                <CommentForm setComments={setComments}/>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', width: "100%"}}>
                {
                    comments.map(value => <Comment comment={value}/>)
                }
            </div>

        </div>
    );
}

export default Comments;