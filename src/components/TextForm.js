import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        //console.log('inside handle onChange')
        setText(event.target.value)
    }

    const handleUpperCase = () => {
        //console.log("inside handleUpperCase")
        let upperText = text.toLocaleUpperCase()
        setText(upperText)
        props.displayAlert("Converted to Upper case!", "success")
    }

    const handleLowerCase = () => {
      let lowerText = text.toLocaleLowerCase()
        setText(lowerText)
        props.displayAlert("Converted to Lower case!", "success")
    }

    const handleReset = () => {
      setText("")
      props.displayAlert("Cleared text!", "success")
    }

    const setStyle = (modes) => {
      switch (modes) {
        case 'primary':
          return { backgroundColor: '#e6ffee', color : 'white'}
        case 'warning':
          return { backgroundColor: '#e6ffee', color : 'white'}
        case 'danger':
          return { backgroundColor: '#e6ffee', color : 'white'}
        case 'success':
          return { backgroundColor: '#e6ffee', color : 'white'}
        default:
          return { backgroundColor: '#e6ffee', color : 'white'}
      }
    }

    const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{backgroundColor : props.mode === 'dark'?'#151B54':'white', color : props.mode === 'dark'?'white':'black'}}>
    {/* <div className='container' style={() => {setStyle(props.mode)}}> */}
        <h1>{props.heading}</h1>
        <div className="mb-3">
                <textarea value={text} className="form-control" onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#151B54':'white', color : props.mode === 'dark'?'white':'black'}} id="myText" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleReset}>Reset</button>
    </div>
    <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length===0?'Enter text above in text box to preview':text}</p>
      <p></p>
    </div>
    </>
  )
}
