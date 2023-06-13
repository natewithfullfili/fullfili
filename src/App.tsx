import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsConfig);

function App() {
  return (
    <Authenticator>
      <div className="App">
        <h1>Welcome to Fullfili</h1>
      </div>
    </Authenticator>
  );
}

export default App;
