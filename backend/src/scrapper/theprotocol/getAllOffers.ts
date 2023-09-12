import puppeteer from 'puppeteer';
import { TheprotocolOffer } from './TheProtocolOffer.js';

export const getAllOffers = async () => {
  let browser: puppeteer.Browser | null = null;

  try {
    browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
    const version = await browser.version();
    console.log(version);
  } catch (err) {
    console.log(`While oppening browser occured error => ${err.message}`);
    return [];
  }

  console.log('Browser running...');
  let page: puppeteer.Page | null = null;
  try {
    page = await browser.newPage();
    await page.setJavaScriptEnabled(true);
    // await page.setExtraHTTPHeaders({
    //   Host: 'theprotocol.it',
    //   Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    //   Pragma: 'no-cache',
    //   Connection: 'keep-alive',
    //   Cookie:
    //     '_ga_Z6EL58B8FL=GS1.1.1694556523.1.0.1694556523.60.0.0; cf_clearance=qxoCa2gIQLaXZoC88ATO04SDjp6fnFw69FDbUKa.TUM-1694556608-0-1-28b0b84.66e4d439.558a5464-250.0.0; gp__cfXfiDZP=66; _cfuvid=pHButOC0QRMZ3KAKBU_poaL_I1rZYoBk0dPaGKGLUVw-1694556618040-0-604800000; gptrackCookie=bfc34f23-90ed-400f-y498-2355e5353b45; cp_core=1; cp_personalized=1; cp_comfortable=1; cp_advertisement=1; cp_watch=1; cp_social=1; cookiesPolicy=v3; gp_ab__relevance__13=B; _ga=GA1.2.1507821158.1694556524; _rdt_uuid=1694556523980.b2d08af7-3387-4108-a0dd-9c796c6751a5; _gid=GA1.2.1653235905.1694556525; _tt_enable_cookie=1; _ttp=Rrl29FDK9_RfjD_rLFQ-cyFiS9A; _hjSessionUser_2833973=eyJpZCI6Ijg2M2IwZjc4LTFjNWEtNTZlOC1hY2JkLTNjYjE2OTFiOWQ4YSIsImNyZWF0ZWQiOjE2OTQ1NTY1MjY4NTcsImV4aXN0aW5nIjpmYWxzZX0=; _hjFirstSeen=1; _hjIncludedInSessionSample_2833973=0; _hjSession_2833973=eyJpZCI6Ijc3ZTJjYmFjLTdlYTctNDE0Yy1hY2Y5LWM1ZDdhZWQ3ZGI3MCIsImNyZWF0ZWQiOjE2OTQ1NTY1MjY4NTgsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; ln_or=eyIzMTI3NzYyIjoiZCJ9; cto_bundle=jhWyZV9mJTJCMjV6SmlXM0dGTTlvNWJrbERmZEYxbDdnTEUxUVUzR1VTQ2ElMkJXWkRrb0dxbVJ2OWthM3hsSnh2aGlXUiUyRm11MFdjNkIlMkJwNHl1V0dERFRPVVVISDJ1SHhyaEslMkZzUDN3S0JrZUtPOXFBREIzdlVkV01wTE9VWko2MU9nbWJjeXBBS2Vaek9qYVdJQUtIR3NNQm9oUDhnJTNEJTNE',
    //   'Accept-Encoding': 'gzip, deflate, br',
    //   'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/117.0',
    //   'Accept-Language': 'pl,en-US;q=0.7,en;q=0.3',
    //   'Upgrade-Insecure-Requests': '1',
    //   'Sec-Fetch-Dest': 'document',
    //   'Sec-Fetch-Mode': 'navigate',
    //   'Sec-Fetch-Site': 'none',
    //   'Sec-Fetch-User': '?1',
    //   'Cache-Control': 'no-cache',
    // });
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
