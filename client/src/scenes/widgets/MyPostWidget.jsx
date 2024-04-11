import React from 'react'
import {
    EditOutlined,
    DeletOutlined,
    AttachFileOutlined,
    GifBoxOutlined,
    ImageOutlined,
    MicOutlined,
    MoreHorizOutlined,
    PaletteTwoTone
} from "@mui/icons-material"
import {
    Box, 
    Divider,
    Typography,
    InputBase,
    useTheme,
    Button,
    IconButton,
    useMediaQuery

} from "@mui/material"
import DropZone from "react-dropzone"
import userImage from "../../components/userImage"
import WidgetWrapper from '../../components/WidgetWrapper'
import { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { setPosts } from '../../app/store'
import FlexBetween from '../../components/FlexBetween'
import UserImage from '../../components/UserImage'
const MyPostWidget = ({picturePath}) => {
    const dispatch= useDispatch();
    const [isImage , setIsImage] = useState(false);
    const [image , setImage] = useState(null);
    const [post , setPost] = useState("")
    const {palette} = useTheme();
    const {_id} = useSelector((state)=>state.user);
    const token = useSelector((state)=>state.token);
    const isNonMobileScreens = useMediaQuery("(min-width:100px)");
    const mediumMain = palette.neutral.mediumMain;
    const medium = palette.neutral.medium;


    const handlePost = async()=>{
        const formData = new FormData();
        formData.append("userId",_id);
        formData.append("description",post);
        if(image){
            formData.append("picture",image);
            formData.append("picturePath",image.name);
        }
        const response = await fetch(`http://localhost:5152/posts`,{
            method:"POST",
            header:{Authorization:`Bearer ${token}`},
            body:formData
    });
    const posts = await response.json();
    dispatch(setPosts({posts}));
    setImage(null);
    setPost("")
    }
  return (
    <WidgetWrapper>
<FlexBetween>
    <UserImage image={picturePath}/>
</FlexBetween>
    </WidgetWrapper>
  )
}

export default MyPostWidget
