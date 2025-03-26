import { CiSearch } from 'react-icons/ci';
import Rahul from '../../assets/rahul.jpeg';
import { Filter, statusFilter } from './Filter';

const ApplicationList = () => {
  return (
    <div className="col-span-5 flex h-full flex-col gap-4 px-4">
      {/* Title */}
      <div className="flex items-center justify-between px-2 py-2">
        <div className="">
          <h1 className="text-3xl font-[350]">Applications</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="border-line-secondary rounded-lg border-[1px] p-2">
            <CiSearch className="text-xl" />
          </div>

          <div className="border-thin border-line-secondary flex h-[45px] w-[45px] items-center justify-center rounded-full border">
            <img
              className="aspect-square rounded-full object-cover"
              src={Rahul}
              alt="profileImg"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-md font-normal">Rahul Dev Choudhari</h1>
            <p className="text-xs font-normal">rhymes17@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-start justify-between gap-2 px-2">
        <div className="flex items-start gap-2 px-2">
          <Filter title="Any Status" filterOptions={statusFilter} />
          <Filter title="Month" filterOptions={statusFilter} />
        </div>

        <Filter title="Sort By Date" filterOptions={statusFilter} />
      </div>
    </div>
  );
};

export default ApplicationList;
