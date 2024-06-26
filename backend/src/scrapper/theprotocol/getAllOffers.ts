import puppeteer from 'puppeteer';
import { TheprotocolOffer } from './TheProtocolOffer.js';
import dotenv from 'dotenv';
dotenv.config();

export const getAllOffers = async () => {
  let browser: puppeteer.Browser | null = null;

  try {
    browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', `--proxy-server=${process.env.PROXY}`] });
  } catch (err) {
    console.log(`While oppening browser occured error => ${err.message}`);
    return [];
  }

  let page: puppeteer.Page | null = null;
  try {
    page = await browser.newPage();
    await page.authenticate({
      username: process.env.PROXY_USER,
      password: process.env.PROXY_PASSWORD,
    });
    await page.setJavaScriptEnabled(true);
  } catch (err) {
    console.log(`While awaiting new page occured error => ${err.message}`);
    return [];
  }

  const offers: TheprotocolOffer[] = [];

  let currentPage = 0;
  let amountOfPages: number;
  do {
    currentPage += 1;
    console.log(`Scrapping page ${currentPage}...`);
    await page.goto(`https://theprotocol.it/praca?pageNumber=${currentPage}`);
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
    scriptInnerHtml = await page.$eval('#__NEXT_DATA__', (el) => {
      console.log(el);
      return el.innerHTML;
    });
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
