import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {

      var response = await  axios.post("https://www.greatfrontend.com/api/questions/contact-form", {name, email, message},  function(err) {
        console.error("Error")
      })

      if (response.status === 200 || response.status === 201) {
        window.alert("Succesfully Submitted")
      }
  }

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);

  }
  

  const handleMssg = (e) => {
    setMessage(e.target.value);

  }
  
  return (
    <form >
      <input type="text" placeholder="Name" value={name} onChange={handleName}></input>
      <input type="text" placeholder="Email" value={email} onChange={handleEmail}></input>
      <textarea type="text" placeholder="Message.." value={message} onChange={handleMssg}></textarea>
      <button type="button" onClick={handleSubmit}>Send</button>
    </form>
  );
}

export default App;
