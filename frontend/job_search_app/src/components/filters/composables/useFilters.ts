import { reactive } from 'vue';

const filters = reactive({
  onlySpecifiedSalary: false,
  workModes: [],
  experienceLevels: [],
  skills: [],
  cities: [],
});

const useFilters = () => {
  const getFilterName = (type) => {
    switch (type) {
      case 'workMode': {
        return 'workModes';
      }
      case 'experiencLevel': {
        return 'experienceLevels';
      }
      case 'skill': {
        return 'skills';
      }
      case 'city': {
        return 'cities';
      }
      default: {
        return null;
      }
    }
  };

  const setOnlySpecificSalary = (value) => (filters.onlySpecifiedSalary = value);

  const isSelected = (type, value) => {
    return filters[getFilterName(type)].includes(value);
  };

  const addFilter = (type, value) => {
    filters[getFilterName(type)].push(value);
  };

  const removeFilter = (type, value) => {
    const filterName = getFilterName(type);
    filters[filterName] = filters[filterName].filter((el) => el !== value);
  };

  return { filters, addFilter, removeFilter, isSelected, setOnlySpecificSalary };
};

export default useFilters;
