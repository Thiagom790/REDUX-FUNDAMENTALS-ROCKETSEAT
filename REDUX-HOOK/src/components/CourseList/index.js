import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CourseList() {
  const courses = useSelector((state) => state.data);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch({ type: "ADD_COURSE", title: "GraphQl" });
  }

  return (
    <>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button onClick={addCourse}>Adicionar Curso</button>
    </>
  );
}

export default CourseList;
