import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import LoginForm from './loginform';

const logins = ReactDOM.createRoot(
  document.getElementById('logins') as HTMLElement
);
logins.render(
  <React.StrictMode>
    <LoginForm />
  </React.StrictMode>
);

