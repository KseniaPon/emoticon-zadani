import Emoticon from './components/Emoticon/Emoticon'
import Configurator from './components/Configurator/Configurator';
import { SettingContext, SettingContextData } from './context/setting-context';
import { useState } from 'react';

const App = () => {
  const [settings, setSettings] = useState<SettingContextData>({
    eyes: 2,
    mouth: 1,
    color: 2
  })

  const changeEyes = (eyes: number) => {
    setSettings({...settings, eyes})
  }

  const changeMouth = (mouth: number) => {
    setSettings({...settings, mouth})
  }

  const changeColor = (color: number) => {
    setSettings({...settings, color})
  }

  return (
    <SettingContext.Provider value={{...settings, changeEyes, changeMouth, changeColor}}>
      <div className="container">
        <header>
          <h1>Vytvoř si vlastní emotikon</h1>
        </header>
        <main>
          <Emoticon />
          <Configurator />
        </main>
      </div>
    </SettingContext.Provider>
  )
}

export default App
