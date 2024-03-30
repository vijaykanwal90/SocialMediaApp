import React from 'react'
import { Box } from '@mui/material'
import styled  from '@mui/styled-engine'
const WidgetWrapper = styled(Box)(({theme}) => ({
  padding:"1.5rem 1.5rem 0.75rem ",
  backgroundColor: theme.palette.background.alt,
  borderRadius:"0.75rem"
  
}));

export default WidgetWrapper
