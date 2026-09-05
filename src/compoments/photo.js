import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PhotoCard from "./PhotoCard";
import {  increaselikes } from '../features/postfilce';
const Photo = () => {
  // جلب البيانات من redux
  const posts = useSelector((state) => state.postsing);

  const comments=useSelector((state)=>state.comments);

  const dispatch = useDispatch();

  
  const handleAddComment = (id,likes) => {
    dispatch(
      increaselikes({
        id,likes
      })
    )
  }
  // تحقق من أن posts مصفوفة
  if (!Array.isArray(posts)) {
    return <div>لا توجد بيانات لعرضها</div>;
  }

  return (
    <div className="photo-grid">
      /* hello the photo component */
      {/* إذا أردت مشاهدة البيانات: */}
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
    {posts.map((post, i) => {
    const postComments = comments.filter(c => c.id.startsWith(post.code + "_"));
    return <PhotoCard key={post.code || i} post={post} commentsCount={postComments.length} incr={()=>handleAddComment(post.code,post.likes)}/>;
})}
<h1>the different between the two components is Redis</h1>
    </div>
  );
};

export default Photo;