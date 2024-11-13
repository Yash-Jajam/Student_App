import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [studentId, setStudentId] = useState(''); // State to track the user input
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(false); // State to track loading status
  const [showSyllabus, setShowSyllabus] = useState([]); // State to track syllabus visibility
  const [showMap, setShowMap] = useState([]); // State to track map visibility

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
          // Set initial visibility states for syllabus and map
          setShowSyllabus(new Array(data.classes.length).fill(false));
          setShowMap(new Array(data.classes.length).fill(false));
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

  // Toggle syllabus visibility
  const toggleSyllabus = (index) => {
    setShowSyllabus((prevShowSyllabus) =>
      prevShowSyllabus.map((show, i) => (i === index ? !show : show))
    );
  };

  // Toggle map visibility
  const toggleMap = (index) => {
    setShowMap((prevShowMap) =>
      prevShowMap.map((show, i) => (i === index ? !show : show))
    );
  };

  // Show loading message if fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      <h2>Enter Your Student ID</h2>
      <input
        type="number"
        value={studentId}
        onChange={handleInputChange}
        placeholder="Enter Student ID"
        min="0"
      />
      <button onClick={handleFetchData}>Find Your Schedule</button>

      {studentData ? (
        <div>
          <h3>{studentData.name}'s Class Schedule</h3>
          <p><strong>Name:</strong> {studentData.name}</p>
          <p><strong>Email:</strong> {studentData.email}</p>

          <div className="class-cards-container">
            {studentData.classes.map((classItem, index) => (
              <div key={index} className="class-card">
                <p><strong>Course Name:</strong> {classItem.class_name}</p>
                <p><strong>Course Date:</strong> {classItem.class_date}</p>
                <p><strong>Course Time:</strong> {classItem.class_time}</p>
                <p><strong>Course Location:</strong> {classItem.class_location}</p>

                <button onClick={() => toggleSyllabus(index)}>
                  {showSyllabus[index] ? 'Hide Syllabus' : 'View Syllabus'}
                </button>
                {showSyllabus[index] && (
                  <div className="iframe-container">
                    <p><b>Course Syllabus:</b></p>
                    <iframe
                      src={${process.env.PUBLIC_URL}/${classItem.syllabus}.pdf}
                      title="Syllabus"
                      style={{ width: '100%', height: '400px', border: 'none' }}
                    />
                  </div>
                )}

                <button onClick={() => toggleMap(index)} style={{ marginTop: '10px' }}>
                  {showMap[index] ? 'Hide Map' : 'Show Map'}
                </button>
                {showMap[index] && (
                  <div className="iframe-container">
                    <p><b>Building Map:</b></p>
                    <img 
                      src={${process.env.PUBLIC_URL}/${classItem.map}.png}
                      alt={${classItem.map} map} 
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>Enter your Student ID to see your schedule.</div>
      )}
    </div>
  );
}

export default App;