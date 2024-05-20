import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#97D700",
      }}
    >
      <Toolbar>
        <img src="logo.svg" alt="Logo" height="30px" />

        <div style={{ width: "100%" }} />

        <Button sx={{ color: "#fff" }} target="_blank" href="#">
          <AddBoxIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
