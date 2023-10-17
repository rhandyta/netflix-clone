import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import BorderedBottomBox from "@/Components/Wrapper/BorderedBottomBox";
import Image from "next/image";
import TV from "../../../public/__images/tv.png";
import Device from "../../../public/__images/devices.png";
import Mobile from "../../../public/__images/mobile.jpg";
import Kids from "../../../public/__images/kids.png";
import BookShot from "../../../public/__images/boxshot.png";
import Download from "../../../public/__images/download.gif";
import { blue, grey } from "@mui/material/colors";

const Title = ({ msg }) => {
  return (
    <Typography
      variant="h3"
      component="h2"
      fontWeight={800}
      gutterBottom
      sx={{
        textAlign: {
          xs: "center",
          md: "left",
        },
      }}
    >
      {msg}
    </Typography>
  );
};

const Description = ({ msg }) => {
  return (
    <Typography
      variant="h5"
      component="p"
      sx={{
        textAlign: {
          xs: "center",
          md: "left",
        },
      }}
    >
      {msg}
    </Typography>
  );
};

function Features() {
  return (
    <Box sx={{ bgcolor: "common.black", color: "common.white" }}>
      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            columnSpacing={12}
          >
            <Grid item xs={12} md={6}>
              <Title msg="Enjoy on your TV" />
              <Description
                msg="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
                      players, and more."
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative" }}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Image
                    src={TV}
                    alt="tv"
                    layout="responsive"
                    width={670}
                    height={480}
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: " 100%",
                    transform: "translate(-50%, -50%)",
                    top: "47%",
                    maxWidth: "74%",
                    maxHeight: " 60%",
                    left: "49%",
                  }}
                >
                  <video
                    src="/__videos/tv.m4v"
                    style={{ width: "100%", height: "100%" }}
                    autoPlay
                    playsInline
                    muted
                    loop
                  ></video>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            columnSpacing={12}
          >
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Box sx={{ position: "relative" }}> 
              <Box>
                <Image
                  src={Mobile}
                  alt="mobile"
                  layout="responsive"
                  width={670}
                  height={480}
                />
              </Box>
                <Box sx={{
                  position: "absolute",
                  bgcolor: 'common.black',
                  border: `1px solid ${grey[500]}`,
                  p: 1,
                  borderRadius: 2,
                  zIndex: 1,
                  left: "50%",
                  bottom: {
                    xs: "10%",
                    sm: "8%",
                    md: "10%"
                  },
                  transform: `translate(-50%, 0)`,
                  width: {
                    xs: "80%",
                    sm: "70%",
                    md: "80%",
                  }
                }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={2} md={3}>
                    <Image
                        src={BookShot}
                        alt="mobile"
                        layout="intrinsic"
                        width={35}
                        height={35}
                      />
                    </Grid>
                    <Grid item xs={8} md={6}>
                      <Typography>Stranger Things</Typography>
                      <Typography variant="body1" color={blue.A400}>Downloading...</Typography>
                    </Grid>
                    <Grid item xs={2} md={3}>
                    <Image
                        src={Download}
                        alt="download"
                        layout="intrinsic"
                        width={35}
                        height={35}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Title msg="Download your shows to watch offline" />
              <Description msg="Save your favorites easily and always have something to watch." />
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            columnSpacing={12}
          >
            <Grid item xs={12} md={6}>
              <Title msg="Watch everywhere" />
              <Description msg="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative" }}>
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Image
                    src={Device}
                    alt="device"
                    layout="responsive"
                    width={670}
                    height={480}
                  />
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    transform: 'translate(-50%, -50%)',
                    top: '33%',
                    maxWidth: '62%',
                    maxHeight: '60%',
                    left: '50%',
                  }}
                >
                  <video
                    src="/__videos/devices.m4v"
                    style={{ width: "100%", height: "100%" }}
                    autoPlay
                    playsInline
                    muted
                    loop
                  ></video>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>

      <BorderedBottomBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            columnSpacing={12}
          >
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Box>
                <Image
                  src={Kids}
                  alt="kids"
                  layout="responsive"
                  width={670}
                  height={480}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Title msg="Create profiles for kids" />
              <Description msg="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." />
            </Grid>
          </Grid>
        </Container>
      </BorderedBottomBox>
    </Box>
  );
}

export default Features;
