'use client'
import React from 'react'
import { useState } from 'react'

const LoginPage = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async (e) => {

    e.preventDefault()

    console.log(username);
    console.log(password);

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
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            console.log(data);
        })
        // .then(
        //     await fetch("http://localhost:3000/home",{
        //         method: "GET",
        //         headers: {
        //             "Content-Type": 
        //         }
        //     })
        // );
    }
    catch(e){
        console.error(e);
    }

}

  return (
    <div className = "p-20 h-full w-full">
        <div className = "bg-white m-auto p-6 h-[50rem] w-2/5 rounded-md">
            <div className = "text-black m-auto text-center ">
                Login
                <form onSubmit={handleSubmit}>
                <div className = "p-6">
                    <input 
                    id="userName" 
                    type="username" 
                    placeholder='Username' 
                    onChange = {(e) => setUsername(e.target.value)}
                    className="px-3 bg-gray-700 text-white rounded-md"></input>
                </div>
                <div className = "p-6">
                    <input 
                    id="password" 
                    type = "password" 
                    placeholder='Password' 
                    onChange = {(e) => setPassword(e.target.value)}
                    className="px-3 bg-gray-700 text-white rounded-md"></input>
                </div>
                <div>
                    <button type="submit" className = "bg-blue-500 px-3 text-center rounded-md">Submit</button>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage