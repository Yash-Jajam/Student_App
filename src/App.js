import React, { useState } from 'react';
import students from './studentData';

function App() {
  const [studentId, setStudentId] = useState('');
  const [studentData, setStudentData] = useState(null);

  const handleInputChange = (e) => {
    setStudentId(e.target.value);
  };

  const fetchStudentData = () => {
    const student = students.find(s => s.id === parseInt(studentId));
    setStudentData(student || { message: 'Student not found!' });
  };

  return (
    <div className="App">
      <h1>Search for Student Schedule</h1>
      <input
        type="text"
        placeholder="Enter Your Student ID:"
        value={studentId}
        onChange={handleInputChange}
      />
      <button onClick={fetchStudentData}>Search</button>

      {studentData && (
        <div>
          {studentData.message ? (
            <p>{studentData.message}</p>
          ) : (
            <div>
              <h3>2024 Fall Schedule for {studentData.name}</h3>
              <p>Course ID: {studentData.classID}</p>
              <p>Course Name: {studentData.className}</p>
              <p>Course Date: {studentData.classDate}</p>
              <p>Course Time: {studentData.classTime}</p>
              <p>Course Location: {studentData.classLocation}</p>
              <p>Course Syllabus: {studentData.syllabus}</p>
              {/* Add the image below the schedule */}
              <img 
                src={`${process.env.PUBLIC_URL}/${studentData.map}.png`} 
                alt={`${studentData.map} map`} 
                style={{ width: '1000px', height: 'auto', marginTop: '20px' }} 
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;