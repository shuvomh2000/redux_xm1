
import react, { useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {Form,Button} from "react-bootstrap";

function App() {

let [value,setValue] = useState ('')
let Dispatch = useDispatch()
const data = useSelector((item)=>item.typingtext)

let handleCnge = (e)=>{
  setValue(e.target.value)
}

let handleSubmit = (e)=>{
  e.preventDefault()
  Dispatch({type:"TYPING_TEXT",payload: value})
  setValue('')
}



  return (
   <>
      <div className="text-center">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handleCnge} type="text" placeholder="Enter email" value={value}/>
        </Form.Group>
  
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <h1>{data}</h1>
      </div>
   </>
  );
}

export default App;
