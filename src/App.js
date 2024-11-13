import React, { useState, useEffect } from 'react';

function App() {
  const [studentId, setStudentId] = useState(''); // State to track the user input
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(false); // State to track loading status

  // Fetch student data when the button is pressed
  const handleFetchData = () => {
    if (studentId) {
      setLoading(true); // Start loading
      fetch(http://localhost:3000/users?student_id=${studentId})
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
      <h2>Enter Your Student ID</h2>
      <input
        type="number"
        value={studentId}
        onChange={handleInputChange}
        placeholder="Enter student ID"
        min="0"
      />
      <button onClick={handleFetchData}>Find Your Schedule</button>

      {studentData ? (
        <div>
          <h3>{studentData.name}'s Class Schedule</h3>
          <p><strong>Name:</strong> {studentData.name}</p>
          <p><strong>Email:</strong> {studentData.email}</p>

          {studentData.classes && studentData.classes.length > 0 ? (
            <div>
              {studentData.classes.map((classItem, index) => (
                <div key={index} style={{ margin: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
                  <h4>Class {index + 1}</h4>
                  <p><strong>Class Name:</strong> {classItem.class_name}</p>
                  <p><strong>Class Date:</strong> {classItem.class_date}</p>
                  <p><strong>Class Time:</strong> {classItem.class_time}</p>
                  <p><strong>Class Location:</strong> {classItem.class_location}</p>
                  <p><strong>Syllabus:</strong> {classItem.syllabus}</p>
                  <p><strong>Map:</strong> {classItem.map}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No classes found for this student.</p>
          )}
        </div>
      ) : (
        <div>Enter your Student ID to see your schedule.</div>
      )}
    </div>
  );
}

export default App;