import { ApiError } from '@my_types/ApiError';
import { ref } from 'vue';

const errors = ref<ApiError[]>([]);
const useErrorDialog = () => {
  return { errors, showError, hideError };
};

const showError = (error: ApiError) => {
  errors.value.push(error);
};

const hideError = (error: ApiError) => {
  errors.value = errors.value.filter((el) => el.id !== error.id);
};

export default useErrorDialog;
