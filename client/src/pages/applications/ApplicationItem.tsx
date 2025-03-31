import { applicationStatus } from '../../utils/filterEnums';
import { Application } from './ApplicationList';

const ApplicationItem = ({
  application,
  selectedApplication,
  setSelectedApplication,
}: {
  application: Application;
  selectedApplication: Application | null;
  setSelectedApplication: React.Dispatch<
    React.SetStateAction<Application | null>
  >;
}) => {
  return (
    <div
      key={application.id}
      className={`transition-all ease-in-out duration-200 grid cursor-pointer grid-cols-7 grid-rows-1 gap-x-2 rounded-xl px-4 py-3 hover:scale-101 ${selectedApplication && selectedApplication.id === application.id ? 'scale-101 bg-white' : ''}`}
      onClick={() => setSelectedApplication(application)}
    >
      <div className="text-md col-span-1 flex items-center">
        {application.company}
      </div>
      <div className="text-md col-span-2 flex items-center">
        {application.position}
      </div>
      <div className="text-md col-span-1 flex items-center">
        <div
          style={{
            backgroundColor: applicationStatus[application.status].color,
          }}
          className="w-fit rounded-md px-2 py-1"
        >
          {applicationStatus[application.status].title}
        </div>
      </div>
      <div className="text-md col-span-2 flex items-center">
        {application.platform}
      </div>
      <div className="text-md col-span-1 flex items-center">
        {application.appliedDate}
      </div>
    </div>
  );
};

export default ApplicationItem;
