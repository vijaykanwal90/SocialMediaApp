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
    <inputBase 
        placeholder="what's on your mind..."
        onChange = {(e) =>setPost(e.target.value)}
        value={post}
        sx={{

            width:"100%",
            backgroundColor:palette.neutral.light,
            borderRadius:"2rem",
            padding:"1 rem 2 rem"
        }}
    />
</FlexBetween>
{isImage && (
        <Box
        borderRadius="5px"
        border={`1px solid ${medium}`}
        mt="1rem"
        p="1rem"
        >
            <DropZone
            acceptedFiles=".jpeg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) =>
              setImage( acceptedFiles[0])
            }>
            {({ getRootProps, getInputProps }) => (
                <FlexBetween>
              <Box 
                {...getRootProps()}
                border={`2px dashed ${palette.primary.main}`}
                p="1rem"
                width="100%"
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                <input {...getInputProps()} />
                {!image ? (
                  <p>Add image here</p>
                ) : (
                  <FlexBetween>
                    <Typography>{image.name}</Typography>
                    <EditOutlined />
                  </FlexBetween>
                )
                }
              </Box> 
              {image && (
                <IconButton
                 onClick={()=>setImage(null)}
                 sx={{width:"15%"}}
                >
                    <DeletOutlined/>

                </IconButton>
              )}
              </FlexBetween>
            )}

            </DropZone>
        </Box>
)}
<Divider sx={{margin:"1.25rem 0"}}/>
<FlexBetween
  
>
    <FlexBetween gap="0.25rem " onClick={()=>setIsImage(!isImage)}>
        <ImageOutlined sx={{}}/>
    </FlexBetween>
</FlexBetween>

    </WidgetWrapper>
  )
}

export default MyPostWidget
