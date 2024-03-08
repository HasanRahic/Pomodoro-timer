import './App.css';
import Timer from './timer';
import Settings from "./Settings";
import { useState } from 'react';
import SettingsContent from "./SettingsContent"



function App() {

  const [showSettings, setshowSettings] = useState(false);
  const [workMinutes, setworkMinutes] = useState(15);
  const [breakMinutes, setbreakMinutes] = useState(5);

  return (
    <main>
      <SettingsContent.Provider value ={{
        showSettings,
        setshowSettings,
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
