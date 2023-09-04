import { Offer } from '@my_types/Offer';
import axios, { AxiosInstance } from 'axios';
import { ref, Ref } from 'vue';

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
    return this.handleFetch('/offers') as Promise<{ data: Ref<null | Offer[]>; errorMessage: Ref<null | string> }>;
  }

  async getAllSkills() {
    return this.handleFetch('/skills') as Promise<{ data: Ref<null | string[]>; errorMessage: Ref<null | string> }>;
  }

  async getAllCities() {
    return this.handleFetch('/cities') as Promise<{ data: Ref<null | string[]>; errorMessage: Ref<null | string> }>;
  }

  async handleFetch(endpoint: string) {
    const data = ref<unknown>(null);
    const errorMessage = ref<null | string>(null);
    try {
      data.value = null;
      errorMessage.value = null;
      data.value = (await this.http.get(endpoint)).data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        errorMessage.value = 'Oops! Something went wrong while trying to get the information you requested. Please check your internet connection and try again.';
      } else errorMessage.value = 'Oops! Unexpected error occured. Please try again.';
    }
    return { data, errorMessage };
  }
}

export default OfferService;
