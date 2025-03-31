import { useState } from 'react';
import { logoutItem, SidebarItem, sidebarItems } from './SidebarItem';
import { motion } from 'motion/react';

const Sidebar = () => {
  const [slidingBackgroundPosition, setSlidingBackgroundPosition] = useState({
    top: 0,
    height: 37,
    opacity: 0,
  });

  return (
    <div className="px-2 py-6 pr-4 h-full">
      {/* Logo */}
      <div className="flex items-center gap-4 px-6">
        <div className="h-[25px] w-[25px] rounded-md border-2"></div>
        <h1 className="text-2xl">Rahul</h1>
      </div>

      <div className="flex flex-col h-full pb-4">
        <div className="relative flex w-full flex-1 flex-col gap-2 py-10">
          {sidebarItems.map((sidebarItem) => (
            <SidebarItem
              key={sidebarItem.path}
              item={sidebarItem}
              setSlidingBackgroundPosition={setSlidingBackgroundPosition}
            />
          ))}

          <motion.div
            initial={{
              top: 0,
              opacity: 0,
            }}
            animate={slidingBackgroundPosition}
            className="bg-white-selected absolute w-full rounded-xl px-6 py-3 text-black"
          />
        </div>

        <SidebarItem key={logoutItem.title} item={logoutItem} />
      </div>
    </div>
  );
};

export default Sidebar;
