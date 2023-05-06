import React, { useState } from "react";
import CustomizedGrid from "./CustomizedGrid";
function Grid() {
  const [data] = useState([
    { firstName: "vajagani", secondName: "Dhanesh", Salary: "33000" },
    { firstName: "Tim", secondName: "David", Salary: "45000" },
  ]);

  const [protectData] = useState([
    {
      Product: "Samsung TV",
      Cost: 49999,
    },
  ]);
  return (
    <div>
      <CustomizedGrid
        fields={["firstName", "secondName", "Salary"]}
        data={data}
        title={"Personal Data"}
      />
      <hr />
      <CustomizedGrid fields={["Product", "Cost"]} data={protectData} />
    </div>
  );
}

export default Grid;
