import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Paper, Stack, Typography, Box, Container, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "../components/Navbar";
import Profile from "./Profile";
import logo from "../assets/transparent.png";

const Dashboard = () => {
  const [profileToggle, setProfileToggle] = useState(false);
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack position={"relative"} sx={{ height: "100vh", overflowY: "scroll" }}>
      {/* Navigation and Profile Sections */}
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Navbar Section */}
        <Box
          position={"relative"}
          sx={{
            height: "100%",
            width: profileToggle ? "calc(100vw - 330px)" : "calc(100vw)",
          }}
        >
          <Navbar toggle={profileToggle} setToggle={setProfileToggle} />
        </Box>

        {/* Profile Section */}
        <Box position={"absolute"} right={0}>
          {profileToggle ? (
            <Profile toggle={profileToggle} setToggle={setProfileToggle} />
          ) : (
            ""
          )}
        </Box>
      </Stack>

      {/* Main Content Section */}
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        gap={isMdScreen ? "1rem" : "2rem"} // Adjusted gap for medium screens
        px={isSmScreen ? "1rem" : "4rem"} // Adjusted padding for small screens
        alignItems={"center"}
      >
        {/* Text Content Section */}
        <Stack mx={isMdScreen ? "1rem" : "5rem"} sx={{ height: "100vh", flexWrap: "wrap" }}>
          <Container maxWidth="md">
            {/* Information Paper */}
            <Paper elevation={3} style={{ padding: isSmScreen ? "1rem" : "2rem", margin: "2rem 0" }}>
              {/* Welcome Message */}
              <Typography variant="h5" gutterBottom>
                Welcome to <span className="text-[#800080]">ZORWAY</span> -
                Empowering Students for Success!
              </Typography>

              {/* Introduction */}
              <Typography variant="body2" paragraph>
                At ZORWAY, we understand the importance of keeping track of your
                academic journey. Our platform is designed to empower students
                by providing easy access to crucial information such as
                attendance records, marksheets, and class timetables.
              </Typography>

              {/* Features Section */}
              <Typography variant="body2" paragraph>
                <strong>1. Attendance Marksheets:</strong> Effortlessly monitor
                your attendance throughout the semester. Our intuitive interface
                allows you to view detailed attendance marksheets, helping you
                stay informed about your class participation.
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>2. Class Timetables:</strong> Stay organized with our
                interactive class timetables. Quickly check the schedule for
                each day, ensuring you never miss an important lecture or event.
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>3. User-Friendly Interface:</strong> Navigating through
                your academic information has never been easier. Our
                user-friendly interface ensures a seamless experience, allowing
                you to access the information you need with just a few clicks.
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>4. Empowering Students for Success:</strong> Our mission
                is to empower students on their educational journey. By
                providing easy access to essential information, we aim to
                contribute to your academic success and overall well-being.
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>5. Secure and Reliable:</strong> Rest assured that your
                data is handled with the utmost care. Our platform prioritizes
                security and reliability, ensuring a safe environment for you to
                explore and manage your academic information.
              </Typography>

              {/* Call-to-Action Section */}
              <Typography variant="body2" paragraph>
                Ready to dive in?{" "}
                <span className="text-blue-700">
                  <Link to="/auth">Login</Link>
                </span>{" "}
                to your account now to explore the features and take control of
                your academic experience. If you haven't registered yet,{" "}
                <span className="text-blue-700">
                  <Link to="/auth">Signup</Link>
                </span>{" "}
                today and unlock a world of possibilities.
              </Typography>

              {/* Closing Message */}
              <Typography variant="body2" paragraph>
                Thank you for choosing{" "}
                <span className="text-[#800080]">ZORWAY</span>. We're here to
                support you on your academic journey!
              </Typography>
            </Paper>
          </Container>
        </Stack>

        {/* Image Section */}
        <Stack alignItems={"center"} justifyContent={"center"} mx={isMdScreen ? "1rem" : "5rem"}>
          {/* Displaying the logo image */}
          <img src={logo} width={isMdScreen ? "250px" : "450px"} alt="ZORWAY Logo" />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
