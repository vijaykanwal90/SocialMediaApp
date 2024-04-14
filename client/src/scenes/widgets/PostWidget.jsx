import {

    ChatBubbleOutlineOUtlined,
    FavouriteBorderOutlines,
    FavouriteOUtlined,
    ShareOutlined,

} from "@mui/icons-material"
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../app/store"
likes={
    "userid1":true,
    "userid2":true
}

const PostWidget = ({
    postId,
    postUserId,
    name,
    description,
    location,
    picturePath,
    likes,
    userPicturePath,
    comments,
}) =>{

    const {palette} = useTheme();
    const {isComments,setIsComments} = useState(false);
    const dispatch = useDispatch();
    const {_id} = useSelector((state)=>state.user);
    const token = useSelector((state)=>state.token)
    const loggedInUserId = useSelector((state)=>state.user._id);
    const isLiked = Boleanan(likes[loggedInUserId])
    const primaryLight= palette.primary.light;
    const primaryDark= palette.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (

    )
}
export default PostWidget;