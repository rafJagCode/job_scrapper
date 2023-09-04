import { WorkMode, ExperienceLevel } from './Offer';

export type Filters = {
  onlySpecifiedSalary: boolean;
  workModes: WorkMode[];
  experienceLevels: ExperienceLevel[];
  skills: string[];
  cities: string[];
};
