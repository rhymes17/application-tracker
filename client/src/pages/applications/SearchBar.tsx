import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineClear } from 'react-icons/md';

const SearchBar = ({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  return (
    <motion.div className={`relative flex items-center gap-2`}>
      <AnimatePresence>
        {isSearchBarActive && (
          <motion.div
            initial={{
              opacity: 0,
              width: 0,
            }}
            animate={{
              opacity: 1,
              width: '200px',
            }}
            transition={{
              duration: 0.4,
            }}
            exit={{
              opacity: 0,
              width: 0,
            }}
            className={`border-line-secondary search-bar-box-shadow -[top-2] absolute right-12 rounded-lg border-[1px] bg-white p-2`}
          >
            <motion.input
              className="w-full bg-transparent outline-none"
              type="text"
              placeholder="Search Application"
              value={searchValue}
              onChange={(e: any) => setSearchValue(e.target.value)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`border-line-secondary ${isSearchBarActive ? 'search-bar-box-shadow bg-white' : 'bg-transparent shadow-xl'} rounded-lg border-[1px] p-2`}
      >
        {isSearchBarActive ? (
          <AnimatePresence>
            <motion.div
              initial={{
                transform: 'rotate(180deg)',
              }}
              exit={{
                transform: 'rotate(180deg)',
              }}
            >
              <MdOutlineClear
                onClick={() => {
                  setIsSearchBarActive(false);
                  setSearchValue('');
                }}
                className="cursor-pointer text-xl"
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{
                transform: 'rotate(-180deg)',
              }}
              animate={{
                transform: 'rotate(0deg)',
              }}
              exit={{
                transform: 'rotate(180deg)',
              }}
            >
              <CiSearch
                onClick={() => setIsSearchBarActive(true)}
                className="cursor-pointer text-xl"
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
};

export default SearchBar;
