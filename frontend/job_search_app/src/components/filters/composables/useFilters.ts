import { Filters } from '@my_types/Filters';
import { reactive } from 'vue';

const filters = reactive({
  onlySpecifiedSalary: false,
  workModes: [],
  experienceLevels: [],
  skills: [],
  cities: [],
});

const useFilters = () => {
  const setOnlySpecificSalary = (value: boolean) => (filters.onlySpecifiedSalary = value);

  const isSelected = (type: Exclude<keyof Filters, 'onlySpecifiedSalary'>, value: string) => {
    const filter: string[] = filters[type];
    return filter.includes(value);
  };

  const addFilter = (type: Exclude<keyof Filters, 'onlySpecifiedSalary'>, value: string) => {
    const filter: string[] = filters[type];
    filter.push(value);
  };

  const removeFilter = (type: Exclude<keyof Filters, 'onlySpecifiedSalary'>, value: string) => {
    filters[type] = filters[type].filter((el: string) => el !== value);
  };

  return { filters, addFilter, removeFilter, isSelected, setOnlySpecificSalary };
};

export default useFilters;
