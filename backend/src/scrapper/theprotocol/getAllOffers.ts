import puppeteer from 'puppeteer';
import { TheprotocolOffer } from './TheProtocolOffer.js';

export const getAllOffers = async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.goto('https://theprotocol.it');

  const mainScriptInfo = await getScriptInfo(page);
  let { currentPage, amountOfPages } = getPaginationInfo(mainScriptInfo);
  const offers: TheprotocolOffer[] = mainScriptInfo.props.pageProps.offersResponse.offers;

  for (let i = currentPage + 1; i <= amountOfPages; i++) {
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
