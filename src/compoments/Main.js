

import React from "react";
import { Outlet } from "react-router-dom";
import {  increaselikes } from '../features/postfilce';
import { useDispatch , useSelector} from 'react-redux';
const Main = () => {
     const posts=useSelector((state)=>state.postsing)
     const comments=useSelector((state)=>state.comments)
     const dispatch=useDispatch()
     const handleshow=(id,likes)=>{
        dispatch(increaselikes(
            {
                id,
                likes
            }
        ))
     }
  return (
    <div>
      <h2>Home</h2>
      <h1>the home is charhter what name of user</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.code}>
            <h3>{post.caption}</h3>
            <p>{post.likes}</p>
              <button onClick={()=>handleshow(post.code,post.likes)}>show</button>
          </li>
        ))}
      </ul>
      <ul>
        {comments.map((comment) => (
          <li>
            {comment.user}: {comment.text}
          </li>
        ))}
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;