import React, { useState } from 'react';
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Box,
} from '@mui/material';

const PreviousMarksheets = ({ semesters }) => {
  // State to manage the selected semester
  const [selectedSemester, setSelectedSemester] = useState(1);

  // Event handler for changing the selected semester
  const handleChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  // Retrieve data for the selected semester
  const selectedSemesterData = semesters[selectedSemester - 1];

  return (
    // Container for the entire component with specified styles
    <Container maxWidth="md" sx={{ overflow: 'hidden', p: 2 }}>
      {/* Box component for the main content with styling */}
      <Box mt={4} p={3} boxShadow={3} borderRadius={8} bgcolor="white">
        {/* Heading for the component */}
        <Typography variant="h4" gutterBottom color="primary">
          Previous Semester Marksheets
        </Typography>

        {/* Dropdown to select the semester */}
        <FormControl fullWidth style={{ marginBottom: '20px' }}>
          {/* Label for the dropdown */}
          <InputLabel id="semester-label" color="primary">
            Select Semester
          </InputLabel>
          {/* Dropdown to choose the semester */}
          <Select
            labelId="semester-label"
            id="semester-select"
            value={selectedSemester}
            label="Select Semester"
            onChange={handleChange}
            color="primary"
          >
            {/* Mapping over semesters to create dropdown options */}
            {semesters.map((semester, index) => (
              <MenuItem key={index + 1} value={index + 1}>
                Semester {index + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Displaying the marks for the selected semester in a table */}
        <Box>
          {/* Heading for the table */}
          <Typography variant="h6" gutterBottom color="primary">
            Semester {selectedSemester} Marks
          </Typography>
          {/* Table to display the subjects and grades */}
          <Table>
            <TableHead>
              {/* Header row for the table */}
              <TableRow>
                <TableCell color="primary">Subject</TableCell>
                <TableCell color="primary">Grade</TableCell>
              </TableRow>
            </TableHead>
            {/* Body of the table with subject and grade data */}
            <TableBody>
              {selectedSemesterData.subjects.map((subject, subIndex) => (
                <TableRow key={subIndex}>
                  <TableCell>{subject.subjectName}</TableCell>
                  <TableCell>{subject.grade}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Container>
  );
};

export default PreviousMarksheets;
