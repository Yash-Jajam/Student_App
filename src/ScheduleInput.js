import React, { useState } from 'react';

function ScheduleInput() {
  const [studentId, setStudentId] = useState('');
  const [schedule, setSchedule] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or fetch data from database using studentId
    // For demonstration purposes, we'll use a mock schedule
    const mockSchedule = {
      'Monday': [
        { time: '9:00 AM', course: 'Math', location: 'Room 101' },
        { time: '11:00 AM', course: 'Science', location: 'Room 202' },
      ],
      'Tuesday': [
        { time: '10:00 AM', course: 'English', location: 'Room 303' },
        { time: '2:00 PM', course: 'History', location: 'Room 404' },
      ],
    };
    setSchedule(mockSchedule);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Student ID:
        <input type="text" value={studentId} onChange={(event) => setStudentId(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ScheduleInput;