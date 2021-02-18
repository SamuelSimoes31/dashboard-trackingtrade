import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import SiderbarMenu from './components/SidebarMenu';
import Panel from './components/Panel';

const App = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme => theme.title === 'light' ? dark : light);
  },[]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <SiderbarMenu toggleTheme={toggleTheme}/>
        <Panel />
      </div>
    </ThemeProvider>
  );
}

export default App;
