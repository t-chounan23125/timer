import {React,  useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer;

function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeremaining] = useState(targetTime * 1000)
    
    const timerIsactive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    };

    function handleReset(){
        setTimeremaining(targetTime * 1000);
    };

    function handleStart(){
        timer.current = setInterval(() => {
            setTimeremaining( prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
        
    };

    function handleStop(){
        dialog.current.open();
        clearInterval(timer.current);
        
    };

    return (
        <>
         <ResultModal targetTime={targetTime} ref={dialog} remainingTime={timeRemaining} onReset={handleReset} />
            <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} 
                second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
            <button onClick={timerIsactive ? handleStop : handleStart}>
                {timerIsactive ? 'Stop' : 'Start'} Challenge
            </button>
            </p>
            <p className={timerIsactive ? 'active': undefined}>
                {timerIsactive ? 'Time is running...' : 'Timer inactive'}
                
            </p>
            
        </section>
        </>
        
      );
}

export default TimerChallenge;