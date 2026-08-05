import { createSlice } from "@reduxjs/toolkit";
import posts from "../data/posts";


const postslice=createSlice({
    name:"posts",
    initialState:posts,
    reducers:{
     increaselikes: (state, action) => {
    const index = state.findIndex(post => post.code === action.payload.id);
    console.log(index);
    if (index === -1) return;
    // إذا كان الفهرس فرديًا، نضرب عدد الإعجابات في 2
    if (index % 2 === 1) {
        state[index].likes = action.payload.likes * 2;
    } else {
        state[index].likes = action.payload.likes + 1;
    }
}
}
})
export const {increaselikes}=postslice.actions
export default postslice.reducer
