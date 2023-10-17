"use client";
import BorderedBottomBox from "@/Components/Wrapper/BorderedBottomBox";
import {
  AccordionDetails,
  AccordionSummary,
  Container,
  Stack,
  Grid,
  TextField,
  Typography,
  Accordion,
  Button,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
}));
const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  borderBottom: `2px solid ${theme.palette.common.black}`,
  padding: theme.spacing(1, 3),
}));

function FAQ() {
  const [isItemActive, setIsItemActive] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setIsItemActive(isExpanded ? panel : false);
  };

  return (
    <BorderedBottomBox>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          color="common.white"
          fontWeight={600}
          sx={{
            mb: 6,
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Stack spacing={0.8}>
          <CustomAccordion
            square
            expanded={isItemActive === "panel1"}
            onChange={handleChange("panel1")}
          >
            <CustomAccordionSummary
              expandIcon={
                <ExpandMore
                  sx={{
                    color: "common.white",
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5" component="h5">
                What is Netflix?
              </Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography variant="h5" component="p" sx={{ mb: 4 }}>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices.
              </Typography>
              <Typography variant="h5" component="p">
                You can watch as much as you want, whenever you want without a
                single commercial &minus; all for one low monthly price. There's
                always something new to discover and new TV shows and movies are
                added every week!
              </Typography>
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion
            square
            expanded={isItemActive === "panel2"}
            onChange={handleChange("panel2")}
          >
            <CustomAccordionSummary
              expandIcon={
                <ExpandMore
                  sx={{
                    color: "common.white",
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5" component="h5">
                How much does Netflix cost?
              </Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography variant="h5" component="p">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from IDR54,000 to IDR186,000 a month. No extra costs, no
                contracts.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion
            square
            expanded={isItemActive === "panel3"}
            onChange={handleChange("panel3")}
          >
            <CustomAccordionSummary
              expandIcon={
                <ExpandMore
                  sx={{
                    color: "common.white",
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5" component="h5">
                Where I can watch?
              </Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography variant="h5" component="p" sx={{ mb: 4 }}>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
              </Typography>
              <Typography variant="h5" component="p">
                You can also download your favorite shows with the iOS, Android,
                or Windows 10 app. Use downloads to watch while you're on the go
                and without an internet connection. Take Netflix with you
                anywhere.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion
            square
            expanded={isItemActive === "panel4"}
            onChange={handleChange("panel4")}
          >
            <CustomAccordionSummary
              expandIcon={
                <ExpandMore
                  sx={{
                    color: "common.white",
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5" component="h5">
                How do I cancel?
              </Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography variant="h5" component="p">
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion
            square
            expanded={isItemActive === "panel5"}
            onChange={handleChange("panel5")}
          >
            <CustomAccordionSummary
              expandIcon={
                <ExpandMore
                  sx={{
                    color: "common.white",
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5" component="h5">
                What can I watch on Netflix?
              </Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography variant="h5" component="p">
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>
          <CustomAccordion
            square
            expanded={isItemActive === "panel6"}
            onChange={handleChange("panel6")}
          >
            <CustomAccordionSummary
              expandIcon={
                <ExpandMore
                  sx={{
                    color: "common.white",
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5" component="h5">
                Is Netflix good for Kids?
              </Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography variant="h5" component="p" sx={{ mb: 4 }}>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and movies in their own space.
              </Typography>
              <Typography variant="h5" component="p">
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don&apos;t want kids to see.
              </Typography>
            </AccordionDetails>
          </CustomAccordion>
        </Stack>
        <Typography
          variant="h6"
          component="h3"
          color="common.white"
          textAlign="center"
          fontWeight="400"
          sx={{
            my: 6,
            mb: {
              xs: 2,
              md: 3,
            },
          }}
        >
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
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
    </BorderedBottomBox>
  );
}

export default FAQ;
