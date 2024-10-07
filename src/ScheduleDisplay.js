import React from 'react';

function ScheduleDisplay({ schedule }) {
  return (
    <div>
      {Object.keys(schedule).map((day) => (
        <div key={day}>
          <h2>{day}</h2>
          <ul>
            {schedule[day].map((course) => (
              <li key={course.time}>
                {course.time} - {course.course} ({course.location})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ScheduleDisplay;