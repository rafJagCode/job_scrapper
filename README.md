# Job Search _- IT job offers in one place_

Job Search is an web app which collects IT job offers from several websites, clears them from unnecessary information and presents them in an accessible way.

## [🔗 CLICK TO SEE IT LIVE](https://jobsearch.rafaljagielski.pl)

## Table of Contents

[⚓General Informations](#general-informations)

[⚓Technologies](#technologies)

[⚓Usage](#usage)

[⚓License](#license)

## General Informations

The application consists of a backend and frontend part.
The backend is responsible for obtaining information about job offers from other websites, unifying it into a common format and serving it via API.
The frontend part retrieves data from the backend, displays it in a simple form and adds the ability to filter and sort offers.
**At the moment, the application supports the following websites:**

[🔗Just Join It](https://justjoin.it/)<br>
[🔗Theprotocol](https://theprotocol.it/)<br>
[🔗Pracuj.pl](https://www.pracuj.pl/)

## Technologies

List of technologies used to build the app:

**Backend:**

<a href="https://www.typescriptlang.org/"> <img src="https://github.com/rafJagCode/tech_icons/blob/main/typescript.png?raw=true" width="30" height="30" style="vertical-align:middle"/> Typescript</a> - strongly typed programming language that builds on JavaScript.

<a href="https://nodejs.org"> <img src="https://github.com/rafJagCode/tech_icons/blob/main/nodejs.png?raw=true" width="30" height="30" style="vertical-align:middle"/> NodeJS</a> - open-source, cross-platform JavaScript runtime environment.

<a href="https://expressjs.com/"> <img src="https://github.com/rafJagCode/tech_icons/blob/main/expressjs.png?raw=true" width="30" height="30" style="vertical-align:middle"/> Express.js</a> - fast, unopinionated, minimalist web framework for Node.js.

<a href="https://pptr.dev/"> <img src="https://raw.githubusercontent.com/rafJagCode/tech_icons/01135de0f10196248f5472ee79bb8a826a553b7f/puppeteer.svg" width="30" height="30" style="vertical-align:middle"/> Puppeteer</a> - node.js library which provides a high-level API to control Chrome/ Chromium.

<a href="https://www.npmjs.com/package/node-cron"> <img src="https://raw.githubusercontent.com/rafJagCode/tech_icons/01135de0f10196248f5472ee79bb8a826a553b7f/cronjob.svg" width="30" height="30" style="vertical-align:middle"/> Node-Crone</a> - tiny task scheduler in pure JavaScript for node.js.

<a href="https://axios-http.com"> <img src="https://raw.githubusercontent.com/rafJagCode/tech_icons/01135de0f10196248f5472ee79bb8a826a553b7f/axios.svg" width="30" height="30" style="vertical-align:middle"/> Axios</a> - promise-based HTTP Client for node.js and the browser.

**Frontend:**

<a href="https://vuejs.org"> <img src="https://github.com/rafJagCode/tech_icons/blob/main/vue.png?raw=true" width="30" height="30" style="vertical-align:middle"/> Vue3</a> - an approachable, performant and versatile framework for building web user interfaces.

<a href=" https://vitejs.dev/"> <img src="https://raw.githubusercontent.com/rafJagCode/tech_icons/01135de0f10196248f5472ee79bb8a826a553b7f/vite.svg" width="30" height="30" style="vertical-align:middle"/> Vite</a> - frontend build tooling that significantly improves the frontend development.

<a href="https://vue-hero-icons.netlify.app"> <img src="https://raw.githubusercontent.com/rafJagCode/tech_icons/01135de0f10196248f5472ee79bb8a826a553b7f/heroicons.svg" width="30" height="30" style="vertical-align:middle"/> Heroicons</a> - a set of free MIT-licensed high-quality SVG icons as Vue functional components.

## Usage

![App Screenshot](./readme_images/job_search.png)

- $\color{magenta}{\textrm{Marked by purple rectangle are filtered offers.}}$
- $\color{green}{\textrm{Marked by green rectangle are available filters.}}$
- $\color{red}{\textrm{Marked by red rectangle are sorting options.}}$
- $\color{yellow}{\textrm{Marked by yellow rectangle are active filters.}}$

## Build Setup

- Clone repository

  ```sh
  git clone https://github.com/rafJagCode/job_scrapper.git
  ```

- Install dependencies

  ```sh
  (cd job_scrapper/backend && npm install)
  (cd job_scrapper/frontend/job_search_app && npm install)
  ```

- Create .env files

  ```sh
  cp job_scrapper/backend/.env.example job_scrapper/backend/.env
  cp job_scrapper/frontend/job_search_app/.env.example job_scrapper/frontend/job_search_app/.env.development
  cp job_scrapper/frontend/job_search_app/.env.example job_scrapper/frontend/job_search_app/.env.production
  ```

- Fill in .env files

  ```sh
  vim job_scrapper/backend/.env
  vim job_scrapper/frontend/job_search_app/.env.development
  vim job_scrapper/frontend/job_search_app/.env.production
  ```

- Build and serve backend

  ```sh
  (cd job_scrapper/backend && npm run build)
  (cd job_scrapper/backend && node dist/api/server.js)
  ```

- Serve develompment or build for production frontend

  ```sh
  (cd job_scrapper/frontend/job_search_app && npm run dev)
  (cd job_scrapper/frontend/job_search_app && npm run build)
  ```

## License

MIT

[typescript]: https://www.typescriptlang.org/
[node.js]: https://nodejs.org
[express.js]: https://expressjs.com/
[puppeteer]: https://pptr.dev/
[node-cron]: https://www.npmjs.com/package/node-cron
[axios]: https://axios-http.com
[vue3]: https://vuejs.org
[vite]: https://vitejs.dev/
[vue-uuid]: https://www.npmjs.com/package/vue-uuid
[heroicons-vue]: https://vue-hero-icons.netlify.app
