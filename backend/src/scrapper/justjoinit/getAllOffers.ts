import puppeteer from 'puppeteer';
import { JustJoinItOffer, Meta } from './JustJoinItOffer.js';

export const getAllOffers = async () => {
  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setJavaScriptEnabled(true);

  const scrappingPromise = scrappOffers(page);

  await page.goto('https://justjoin.it');

  const offers = await scrappingPromise;

  await browser.close();

  return offers;
};

const scrappOffers = (page: puppeteer.Page): Promise<JustJoinItOffer[]> => {
  const offers: JustJoinItOffer[] = [];
  const scroller = new Scroller(page);

  return new Promise((resolve, reject) => {
    page.on('response', async (response) => {
      if (response.request().method().toUpperCase() != 'OPTIONS' && response.ok() && /https:\/\/api.justjoin.it\/v2\/user-panel\/offers/.test(response.url())) {
        const { data, meta }: { data: JustJoinItOffer[]; meta: Meta } = await response.json();
        if (!data || !meta) return;
        console.log(`Scrapping page ${meta.page}`);
        scroller.stopScrolling();
        offers.push(...data);
        if (!meta.nextPage) {
          scroller.stopScrolling();
          await new Promise((resolve) => setTimeout(resolve, 10000));
          resolve(offers);
          return;
        }
        scroller.startScrolling();
      }
    });
  });
};

class Scroller {
  private page: puppeteer.Page;
  private timer: NodeJS.Timeout | null;
  private scrollInterval: number;
  private scrollStep: number;

  constructor(page: puppeteer.Page, scrollInterval: number = 50, scrollStep: number = 100) {
    this.page = page;
    this.timer = null;
    this.scrollInterval = scrollInterval;
    this.scrollStep = scrollStep;
  }

  startScrolling() {
    this.timer = setInterval(() => {
      this.page.evaluate((scrollStep) => window.scrollBy(0, scrollStep), this.scrollStep);
    }, this.scrollInterval);
  }

  stopScrolling() {
    clearInterval(this.timer);
  }
}
