import React from 'react'
import './Login.css'
import Navbar from "../../components/Navbar/Navbar";
export default function Registration(){
  return (
    <>
    <Navbar/>
    <div className="loginBox">
    <img class="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px"/>
    <h3>Register here</h3>
    <form action="" method="post">
        <div className="inputBox">
            <input id="uname" type="text" name="Name" placeHolder="Name"/>
            <input id="uname" type="text" name="Email" placeHolder="Email"/>
            <input id="pass" type="password" name="Password" placeHolder="Password"/>
        </div>
        <input type="submit" name="" value="Login"/>
    </form>
        <h4>Already have an account?</h4>
    <div className="register">
        <a href="/AdminLogin">Sign in</a>
    </div>
</div>
</>
  )
}
