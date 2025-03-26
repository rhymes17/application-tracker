import ApplicationList from './ApplicationList';

const Applications = () => {
  return (
    <div className="grid h-full grid-cols-7 py-2">
      <ApplicationList />
      <div className="col-span-2 h-full bg-red-400 px-4"></div>
    </div>
  );
};

export default Applications;
