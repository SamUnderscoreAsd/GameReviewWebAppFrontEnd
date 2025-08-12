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
      <div className="p-20 h-full w-full">
        <div className="bg-white m-auto p-6 h-[50rem] w-2/5 rounded-md">
          <div className="text-black m-auto text-center ">
            Register
            <form onSubmit={handleSubmit}>
              <div className="p-6">
                <input
                  id="userName"
                  type="username"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="px-3 bg-gray-700 text-white rounded-md"
                ></input>
              </div>
              <div className="p-6">
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3 bg-gray-700 text-white rounded-md"
                ></input>
              </div>
              <div className="p-6">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-3 bg-gray-700 text-white rounded-md"
                ></input>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 px-3 text-center rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
            <div>
              <p>
                Already have an account? <a href="/account/login">Login Here!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
