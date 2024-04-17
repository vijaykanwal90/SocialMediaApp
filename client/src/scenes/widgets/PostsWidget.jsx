import React, { useState } from  'react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import MyPostWidget from './MyPostWidget'
import PostWidget from './PostWidget'
import {Box} from "@mui/material"
import { setPosts } from '../../app/store'
const PostsWidget = ({userId,isProfile =false}) => {
    const dispatch=useDispatch();
    const[loading, setLoading] = useState(true)
    const posts = useSelector((state)=> state.posts);
    const token = useSelector((state)=>state.token)
    
    const getPosts = async()=>{
        try {
            const response = await fetch('http://localhost:5152/posts', {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            // console.log(response)
            // console.log(data)
            dispatch(setPosts({ posts: data }));
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
}
    const getUserPosts = async()=>{
        const response = await fetch(`http://localhost:5152/posts/${userId}/posts`,{
            method:"GET",
            headers:{Authorization:`Bearer${token}`},
    });
   
        const data= await response.json();
        // console.log(data.firstName)
        dispatch(setPosts({posts:data}));
    }
    useEffect(()=>{
        if(isProfile){
            getUserPosts();
        }
        else {
            getPosts();
        }

    },[]); 
  return (
   <>
   {/* { posts ?( posts.map(
    ({
    _id,
    userId,
    firstName,
    lastName,
    description,
    location,
    picturePath,
    likes,
    userPicturePath,
    comments
   }) => (
    <PostsWidget
    key={_id}
    postId={_id}
    postUserId={userId}
   name={`${firstName } ${lastName}`}
    description={description}
    location={location}
    picturePath={picturePath}
    likes={likes}
    userPicturePath={userPicturePath}
    comments={comments}
    />

)
   
   )

   ):(
<div>Loading...</div>
   )} 
    */}

{/* 
          {posts.map(({ _id, userId, firstName, lastName, description, location, picturePath, likes, userPicturePath, comments }) => (
                <PostWidget
                    key={_id}
                    postId={_id}
                    postUserId={userId}
                    name={`${firstName} ${lastName}`}
                    description={description}
                    location={location}
                    picturePath={picturePath}
                    likes={likes}
                    userPicturePath={userPicturePath}
                    comments={comments}
                />
            ))
        } */}
              {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}

   </>
  );
};

export default PostsWidget