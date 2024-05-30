import Emoticon from './components/Emoticon/Emoticon'
import Configurator from './components/Configurator/Configurator';
import { SettingContext, SettingContextData } from './context/setting-context';
import { useState } from 'react';

const App = () => {
const [settings, setSettings] = useState<SettingContextData>({
  eyes: 1,
  mouth: 1,
  color: 2
})

  return (
    <SettingContext.Provider value={settings}>
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
