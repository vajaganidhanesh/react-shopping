import React, { useState } from "react";
import CustomizedGrid from "./CustomizedGrid";
function Grid() {
  const [data] = useState([
    { firstName: "vajagani", secondName: "Dhanesh", Salary: "33000" },
    { firstName: "Tim", secondName: "David", Salary: "45000" },
  ]);
  return (
    <div>
      <CustomizedGrid
        fields={["firstName", "secondName", "Salary"]}
        data={data}
      />
    </div>
  );
}

export default Grid;
