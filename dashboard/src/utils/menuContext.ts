import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

export interface MenuContextData {
  open: boolean;
  toggleOpen: () => void;
}

export const MenuContext = createContext<MenuContextData | null>(null);

export function useMenuContextValue(): MenuContextData {
  const [open, setOpen] = useState(true);

  const toggleOpen = useCallback(() => setOpen(!open),[open]);
  
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

  return useMemo(() => ({
    open,
    toggleOpen
  }),[
    open,
    toggleOpen
  ])

}

export function useMenuContext() {
  const contextValue = useContext(MenuContext);
  if(!contextValue){
    throw new Error('useMenuContext must be used within the MenuContext.Provider');
  }
  return contextValue;
}

export default MenuContext;