import React from 'react'
import {Box , Typography,useTheme} from "@mui/material"
import Friend from "../../components/Friend"
import WidgetWrapper from '../../components/WidgetWrapper'
import { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { setFriends } from '../../app/store'
const FriendListWidget = ({userId}) => {
    const {palette} = useTheme();
const dispatch = useDispatch();

const {_id} = useSelector((state)=>state.user);
const token = useSelector((state)=>state.token)
const friends = useSelector((state)=>state.user.friends);
const getFriends = async()=>{
  
    const response= await fetch(`http://localhost:5152/users/${userId}/friends`,{
        method:"GET",
        headers:{Authorization:`Bearer ${token}`},
    });
    console.log(response)
    const data = await response.json();
    dispatch(setFriends({friends:data}));
}
useEffect(()=>{
    getFriends();
},[])
  return (
    <WidgetWrapper>
      <Typography 
      color={palette.neutral.dark}
      variant="h5"
      fontWeight="500"
      sx={{mb:"1.5rem"}}>
        Friend List
      </Typography>
      {friends && friends.length>0 ?(

      
      <Box display="flex "flexDirection="column" gap="1.5rem">
      { friends.map((friend)=>(
    <Friend
    key={friend._id}
    friendId={friend._id}
    name={`${friend.firstName} ${friend.lastName}`}
    subtitle={friend.occupation}
    userPicturePath={friend.picturePath}/>
)

)}
        </Box>
      ):(
        <Typography variant="body2" color="text.secondary">
  No Friends...
  </Typography>
      )
        

    }
    </WidgetWrapper>
  )
}

export default FriendListWidget



