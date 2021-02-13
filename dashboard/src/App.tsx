import React from 'react';

import GlobalStyle from './styles/global';
import SiderbarMenu from './components/SidebarMenu';
import Panel from './components/Panel';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <SiderbarMenu />
      <Panel />
    </div>
  );
}

export default App;
