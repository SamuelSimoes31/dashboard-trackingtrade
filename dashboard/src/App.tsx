import React from 'react';

import GlobalStyle from './styles/global';
import SiderbarMenu from './components/SidebarMenu';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <SiderbarMenu />
    </div>
  );
}

export default App;
