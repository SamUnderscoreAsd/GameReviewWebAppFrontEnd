'use client'

import Alert from '@/components/alert';
import { redirect } from 'next/navigation';
import React from 'react'
import { useState } from 'react'

const LoginPage = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [alert, setAlert] = useState(false);
const [alertMessage, setAlertMessage] = useState('');

//email string len <= 320
//pass string len <= 100
// user string len <= 20

const handleSubmit = async (e) => {

    e.preventDefault()

    // console.log(username);
    // console.log(password);

    if(username.length > 20 || username.length < 1){
        setAlert(true);
        setAlertMessage('Please enter a valid username');
        return
    }
    if(password.length > 100 || password.length < 1){
        setAlert(true);
        setAlertMessage('Please enter a valid password');
        return
    }
    setAlert(false);
    try{
        const response = await fetch("http://localhost:3001/api/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/Json"
            },
            body: JSON.stringify({
                user: {
                    username : username,
                    password : password
                }
            }) 
        })

        const data = await response.json();
        if (data) {
            //meaning that if the use is properly authenticated
            console.log(data + "Sending user to home page");
            redirect("/");
        }
    }
    catch(e){
        if (e.digest?.includes("NEXT_REDIRECT")) {
          throw e;
        }
        console.error(e);
    }

}

  return (
    <div className = "p-20 m-auto min-h-screen w-full flex flex-row">
        <div className = "bg-white m-auto p-6 w-1/3 rounded-md">
            <div className = "text-black m-auto text-center">
                <div className = "text-4xl">
                    Login
                </div>
                <form onSubmit={handleSubmit}>
                <div className = "p-6">
                    <input 
                    id="userName" 
                    type="username" 
                    placeholder='Username' 
                    onChange = {(e) => setUsername(e.target.value)}
                    className="px-3 w-9/12 h-7 bg-gray-700 text-white rounded-md"></input>
                </div>
                <div className = "p-6">
                    <input 
                    id="password" 
                    type = "password" 
                    placeholder='Password' 
                    onChange = {(e) => setPassword(e.target.value)}
                    className="px-3 w-9/12 h-7 bg-gray-700 text-white rounded-md"></input>
                </div>
                {alert ? <Alert message={alertMessage}/> : null}
                <div>
                    <button type="submit" className = "bg-blue-500 p-3 mb-3 text-center rounded-md hover:bg-blue-600">Submit</button>
                </div>
                </form>
                <div>
                    <p>Don't have an account? <a className='hover:text-green-500' href="/account/register">Register Here!</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage