export type FilterType<T> = {
  icon: JSX.Element;
  title: string;
  enum: T;
  color ?: string;
};

export const enum APPLICATION_STATUS {
  NONE,
  APPLIED,
  TO_APPLY,
  INTERVIEW,
  ACCEPTED,
  REJECTED,
}

const applicationStatus: Record<
  APPLICATION_STATUS,
  FilterType<APPLICATION_STATUS>
> = {
  [APPLICATION_STATUS.NONE]: {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'Any Status',
    enum: APPLICATION_STATUS.NONE,
  },
  [APPLICATION_STATUS.APPLIED]: {
    icon: <div className="h-3 w-3 rounded-full bg-[#f0da69]" />,
    title: 'Applied',
    enum: APPLICATION_STATUS.APPLIED,
    color: "#f0da69"
  },
  [APPLICATION_STATUS.TO_APPLY]: {
    icon: <div className="h-3 w-3 rounded-full bg-[#086b88]" />,
    title: 'To Apply',
    enum: APPLICATION_STATUS.TO_APPLY,
  },
  [APPLICATION_STATUS.INTERVIEW]: {
    icon: <div className="h-3 w-3 rounded-full bg-[#c9760a]" />,
    title: 'Interview',
    enum: APPLICATION_STATUS.INTERVIEW,
  },
  [APPLICATION_STATUS.ACCEPTED]: {
    icon: <div className="h-3 w-3 rounded-full bg-[#2fa110]" />,
    title: 'Accepted',
    enum: APPLICATION_STATUS.ACCEPTED,
  },
  [APPLICATION_STATUS.REJECTED]: {
    icon: <div className="h-3 w-3 rounded-full bg-[#df0808]" />,
    title: 'Rejected',
    enum: APPLICATION_STATUS.REJECTED,
  },
};

const statusFilter: FilterType<APPLICATION_STATUS>[] = [
  applicationStatus[APPLICATION_STATUS.TO_APPLY],
  applicationStatus[APPLICATION_STATUS.APPLIED],
  applicationStatus[APPLICATION_STATUS.INTERVIEW],
  applicationStatus[APPLICATION_STATUS.ACCEPTED],
  applicationStatus[APPLICATION_STATUS.REJECTED],
];

export const enum MONTHS {
  NONE,
  JAN,
  FEB,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPT,
  OCT,
  NOV,
  DEC,
}

const months: Record<MONTHS, FilterType<MONTHS>> = {
  [MONTHS.NONE]: {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'Month',
    enum: MONTHS.NONE,
  },
  [MONTHS.JAN]: {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'January',
    enum: MONTHS.JAN,
  },
  [MONTHS.FEB]: {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'February',
    enum: MONTHS.FEB,
  },
  [MONTHS.MARCH]: {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'March',
    enum: MONTHS.MARCH,
  },
  [MONTHS.APRIL]: {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'April',
    enum: MONTHS.APRIL,
  },
  [MONTHS.MAY]: {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'May',
    enum: MONTHS.MAY,
  },
  [MONTHS.JUNE]: {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'June',
    enum: MONTHS.JUNE,
  },
  [MONTHS.JULY]: {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'July',
    enum: MONTHS.JULY,
  },
  [MONTHS.AUGUST]: {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'August',
    enum: MONTHS.AUGUST,
  },
  [MONTHS.SEPT]: {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'September',
    enum: MONTHS.SEPT,
  },
  [MONTHS.OCT]: {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'October',
    enum: MONTHS.OCT,
  },
  [MONTHS.NOV]: {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'November',
    enum: MONTHS.NOV,
  },
  [MONTHS.DEC]: {
    icon: <div className="h-3 w-3 rounded-full bg-red-500" />,
    title: 'December',
    enum: MONTHS.DEC,
  },
};

const monthsFilter: FilterType<MONTHS>[] = [
  months[MONTHS.JAN],
  months[MONTHS.FEB],
  months[MONTHS.MARCH],
  months[MONTHS.APRIL],
  months[MONTHS.MAY],
  months[MONTHS.JUNE],
  months[MONTHS.JULY],
  months[MONTHS.AUGUST],
  months[MONTHS.SEPT],
  months[MONTHS.OCT],
  months[MONTHS.NOV],
  months[MONTHS.DEC],
];

export const enum ORDER {
  NONE,
  ASC,
  DESC,
}

const orders: Record<ORDER, FilterType<ORDER>> = {
  [ORDER.NONE]: {
    icon: <div className="" />,
    title: 'Sort By Date',
    enum: ORDER.NONE,
  },
  [ORDER.ASC]: {
    icon: <h3 className="text-sm text-green-600">a-z</h3>,
    title: 'Ascending',
    enum: ORDER.ASC,
  },
  [ORDER.DESC]: {
    icon: <h3 className="text-sm text-red-600">z-a</h3>,
    title: 'Decending',
    enum: ORDER.DESC,
  },
};

const orderFilter: FilterType<ORDER>[] = [
  orders[ORDER.ASC],
  orders[ORDER.DESC],
];

export const filterTypes = {
  applicationStatusFilter: {
    elementsObject: applicationStatus,
    valuesArray: statusFilter,
    noneValue: APPLICATION_STATUS.NONE,
  },
  monthFilters: {
    elementsObject: months,
    valuesArray: monthsFilter,
    noneValue: MONTHS.NONE,
  },
  orderFilters: {
    elementsObject: orders,
    valuesArray: orderFilter,
    noneValue: ORDER.NONE,
  },
};
