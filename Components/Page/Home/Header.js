import React from "react";
import Image from "next/image";
import Background from "../../../public/__images/backdrop.jpg";
import Logo from '../../../public/__images/netflix.svg'
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  AppBar,
  Toolbar,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { grey } from "@mui/material/colors";

function Header() {
  return (
    <Box sx={{borderBottom: `0.7rem solid ${grey[900]}`}}>
      <AppBar sx={{
        bgcolor: 'transparent',
        padding: "25px 20px"
      }} elevation={0}>

      <Toolbar>
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs>
            <Image 
              src={Logo}
              alt="Logo Netflix"
              layout="intrinsic"
              width={167}
              height={45}
            />
          </Grid>
          <Grid item xs="auto">
          <FormControl color="secondary" size="small" sx={{
            border: "1px solid grey",
            borderRadius: "5px",
          }}>
            <Select defaultValue="en" sx={{
              color:"common.white",
              "& .MuiSelect-select": {
                width: "10rem"
              },
              "& .MuiSelect-icon": {
                color: "common.white"
              }
            }}>
              <MenuItem value="id">Bahasa Indonesia</MenuItem>
              <MenuItem value="en">English</MenuItem>
            </Select>
          </FormControl>
          </Grid>
          <Grid item xs="auto">
            <Button color="primary" variant="contained" size="large">Sign In</Button>
          </Grid>
        </Grid>
      </Toolbar>
      </AppBar>

      <Box
        sx={{
          position: "relative",
          height: {
            xs: "80vh",
            md: "100vh"
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::after": {
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            content: '""',
            background: `rgba(0,0,0,0.4)`,
            backgroundImage: `linear-gradient(
                        to bottom,
                        rgba(0,0,0,0.6) 0,
                        rgba(0,0,0,0) 60%,
                        rgba(0,0,0,0.8) 100%
                    )`,
          },
        }}
      >
        <Image
          src={Background}
          alt="backdrop"
          fill
          priority
          placeholder="blur"
          style={{ objectFit: "cover" }}
        />

        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 1000,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            color="common.white"
            textAlign="center"
            fontWeight="800"
          >
            The biggest local and international hits. All here from IDR54,000.
          </Typography>
          <Typography
            variant="h4"
            component="p"
            color="common.white"
            textAlign="center"
            fontWeight="400"
            sx={{ my: {
              xs: 2,
              md: 4
            } }}
          >
            Join today. Cancel anytime.
          </Typography>
          <Typography
            variant="h4"
            component="h3"
            color="common.white"
            textAlign="center"
            fontWeight="400"
            sx={{ mb: {
              xs: 2,
              md: 3
            } }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>
          <Container maxWidth="md">
            <Grid container spacing={1}>
              <Grid item xs={12} md>
                <TextField
                  variant="outlined"
                  label="Email Address"
                  color="secondary"
                  sx={{
                    "& .MuiInputLabel-outlined": {
                      color: "gray",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "gray",
                        borderRadius: "5px",
                        background: `rgba(0,0,0,0.7)`,
                      },
                      "&:hover fieldset": {
                        borderColor: "common.white",
                      },
                    },
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md="auto" sx={{
                textAlign: "center",
                height: {
                  xs: "4rem",
                  md: "none"
                }
              }}>
                <Button
                sx={{height: "100%"}}
                  component="label"
                  size="large"
                  variant="contained"
                  color="primary"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Box>
    </Box>
  );
}

export default Header;
