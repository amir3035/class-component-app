import React, { useState } from "react";
import CourseList from "./CourseList";
import StudentClass from "./StudentClass";
import StudentFunctional from "./StudentFunctional";

//amir hussain
function App() {
  const [showCourses, setShowCourses] = useState(false);
  const [showStudents, setShowStudents] = useState(false);

  //mbjrhebjrtbuetchkltjrtjrevktrkthekthekjtherkthekjtherjther
  //kjhnfcechtjkvt
  //jchwekrhekrhe
  //wejcrhkwr
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Mount and Unmount Example</h1>

      <button onClick={() => setShowCourses(!showCourses)}>
        Toggle Course List
      </button>
       <br></br>
      <button onClick={() => setShowStudents(!showStudents)}>
        Toggle Student List
      </button>

      <hr />

      {showCourses && <CourseList />}

      {showStudents && <StudentClass />}

      <StudentFunctional />
    </div>
  );
}
export default App;
