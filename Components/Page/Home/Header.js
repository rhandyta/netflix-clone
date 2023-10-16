import React from "react";
import Image from "next/image";
import Background from "../../../public/__images/backdrop.jpg";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Header() {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: {
            xs: "80vh",
            sm: "100vh"
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
