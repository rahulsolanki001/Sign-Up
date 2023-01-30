import { useState } from "react";
import "./form.css";
import Message from "./Message";


const Form=()=>{

    const [fname,setFName]=useState("");
    const [lname,setLName]=useState("");
    const [email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("")
    const [cPassword,setCPassword]=useState("");
    const [message,setMessage]=useState("")



    //post data to the server
    const postData=async(e)=>{
      const res=await fetch('http://localhost:5000/',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          fname:fname,
          lname:lname,
          username:username,
          email:email,
          password:password,
        })
      });
      const data=await res.json();
      if(!data){
        setMessage("Registration failed...Kindly Try Again!!");
       
      }else if(res.status===409){
        setMessage("User Already Exists !!...");
        document.getElementById("email").style.borderColor="#960018";
      }else{
        setMessage("Successfully Registered !!...")
        setFName("");
        setLName("");
        setEmail("");
        setUsername("");
        setPassword("");
        setCPassword("");
      }
    }


   
    //checking input...

    //check password for length and match
    const passwordCheck=()=>{
      if(password.length>0){
        if(password.length <8){
          return false;
        }
        if(password !==cPassword){
          return false;
        }
        return true;
      }
      
    }



    //check if email is valid
    const emailCheck=()=>{
      if(email.length>0){
        if(!email.includes("@")){
          return false;
        }
        else if(!email.includes(".")){
          return false;
        }
        else{return true;}
      }
      
    }

    
  //form submit  
  const onSubmit=async(e)=>{
    if(emailCheck()===false){
      document.getElementById("email").style.borderColor="#960018";
    }
    else if(emailCheck()===true){
      document.getElementById("email").style.borderColor="green";
      }
    if (passwordCheck()===false){
      alert("password does not match or password must be of atleast 8 characters!!..try again")
      document.getElementById("password").style.borderColor="#960018";
      document.getElementById("cPassword").style.borderColor="#960018";
    }
    
    //when the form is valid
    else{
      document.getElementById("password").style.borderColor="gray";
      document.getElementById("cPassword").style.borderColor="gray";
      document.getElementById("email").style.borderColor="gray";
      await postData();
      
      
    }
  }

    return (
        <div className="form-container">
        <div className="sign-in-container">
          <button id='sign-button'>SIGN IN</button>
        </div>  
        {message.length>0 ? <Message message={message}/> : null }
        <div className="sign-up-form-container">
          <h1>Explore & Experience</h1>
          <p>Get onto your most comfortable journey yet.All the way up.</p>
          <form method="POST">
            <div className='name-input'>
              <input type="text" value={fname}  onChange={(e)=>setFName(e.target.value)} required={true} placeholder='First Name' />
              <input type="text" value={lname}  onChange={(e)=>setLName(e.target.value)} placeholder='Last Name' />
            </div>
            <input type="email" value={email} id="email" onChange={(e)=>setEmail(e.target.value)} required={true} placeholder='Email' />
            <input type="text" value={username}  required={true} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' />
            <input type="password" id="password" value={password} required={true} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
            <input type="password" id="cPassword" value={cPassword} required={true} onChange={(e)=>setCPassword(e.target.value)} placeholder='Confirm Password' />
            <button type='button' id='submit' onClick={()=>onSubmit()}>GET STARTED</button>
          </form>
        </div>
      </div>
    )
}

export default Form;