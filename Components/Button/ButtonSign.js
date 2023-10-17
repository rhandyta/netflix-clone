"use client"
import { Button, useMediaQuery } from "@mui/material";

function ButtonSign() {
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  
  return (
    <Button color="primary" variant="contained" size={isMdUp ? 'large' : 'small'}>
      Sign In
  </Button>
  )
}

export default ButtonSign
