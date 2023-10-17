import React from "react";
import Image from "next/image";
import Background from "../../../public/__images/backdrop.jpg";
import Logo from "../../../public/__images/netflix.svg";
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
import ButtonSign from "@/Components/Button/ButtonSign";
import { grey } from "@mui/material/colors";
import BorderedBottomBox from "@/Components/Wrapper/BorderedBottomBox";

function Header() {
  return (
    <BorderedBottomBox>
      <AppBar
        sx={{
          bgcolor: "transparent",
          padding: "25px 20px",
      position: "absolute"
        }}
        elevation={0}
      >
        <Toolbar>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            alignSelf="center"
          >
            <Grid item xs>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "7.25rem",
                }}
              >
                <Image src={Logo} alt="Logo Netflix" layout="intrinsic" />
              </Box>
            </Grid>
            <Grid item xs="auto">
              <Box sx={{ display: "flex", gap: "0.5rem" }}>
                <FormControl
                  color="secondary"
                  size="small"
                  sx={{
                    border: "1px solid grey",
                    borderRadius: "5px",
                  }}
                >
                  <Select
                    labelId="lang-label"
                    id="lang"
                    defaultValue="en"
                    sx={{
                      color: "common.white",
                      "& .MuiSelect-select": {
                        width: {
                          xs: "1rem",
                          sm: "10rem",
                        },
                      },
                      "& .MuiSelect-icon": {
                        color: "common.white",
                      },
                    }}
                  >
                    <MenuItem value="id">Bahasa Indonesia</MenuItem>
                    <MenuItem value="en">English</MenuItem>
                  </Select>
                </FormControl>
                <ButtonSign />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          position: "relative",
          height: {
            xs: "100vh",
            sm: "100vh",
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
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1000,
            mt: "9rem"
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
            sx={{
              my: {
                xs: 2,
                md: 4,
              },
            }}
          >
            Join today. Cancel anytime.
          </Typography>
          <Typography
            variant="h4"
            component="h3"
            color="common.white"
            textAlign="center"
            fontWeight="400"
            sx={{
              mb: {
                xs: 2,
                md: 3,
              },
            }}
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
              <Grid
                item
                xs={12}
                md="auto"
                sx={{
                  textAlign: "center",
                  height: {
                    xs: "4rem",
                    md: "none",
                  },
                }}
              >
                <Button
                  sx={{ height: "100%" }}
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
    </BorderedBottomBox>
  );
}

export default Header;
