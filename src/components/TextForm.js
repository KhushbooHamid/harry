import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  };

  const handleLoClick = () => {

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");

  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };


  const handleClick = () => {
    // Split the text into an array of sentences using "." as the delimiter
    let sentences = text.split(".");
  
    // Iterate through each sentence in the array
    for (let i = 0; i < sentences.length; i++) {
      // Trim the leading and trailing spaces in each sentence
      sentences[i] = sentences[i].trim();
  
      // Check if the sentence is not empty
      if (sentences[i].length > 0) {
        // Capitalize the first letter of the first word in each sentence
        sentences[i] = sentences[i][0].toUpperCase() + sentences[i].substring(1);
      }
    }
  
    // Join the modified sentences into a string using "." as the delimiter
    // and update the state (setText) with the new string
    const newText = sentences.join(". ");
    setText(newText);
  }; 

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container"  style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClick}>
          Capitalize
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{Color: props.mode === 'dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
