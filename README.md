# $\color{orange}{Job\ Search}$ _- IT job offers in one place_

Job Search is an web app which collects IT job offers from several websites, clears them from unnecessary information and presents them in an accessible way.

## [🔗 CLICK TO SEE IT LIVE](https://jobsearch.rafaljagielski.pl)

## $\color{orange}{Table\ of\ Contents}$

⚓ [General Informations](#general-informations)<br>
⚓ [Technologies](#technologies)<br>
⚓ [Usage](#usage)<br>
⚓ [License](#license)

## $\color{orange}{General\ Informations}$

The application consists of a backend and frontend part.
The backend is responsible for obtaining information about job offers from other websites, unifying it into a common format and serving it via API.
The frontend part retrieves data from the backend, displays it in a simple form and adds the ability to filter and sort offers.
**At the moment, the application supports the following websites:**

🔗 [Just Join It](https://justjoin.it/)<br>
🔗 [Theprotocol](https://theprotocol.it/)<br>
🔗 [Pracuj.pl](https://www.pracuj.pl/)

## $\color{orange}{Technologies}$

List of technologies used to build the app:

**Backend:**

🔗 [typescript] - strongly typed programming language that builds on JavaScript.<br>
🔗 [node.js] - open-source, cross-platform JavaScript runtime environment.<br>
🔗 [express.js] - fast, unopinionated, minimalist web framework for Node.js.<br>
🔗 [puppeteer] - Node.js library which provides a high-level API to control Chrome/ Chromium over the DevTools Protocol.<br>
🔗 [node-cron] - tiny task scheduler in pure JavaScript for node.js.<br>
🔗 [axios] - promise-based HTTP Client for node.js and the browser.<br>

**Frontend:**

🔗 [typescript] - strongly typed programming language that builds on JavaScript.<br>
🔗 [vue3] - an approachable, performant and versatile framework for building web user interfaces.<br>
🔗 [axios] - promise-based HTTP Client for node.js and the browser.<br>
🔗 [vite] - frontend build tooling that significantly improves the frontend development.<br>
🔗 [vue-uuid] - uuid generator for vue.<br>
🔗 [heroicons-vue] - a set of free MIT-licensed high-quality SVG icons as Vue functional components.<br>

## $\color{orange}{Usage}$

![App Screenshot](./readme_images/job_search.png)

- $\color{green}{\textrm{Marked\ by\ green\ rectangle\ are\ available\ filters.}}$
- $\color{red}{\textrm{Marked\ by\ red\ rectangle\ are\ sorting\ options.}}$
- $\color{yellow}{\textrm{Marked\ by\ yellow\ rectangle\ are\ active\ filters.}}$
- $\color{#ff00ff}{\textrm{Marked\ by\ purple\ rectangle\ is\ list\ of\ job\ offers\ that\ meets\ selected\ filters.}}$

## $\color{orange}{License}$

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
