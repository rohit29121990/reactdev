import React,{useState} from "react";


export default function TextFrom(props) {
const [text,setText]=useState('Enter Text Here');
// setText("Rohit Shukla");
const upperCase=()=>{
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to uppercase!","success");
};

const lowerCase=()=>{
  let newText = text.toLocaleLowerCase();
  setText(newText);
  props.showAlert("Converted to lowercase!","success");
};



const handleOnChange=(e)=>{
  setText(e.target.value);
 };

 const handleClearText=(e)=>{
   let newText = '';
    setText(newText);
    props.showAlert("Text cleared!","success");
 };

 const handleCopy=()=>{
  console.log("I am copy");
  var text = document.getElementById("mybox");
  text.select();
  // text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges();
  props.showAlert("Text copied!","success");
}


const removerspaces=()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Clear!","success");
}


  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
     <h2 className="mb-4"> {props.heading}</h2>
      <div className="mb-3">
       <textarea
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}
          onChange={handleOnChange}
        />
      </div>
      <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={upperCase}>Conver to Uppercase</button>
      <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={lowerCase}>Conver to Lowercase</button>
      <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
      <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={removerspaces}>Remove Extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
