import { Offer } from '@my_types/Offer';
import { ApiError } from '@my_types/ApiError';
import useErrorDialog from '@components/error_dialog/composables/useErrorDialog';
import { uuid } from 'vue-uuid';
import axios, { AxiosInstance } from 'axios';
import { ref, Ref } from 'vue';

const { showError } = useErrorDialog();

class OfferService {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: import.meta.env.VITE_API,
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  async getAllOffers() {
    return this.handleFetch('/offers') as Promise<{ data: Ref<null | Offer[]>; error: Ref<null | ApiError> }>;
  }

  async getAllSkills() {
    return this.handleFetch('/skills') as Promise<{ data: Ref<null | string[]>; error: Ref<null | ApiError> }>;
  }

  async getAllCities() {
    return this.handleFetch('/cities') as Promise<{ data: Ref<null | string[]>; error: Ref<null | ApiError> }>;
  }

  async handleFetch(endpoint: string) {
    const data = ref<unknown>(null);
    try {
      data.value = null;
      data.value = (await this.http.get(endpoint)).data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        showError({ id: uuid.v4(), message: err.message });
      } else showError({ id: uuid.v4(), message: 'Oops! Unexpected error occured. Please try again.' });
    }
    return { data };
  }
}

export default OfferService;
// 'Oops! Unexpected error occured. Please try again.';
// 'Oops! Something went wrong while trying to get the information you requested. Please check your internet connection and try again.';
