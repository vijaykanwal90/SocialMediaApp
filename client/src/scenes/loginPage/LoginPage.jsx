import React from 'react'
import Form from "./Form"
import { Box,Typography,useTheme,useMediaQuery } from '@mui/material'

const LoginPage = () => {
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const primaryLight = theme.palette.primary.light;
  const background = theme.palette.background.default;
  const alt = theme.palette.background.alt;
  const isNonMobileScreens = useMediaQuery("(min-widht:1000px");

  return (
    <Box>
      <Box width="100%" backgroundColor={background}
      p="1rem 6%"
      textAlign="center"
      >
            <Typography fontWeight="bold" fontSize="32px" color="primary" 
        sx={{
          "&:hover": {
            color:" primary",
            cursor: "pointer",
          },
        }}
      >SocialHub</Typography>
      </Box>
      <Box width={isNonMobileScreens ? "50%":"93%"}
      p="2rem"
      m="2rem auto"
      borderRadius="1.5rem"
      backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sc={{mb:"1.5rem"}}>
          Welcome to socioHub, The social media app
        </Typography>
      
        <Form/>

      </Box>
    </Box>
  )
}

export default LoginPage
