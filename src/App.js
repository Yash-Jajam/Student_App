import React, { useState } from 'react';
import students from './studentData';

function App() {
  const [studentId, setStudentId] = useState('');
  const [studentData, setStudentData] = useState(null);
  const [showSyllabus, setShowSyllabus] = useState([]); // Track multiple syllabuses
  const [showMap, setShowMap] = useState([]); // Track multiple maps

  const handleInputChange = (e) => {
    setStudentId(e.target.value);
  };

  const fetchStudentData = () => {
    const student = students.find((s) => s.id === parseInt(studentId));
    setStudentData(student || { message: 'Student not found!' });

    // Reset syllabus and map views when fetching new data
    if (student) {
      setShowSyllabus(new Array(student.classes.length).fill(false));
      setShowMap(new Array(student.classes.length).fill(false));
    }
  };
  // Toggle syllabus display for the specific class
  const toggleSyllabus = (index) => {
    setShowSyllabus((prevShowSyllabus) =>
      prevShowSyllabus.map((show, i) => (i === index ? !show : show))
    );
  };

  const toggleMap = (index) => {
    setShowMap((prevShowMap) =>
      prevShowMap.map((show, i) => (i === index ? !show : show))
    );
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

              {/* Flex container for displaying classes side by side */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {studentData.classes.map((classItem, index) => (
                  <div
                    key={index}
                    style={{
                      border: '1px solid #ccc',
                      padding: '20px',
                      width: '600px',
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <p><strong>Course ID:</strong> {classItem.classID}</p>
                    <p><strong>Course Name:</strong> {classItem.className}</p>
                    <p><strong>Course Date:</strong> {classItem.classDate}</p>
                    <p><strong>Course Time:</strong> {classItem.classTime}</p>
                    <p><strong>Course Location:</strong> {classItem.classLocation}</p>

                    {/* Button to toggle the syllabus */}
                    <button onClick={() => toggleSyllabus(index)}>
                      {showSyllabus[index] ? 'Hide Syllabus' : 'View Syllabus'}
                    </button>

                    {/* Conditionally render the syllabus iframe */}
                    {showSyllabus[index] && (
                      <div style={{ marginTop: '20px' }}>
                        <p><b>Course Syllabus:</b></p>
                        <iframe
                          src={`${process.env.PUBLIC_URL}/${classItem.syllabus}.pdf`}
                          title="Syllabus"
                          style={{ width: '100%', height: '400px', border: 'none' }}
                        />
                      </div>
                    )}

                    {/* Button to toggle the map */}
                    <button onClick={() => toggleMap(index)} style={{ marginTop: '10px' }}>
                      {showMap[index] ? 'Hide Map' : 'Show Map'}
                    </button>

                    {/* Conditionally render the map iframe */}
                    {showMap[index] && (
                      <div style={{ marginTop: '20px' }}>
                        <p><b>Building Map:</b></p>
                        <img 
                        src={`${process.env.PUBLIC_URL}/${classItem.map}.png`}  // Use classItem.map instead of studentData.map
                        alt={`${classItem.map} map`} 
                        style={{ width: '600px', height: 'auto', marginTop: '20px' }} 
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;