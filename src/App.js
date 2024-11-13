import React, { useState, useEffect } from 'react';

function App() {
  const [studentId, setStudentId] = useState(''); // State to track the user input
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(false); // State to track loading status

  // Fetch student data when the button is pressed
  const handleFetchData = () => {
    if (studentId) {
      setLoading(true); // Start loading
      fetch(`http://localhost:3000/users?student_id=${studentId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Student data fetched:', data);
          setStudentData(data); // Set student data in state
          setLoading(false); // Stop loading
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
          setLoading(false); // Stop loading in case of an error
        });
    }
  };

  // Handle input changes for studentId
  const handleInputChange = (event) => {
    setStudentId(event.target.value);
  };

  // Show loading message if fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Enter Student ID</h2>
      <input
        type="number"
        value={studentId}
        onChange={handleInputChange}
        placeholder="Enter student ID"
        min="0"
      />
      <button onClick={handleFetchData}>Fetch Student Data</button>

      {studentData ? (
        <div>
          <h3>Student Class Schedule</h3>
          <p><strong>Name:</strong> {studentData.name}</p>
          <p><strong>Email:</strong> {studentData.email}</p>
          <p><strong>Class Name:</strong> {studentData.class_name}</p>
          <p><strong>Class Date:</strong> {studentData.class_date}</p>
          <p><strong>Class Time:</strong> {studentData.class_time}</p>
          <p><strong>Class Location:</strong> {studentData.class_location}</p>
          <p><strong>Syllabus:</strong> {studentData.syllabus}</p>
          <p><strong>Map:</strong> {studentData.map}</p>
        </div>
      ) : (
        <div>Enter a student ID to fetch their details.</div>
      )}
    </div>
  );
}

export default App;
