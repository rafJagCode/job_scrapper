export type JustJoinItOffer = {
  slug: string;
  title: string;
  requiredSkills: string[];
  niceToHaveSkills: null;
  workplaceType: WorkplaceType;
  workingTime: WorkingTime;
  experienceLevel: ExperienceLevel;
  employmentTypes: EmploymentType[];
  categoryId: number;
  multilocation: Multilocation[];
  city: string;
  street: string;
  latitude: string;
  longitude: string;
  remoteInterview: boolean;
  companyName: string;
  companyLogoThumbUrl: string;
  publishedAt: string;
  openToHireUkrainians: boolean;
};

export type EmploymentType = {
  to: number | null;
  from: number | null;
  type: Type;
  to_chf: number | null;
  to_eur: number | null | string;
  to_gbp: number | null;
  to_pln: number | null | string;
  to_usd: number | null | string;
  currency: Currency;
  from_chf: number | null;
  from_eur: number | null | string;
  from_gbp: number | null;
  from_pln: number | null | string;
  from_usd: number | null | string;
  gross?: boolean;
};

export enum Currency {
  Eur = 'eur',
  Pln = 'pln',
  Usd = 'usd',
}

export enum Type {
  Any = 'any',
  B2B = 'b2b',
  MandateContract = 'mandate_contract',
  Permanent = 'permanent',
}

export enum ExperienceLevel {
  CLevel = 'c_level',
  Junior = 'junior',
  Mid = 'mid',
  Senior = 'senior',
}

export type Multilocation = {
  city: string;
  slug: string;
  street: string;
  latitude: number;
  longitude: number;
};

export enum WorkingTime {
  Freelance = 'freelance',
  FullTime = 'full_time',
  PartTime = 'part_time',
}

export enum WorkplaceType {
  Hybrid = 'hybrid',
  Office = 'office',
  Remote = 'remote',
}

export type Meta = {
  page: number;
  totalItems: number;
  totalPages: number;
  prevPage: number;
  nextPage: number;
};
