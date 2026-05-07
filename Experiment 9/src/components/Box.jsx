import React from "react";

const Box = (props) => {
    return (
        <div class="container">
            <h2>Registration form</h2>
            <input type="text" placeholder="Enter Name"/>
            <input type="mail" placeholder="Enter Email"/>
            <input type="password" placeholder="Enter Password"/>
            <button>Register</button>
        </div>
    )
}

export default Box