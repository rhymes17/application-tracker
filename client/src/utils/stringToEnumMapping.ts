import { Application } from '../pages/applications/ApplicationList';
import { APPLICATION_STATUS } from './filterEnums';

const STATUS_MAP: Record<string, APPLICATION_STATUS> = {
  NONE: APPLICATION_STATUS.NONE,
  APPLIED: APPLICATION_STATUS.APPLIED,
  TO_APPLY: APPLICATION_STATUS.TO_APPLY,
  INTERVIEW: APPLICATION_STATUS.INTERVIEW,
  ACCEPTED: APPLICATION_STATUS.ACCEPTED,
  REJECTED: APPLICATION_STATUS.REJECTED,
};
export function toApplicationStatus(status: string): APPLICATION_STATUS {
  return STATUS_MAP[status] ?? APPLICATION_STATUS.NONE;
}

export function transformApiApplication(apiData: {
  id: number;
  company: string;
  position: string;
  status: string;
  appliedDate: string;
  platform: string;
  notes: string;
  link: string;
}): Application {
  return {
    id: apiData.id,
    company: apiData.company,
    position: apiData.position,
    status: toApplicationStatus(
      apiData.status.toUpperCase(),
    ) as APPLICATION_STATUS,
    appliedDate: apiData.appliedDate,
    platform: apiData.platform,
    notes: apiData.notes,
    link: apiData.link,
  };
}
