import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
// import { deepOrange } from "@mui/material/colors";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              AM-Panel
            </Typography>

            <Button
              component={NavLink}
              to="/"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : "" };
              }}
              sx={{ color: "white", textTransform: "none" }}
            >
              Home
            </Button>

            <Button
              component={NavLink}
              to="/SignUp"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : "" };
              }}
              sx={{ color: "white", textTransform: "none" }}
            >
              SignUp
            </Button>
            <Button
              component={NavLink}
              to="/login"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : "" };
              }}
              sx={{ color: "white", textTransform: "none" }}
            >
              Login
            </Button>

            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="./assets/images/avatar1.jpg" />
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
