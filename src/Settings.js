import ReactSlider from "react-slider";
import './slider.css'
import { useContext } from "react";
import SettingsContent from "./SettingsContent";

function Settings(){
    const settingsInfo = useContext(SettingsContent)
    return(
        <div style={{textAlign:'left'}}>
            <label>work minutes: {settingsInfo.workMinutes}:00</label>
            <ReactSlider
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.workMinutes}
                onChange={newValue => settingsInfo.setworkMinutes(newValue)}
                min={1}
                max={120}
            />
            <label>brake minutes: {settingsInfo.breakMinutes}:00</label>   
            <ReactSlider
                className={'slider green'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.breakMinutes}
                onChange={newValue => settingsInfo.setbreakMinutes(newValue)}
                min={1}
                max={120}
            /> 
        </div>
    );
}
export default Settings;