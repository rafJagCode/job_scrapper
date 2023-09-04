export type Offer = {
  id: string;
  link: string;
  source: Source;
  title: string;
  cities: string[];
  workModes: WorkMode[];
  experienceLevels: ExperienceLevel[];
  published: string;
  skills: string[];
  salary: {
    from: number;
    to: number;
  } | null;
};

export type Source = 'justjoinit' | 'theprotocol' | 'pracuj';
export type WorkMode = 'remote' | 'stationary' | 'hybrid';
export type ExperienceLevel = 'junior' | 'mid' | 'senior';
