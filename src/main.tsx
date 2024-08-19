import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/presistReducer/configureStore';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
