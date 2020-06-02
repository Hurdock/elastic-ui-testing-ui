import React, { useState, useEffect } from 'react';
import { getContentfulByEntryID } from './helpers';
import { AppState } from './state';

const FailedComponent = () => {
  window.document.title = "Application failed to launch";
  return <div style={{ padding: 16, textAlign: 'center', display: 'flex', height: '100vh', width: '100vw', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <h1>Oops.</h1>
    <p>This application is not set up properly yet.</p>
    <p>Please check the logs and set up the environment variables.</p>
  </div>
}

const LoadingComponent = () => {
  window.document.title = "Application is to loading..";

  return <div style={{
    display: 'flex',
    height: '100vh',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    opacity: 0.8
  }}>
    Loading ..
  </div>
}

export default (props) => {
  const [executed, setExecuted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const { setConfiguration } = AppState();

  useEffect(() => {
    if (executed === false) {
      const executeFunc = async () => {

        const environmentVariables = {
          configuration_id: process.env.REACT_APP_CONFIGURATION_ID,
          auth0_domain: process.env.REACT_APP_AUTH0_DOMAIN,
          auth0_client: process.env.REACT_APP_AUTH0_CLIENT_ID,
          contracts_amplitude_key: process.env.REACT_APP_CONTRACTS_AMPLITUDE_KEY,
          contracts_endpoint_url: process.env.REACT_APP_CONTRACTS_ENDPOINT_URL,
          contracts_endpoint_token: process.env.REACT_APP_CONTRACTS_ENDPOINT_TOKEN
        }

        setLoading(true);

        try {
          // Check Environment variables ...
          Object.keys(environmentVariables).forEach((elm, index) => {
            let envVar = environmentVariables[elm];
            if (envVar === undefined || envVar === null || envVar.length < 1) {
              // eslint-disable-next-line
              throw `Environment variable "${elm}" is not set up. Currently that variable has value: ${envVar}`
            }
          });
          // Trying to get app configuration ..
          const res = await getContentfulByEntryID(environmentVariables.configuration_id);
          setConfiguration({
            version: res.fields.version_number
          });
        } catch (err) {
          console.error('Error while launching the app: ', err);
          setFailed(true);
        }
        setLoading(false);
      }
      executeFunc();
      setExecuted(true);
    }
  }, [executed, setConfiguration])


  return loading ? <LoadingComponent /> : (failed ? <FailedComponent /> : props.children);
}