import { Offer } from '@my_types/Offer';
import axios, { AxiosInstance } from 'axios';

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

  async getAllOffers(): Promise<Offer[] | undefined> {
    try {
      return (await this.http.get('/offers')).data;
    } catch (e) {
      console.log(e);
    }
  }

  async getAllSkills(): Promise<string[] | undefined> {
    try {
      return (await this.http.get('/skills')).data;
    } catch (e) {
      console.log(e);
    }
  }

  async getAllCities(): Promise<string[] | undefined> {
    try {
      return (await this.http.get('/cities')).data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default OfferService;
