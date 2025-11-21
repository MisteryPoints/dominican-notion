import React from 'react';
import NewDocumentButton from './NewDocumentButton';
import {
  Drawer, 
  DrawerContent, 
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon } from 'lucide-react';

function Sidebar() {

    const menuOptions = (
        <>
            <NewDocumentButton />

            {/* My Documents */}

            {/* List.... */}

            {/* Shared with me */}
            

            {/* List.... */}

        </>
    )

    return (
        <div className='p-2 md:p-5 bg-gray-200 relative'>
            <div className='md:hidden'>
                <Drawer direction='left'>
                    <DrawerTrigger>
                        <MenuIcon className='p-2 hover:opacity-30 rounded-lg' size={40} /> 
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Menu</DrawerTitle>
                            <div>
                                {/* Options */}
                                {menuOptions}
                            </div>  
                        </DrawerHeader> 
                    </DrawerContent>
                </Drawer>
            </div>
            <div className="hidden md:inline">
                {menuOptions}
            </div> 
        </div>
    );
};

export default Sidebar;
