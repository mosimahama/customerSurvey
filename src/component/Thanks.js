
import React from "react";
import { useNavigate } from "react-router-dom";


function Success() {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/')
           }, 5000)

    return (
        <div className='score-section'>
            <p>Thank You for your response</p>	<p>Your Survey is Completed</p>
        </div>
    )
}

export default Success;