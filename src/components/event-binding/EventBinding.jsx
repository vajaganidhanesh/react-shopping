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
  return (
    <div>
      <div className="container">
        <h2>Events</h2>
        <button
          id="btnInsert"
          name="clickButton"
          value={23}
          onClick={InsertClick}
        >
          Click
        </button>
      </div>
    </div>
  );
}

export default EventBinding;
