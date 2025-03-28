import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { APPLICATION_STATUS, FilterType, MONTHS, ORDER } from './utils';

export const Filter = <T extends APPLICATION_STATUS | MONTHS | ORDER>({
  selectedOption,
  setSelectedOption,
  filterType,
}: {
  selectedOption: T;
  setSelectedOption: React.Dispatch<React.SetStateAction<T>>;
  filterType: {
    elementsObject: Record<T, FilterType<T>>;
    valuesArray: FilterType<T>[];
    noneValue: T;
  };
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

    return () => document.removeEventListener('mousedown', onOutSideClick);
  }, []);

  const filterOptions = filterType.valuesArray;
  const noneValue = filterType.noneValue;

  return selectedOption === noneValue ? (
    <div
      ref={ref}
      className="z-20 flex cursor-pointer flex-col gap-2"
      onClick={() => setIsOptionModalOpen((prev) => !prev)}
    >
      <div className="border-line-secondary flex min-w-[120px] items-center justify-between gap-4 rounded-lg border p-2">
        <p className="text-sm font-light">
          {filterType.elementsObject[noneValue].title}
        </p>
        {isOptionModalOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isOptionModalOpen && (
        <div className="border-line-secondary min-w-[120px] rounded-lg border px-2 py-2">
          {filterOptions.map((filter, index) => (
            <FilterItem
              key={`${filter.title}:index`}
              icon={filter.icon}
              title={filter.title}
              isBottomBorderHidden={index === filterOptions.length - 1}
              onClick={() => setSelectedOption(filter.enum)}
            />
          ))}
        </div>
      )}
    </div>
  ) : (
    <div ref={ref} className="z-20 flex cursor-pointer flex-col gap-2">
      <div className="border-line-secondary flex min-w-[120px] items-center justify-between gap-4 rounded-lg border p-2">
        <p className="text-sm font-normal">
          {filterType.elementsObject[selectedOption].title}
        </p>
        <IoCloseCircleSharp
          onClick={() => setSelectedOption(noneValue)}
          className="text-red-500"
        />
      </div>
    </div>
  );
};

export default Filter;

const FilterItem = ({
  title,
  isBottomBorderHidden,
  icon,
  onClick,
}: {
  title: string;
  isBottomBorderHidden?: boolean;
  onClick: () => void;
  icon?: JSX.Element;
}) => {
  return (
    <div
      onClick={onClick}
      className={`border-line-secondary flex w-full items-center gap-2 ${isBottomBorderHidden ? '' : 'border-b'} px-2 py-2`}
    >
      {icon && icon}
      <p className="flex-1 text-sm font-light">{title}</p>
    </div>
  );
};
