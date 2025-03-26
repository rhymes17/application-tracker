import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

type Filter = {
  icon: JSX.Element;
  title: string;
  onClick: () => void;
};

export const statusFilter: Filter[] = [
  {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'Applied',
    onClick: () => {},
  },
  {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'To Apply',
    onClick: () => {},
  },
  {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'Phone screen',
    onClick: () => {},
  },
  {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'Interview scheduled',
    onClick: () => {},
  },
  {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'Accepted',
    onClick: () => {},
  },
  {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'Rejected',
    onClick: () => {},
  },
];

export const Filter = ({
  title,
  filterOptions,
}: {
  title: string;
  filterOptions: Filter[];
}) => {
  const [isOptionModalOpen, setIsOptionModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutSideClick(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOptionModalOpen(false);
      }
    }

    document.addEventListener('mousedown', onOutSideClick);

    return () => document.addEventListener('mousedown', onOutSideClick);
  }, []);

  return (
    <div
      ref={ref}
      className="z-20 flex cursor-pointer flex-col gap-2"
      onClick={() => setIsOptionModalOpen((prev) => !prev)}
    >
      <div className="border-line-secondary flex min-w-[120px] items-center justify-between gap-4 rounded-lg border p-2">
        <p className="text-sm font-light">{title}</p>
        {isOptionModalOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isOptionModalOpen && (
        <div className="border-line-secondary max-w-[120px] rounded-lg border px-2 py-2">
          {filterOptions.map((filter, index) => (
            <FilterItem
              key={`${filter.title}:index`}
              icon={filter.icon}
              title={filter.title}
              isBottomBorderHidden={index === filterOptions.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;

const FilterItem = ({
  icon,
  title,
  isBottomBorderHidden,
}: {
  icon?: JSX.Element;
  title: string;
  isBottomBorderHidden?: boolean;
}) => {
  return (
    <div
      className={`border-line-secondary flex items-center gap-2 ${isBottomBorderHidden ? '' : 'border-b'} px-2 py-2`}
    >
      {icon && icon}
      <p className="flex-1 text-sm font-light">{title}</p>
    </div>
  );
};
