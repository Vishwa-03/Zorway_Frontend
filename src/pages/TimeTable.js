import React from 'react';

import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from '@mui/material';
import { daysOfWeek, timeSlots, time_table } from '../data/timetable';
import { Link } from 'react-router-dom';

const TimeTable = () => {
  
 
   ;

  return (
    <div className='relative'>
        <nav className='absolute right-6 top-10'>
            <ul>
                <li>
                    <Link to="/dashboard"> <Button variant="outlined" >Back to Dashboard</Button></Link>
                </li>
            </ul>
        </nav>
      <Stack spacing={3} pt={20} sx={{ padding: 3  }}>
        {/* Title */}
        <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#2196F3", // Blue color
          marginBottom: "20px",
        }}
      >
        Time Table 
      </Typography>

        {/* Timetable Container */}
        <TableContainer component={Paper}>
          {/* Timetable Table */}
          <Table sx={{ minWidth: 650 }}>
            {/* Table Header */}
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Day</TableCell>
                {/* Column headers for each time slot */}
                {timeSlots.map((timeSlot) => (
                  <TableCell key={timeSlot} align="center" sx={{ fontWeight: 'bold' }}>
                    {timeSlot}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Table Body */}
            <TableBody>
              {/* Iterate over each day */}
              {daysOfWeek.map((day) => (
                <TableRow key={day}>
                  {/* Day cell */}
                  <TableCell component="th" scope="row" sx={{ fontWeight: 'bold', fontSize: 16 }}>
                    {day}
                  </TableCell>

                  {/* Iterate over each time slot */}
                  {timeSlots.map((timeSlot) => {
                    // Find class info for the current day and time slot
                    const classInfo = time_table[day]?.find((classData) => classData.time === timeSlot);

                    // Display the subject or an empty string if no class
                    return (
                      <TableCell key={timeSlot} align="center" sx={{ fontSize: 14 }}>
                        {classInfo ? classInfo.subject : '-'}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        
      </Stack>
    </div>
  );
};

export default TimeTable;
