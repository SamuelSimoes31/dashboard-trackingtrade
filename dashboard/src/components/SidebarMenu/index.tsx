import React, { useState, useEffect, useContext } from 'react';
import { Container, Bar } from './styles';
import { ThemeContext } from 'styled-components';

import Burger from './Burger';
import Menu from './Menu';
import Arrow from './Arrow';
import Switch from './Switch';

interface SidebarMenuProps {
  toggleTheme(): void;
}

const SidebarMenu = ( {toggleTheme} :SidebarMenuProps) => {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  }
  
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    if(width < 750 ) setOpen(false) ;
  },[width]);

  const { title } = useContext(ThemeContext);

  return (
    <Container open={open} >
      <Menu open={open}/>
      <Bar />
      <Burger toggleOpen={toggleOpen}/>
      <Arrow open={open}/>
      <Switch onChange={toggleTheme} initialState={title==='dark'}/>
    </Container>
    
  );
}

export default SidebarMenu;
