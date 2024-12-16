import React, { useState, createContext, PropsWithChildren } from 'react';

interface DrawerState {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

export const DrawerContext = createContext<DrawerState>({
  isDrawerOpen: false,
  toggleDrawer: () => {},
});

const DrawerProvider = ({ children }: PropsWithChildren) => {
  const [isDrawerOpen, setIsDrawerOepn] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOepn((prev) => !prev);
  };

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
