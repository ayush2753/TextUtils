import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to UpperCase!!!", "success")
  }

  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to LowerCase!!!", "success")
  }

  const handleClearClick = ()=>{
    // console.log("Clear was clicked" + text);
    let newText = (' ');
    setText(newText)
    props.showAlert("Cleared text!!!", "success")
  }
  const handleCopy = () => {
    var text = document.getElementById("my-Box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Data has been copied!!!", "success")
}

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("removed extra spaces", "success")
  }

  
  const handleOnChange = (event)=> {
    // console.log("on Change");
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  //text = "new text"; // wrong way to change the state
  // settext("new text"); //correct way to change the state
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white',color :props.mode==='dark'?'white':'black' }} id="my-Box" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper-case</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower-case</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text Summary</h2>
      <p>
        {text.split(" ").length} and {text.length} characters
      </p>
      <p>
        {0.008 * text.split(" ").length } minutes read
      </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
