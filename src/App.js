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
      <h1>Search Student Details</h1>
      <input
        type="text"
        placeholder="Enter Student ID"
        value={studentId}
        onChange={handleInputChange}
      />
      <button onClick={fetchStudentData}>Get Student Details</button>

      {studentData && (
        <div>
          {studentData.message ? (
            <p>{studentData.message}</p>
          ) : (
            <div>
              <h3>Student Details</h3>
              <p>Name: {studentData.name}</p>
              <p>ClassID: {studentData.classID}</p>
              <p>ClassName: {studentData.className}</p>
              <p>ClassDate: {studentData.classDate}</p>
              <p>ClassTime: {studentData.classTime}</p>
              <p>Location: {studentData.classLocation}</p>
              <p>Syllabus: {studentData.syllabus}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
