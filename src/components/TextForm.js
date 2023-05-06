import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter your text here...");
    const handleOnChange=(e)=>{
        setText(e.target.value)
    }
    const handleUpperCase=()=>{
        let newText= text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to UpperCase",'success')
    }
    const handleLowerCase = () =>{
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("COnverted to Lower Case",'success')
    }
    const handleClearText=()=>{
        let newText= '';
        setText(newText);
        props.showAlert("Text Cleared",'success')
    }
    const handleCopyText=()=>{
        var copyText = document.getElementById("textarea1");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        // Alert the copied text
        // alert("Copied the text: " + copyText.value);
        props.showAlert("Text Copies",'success')
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    // const wordsCount =()=>{
    //     if(document.getElementById("textarea1").value !== ''){
    //         var text = document.getElementById("textarea1").value;
    //         console.log(text)
    //         var count = 0;
    //         var split = text.split(' ');
    //         for (var i = 0; i < split.length; i++) {
    //         if (split[i] !== "") {
    //         count ++;
    //         console.log(count)
    //              }
    //         }
    //         return count; 
    //     }
       
    // }
  return (
    <>
   <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea value={text} onChange={handleOnChange} className="form-control my-3" id="textarea1" rows="9"></textarea>
        <button type="button" className="btn btn-primary mx-3" onClick={handleUpperCase}>Upper Case</button>
        <button type="button" className="btn btn-secondary mx-3" onClick={handleLowerCase}>Lower Case</button>
        <button type="button" className="btn btn-success mx-3" onClick={handleClearText}>Clear text</button>
        <button type="button" className="btn btn-danger mx-3" onClick={handleCopyText}>Copy text</button>
        <button type="button" className="btn btn-warning mx-3" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>wordsCount
    <div className='container my-3'>
        <p> Total words: 
                        {/* {text.split(" ").length} & letters: {text.length} */}

            {/* {wordsCount()} */}
            </p>
        <p>Time to read {0.008 * text.split(" ").length}</p>
        <h3>Preview:</h3>
        <p>{text.length>0?text:'Enter your text in textarea to preview it...'}</p>
    </div>

    </>
    
  )
}
