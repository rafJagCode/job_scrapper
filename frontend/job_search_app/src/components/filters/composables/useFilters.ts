import { Filters } from '@my_types/Filters';
import { reactive } from 'vue';

const filters: Filters = reactive({
  onlySpecifiedSalary: [],
  workModes: [],
  experienceLevels: [],
  skills: [],
  cities: [],
});

const useFilters = () => {
  return { filters };
};

export default useFilters;
