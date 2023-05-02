import React from "react";

function EventBinding() {
  function InsertClick(e) {
    // document.write(`
    //     Button Id      :   ${e.target.id} <br>
    //     Button Name    :   ${e.target.name} <br>
    //     Button Value   :   ${e.target.id} <br>
    //     X Position     :   ${e.clientX} <br>
    //     Ctrl Key       :   ${e.ctrlKey} <br>

    //     `);
    for (var property in e.target) {
      document.write(`${property} : ${typeof e[property]} <br>`);
    }
  }

  // Rest parameters to handle multiple arugments in functions
  function restArguments(...args) {
    let [data, data2] = args;
    document.write(`${data} <br> ${data2.Name}`);
  }

  function spreadArguments(msg, data) {
    document.write(`${msg} <br> ${data.Name}`);
  }

  return (
    <div>
      <div className="container">
        <h2>Events</h2>
        <button
          id="btnInsert"
          name="clickButton"
          value={23}
          onClick={(e) => {
            InsertClick(e);
          }}
        >
          Click
        </button>

        <button
          className="ms-2"
          onClick={() => {
            restArguments("welcome", { Name: "Samsung TV" });
          }}
        >
          Rest Click
        </button>

        <button
          className="ms-2"
          onClick={() => {
            spreadArguments(...["welcome", { Name: "Samsung TV" }]);
          }}
        >
          Spread Click
        </button>
      </div>
    </div>
  );
}

export default EventBinding;
