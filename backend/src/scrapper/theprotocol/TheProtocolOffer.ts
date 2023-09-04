export type TheprotocolOffer = {
  id: string;
  groupId: string;
  title: string;
  employer: string;
  employerId: string;
  logoUrl: string;
  offerUrlName: string;
  aboutProject: string[];
  workplace: Workplace[];
  positionLevels: PositionLevel[];
  typesOfContracts: TypesOfContract[];
  technologies: string[];
  new: boolean;
  publicationDateUtc: string;
  lastCall: boolean;
  language: Language;
  salary: TheprotocolOfferSalary | null;
  workModes: WorkMode[];
  immediateEmployment: boolean;
  isSupportingUkraine: boolean;
  addons: Addons;
  isFromExternalLocations: boolean;
};

export type Addons = {
  searchableLocations: any[];
  searchableRegions: SearchableRegion[];
  isWholePoland: boolean;
};

export type SearchableRegion = {
  name: Region;
};

export type Region =
  | 'wielkopolskie'
  | 'mazowieckie'
  | 'dolnośląskie'
  | 'łódzkie'
  | 'lubuskie'
  | 'Pomeranian'
  | 'Silesian'
  | 'Lesser Poland'
  | 'Greater Poland'
  | 'Łódź'
  | 'Masovian'
  | 'Lower Silesia'
  | 'pomorskie'
  | 'śląskie'
  | 'lubelskie'
  | 'małopolskie'
  | 'kujawsko-pomorskie'
  | 'opolskie'
  | 'podkarpackie'
  | 'podlaskie'
  | 'świętokrzyskie'
  | 'warmińsko-mazurskie'
  | 'zachodniopomorskie'
  | 'West Pomeranian'
  | 'abroad'
  | 'Podlaskie'
  | 'Kuyavia-Pomerania'
  | 'Świętokrzyskie'
  | 'Lublin'
  | 'Subcarpathia'
  | 'Lubusz'
  | 'Opole'
  | 'Warmian-Mazurian'
  | 'zagranica';

export type Language = 'pl' | 'en';

export type PositionLevel = {
  value: Value;
};

export type Value = 'mid' | 'expert' | 'manager' | 'senior' | 'junior' | 'lead' | 'trainee' | 'head' | 'blue collar' | 'assistant';

export type TheprotocolOfferSalary = {
  to: number;
  currency: Currency;
  timeUnit: TimeUnit;
};

export type Currency = 'zł';

export type TimeUnit = {
  shortForm: ShortForm;
  longForm: LongForm;
};

export type LongForm = 'miesięcznie' | 'monthly' | 'godzinowo' | 'hourly';

export type ShortForm = 'mies.' | 'mth.' | 'godz.' | 'hr.';

export type TypesOfContract = {
  id: number;
  salary: TypesOfContractSalary | null;
};

export type TypesOfContractSalary = {
  from: number;
  to: number;
  currencySymbol: Currency;
  timeUnitId: number;
  timeUnit: TimeUnit;
  kindName: KindName;
};

export type KindName = 'netto (+ VAT)' | 'net (+ VAT)' | 'brutto' | 'gross';

export type WorkMode = 'hybrydowa' | 'stacjonarna' | 'zdalna' | 'home office' | 'hybrid' | 'full office' | 'mobilna';

export type Workplace = {
  location: string;
  city: string;
  region: Region;
};
