import React, { useCallback } from 'react';
import usePersistedState from './utils/usePersistedState';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import MenuContext, {useMenuContextValue} from './utils/menuContext';

import GlobalStyle from './styles/global';
import SiderbarMenu from './components/SidebarMenu';
import Panel from './components/Panel';

const App = () => {
  const [theme, setTheme] = usePersistedState('theme',light);

  const toggleTheme = useCallback(() => {
    setTheme(theme => theme.title === 'light' ? dark : light);
  },[setTheme]);

  const menuContextValue = useMenuContextValue();

  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <GlobalStyle />
        <MenuContext.Provider value={menuContextValue}>
          <SiderbarMenu toggleTheme={toggleTheme}/>
        </MenuContext.Provider>
        <Panel />
      </div>
    </ThemeProvider>
  );
}

export default App;
