import React, { useState } from "react";
import qBank from "../question";
import DialogBox from "./Dialog";
import lodash from "lodash";

function Survey() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userInput, setUserInput] = useState({});
    const [finalData, setFinalData] = useState();
    const [isShown, setIsShown] = useState(false);
   
    const handleNextButtonClick = (e) => {
       
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < qBank.length) {
            setCurrentQuestion(nextQuestion);
        } 
        
    };


    let handleChange = e => {
        const { name, value } = e.target;
        setUserInput((prev) => {
            return {
                ...prev,
                [qBank[currentQuestion].questionId]: value,
            }
        })
       
    };
    let handlePrevious = () => {
        const nextQuestion = currentQuestion - 1;
        if (nextQuestion < qBank.length) {
            setCurrentQuestion(nextQuestion);
        }
    }


    let confirmBox = () => {
        setIsShown(true)
        const userData = { ...userInput, status: "COMPLETED" };
        setFinalData(userData);
    }

    return (
        <div className='app'>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{qBank.length}
                        </div>
                        <div className='question-text'>{qBank[currentQuestion].question}</div>
                    </div>
                    {

                        lodash.isFinite(qBank[currentQuestion].answers) &&
                        <div className='answer-section'>
                            {[...Array(qBank[currentQuestion]?.answers)].map((index) => (
                                <div key={qBank[currentQuestion].questionId + index}>
                                    <input type="radio"   value={index+1} name={qBank[currentQuestion]?.questionId} onChange={handleChange} />
                                    <label htmlFor={qBank[currentQuestion].question}>{index+1}</label></div>

                            ))}
                           
                        </div>
                    }
                    {

                        !lodash.isFinite(qBank[currentQuestion].answers) &&
                        <div className='answer-section'>
                            <textarea style={{ color: "black" }} rows={3} type="text"  id={qBank[currentQuestion]?.question} placeholder="" onChange={handleChange} />
                        </div>
                    }
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        {(currentQuestion > 0) && <button style={{ width: "21%" }} onClick={handlePrevious}>Previous</button>}
                        {(currentQuestion < qBank.length - 1) && <button onClick={handleNextButtonClick}>Next</button>}
                     
                        {
                        (currentQuestion === qBank.length - 1) && <button style={{ width: "20%" }} onClick={confirmBox}>Submit</button>
                        
                        }
                        { isShown && <DialogBox data={finalData} /> }
                    </div>
        </div>
    );
}

export default Survey;