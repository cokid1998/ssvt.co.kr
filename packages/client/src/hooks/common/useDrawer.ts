import { useContext } from 'react';
import { DrawerContext } from '@client/src/contexts/DrawerContext';

const useDrawer = () => useContext(DrawerContext);

export default useDrawer;
