import { useEffect, useState } from "react";

export function ClipBoard() {
  // const [msg, setMsg] = useState("");
  // const [date, setDate] = useState();
  // const [images] = useState([
  //   "assets/phone-1.png",
  //   "assets/phone-2.png",
  //   "assets/phone-3.png",
  //   "assets/phone-4.png",
  //   "assets/phone-5.png",
  //   "assets/phone-1.png",
  // ]);
  const [status, setstatus] = useState(1);
  const [loader, setLoader] = useState({ display: "none" });
  const [img, setImg] = useState({ display: "none" });

  // function handleCut() {
  //   setMsg("Removed - Copied to clipboard");
  // }
  // function handleCopy() {
  //   setMsg("Copied to Clipboard");
  // }
  // function handlePaste() {
  //   setMsg("Inserted from Clipboard");
  // }

  // function ShowTime() {
  //   const date = new Date();
  //   setDate(date.toLocaleTimeString());
  // }

  // function LoadImages() {
  //   count++;
  //   if (count == images.length) {
  //     count = 1;
  //   } else {
  //     console.log(images[count]);
  //     setImage(images[count]);
  //   }
  // }
  var count = 0;
  function loadTiming() {
    setstatus(count);
    if (count === 100) {
      setImg({ display: "block" });
      setLoader({ display: "none" });
    } else {
      count++;
      setstatus(count);
    }
  }
  function handleLoadClick() {
    setLoader({ display: "block" });
    setInterval(loadTiming, 200);
  }

  useEffect(() => {
    // setInterval(loadTiming, 200);
    // setInterval(ShowTime, 1000);
  }, []);

  return (
    <div className="container-fluid">
      {/* <textarea
        onCut={handleCut}
        onCopy={handleCopy}
        onPaste={handlePaste}
        name=""
        id=""
        cols="30"
        rows="4"
      ></textarea>
      <div>{msg} </div>
      <div>{date}</div>

      <div className="col-6">
        <img src={image} className="img-fluid" alt="" />
      </div> */}

      <div className="row" style={{ height: "90vh" }}>
        <div>
          <button className="btn btn-primary" onClick={handleLoadClick}>
            click{" "}
          </button>
        </div>
        <div className="col d-flex justify-content-center align-items-center flex-column">
          <img style={img} src="assets/phone-1.png" alt="" />
          <div style={loader}>
            <div className="spinner-border"></div>
            <p>{status} %</p>
            <p>loading...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
