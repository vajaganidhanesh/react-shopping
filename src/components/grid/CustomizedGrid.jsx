import React from "react";

function CustomizedGrid(props) {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center">
        <table className="table table-dark w-50">
          <thead>
            <tr>
              {props.fields.map((data) => (
                <td>{data}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.map((item) => (
              <tr key={item}>
                {Object.keys(item).map((key) => (
                  <td key={key}>{item[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomizedGrid;
