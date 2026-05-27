import React from "react";

const Box = (props) => {
    return (
        <div class="container">
            <h2>Registration form</h2>
            <input type="text" placeholder="Enter Name" id="name"/>
            <input type="mail" placeholder="Enter Email" id="mail"/>
            <input type="password" placeholder="Enter Password" id="password"/>
            <button onClick={register}>Register</button>
        </div>
    )
}

export default Box