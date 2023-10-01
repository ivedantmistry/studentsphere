// teacher.js

// Sample data for student attendance (you can replace this with actual data)
const studentAttendanceData = [
    { studentName: "Manjeet", present: true },
    { studentName: "Dheeraj", present: false },
    // Add more students and attendance status as needed
];

// Function to populate student attendance list
function populateStudentAttendance() {
    const studentAttendanceList = document.querySelector(".student-attendance-list");

    // Clear existing list items
    studentAttendanceList.innerHTML = "";

    // Loop through the student attendance data and create list items
    studentAttendanceData.forEach((student) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${student.studentName}: ${student.present ? "Present" : "Absent"}`;
        studentAttendanceList.appendChild(listItem);
    });
}

// Function to add a new student to the attendance list
function addStudentToAttendance(studentName, present) {
    studentAttendanceData.push({ studentName, present });
    populateStudentAttendance(); // Update the list
}

// Call the initial population function
populateStudentAttendance();

// Example usage: Add a new student to the attendance list
document.getElementById("add-student-button").addEventListener("click", () => {
    const studentName = prompt("Enter student name:");
    if (studentName) {
        addStudentToAttendance(studentName, true); // You can change 'true' to 'false' for absent
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const addResultButton = document.getElementById('add-result-button');
    const addResultForm = document.getElementById('add-result-form');
    const resultsList = document.getElementById('results-list');

    addResultButton.addEventListener('click', function () {
        // Show the result form when the button is clicked
        addResultForm.style.display = 'block';
    });

    addResultForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const studentName = document.getElementById('student-name').value;
        const resultType = document.getElementById('result-type').value;
        const resultFile = document.getElementById('result-file').files[0];

        // Create a list item to display the result
        const listItem = document.createElement('li');
        listItem.innerHTML = `Student: ${studentName}, Type: ${resultType}`;
        
        // Create a link to download the document
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(resultFile);
        downloadLink.download = `${studentName}_result.${resultFile.type.split('/')[1]}`;
        downloadLink.innerHTML = 'Download Result';

        listItem.appendChild(downloadLink);

        // Add the result to the list
        resultsList.appendChild(listItem);

        // Reset the form and hide it
        addResultForm.reset();
        addResultForm.style.display = 'none';
    });
});