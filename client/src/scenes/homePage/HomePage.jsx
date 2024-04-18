import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import Navbar from '../navbar/Navbar'
import { useSelector } from 'react-redux';
import UserWidget from '../widgets/UserWidget';
import PostWidget from '../widgets/PostWidget';
import PostsWidget from '../widgets/PostsWidget';
import MyPostWidget from "../../scenes/widgets/MyPostWidget"
import AdverWidget from '../widgets/AdvertWidget';
import FriendListWidget from '../widgets/FriendListWidget';
const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px");
  const {_id,picturePath} = useSelector((state)=>state.user);
  return (
    <Box>

      <Navbar/>
      <Box width="100%" 
      padding="2rem 6%"
      display={isNonMobileScreens ? "flex" : "block"}
      gap="05rem"
      justifyContent="space-between"

      >
<Box flexBasis={isNonMobileScreens ? "26%" :undefined}>

  <UserWidget userId={_id} picturePath={picturePath}/>
</Box>
      <Box flexBasis={isNonMobileScreens ? "42%" :undefined}
      mt={isNonMobileScreens ?undefined :"2rem"}
      >
        <MyPostWidget picturePath={picturePath}/>
        <PostsWidget userId={_id}/>
      </Box>
      {isNonMobileScreens && (
        <Box flexBasis="26%">
          <AdverWidget/>
          <Box m="2rem"/>
          <FriendListWidget userId={_id}/>
        </Box>
    )  }
</Box>

    </Box>
  )
}

export default HomePage
