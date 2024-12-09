import {React,  useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer;

function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();
    const [timerStarted, setTimerstarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false);

    

    function handleStart(){
        timer.current = setTimeout(() => {setTimerExpired(true); dialog.current.open()}, targetTime * 1000);
        setTimerstarted(true);
    }
    function handleStop(){
        clearTimeout(timer.current)
    };

    return (
        <>
        {timerExpired && <ResultModal targetTime={targetTime} ref={dialog} result="lost" />}
            <section className="challenge">
            <h2>{title}</h2>
            <p 
            className="challenge-time">
                {targetTime} 
            second{targetTime > 1 ? 's' : ''}

            </p>
            <p>
            <button onClick={timerStarted ? handleStop : handleStart}>
                {timerStarted ? 'Stop' : 'Start'} Challenge
            </button>
            </p>
            <p className={timerStarted ? 'active': undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
                
            </p>
            
        </section>
        </>
        
      );
}

export default TimerChallenge;