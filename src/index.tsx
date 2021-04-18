import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/index';
import "./internationalization/i18n";
import {GlobalStyle} from "./globalStyle";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Suspense fallback="">
      <App/>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();