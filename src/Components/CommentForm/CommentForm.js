import React from 'react';
import {useForm} from "react-hook-form";
import {commentsService} from "../../Services/comments.service";

function CommentForm({setComments}) {
    const {register, handleSubmit, formState: {isValid}} = useForm()

    const save = async (comment) => {
        const {data} = await commentsService.createComment(comment)
        setComments(prev => [data, ...prev])
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type={"text"} placeholder={'name'} {...register('name',{  required: true})}/>
            <input type={"text"} placeholder={'email'} {...register('email',{  required: true})}/>
            <input type={"text"} placeholder={'postId'} {...register('postId',{  required: true})}/>
            <input type={"text"} placeholder={'body'} {...register('body',{  required: true})}/>
            <button disabled={!isValid}>Create</button>

        </form>
    );
}

export default CommentForm;