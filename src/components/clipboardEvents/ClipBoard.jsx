import { useState } from "react";

export function ClipBoard() {
  const [msg, setMsg] = useState("");

  function handleCut() {
    setMsg("Removed - Copied to clipboard");
  }
  function handleCopy() {
    setMsg("Copied to Clipboard");
  }
  function handlePaste() {
    setMsg("Inserted from Clipboard");
  }

  return (
    <div className="container-fluid">
      <textarea
        onCut={handleCut}
        onCopy={handleCopy}
        onPaste={handlePaste}
        name=""
        id=""
        cols="30"
        rows="4"
      ></textarea>
      <div>{msg} </div>
    </div>
  );
}
