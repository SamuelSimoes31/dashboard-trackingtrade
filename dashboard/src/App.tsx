import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

import GlobalStyle from './styles/global';
import SiderbarMenu from './components/SidebarMenu';
import Panel from './components/Panel';

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <SiderbarMenu />
        <Panel />
      </div>
    </ThemeProvider>
  );
}

export default App;
