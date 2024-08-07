import {PersonAddOutlined,PersonRemoveOutlined } from "@mui/icons-material";
import {Box, IconButton, Typography,useTheme} from "@mui/material";
import {useDispatch,useSelector}from "react-redux";
import { setFriends } from "../app/store";
import FlexBetween from "./FlexBetween";
import {useNavigate } from "react-router-dom";
import UserImage from "./UserImage";
const Friend = ({friendId,name, subtitle, userPicturePath})=>{
    const {palette} = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {_id} = useSelector((state)=>state.user);
    const token = useSelector((state)=>state.token)
    const friends = useSelector((state)=>state.user.friends);
    const primaryLight= palette.primary.light;
    const primaryDark= palette.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
    const isFriend = friends.find((friend)=>friend._id===friendId);
const patchFriend = async()=>{
    const response = await fetch(
        `https://social-media-app-server-chi.vercel.app/users/${_id}/${friendId}`,
        {
            method:"PATCH",
            headers:{
                Authorization:`Bearer  ${token}`,
                "Content-type":"application/json",
            },
       }
    );
        const data = await response.json();
        console.log(response)
        console.log(data)
        dispatch(setFriends({friends:data}));
}
        return (
            <FlexBetween>
                <FlexBetween gap="1rem">
                    <UserImage image={userPicturePath} size="55px"/>
                    <Box 
                    onClick={()=>{
                        navigate(`/profile/${friendId}`);
                        navigate(0);
                    }}
                    >
                        <Typography
                        color={main}
                        variant="h5"
                        fontWeight="500"
                        sx={{
                            color:palette.primary.light,
                            cursor:"pointer"
                        }}
                        >
                            {name}

                        </Typography>
                        <Typography color={medium} fontSize="0.75rem">
                            {subtitle}
                        </Typography>
                    </Box>


                </FlexBetween>
                <IconButton
                    onClick={()=>patchFriend()}
                    sx={{backgroundColor:primaryLight,p:"0.6rem"}}
                >
                    {isFriend ? (
                        <PersonRemoveOutlined sx={{color:primaryDark}}/>
                    ):(
                        <PersonAddOutlined sx={{color:primaryDark}}/>
                    )}

                </IconButton>
            </FlexBetween>
        )
    
}
export default Friend;