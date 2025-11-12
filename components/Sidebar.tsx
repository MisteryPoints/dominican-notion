import React from 'react';
import NewDocumentButton from './NewDocumentButton';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function Sidebar() {
  return (
    <div className='p-2 md:p-5 bg-gray-200 relative'>
        <Drawer direction='left'>
            <DrawerTrigger>Abrir</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>¿Estás seguro?</DrawerTitle>
                    <DrawerDescription>
                        Esta acción, no podrá deshacerse. Esto eliminarJ
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>Close</DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
        <div className="hidden md:inline">
            <NewDocumentButton />
        </div> 
    </div>
  );
};

export default Sidebar;
