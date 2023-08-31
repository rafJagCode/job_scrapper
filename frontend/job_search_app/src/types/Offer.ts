export type Offer = {
  source: Source;
  title: string;
  cities: string[];
  work_modes: WorkMode[];
  experience_levels: ExperienceLevel[];
  published: Date;
  skills: string[];
  salary: {
    from: number;
    to: number;
  } | null;
};

export type Source = 'justjoinit' | 'theprotocol' | 'pracuj';
export type WorkMode = 'remote' | 'stationary' | 'hybrid';
export type ExperienceLevel = 'junior' | 'mid' | 'senior';
