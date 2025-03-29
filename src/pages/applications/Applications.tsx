import { useState } from 'react';
import ApplicationList, { Application } from './ApplicationList';
import { MdOutlineClear } from 'react-icons/md';
import { AnimatePresence, motion } from 'motion/react';

const Applications = () => {
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);

  return (
    <motion.div
      layout
      className={`grid h-full ${selectedApplication ? 'grid-cols-7' : ''} py-2 transition-all duration-200 ease-in-out`}
    >
      <ApplicationList
        selectedApplication={selectedApplication}
        setSelectedApplication={setSelectedApplication}
      />

      <AnimatePresence>
        {selectedApplication && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.1,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.1,
            }}
            transition={{
              duration: 0.2,
            }}
            className="col-span-2 mr-2 h-full rounded-md bg-white px-4"
          >
            <MdOutlineClear
              onClick={() => {
                setSelectedApplication(null);
              }}
              className="cursor-pointer text-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Applications;
