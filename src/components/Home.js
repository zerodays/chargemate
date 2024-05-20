import React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Grid";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import ChromeIcon from "../icons/Chrome";
import EdgeIcon from "../icons/Edge";
import OperaIcon from "../icons/Opera";
import SettingsIcon from "@mui/icons-material/Settings";
import { ChevronRight } from "@mui/icons-material";

const gridCSS = {
  height: "calc(100vh - 160px)",
  minHeight: "10em",
};

const Home = (props) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={gridCSS}
    >
      <Grid item xs={3}>
        {props.supported() ? (
          <Box align="center">
            <Box>
              <h3
                style={{
                  color: "#97D700",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                }}
              >
                WEB TERMINAL
              </h3>
              <h1
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "2em",
                }}
              >
                Configuration And Maintenance Of GL Charge Products
              </h1>
              <Button
                variant="contained"
                size="large"
                className="button"
                onClick={props.connect}
                sx={{
                  m: 1,
                  fontSize: "1.1em",
                  pr: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5em",
                    textTransform: "none",
                    fontWeight: 400,
                    fontSize: "0.8em",
                  }}
                >
                  Connect <ChevronRight />
                </div>
              </Button>
            </Box>

            <Box>
              <Button
                size="large"
                onClick={props.openSettings}
                sx={{ m: 1, color: "#bebebe" }}
              >
                <SettingsIcon />
              </Button>
            </Box>

            <Box
              style={{
                border: "1px solid #ECECEC",
                width: "min-content",
                padding: "1em",
                borderRadius: "0.5em",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.5em",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <img src="about.svg" height={32} alt="About icon" />
                <p
                  style={{
                    whiteSpace: "nowrap",
                    fontWeight: 600,
                  }}
                >
                  How to start
                </p>
              </div>
              <div
                style={{
                  whiteSpace: "nowrap",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  fontSize: "1em",
                  color: "#7c7c7c",
                }}
              >
                <p
                  style={{
                    height: 6,
                  }}
                >
                  1. Click on CONNECT
                </p>
                <p
                  style={{
                    height: 6,
                  }}
                >
                  2. Plug in your device & select the port
                </p>
                <p
                  style={{
                    height: 6,
                  }}
                >
                  3. Enjoy the Serial Terminal 😊
                </p>
              </div>
            </Box>
          </Box>
        ) : (
          <Alert severity="warning">
            <AlertTitle>
              Your browser doesn&apos;t support Web Serial 😭
            </AlertTitle>
            Try using&nbsp;
            <a href="https://www.google.com/chrome/" target="blank">
              <ChromeIcon fontSize="inherit" /> <b>Chrome</b>
            </a>
            ,&nbsp;
            <a href="https://www.microsoft.com/en-us/edge" target="blank">
              <EdgeIcon fontSize="inherit" /> <b>Edge</b>
            </a>
            , or&nbsp;
            <a href="https://www.opera.com/" target="blank">
              <OperaIcon fontSize="inherit" /> <b>Opera</b>
            </a>
            <br />
            (IOS & Android browsers are not supported)
            <br />
            <br />
            Learn more about&nbsp;
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Serial#browser_compatibility"
              target="blank"
            >
              browser compatibility
            </a>
          </Alert>
        )}
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  connect: PropTypes.func,
  supported: PropTypes.func,
  openSettings: PropTypes.func,
};

export default Home;
