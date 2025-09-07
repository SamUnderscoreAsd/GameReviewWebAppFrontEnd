import React from "react"

export default function Alert({message}){

    return(
        <div className = "mx-auto my-3 bg-red-500 w-4/6 rounded-md">
            {message}
        </div>
    );

}