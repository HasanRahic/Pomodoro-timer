import './App.css';
import Timer from './timer';
import Settings from "./Settings";
import { useState } from 'react';
import SettingsContent from "./SettingsContent"



function App() {

  const [showSettings, setshowSettings] = useState(true);
  const [workMinutes, setworkMinutes] = useState(45);
  const [breakMinutes, setbreakMinutes] = useState(15);

  return (
    <main>
      <SettingsContent.Provider value ={{
        workMinutes,
        breakMinutes,
        setworkMinutes,
        setbreakMinutes,
      }}>
      {showSettings ? <Settings/>  : <Timer/>}
      </SettingsContent.Provider>
    </main>
  )
};

export default App;
