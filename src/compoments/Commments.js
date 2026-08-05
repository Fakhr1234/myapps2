import React , { useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment , removecomment } from "../features/commentsSlice";
export default function Comments({comments,postId}){
    const authorRef=useRef(null)
    const commentRef=useRef(null)
    const dispatch = useDispatch();

  
 
    const handleAddComment=(e)=>{
        e.preventDefault()
        const author=authorRef.current.value
        const comment=commentRef.current.value

        dispatch(addComment({postId,author,comment}))

        authorRef.current.value=""
        commentRef.current.value=""
    }
    const handleremoveComment=(id)=>{
        dispatch(removecomment({id}))
    }
    const rendercompnent=(comment)=>{
        return (
            <div className="comments">
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={()=>handleremoveComment(comment.id)}>&times;</button>
                </p>
            </div>
        )
    }
    return (
        <div className="comment">
        {comments.map(rendercompnent)}
        <form className="comment-form" onSubmit={handleAddComment}>
            <input type="text" placeholder="author" ref={authorRef}></input>
            <input type="text" placeholder="comment" ref={commentRef}></input>
              <button type="submit">اضف عميل</button> 
        </form>
        </div>
    )
}