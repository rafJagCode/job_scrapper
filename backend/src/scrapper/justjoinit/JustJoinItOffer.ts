export type JustJoinItOffer = {
  title: string;
  street: null | string;
  city: string;
  country_code: CountryCode | null;
  address_text: string;
  marker_icon: MarkerIcon;
  workplace_type: WorkplaceType;
  company_name: string;
  company_url: string;
  company_size: string;
  experience_level: ExperienceLevel;
  latitude: string;
  longitude: string;
  published_at: string;
  remote_interview: boolean;
  open_to_hire_ukrainians: boolean;
  id: string;
  display_offer: boolean;
  employment_types: EmploymentType[];
  company_logo_url: string;
  skills: Skill[];
  remote: boolean;
  multilocation: Multilocation[];
  way_of_apply: WayOfApply;
};

export type CountryCode =
  | 'PL'
  | 'US'
  | 'CZ'
  | 'SA'
  | 'UY'
  | 'RO'
  | 'MT'
  | 'TR'
  | 'DK'
  | 'AT'
  | 'GB'
  | 'CH'
  | 'IL'
  | 'SK'
  | 'CY'
  | 'PT'
  | 'HU'
  | 'SE'
  | 'DE'
  | 'LU'
  | 'BE'
  | 'FR'
  | 'ES'
  | 'UA'
  | 'LT'
  | 'LV'
  | 'FI'
  | 'NL'
  | 'RS'
  | 'GR'
  | 'BG'
  | 'AM'
  | 'NO'
  | 'SI'
  | 'ZA'
  | 'EE';

export type EmploymentType = {
  type: Type;
  salary: Salary | null;
};

export type Salary = {
  from: number;
  to: number;
  currency: Currency;
};

export type Currency = 'pln' | 'usd' | 'eur' | 'gbp';

export type Type = 'b2b' | 'permanent' | 'mandate_contract';

export type ExperienceLevel = 'senior' | 'mid' | 'junior';

export type MarkerIcon =
  | 'devops'
  | 'php'
  | 'data'
  | 'c'
  | 'security'
  | 'javascript'
  | 'pm'
  | 'admin'
  | 'testing'
  | 'analytics'
  | 'mobile'
  | 'support'
  | 'net'
  | 'python'
  | 'architecture'
  | 'java'
  | 'game'
  | 'other'
  | 'go'
  | 'ux'
  | 'ruby'
  | 'erp'
  | 'html'
  | 'scala';

export type Multilocation = {
  city: string;
  slug: string;
  street: null | string;
};

export type Skill = {
  name: string;
  level: number;
};

export type WayOfApply = 'redirect' | 'form';

export type WorkplaceType = 'partly_remote' | 'remote' | 'office';
