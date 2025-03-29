import { useEffect, useState } from 'react';
import Rahul from '../../assets/rahul.jpeg';
import { Filter } from './Filter/Filter';

import SearchBar from './SearchBar';
import { applicationsFromAPI } from '../../data';
import ApplicationItem from './ApplicationItem';
import {
  APPLICATION_STATUS,
  filterTypes,
  MONTHS,
  ORDER,
} from '../../utils/filterEnums';

export interface Application {
  id: number;
  company: string;
  position: string;
  status: APPLICATION_STATUS;
  appliedDate: string;
  platform: string;
  notes: string;
  link: string;
}

const ApplicationList = ({
  selectedApplication,
  setSelectedApplication,
}: {
  selectedApplication: Application | null;
  setSelectedApplication: React.Dispatch<
    React.SetStateAction<Application | null>
  >;
}) => {
  const [selectedApplicationStatus, setSelectedApplicationStatus] =
    useState<APPLICATION_STATUS>(APPLICATION_STATUS.NONE);
  const [selectedMonth, setSelectedMonth] = useState<MONTHS>(MONTHS.NONE);
  const [selectedSortFilter, setSelectedSortFilter] = useState<ORDER>(
    ORDER.NONE,
  );

  const [searchValue, setSearchValue] = useState('');

  const [applicationInView, setApplicationInView] =
    useState<Application[]>(applicationsFromAPI);

  useEffect(() => {
    let statusFilteredApplications = applicationsFromAPI;
    if (selectedApplicationStatus)
      statusFilteredApplications = applicationsFromAPI.filter(
        (application: Application) =>
          application.status === selectedApplicationStatus,
      );
    else {
      statusFilteredApplications = [...applicationsFromAPI];
    }

    let searchedValues = statusFilteredApplications;

    if (searchValue) {
      searchedValues = statusFilteredApplications.filter(
        (application: Application) =>
          application.company.includes(searchValue) ||
          application.position.includes(searchValue),
      );
    } else {
      searchedValues = [...statusFilteredApplications];
    }

    setApplicationInView(searchedValues);
  }, [selectedApplicationStatus, searchValue]);

  return (
    <div className="col-span-5 flex h-full flex-col gap-4 overflow-hidden px-4">
      {/* Title */}
      <div className="flex items-center justify-between px-2 py-2">
        <div className="">
          <h1 className="text-3xl font-[350]">Applications</h1>
        </div>
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          {/* User info */}
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
          <Filter
            selectedOption={selectedApplicationStatus}
            setSelectedOption={setSelectedApplicationStatus}
            filterType={filterTypes.applicationStatusFilter}
          />
          <Filter
            selectedOption={selectedMonth}
            setSelectedOption={setSelectedMonth}
            filterType={filterTypes.monthFilters}
          />
        </div>
        <Filter
          selectedOption={selectedSortFilter}
          setSelectedOption={setSelectedSortFilter}
          filterType={filterTypes.orderFilters}
        />
      </div>

      {/* Applications */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Coloumn Header */}
        <div className="grid grid-cols-7 px-4 py-2">
          <h3 className="text-md col-span-1">Company</h3>
          <h3 className="text-md col-span-2">Position</h3>
          <h3 className="text-md col-span-1">Status</h3>
          <h3 className="text-md col-span-2">Platform</h3>
          <h3 className="text-md col-span-1">Applied On</h3>
        </div>

        <div className="h-[1px] w-full px-4">
          <div className="bg-line-secondary h-full"></div>
        </div>

        <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
          {applicationInView.map((application: Application) => (
            <ApplicationItem
              application={application}
              selectedApplication={selectedApplication}
              setSelectedApplication={setSelectedApplication}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationList;
