import {

    ChatBubbleOutlineOUtlined,
    FavouriteBorderOutlined,
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
// likes={
//     "userid1":true,
//     "userid2":true
// }

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
}) => {

    const { palette } = useTheme();
    const { isComments, setIsComments } = useState(false);
    const dispatch = useDispatch();
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token)
    const loggedInUserId = useSelector((state) => state.user._id);
    const isLiked = Boleanan(likes[loggedInUserId])
    const likeCount = Object.keys(likes).length;
    const primaryLight = palette.primary.light;
    const primaryDark = palette.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
    const primary = palette.primary.main;
    const patchLike = async () => {
        const response = await fetch(`http://localhost/5152/posts/${postId}/like`, {
            method: "PATCH",
            headeers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify({ userId: "loggedInUserId" })
        });
        const updatedPost = await response.json();
        dispatch(setPost({ post: updatedPost }))
    };
    return (
        <WidgetWrapper
            m="2rem 0"
        >

            <Friend friendId={postUserId}
                name={name}
                subtitle={location}
                userPicturePath={userPicturePath}
            />
            <Typography
                color={main} sx={{ mt: "1rem" }}
            >
                {description}
            </Typography>

            {picturePath &&
                (
                    <img width="100%"
                        height="auto"
                        alt="post"
                        style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
                        src={`http://localhost/5152/assets/${picturePath}`}
                    />
                )}
            <FlexBetween mt="0.25rem">
                <FlexBetween gap="1rem">
                    <FlexBetween gap="0.3rem">
                        <IconButton onClick={patchLike}>
                            {isLiked ? (
                                <FavouriteBorderOutlined sx={{ color: primary }} />

                            ) : (
                                <FavouriteBorderOutlined />

                            )}
                        </IconButton>
                        <Typography>
                            {likeCount}
                        </Typography>
                    </FlexBetween>
                    <FlexBetween gap="0.3rem">
                    <IconButton onClick={()=>setIsComments(!isComments)}>
                            {isLiked ? (
                                <FavouriteBorderOutlined sx={{ color: primary }} />

                            ) : (
                                <FavouriteBorderOutlined />

                            )}
                        </IconButton>
                        <Typography>{comments.length}</Typography>
                    </FlexBetween>
                </FlexBetween>

            <IconButton>
                <ShareOutlined/>

            </IconButton>


            </FlexBetween>
            {isComments && (
                <Box mt="0.5rem">
                    {comments.map((comment,i)=>(
                        <Box key={`${name} -${i}`}>
                        <Divider/>
                        <Typography sx={{color:main,m:"0.5rem 0",pl:"1rem"}}>
                            {comment}
                        </Typography>
                        
                        </Box>
                    ))}
                    <Divider/>
                </Box>
            )}
        </WidgetWrapper>
    )
}
export default PostWidget;