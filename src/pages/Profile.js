import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Cross, X } from "@phosphor-icons/react";
import React from "react";
import UserProfile from "../components/UserProfile";
import LanguageSwitch from "../components/LanguageSwitch";
import { useNavigate } from "react-router-dom";
import userLogout from "../auth/userLogout";
import { faker } from "@faker-js/faker";

const Profile = ({ toggle, setToggle }) => {
  // Accessing MUI theme and checking screen size
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Accessing user information using UserProfile hook
  const { currUser, userEmail, userUID } = UserProfile();

  // Setting up navigation and logout functionality
  const navigate = useNavigate();
  const { error, logout } = userLogout();

  const handleLogout = async () => {
    await logout();

    if (!error) {
      navigate('/');
    }
  };

  return (
    <Stack
      direction={isSmScreen ? "column" : "row"}
      justifyContent={isSmScreen ? "flex-start" : "space-between"}
      sx={{
        overflow: "hidden",
        borderColor: "primary.main",
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        height: "100vh",
        width: isSmScreen ? "100%" : 330,
      }}
    >
      <Box
        sx={{
          overflowY: "hidden",
          height: "100%",
          width: isSmScreen ? "100%" : 350,
          backgroundColor: "#86A3B8",
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          padding: "1rem",
        }}
      >
        {/* Header with close button and title */}
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton onClick={() => setToggle(!toggle)}>
            <X color="#FFFBEB" />
          </IconButton>
          <Typography variant="h6" color="#FDFAF6">
            Profile & Settings
          </Typography>
        </Stack>
        {/* Horizontal Divider */}
        <Divider />
        {/* Divider with welcome message */}
        <Divider>
          <div className="flex justify-evenly py-[2rem]">
            <p className="font-sans text-[#800080] font-semibold text-xl flex gap-x-2 justify-center">
              Welcome
            </p>
          </div>
        </Divider>
        {/* User information section */}
        <Stack justifyContent={"center"}>
          <Stack
            direction={isSmScreen ? "column" : "row"}
            justifyContent={isSmScreen ? "center" : "space-evenly"}
            alignItems={isSmScreen ? "center" : "center"}
            marginTop={isSmScreen ? 2 : 0}
          >
            <Avatar src={faker.image.avatar()} />
            <Stack mt={isSmScreen ? 3 : 0}>
              <div className="text-[#800080]">
                <Typography variant="article" color="#FDFACF">
                  {currUser}
                </Typography>
              </div>
              <Typography variant="subtitle2" color="#FDFAF6">
                {userEmail}
              </Typography>
            </Stack>
          </Stack>
          {/* User UID information */}
          <Stack mt={isSmScreen ? 3 : 0} justifyContent={"center"} alignItems={"center"}>
            <Typography variant="article" color="#FDFAF6">
              User UID:
            </Typography>
            <Typography variant="subtitle2" color="#FDFAF6">
              {userUID}
            </Typography>
          </Stack>
        </Stack>
        {/* Divider */}
        <Divider sx={{ mt: isSmScreen ? 2 : 4 }} />
        {/* Language Switch section */}
        <Stack mt={isSmScreen ? 2 : 4} direction={"row"} gap={3} justifyContent={"center"}>
          <Typography variant="body1" color="#FDFACF">
            Switch to Hindi
          </Typography>
          <LanguageSwitch />
        </Stack>
        {/* Logout Button */}
        <Stack mt={isSmScreen ? 2 : 4} justifyContent={"center"} alignItems={"center"}>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Profile;
