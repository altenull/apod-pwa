# Astronomy Picture Of the Day (APOD)

> This is a **Progressive Web App (PWA)** created with React & Redux. And it's working on firebase hosting. Please take a look. https://apod-pwa.firebaseapp.com/

<p align="center"><img src="https://apod-pwa.firebaseapp.com/icons/homeScreen-144.png"></p>

# About

**Feel the universe and Keep it.**

<p align="center"><img src="https://s3.ap-northeast-2.amazonaws.com/altenull/github/apod-pwa/screen-shot1.png"></p>

<p align="center"><img src="https://s3.ap-northeast-2.amazonaws.com/altenull/github/apod-pwa/screen-shot2.png"></p>

<p align="center"><img src="https://s3.ap-northeast-2.amazonaws.com/altenull/github/apod-pwa/screen-shot3.png"></p>

<p align="center"><img src="https://s3.ap-northeast-2.amazonaws.com/altenull/github/apod-pwa/mobile-screen-shot.png"></p>

### Selectable date
from *1995-06-16* to *today*

# Features

- **IndexedDB:** You can see astronomy picture of the day and keep it to your own gallery by using [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API).

- **Service Worker:** Use service worker to enable offline viewing.

- **App Shell Model:** [App Shell Model](https://developers.google.com/web/fundamentals/architecture/app-shell) refers to separating UI and content. The UI is cached offline to ensure immediate, reliable, and high perfomance for returning users. That is, only content is loaded from the network.

- **HTTPS:** Deploying to Firebase hosting to run perfectly on https with PWA features.

- **Web Manifest:** 'Add To Home Screen' feature on Android supported devices. (Must be added directly on apple devices.)

- **Data Provider:** All the data come from [NASA](https://api.nasa.gov/api.html#apod).

# Stack

### Frontend

- react
- redux
- CSS module & Sass
- [axios](https://github.com/axios/axios)
- [semantic-ui-react](https://react.semantic-ui.com/introduction)
- [react-datepicker](https://github.com/Hacker0x01/react-datepicker/)
- [react-masonry-component](https://github.com/eiriklv/react-masonry-component)

# Lighthouse Audit Result

<p align="center"><img src="https://s3.ap-northeast-2.amazonaws.com/altenull/github/apod-pwa/lighthouse-audit-result.png"></p>