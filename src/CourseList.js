import React, { Component } from "react";
class CourseList extends Component {
  render() {
    const courses = [
      "Web Development",
      "React JS",
      "Cyber Security",
      "Data Structures",
      "Machine Learning"
    ];
    return (
      <div>
        <h2>COURSES: </h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default CourseList;
