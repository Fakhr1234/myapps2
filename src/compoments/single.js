import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PhotoCard from "./PhotoCard";
import Comments from "./Commments";

const Single = () => {
  const { postId  } = useParams();
  const posts = useSelector((state) => state.postsing); // تأكد أن الاسم صحيح في الستور
  const singlePost = posts?.findIndex((post) => post.code === postId );
  const post = posts[singlePost];
   const comments = useSelector((state) =>
    state.comments.filter((comment) => comment.id.startsWith(`${postId}_`))
  );
  

  return (
    <div className="singless-photo">
      <PhotoCard post={post} />
      <Comments comments={comments} postId={postId}/>
    </div>
  );
};

export default Single;