import { useState,ChangeEvent, useEffect } from "react";
import bgCard from "./images/bg-card-back.png";
import ftCard from "./images/bg-card-front.png";
import logo from "./images/card-logo.svg";
import completeLogo from "./images/icon-complete.svg"
import "./App.css";

function App() {
  const [cardNum, setCardNum] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvcNum, setCvcNum] = useState("");
  const [show,setShow] = useState(false)
  const [showForm,setShowForm] = useState(true)
  const [nameError, setnameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [dateError, setDateerror] = useState("");
  const initialState = {
    cardNum:"",
    name:"",
    month:"",
    year:"",
    cvcNum:""
  }
  const [formValues,setFormValues] = useState(initialState)
  //card owners name:
  const cardName = (e:ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    const {name,value} = e.target
    setFormValues({...formValues,[name]:value})
    console.log(formValues);
  }
  const card = (e:ChangeEvent<HTMLInputElement>) => {
setCardNum(e.target.value)
const {name,value} = e.target
setFormValues({...formValues,[name]:value})
  }
  const handleMonth = (e:ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value)
    const {name,value} = e.target
    setFormValues({...formValues,[name]:value})
  }
  const handleYear = (e:ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value)
    const {name,value} = e.target
    setFormValues({...formValues,[name]:value})
  }
  const handleCvc = (e:ChangeEvent<HTMLInputElement>) => {
    setCvcNum(e.target.value)
    const {name,value} = e.target
    setFormValues({...formValues,[name]:value})
  }

  function addSpaces(string:string) {
    const chunks = string.split("").reduce((result:string[], char, index) => {
      if (index % 4 === 0 && index > 0) {
        result.push(" "); 
      }
      result.push(char); 
      return result;
    }, []);
    return chunks.join("");
  }
  const space = addSpaces(cardNum);
  const refresh = () => window.location.reload()


  useEffect(() => {
    if (name.length === 0) {
      setnameError("Name is Required.");
    } else {
      setnameError("");
    }
    if (cvcNum.length === 0) {
      setCvcError("Can’t be blank");
    } else {
      setCvcError("");
    }
  });
  useEffect(() => {
    if (cardNum.length === 0) {
      setNumberError("number is required");
    } else {
      setNumberError("");
    }
    if (month.length === 0 && year.length === 0) {
      setDateerror("Can’t be blank");
    } else {
      setDateerror("");
    }
  });
  return (
    <div className="container">
      {showForm && (
        <>
        
        </>
      )}
      <div className="top-left">
        <p>{cvcNum ? cvcNum : "000"}</p>
      </div>
      <div className="bg-card">
        <img src={bgCard} alt="" id="bg" className="size-card" />
        <img src={ftCard} alt="" id="ft" className="size-card" />
        <div className="bg-atributes">
       <img src={logo}alt="" id="logo" />
       <p id="card-number">{space ? space: "0000 0000 0000 0000"}</p>
      <div className="bottom-inf">
      <p id="btm-size">{name ? name : "JANE APPLESEED"}</p>
       <span><p id="btm-size">{month ? month : "00"}/{year ? year : "00"}</p></span>
      </div>
        </div>
 {showForm && (
  <>
         <div className="form-cont">
      <form action="">
      <label htmlFor="">Cardholder Name</label>
      <input type="text" id="top-inpts" onChange={cardName} maxLength={14}/>
      <p className="error">{nameError ? nameError : ""}</p>
      <label htmlFor="">Card Number</label>
      <input type="text" id="top-inpts" onChange={card} maxLength={16}/>
      <p className="error">{numberError ? numberError : ""}</p>
      <label htmlFor="">Exp. Date (MM/YY) <span id="cvc">cvc</span> </label>
      <div className="exp-date">
        <input type="text" id="exp-size" onChange={handleMonth} maxLength={2}/>
        <input type="text" id="exp-size" onChange={handleYear} maxLength={2}/>
        
        <input type="text" id="cvc-size" onChange={handleCvc} maxLength={3}/>
        
      </div>
      <div className="errors">
      <p id="date" className="error">{dateError ? dateError : ""}</p>
      <p id="cvc" className="error">{cvcError ? cvcError: ""}</p>
      </div>
     
      <button type="submit" id="submit" onClick={(e) => {
        setShow(!false)
        setShowForm(!true)
        e.preventDefault()
      }}>Submit</button>
     
      </form>
      </div>
  </>
 )}
      </div>

      {show && (
        <>
        <div className="completed">
        <img src={completeLogo} alt="" />
        <h1>THANK YOU!</h1>
        <p>We’ve added your card details</p>
        <button id="submit"onClick={refresh} >Continue</button>
        </div>
         
        </>
       
      )}
    </div>
  );
}

export default App;
