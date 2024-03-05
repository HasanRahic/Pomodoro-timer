import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from "./playButton"
import PauseButton from "./pauseButton"
import SettingsButton from "./settingsButton";
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from './SettingsContent';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer() {
    const settingsInfo = useContext(SettingsContext);
    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState('work');
    const [secondsLeft, setsecondsLeft] = useState(0)
    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);




    function initTimer() {
        setsecondsLeft(settingsInfo.workMinutes * 60);
    }
    function switchMode(){
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes * 60 : breakMinutes * 60)
        setMode(nextMode);
        modeRef.current = nextMode;
        setsecondsLeft(nextSeconds);
        secondsLeft.current = nextSeconds;
    }

    function tick(){
        secondsLeftRef.current--;
        setsecondsLeft(secondsLeftRef.current);
    }

    useEffect(()=>{
        initTimer();

        setInterval(() => {
            if(isPausedRef.current){
                return;
            }
            if(secondsLeftRef.current === 0){
                return switchMode();
            }

            tick();
        },1000)
    },[settingsInfo]);


    return(
        <div>
            <CircularProgressbar value={60} text={`60%`} styles={buildStyles({
                textColor: '#fff',
                pathColor: red,
                tailColor: 'rgba(255,255,255,.2)',
            })}/>
            <div style={{marginTop:'20px'}}>
                {isPaused ? <PlayButton/> : <PauseButton/>}
            </div>
            <div style={{marginTop:'20px'}}>
                <SettingsButton onClick={()=> settingsInfo.setshowSettings(true)} />
            </div>
        </div>
    )
}

export default Timer