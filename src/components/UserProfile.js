import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { Typography, Avatar, Paper } from '@mui/material';
import { projectAuth, onAuthStateChanged } from '../Firebase';

// Create a styled component
const StyledPaper = styled(Paper)({
  textAlign: 'center',
  margin: '20px',
  padding: '20px',
});

const StyledTypography = styled(Typography)({
  marginBottom: '16px',
});

const StyledAvatar = styled(Avatar)({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  margin: '16px',
});
let currUser=null,userEmail=null,userUID=null;
const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = onAuthStateChanged(projectAuth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
        currUser=user.displayName;
        userEmail=user.email;
        userUID=user.uid;
      } else {
        // No user is signed in
        setUser(null);
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
   {currUser,userEmail,userUID}
  );
};

export default UserProfile;
