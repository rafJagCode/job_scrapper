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
  } catch (err) {
    console.log(`While awaiting new page occured error => ${err.message}`);
    return [];
  }

  try {
    await page.goto('https://theprotocol.it');
  } catch (err) {
    console.log(`While going to page https://theprotocol.it occured error => ${err.message}`);
    return [];
  }

  const mainScriptInfo = await getScriptInfo(page);
  let { currentPage, amountOfPages } = getPaginationInfo(mainScriptInfo);
  const offers: TheprotocolOffer[] = mainScriptInfo.props.pageProps.offersResponse.offers;

  console.log('Scrapping theprotocol pages...');
  for (let i = currentPage + 1; i <= amountOfPages; i++) {
    console.log(`Scrapping page ${i}...`);
    await page.goto(`https://theprotocol.it/?pageNumber=${i}`);
    const scriptInfo = await getScriptInfo(page);
    offers.push(...scriptInfo.props.pageProps.offersResponse.offers);
  }

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
  const scriptInnerHtml = await page.$$eval('#__NEXT_DATA__', (elements) => elements[0].innerHTML);
  const scriptInfo: ScriptInfo = JSON.parse(scriptInnerHtml);
  return scriptInfo;
};

const getPaginationInfo = (scriptInfo: ScriptInfo) => {
  const { number: currentPage, count: amountOfPages }: { number: number; count: number } = scriptInfo.props.pageProps.offersResponse.page;
  return { currentPage, amountOfPages };
};
