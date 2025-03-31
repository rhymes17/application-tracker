import { RiHome5Line } from 'react-icons/ri';
import { AiOutlineStock } from 'react-icons/ai';
import { TbLogout2 } from 'react-icons/tb';
import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useLocation, useNavigate } from 'react-router';

type SidebarItem = { icon: JSX.Element; title: string; path: string };

export const sidebarItems = [
  {
    icon: <RiHome5Line className="text-2xl font-extralight" />,
    title: 'Dashboard',
    path: '/',
  },
  {
    icon: <AiOutlineStock className="text-2xl font-extralight" />,
    title: 'Applications',
    path: '/applications',
  },
];

export const logoutItem = {
  icon: <TbLogout2 className="text-2xl font-extralight" />,
  title: 'Log out',
  path: '/logout',
};

export const SidebarItem = ({
  item,
  setSlidingBackgroundPosition,
}: {
  item: SidebarItem;
  setSlidingBackgroundPosition?: React.Dispatch<
    React.SetStateAction<{
      top: number;
      height: number;
      opacity: number;
    }>
  >;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.pathname === item.path) {
      handleSelected();
    }
  }, [location]);

  const handleSelected = () => {
    if (!setSlidingBackgroundPosition) return;
    if (!ref.current) return;

    const { height } = ref.current.getBoundingClientRect();

    setSlidingBackgroundPosition({
      top: ref.current.offsetTop,
      height,
      opacity: 1,
    });
  };

  return (
    <motion.div
      ref={ref}
      onClick={() => navigate(`${item.path}`)}
      className="z-10 flex w-full items-center gap-4 px-6 py-3 mix-blend-difference cursor-pointer hover:scale-102 transition-all duration-200"
    >
      {item.icon}
      <h1 className="text-lg font-extralight">{item.title}</h1>
    </motion.div>
  );
};
