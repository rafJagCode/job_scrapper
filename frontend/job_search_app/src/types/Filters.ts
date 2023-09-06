import { WorkMode, ExperienceLevel } from './Offer';

export type Filters = {
  onlySpecifiedSalary: 'specified salary'[];
  workModes: WorkMode[];
  experienceLevels: ExperienceLevel[];
  skills: string[];
  cities: string[];
};
