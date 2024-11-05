import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import EcommerceProvider from './Api/contextApi.jsx'

import {Provider} from 'react-redux'
import {store} from './store.js'

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
    {/* <EcommerceProvider> */}

    <Provider store={store}>
    <App />
    </Provider>

    {/* </EcommerceProvider> */}
  </React.StrictMode>
);
