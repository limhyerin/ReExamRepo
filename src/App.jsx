import React from "react";
import { useState } from "react";

function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  const [minAge, setMinAge] = useState(18);

  const inputMinAge = event => {
    setMinAge(event.target.value);
  }

  // TODO: filter를 사용하여 18세 이상의 학생들만 선택하세요.
  const filteredStudents = students.filter((student) => student.age >= minAge);

  // TODO: map을 사용하여 필터링된 학생들의 정보를 표시하세요.
  const onClickAgeGrade = filteredStudents.map((student, index) => {
    <li key ={index}>
      Age : {student.age}, Grade : {student.grade}
    </li>
  })

  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {/* TODO: map을 사용해서 filteredStudents를 여기에 렌더링하세요. */}
        {filteredStudents.map((student, index) => {
          <li key ={index}>
            name : {student.name}
          </li>
        })}
        {/* TODO: 학생이름을 클릭하면 나이와 점수가 alert 돼야 해요.*/}
        <button onClick={() => {
          alert();
        }}>{}</button>
      </ul>
    </div>
  );
}

export default App;
