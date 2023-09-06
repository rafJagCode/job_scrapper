import puppeteer from 'puppeteer';
import { PracujOffer } from './PracujOffer.js';

export const getAllOffers = async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.goto('https://www.pracuj.pl/praca/it%20-%20rozw%C3%B3j%20oprogramowania;cc,5016/programowanie;cc,5016003');

  const amountOfPages = await page.$$eval("[data-test='top-pagination-max-page-number'", (elements) => Number(elements[0].innerHTML));
  const mainScriptInfo = await getScriptInfo(page);
  const offers: PracujOffer[] = mainScriptInfo.props.pageProps.data.jobOffers.groupedOffers;

  for (let i = 2; i <= amountOfPages; i++) {
    await page.goto(`https://www.pracuj.pl/praca/it%20-%20rozw%C3%B3j%20oprogramowania;cc,5016/programowanie;cc,5016003?pn=${i}`);
    const scriptInfo = await getScriptInfo(page);
    offers.push(...scriptInfo.props.pageProps.data.jobOffers.groupedOffers);
  }

  await browser.close();

  return offers;
};

type ScriptInfo = {
  props: {
    pageProps: {
      data: {
        jobOffers: {
          groupedOffers: PracujOffer[];
        };
      };
    };
  };
};

const getScriptInfo = async (page: puppeteer.Page) => {
  const scriptInnerHtml = await page.$$eval('#__NEXT_DATA__', (elements) => elements[0].innerHTML);
  const scriptInfo: ScriptInfo = JSON.parse(scriptInnerHtml);
  return scriptInfo;
};
