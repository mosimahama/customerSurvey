
import React from "react";
import { useNavigate } from "react-router-dom";
function Welcome(){

    const navigate= useNavigate();
    let handleStart=()=>{

        navigate('/survey')
    }
    return(
        <>
        <div>
            <h2>Welcome for Customer survey.</h2>
        </div>

        <button style={{width:"55%",marginLeft:"80px"}} onClick={handleStart}>Click to start the Survey </button>
        </>
    )
}

export default Welcome;