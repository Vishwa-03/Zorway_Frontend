import React, { useState } from "react";
import { Typography, Card, CardContent, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const AttendanceCalculator = () => {
  // Total classes in a month
  const totalClassesPerMonth = 20;

  // Static attendance data for multiple subjects
  const staticAttendanceData = [
    { subject: "Information Theory and Coding", presentAttendance: 12 },
    { subject: "Communication System", presentAttendance: 13 },
    { subject: "Control System", presentAttendance: 14 },
    { subject: "Data Structure & Algorithms", presentAttendance: 10 },
    { subject: "Telecom System", presentAttendance: 9 },
    { subject: "VLSI", presentAttendance: 11 },
    
  ];
  
  // State to manage attendance data
  const [attendanceData, setAttendanceData] = useState(staticAttendanceData);

  // Function to calculate the required attendance to achieve 75%
  const calculateRequiredAttendance = (subject) => {
    const subjectInfo = attendanceData.find((data) => data.subject === subject);
    if (subjectInfo) {
      const targetAttendance = 0.75 * totalClassesPerMonth;
      return Math.max(0, targetAttendance - subjectInfo.presentAttendance);
    }
    return 0;
  };

  return (
    <div className="overflow-hidden p-10 relative">
      {/* Title */}
      <div className="absolute right-10"> <Link to="/dashboard">
        <Button variant="outlined">
            Go to Dashboard
        </Button>
      </Link></div>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#2196F3", // Blue color
          marginBottom: "20px",
        }}
      >
        Attendance Calculator
      </Typography>
      {/* Grid container for cards */}
      <Grid container spacing={2}>
        {attendanceData.map((subjectInfo, index) => (
          <Grid item key={subjectInfo.subject} xs={12} sm={6} md={4} lg={3}>
            {/* Individual card */}
            <Card
              elevation={3}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: index % 2 === 0 ? "#81c784" : "#64b5f6",
                color: "#ffffff", // Text color
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: (theme) => theme.shadows[8],
                },
              }}
            >
              {/* Card content */}
              <CardContent>
                <Typography variant="h6">{subjectInfo.subject}</Typography>
                <Typography variant="body1">
                  Present Attendance: {subjectInfo.presentAttendance}/
                  {totalClassesPerMonth}
                </Typography>
                <Typography variant="body1">
                  Required Attendance to Achieve 75%:{" "}
                  {calculateRequiredAttendance(subjectInfo.subject)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AttendanceCalculator;
