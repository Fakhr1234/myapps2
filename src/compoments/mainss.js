// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addComment, removeComment } from '../features/commentsSlice';

// function Main() {
//   const comments = useSelector((state) => state.comments);
//   const dispatch = useDispatch();

//   const handleAddComment = () => {
//     dispatch(addComment({
//       id: Date.now(),
//       text: "This is a new comment",
//       user: "Guest"
//     }));
//   };

//   const handleRemoveComment = (id) => {
//     dispatch(removeComment(id));
//   };

//   return (
//     <div>
//       <h2>Comments</h2>
//       <button onClick={handleAddComment}>Add Comment</button>
//       <ul>
//         {comments.map((comment) => (
//           <li key={comment.id}>
//             {comment.user}: {comment.text}
//             <button onClick={() => handleRemoveComment(comment.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Main;
