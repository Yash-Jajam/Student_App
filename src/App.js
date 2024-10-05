import React, { useState, useEffect } from 'react';

function App() {
  const [showNotification, setShowNotification] = useState(false);
  const [schedule, setSchedule] = useState(null);

function handleSubmit() {
    const fakeSchedule = [
      { name: "FIRE-623 FINANCIAL MANAGEMENT", date: "Wednesdays", time: "7:00 PM - 9:45 PM" },
      { name: "INFO-520 DATA COMMUNICATIONS", date: "Thursdays", time: "7:00 PM - 9:45 PM" },
      { name: "INFO-530 SYSTEMS DEVELOPMENT", date: "Mondays & Wednesdays", time: "5:30 PM - 6:45 PM" },
      { name: "INFO-610 ANALYSIS & DESIGN OF DATABASE SYSTEMS", date: "Tuesdays", time: "7:00 PM - 9:45 PM" },
	];
    setSchedule(fakeSchedule); //Set the schedule state with the fakeSchedule array
    setShowNotification(true); //Show the notification
  };

	function renderSchedule() { 
		return schedule.map((course, index) => (
			<li key={index}>
            {course.name} - {course.date} at {course.time} 
            </li>
        ));
	}; //Create lines in notification with each entry in fakeSchedule


  useEffect(() => {
    if (showNotification) { //Check if notification is shown, and turn it off after a set time
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000); // 5 seconds

      return () => clearTimeout(timer); // Reset timer
    }
  }, [showNotification]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Course Schedule</h1>
      <button onClick={handleSubmit}>Submit vNum</button>

      {showNotification && (
        <div style={{
          position: 'fixed', //Fixed position, not relative
          bottom: '20px',
          right: '20px',
          padding: '10px', //No cutoff on text
          backgroundColor: 'lightblue',
          border: '1px solid blue',
          borderRadius: '5px',
        }}>
          <h3>Your Schedule:</h3>
          <ul>
			{schedule && renderSchedule()}
          </ul>  
        </div> //Render the notification with the fakeSchedule array
      )}
    </div>
  );
}

export default App;
