import { useRef, useEffect } from "react";

function SmartInput(){
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  },[])

  function handleSubmit(e){
    e.preventDefault(e);
    console.log("input value", inputRef.current.value);
  }

  function handleClick(){
    inputRef.current.focus();
  }

  function handleClear(){
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  return (
   <div style={{ padding: "20px" }}>
      <h2>useRef Practice</h2>

      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type something..."
        />

        <br /><br />

        <button type="submit">Submit</button>
        <button type="button" onClick={handleClick}>
          Click
        </button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  )
}

export default SmartInput;