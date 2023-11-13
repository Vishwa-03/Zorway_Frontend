const time_table = {
  Monday: [
    { time: "9:00 AM", subject: "" },
    { time: "10:00 AM", subject: "ECE 311 (MK)" },
    { time: "11:00 AM", subject: "ECE 312 (AP)" },
    { time: "12:00 PM", subject: "ECE CS 352 (PT)" },
    { time: "1:00 PM", subject: "LUNCH" },
    { time: "2:00 PM", subject: "B1 L1" },
    { time: "3:00 PM", subject: "B1 L1" },
  ],
  Tuesday: [
    { time: "9:00 AM", subject: "ECE 312 (AP)" },
    { time: "10:00 AM", subject: "ECE 311 (MK)" },
    { time: "11:00 AM", subject: "ECE 312 (AP)" },
    { time: "12:00 PM", subject: "ECE CS 352 (PT)" },
    { time: "1:00 PM", subject: "LUNCH" },
    { time: "2:00 PM", subject: "B1 L1" },
    { time: "3:00 PM", subject: "B1 L1" },
  ],
  Wednesday: [
    { time: "9:00 AM", subject: "ECE 312 (AP)" },
    { time: "10:00 AM", subject: "ECE 311 (MK)" },
    { time: "11:00 AM", subject: "ECE 312 (AP)" },
    { time: "12:00 PM", subject: "ECE CS 352 (PT)" },
    { time: "1:00 PM", subject: "LUNCH" },
    { time: "2:00 PM ", subject: "B2 L2" },
    { time: "3:00 PM ", subject: "B2 L2" },
  ],
  Thursday: [
    { time: "9:00 AM", subject: "ECE CS 352 (PT)" },
    { time: "10:00 AM", subject: "ECE 311 (MK)" },
    { time: "11:00 AM", subject: "ECE 312 (AP)" },
    { time: "12:00 PM", subject: "ECE CS 352 (PT)" },
    { time: "1:00 PM", subject: "LUNCH" },
    { time: "2:00 PM", subject: "B1 L1" },
    { time: "3:00 PM", subject: "B1 L1" },
    
  ],
  Friday: [
    { time: "9:00 AM", subject: "" },
    { time: "10:00 AM", subject: "ECE 311 (MK)" },
    { time: "11:00 AM", subject: "ECE 312 (AP)" },
    { time: "12:00 PM", subject: "ECE CS 352 (PT)" },
    { time: "1:00 PM", subject: "LUNCH" },
    { time: "2:00 PM", subject: "B1 L1" },
  ],
};
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];
export { time_table, daysOfWeek, timeSlots };
