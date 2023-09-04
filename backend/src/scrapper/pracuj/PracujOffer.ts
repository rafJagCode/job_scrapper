export type PracujOffer = {
  groupId: string;
  jobTitle: string;
  companyName: string;
  companyProfileAbsoluteUri: string;
  companyId: number;
  companyLogoUri: null | string;
  lastPublicated: string;
  expirationDate: string;
  salaryDisplayText: string;
  jobDescription: string;
  isSuperOffer: boolean;
  isFranchise: boolean;
  isOptionalCv: boolean;
  isOneClickApply: boolean;
  isJobiconCompany: boolean;
  offers: Offer[];
  positionLevels: PositionLevel[];
  typesOfContract: TypesOfContract[];
  workSchedules: WorkSchedule[];
  workModes: WorkMode[];
  primaryAttributes: PrimaryAttribute[];
  commonOfferId: null;
  searchEngineRelevancyScore: number;
  mobileBannerUri: null | string;
  desktopBannerUri: null | string;
  appliedProducts: any[];
};

export type Offer = {
  partitionId: number;
  offerAbsoluteUri: string;
  displayWorkplace: string;
  isWholePoland: boolean;
  appliedProducts: any[];
};

export type PositionLevel = 'Specjalista (Mid / Regular)' | 'Starszy specjalista (Senior)' | 'Młodszy specjalista (Junior)' | 'Ekspert' | 'Kierownik / Koordynator' | 'Asystent' | 'Menedżer' | 'Praktykant / Stażysta' | 'Dyrektor' | 'Prezes';

export type PrimaryAttribute = {
  code: Code;
  label: Label;
  model: Model;
};

export type Code = 'immediate-employment' | 'many-vacancies' | 'ukrainian-friendly' | 'ukrainian-without-polish-language';

export type Label = {
  text: Text;
  pracujPlText: Text;
  primaryTargetSiteText: Text;
};

export type Text = 'Immediate employment' | 'Praca od zaraz' | 'More than one vacancy' | 'Запрошуємо працівників з України' | 'Робота для іноземців' | 'Szukamy wielu kandydatów';

export type Model = {
  modelType: ModelType;
  flag: boolean;
  number?: number | null;
};

export type ModelType = 'flag' | 'flag-with-number';

export type TypesOfContract = 'Umowa o pracę' | 'Kontrakt B2B' | 'Umowa zlecenie' | 'Umowa o dzieło' | 'Umowa agencyjna' | 'Umowa na zastępstwo' | 'Umowa o staż / praktyki' | 'Umowa o pracę tymczasową';

export type WorkMode = 'Praca zdalna' | 'Praca hybrydowa' | 'Praca stacjonarna' | 'Praca mobilna';

export type WorkSchedule = 'Pełny etat' | 'Część etatu' | 'Dodatkowa / tymczasowa';
