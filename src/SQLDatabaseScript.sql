use student_schedule;

CREATE TABLE students (
student_id INT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100),
phone VARCHAR(15)
);

CREATE TABLE classes (
class_id INT PRIMARY KEY,
class_name VARCHAR(100),
class_date VARCHAR(50),
class_time VARCHAR(50),
class_location VARCHAR(100),
map VARCHAR(100),
syllabus VARCHAR(100)
);

CREATE TABLE student_classes (
student_id INT,
class_id INT,
FOREIGN KEY (student_id) REFERENCES students(student_id),
FOREIGN KEY (class_id) REFERENCES classes(class_id),
PRIMARY KEY (student_id, class_id)
);

INSERT INTO students (student_id, name, email, phone)
VALUES
(100, 'Lydia Legan', 'lydia.legan@example.com', '123-456-7890'),
(101, 'David Dindo', 'david.dindo@example.com', '123-456-7891'),
(102, 'Yash Jajam', 'yash.jajam@example.com', '123-456-7892'),
(103, 'Kathy Smith', 'kathy.smith@example.com', '123-456-7893'),
(104, 'Michael Jackson', 'michael.jackson@example.com', '123-456-7894');

INSERT INTO classes (class_id, class_name, class_date, class_time, class_location, map, syllabus)
VALUES
(1, 'Systems Development', 'Monday & Wednesday', '5:30 - 6:45 PM', 'SneadHall B2145', 'S2', 'Info 530 Syllabus'),
(2, 'Data Communication', 'Monday', '7:00 - 9:45 PM', 'SneadHall B2175', 'S2', 'Info 520 Syllabus'),
(3, 'Ethics of IS', 'Tuesday', '4:00 - 5:30 PM', 'SneadHall B2177', 'S2', 'Info 535 Syllabus'),
(4, 'Principles of IS Security', 'Wednesday', '7:00 - 9:45 PM', 'MCV Campus', 'MCV', 'Info 544 Syllabus'),
(5, 'Database Systems', 'Tuesday & Thursday', '3:30 - 5:00 PM', 'Hibbs Hall A8143', 'MPC', 'Info 610 Syllabus');

INSERT INTO student_classes (student_id, class_id)
VALUES
(100, 1), -- Lydia Legan is in Systems Development
(101, 2), -- David Dindo is in Data Communication
(102, 3), -- Yash Jajam is in Ethics of IS
(103, 4), -- Kathy Smith is in Principles of IS Security
(104, 5); -- Michael Jackson is in Database Systems

select * from classes;
select * from student_classes;
SELECT * FROM students;