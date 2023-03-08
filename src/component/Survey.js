import React, { useState, useRef } from "react";
import qBank from "../question";
import { useNavigate } from "react-router-dom";
function Survey() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [userInput, setUserInput] = useState()

    const navigate = useNavigate();
    const handleAnswerOptionClick = (e) => {

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < qBank.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
        
    };


    let handleChange = e => {
        const { name, value } = e.target;
        setUserInput((prev) => {
            return {
                ...prev,
                [qBank[currentQuestion].question]: value,
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

        const status = window.confirm("Are you sure you want to submit!")

        if (status) {
            const userData = { ...userInput, status: "COMPLETED" }
            localStorage.setItem(new Date().toString(), JSON.stringify(userData))
            setShowScore(true)
            setTimeout(() => {
                navigate('/')
            }, 5000)
        }

    }

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    <p>Thank You for your response</p>	<p>Your Survey is Completed</p>

                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{qBank.length}
                        </div>
                        <div className='question-text'>{qBank[currentQuestion].question}</div>
                    </div>
                    {

                        Array.isArray(qBank[currentQuestion].answers) &&
                        <div className='answer-section'>
                            {qBank[currentQuestion]?.answers?.map((answerOption, index) => (
                                <div key={index + qBank[currentQuestion].question}>
                                    <input type="radio" value={answerOption} name={qBank[currentQuestion].question} onChange={handleChange} />
                                    <label htmlFor={qBank[currentQuestion].question}>{answerOption}</label></div>

                            ))}
                        </div>
                    }
                    {

                        !Array.isArray(qBank[currentQuestion].answers) &&
                        <div className='answer-section'>
                            <textarea style={{ color: "black" }} rows={3} type="text"  id={qBank[currentQuestion].question} placeholder="" onChange={handleChange} />
                        </div>
                    }
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        {(currentQuestion > 0) && <button style={{ width: "21%" }} onClick={handlePrevious}>Previous</button>}
                        {(currentQuestion < qBank.length - 1) && <button onClick={handleAnswerOptionClick}>Next</button>}

                        {(currentQuestion === qBank.length - 1) && <button style={{ width: "20%" }} onClick={confirmBox}>Submit</button>}
                    </div>
                </>
            )}
        </div>
    );
}

export default Survey;