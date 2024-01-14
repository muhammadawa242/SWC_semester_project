import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    awsPath: "https://ams-hub-bucket.s3.ap-south-1.amazonaws.com/",
    user: null,
    token: null,
    posts: [],
    stories: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setUser: (state, action) => {
            state.user = action.payload.user;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post._id) return action.payload.post;
                return post;
            });
            state.posts = updatedPosts;
        },
        setStories: (state, action) => {
            state.stories = action.payload.stories;
        },
    }
});

export default authSlice.reducer;
export const {setLogin, setLogout, setPosts, setPost, setStories, setUser} = authSlice.actions;