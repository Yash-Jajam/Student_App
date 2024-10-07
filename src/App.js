import React, { useState } from 'react';

const App = () => {
  const [studentId, setStudentId] = useState('');
  const [schedule, setSchedule] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would normally fetch the schedule based on the student ID
    // For now, we will use a dummy schedule
    const dummySchedule = [
      {
        classId: 'INFO530',
        className: 'Intro to Computer Science',
        classDate: 'Monday & Wednesday',
        classTime: '5:30 - 6:45 PM',
        classLocation: 'Snead Hall B2125',
        syllabusUrl: 'https://example.com/syllabus/cs101.pdf',
      },
      {
        classId: 'MATH202',
        className: 'Calculus II',
        classDate: '2024-10-11',
        classTime: '1:00 PM - 2:30 PM',
        classLocation: 'Room 202',
        syllabusUrl: 'https://example.com/syllabus/math202.pdf',
      },
    ];

    setSchedule(dummySchedule);
  };

  return (
    <div>
      <h1>Student Schedule</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {schedule && (
        <div>
          <h2>Schedule:</h2>
          <ul>
            {schedule.map((classInfo) => (
              <li key={classInfo.classId}>
                <strong>Class ID:</strong> {classInfo.classId} <br />
                <strong>Class Name:</strong> {classInfo.className} <br />
                <strong>Date:</strong> {classInfo.classDate} <br />
                <strong>Time:</strong> {classInfo.classTime} <br />
                <strong>Location:</strong> {classInfo.classLocation} <br />
                <a href={classInfo.syllabusUrl} target="_blank" rel="noopener noreferrer">
                  <button>View Syllabus</button>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;