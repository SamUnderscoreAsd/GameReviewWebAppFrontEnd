"use client";
import { redirect } from "next/navigation";
import React from "react";
import { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:3001/api/createUser";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            email: email,
            password: password,
          },
        }),
      });


      if (response.ok){
        console.log("response.ok = " + response.ok)
        redirect("/");
      }
    } catch (e) {
      if (e.digest?.includes("NEXT_REDIRECT")) {
          throw e;
        }
      console.error(e);
    }
  };

  return (
    <>
      <div className="p-20 m-auto min-h-screen w-full flex flex-row">
        <div className="bg-white m-auto p-6 w-1/3 rounded-md">
          <div className="text-black m-auto text-center ">
            <div className ="text-4xl">
              Register
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6">
                <input
                  id="userName"
                  type="username"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="px-3 w-9/12 h-7 bg-gray-700 text-white rounded-md"
                ></input>
              </div>
              <div className="p-6">
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3 w-9/12 h-7 bg-gray-700 text-white rounded-md"
                ></input>
              </div>
              <div className="p-6">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-3 w-9/12 h-7 bg-gray-700 text-white rounded-md"
                ></input>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 p-3 mb-3 text-center rounded-md hover:bg-green-500"
                >
                  Submit
                </button>
              </div>
            </form>
            <div>
              <p>
                Already have an account? <a className="hover:text-green-500" href="/account/login">Login Here!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
