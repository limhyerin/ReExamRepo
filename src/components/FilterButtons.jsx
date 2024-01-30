import React from "react";

// TODO: FilterButtons 컴포넌트를 작성하세요. 필터링 옵션을 선택하는 버튼들을 포함해야 합니다.
// prev : useState의 이전값
function FilterButtons({setFilteredStudents, initialStudents}) {
  const filterByAge = (minAge) => {
    setFilteredStudents(function(prev) {
      return prev.filter((student) => student.age >= minAge)
    });
    // setFilteredStudents((prev) => 
    // prev.filter((student) => student.age >= minAge));
  };

  const filterByGrade = (grade) => {
    setFilteredStudents(function(prev) {
      return prev.filter((student) => student.grade === grade)
    });
  };
  
  const resetFilter = () => {
    setFilteredStudents(initialStudents);
  };

  return (
    <div>
      {/* 여기에 필터링 버튼들을 완성하세요. */}
      {/*받을 인자가 없을땐 중괄호 안에 그냥 작성하고 받을 인자가 있으면 화살표함수 사용해서 작성*/}
      <button onClick={() => filterByAge(18)}>18세 이상</button>
      <button onClick={() => filterByGrade("A")}>A등급</button>
      <button onClick={resetFilter}>필터 초기화</button>
    </div>
  );
}

export default FilterButtons;
