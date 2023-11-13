import { Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle, setToggle }) => {
  // Logging the toggle value to the console
  console.log(toggle);

  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("md"));

  // Styling for different button states
  const styles = {
    "&.MuiButton-root": {
      border: "2px black solid",
    },
    "&.MuiButton-text": {
      color: "grey",
    },
    "&.MuiButton-contained": {
      color: "yellow",
    },
    "&.MuiButton-outlined": {
      color: "brown",
    },
  };

  // Function to handle the toggle of the profile
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Stack
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      {/* Navbar Section */}
      <div className={`flex justify-between px-3 py-1 mt-1 ${isSmScreen ? 'flex-col' : 'bg-[#F5EFE8] shadow-md'}`}>
        <div className="">
          {/* Logo and Navigation Links */}
          <Stack direction={isSmScreen ? "column" : "row"} alignItems={"center"} justifyItems={"center"}>
            <Stack direction={isSmScreen ? "column" : "row"} justifyContent={isSmScreen ? "center" : "space-evenly"} gap={isSmScreen ? "1rem" : "5rem"}>
              {/* Logo and Home Link */}
              <Link to="/">
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    color: "#800080", // Blue color
                    marginBottom: isSmScreen ? "10px" : "20px",
                  }}
                >
                  Zorway
                </Typography>
              </Link>

              {/* Time Table Link */}
              <Link to="/timeTable">
                <Button
                  sx={{
                    "&.MuiButton-text": {
                      color: "#800080",
                      borderColor: "secondary.main",
                    },
                    border: "#800080",
                    width: isSmScreen ? "100%" : "auto",
                  }}
                  variant="text"
                >
                  Time Table
                </Button>
              </Link>

              {/* Attendance Link */}
              <Link to="/attendance">
                <Button
                  sx={{
                    "&.MuiButton-text": {
                      color: "#800080",
                      borderColor: "secondary.main",
                    },
                    border: "#800080",
                    width: isSmScreen ? "100%" : "auto",
                  }}
                  variant="text"
                >
                  Attendance
                </Button>
              </Link>

              {/* MarkSheets Link */}
              <Link to="/marksheets">
                <Button
                  sx={{
                    "&.MuiButton-text": {
                      color: "#800080",
                      borderColor: "secondary.main",
                    },
                    border: "#800080",
                    width: isSmScreen ? "100%" : "auto",
                  }}
                  variant="text"
                >
                  MarkSheets
                </Button>
              </Link>
            </Stack>
          </Stack>
        </div>

        {/* Home and Profile Buttons */}
        <div className={`flex ${isSmScreen ? 'flex-col items-center' : 'px-[3rem] gap-x-[2rem]'}`}>
          {/* Home Link */}
          <Link to="/">
            <Button
              sx={{
                "&.MuiButton-text": {
                  color: "#800080",
                  borderColor: "secondary.main",
                },
                border: "#800080",
                width: isSmScreen ? "100%" : "auto",
              }}
              variant="text"
            >
              Home
            </Button>
          </Link>

          {/* Profile Button */}
          <Button
            onClick={handleToggle}
            sx={{
              "&.MuiButton-text": { background: "#800080", color: "#ffff" },
              width: isSmScreen ? "100%" : "7rem",
              height: isSmScreen ? "2.5rem" : "2.5rem",
            }}
            color="secondary"
            variant="contained"
          >
            Profile
          </Button>
        </div>
      </div>
    </Stack>
  );
};

export default Navbar;
