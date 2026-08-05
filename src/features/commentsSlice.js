import { createSlice } from "@reduxjs/toolkit";
import comments from "../data/comments"; // حرف صغير
import reducer from "./postfilce";

const initialComments = Object.entries(comments)
  .flatMap(([postId, commentList]) =>
    Array.isArray(commentList)
      ? commentList.map((comment, index) => ({
          id: `${postId}_${index}`,
          text: comment.text,
          user: comment.user
        }))
      : []
  );

const CommentsSlice = createSlice({
  name: "comments",
  initialState: initialComments,
  reducers: {
 addComment: (state, action) => {
  const { postId, author, comment } = action.payload;
  state.push({
    id: `${postId}_${Date.now()}`, // ⚡ أفضل! (أو استخدام uuid/v4)
    text: comment,
    user: author
  });
},
removecomment:(state,action)=>{
  const {id}=action.payload
  return state.filter(comment=>comment.id!==id)
}
  }
});

export const { addComment , removecomment} = CommentsSlice.actions;
export default CommentsSlice.reducer;









// const initialComments = Object.entries(rawComments)
//   .flatMap(([postId, comments]) =>
//     comments.map((comment, index) => ({
//       id: `${postId}_${index}`, // ← مفتاح فريد
//       text: comment.text,
//       user: comment.user
//     }))
//   );


// const commentsSlice = createSlice({
//   name: 'comments',
//   initialState: initialComments,  // الآن مصفوفة
//   reducers: {
//     addComment: (state, action) => {
//       state.push(action.payload);
//     },
//     removeComment: (state, action) => {
//       // action.payload يفترض أن يكون الـ id
//       return state.filter(comment => comment.id !== action.payload);
//     }
//   }
// });

// export const { addComment, removeComment } = commentsSlice.actions;
// export default commentsSlice.reducer;