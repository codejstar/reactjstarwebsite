import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= ()=>{
        console.log("uppercase button is click" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("text updated in uppercase");
    }

    const handleloClick= ()=>{
        console.log("lowercase button is click" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("text updated in lowercase");
    }
    const handleclearClick= ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("text is clear");
    }

    const handleOnChange= (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text ,setText] = useState("enter the text");
    return (
        <>
        <div className="container" style={{color:props.mode==='light'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange}id="mytext" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleloClick}>convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleclearClick}>clear text</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='light'?'white':'black'}}>
            <h1>Your text summery</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length}sec time to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something here to proview it"}</p>
            
        </div>
        </>
    )
}
