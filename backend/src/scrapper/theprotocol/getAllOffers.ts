import puppeteer from 'puppeteer';
import { TheprotocolOffer } from './TheProtocolOffer.js';

export const getAllOffers = async () => {
  let browser: puppeteer.Browser | null = null;

  try {
    browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  } catch (err) {
    console.log(`While oppening browser occured error => ${err.message}`);
    return [];
  }

  console.log('Browser running...');
  let page: puppeteer.Page | null = null;
  try {
    page = await browser.newPage();
    console.log('Created new page');
  } catch (err) {
    console.log(`While awaiting new page occured error => ${err.message}`);
    return [];
  }

  const offers: TheprotocolOffer[] = [];

  console.log('Scrapping theprotocol pages...');
  let currentPage = 0;
  let amountOfPages: number;
  do {
    currentPage += 1;
    console.log(`Scrapping page ${currentPage}...`);
    await page.goto(`https://theprotocol.it/praca?pageNumber=${currentPage}`);
    const html = await page.content();
    console.log(html);
    const scriptInfo = await getScriptInfo(page);
    offers.push(...scriptInfo.props.pageProps.offersResponse.offers);
    const paginationInfo = getPaginationInfo(scriptInfo);
    currentPage = paginationInfo.currentPage;
    amountOfPages = paginationInfo.amountOfPages;
  } while (currentPage !== amountOfPages);

  await browser.close();
  return offers;
};

type ScriptInfo = {
  props: {
    pageProps: {
      offersResponse: {
        page: {
          number: number;

          count: number;
        };
        offers: TheprotocolOffer[];
      };
    };
  };
};

const getScriptInfo = async (page: puppeteer.Page) => {
  let scriptInnerHtml: string | null = null;
  try {
    await page.waitForSelector('#__NEXT_DATA__', { timeout: 0 });
    console.log('__NEXT_DATA__ is in HTML DOM');
    scriptInnerHtml = await page.$eval('#__NEXT_DATA__', (el) => {
      console.log(el);
      return el.innerHTML;
    });
    console.log('Script info retrived successfully');
  } catch (err) {
    console.log(`While retriving script info occured error => ${err.message}`);
  }
  const scriptInfo: ScriptInfo = JSON.parse(scriptInnerHtml);
  return scriptInfo;
};

const getPaginationInfo = (scriptInfo: ScriptInfo) => {
  const { number: currentPage, count: amountOfPages }: { number: number; count: number } = scriptInfo.props.pageProps.offersResponse.page;
  return { currentPage, amountOfPages };
};
