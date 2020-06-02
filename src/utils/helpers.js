import Axios from 'axios';
import axiosRetry from 'axios-retry';
import { useState, useLayoutEffect } from 'react';
import auth0 from 'auth0-js';
import React from 'react';
import packageJSON from '../../package.json';
import { toast } from 'react-semantic-toasts';
import { Button } from 'semantic-ui-react';

const contentful = require('contentful');

let retriesCount = 0;

axiosRetry(Axios, {
  retryDelay: () => 1750,
  retryCondition: function (err) {
    retriesCount++;
    if (err.response && err.response.status === 500 && retriesCount < 5) {
      return true;
    } else {
      retriesCount = 0;
      return false;
    }
  }
});

export function useWindowSize() {
  let [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export const formatTime = (str, timeIncluded, dayIncluded) => {
  let time = new Date(str);
  let day = time.getUTCDay();
  let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let d = time.getUTCDate();
  let m = time.getUTCMonth() + 1;
  m = m < 10 ? `0${m}` : m;
  let y = time.getUTCFullYear();
  let ms = time.getUTCMinutes();
  ms = ms < 10 ? `0${ms}` : ms;
  let hs = time.getUTCHours();
  hs = hs < 10 ? `0${hs}` : hs;
  return `${dayIncluded ? weekdays[day] + ' ' : ''}${d}/${m}/${y}${timeIncluded ? ', ' + hs + ':' + ms : ''}`;
}

export const searchAddressByPostcode = async (postcode) => {
  try {
    const { data } = await Axios.get(
      `https://api.getaddress.io/find/${postcode}?api-key=id7yv8GUJk2TeSIyfkyGLg20400&sort=true&expand=true`
    );
    return data;
  } catch (err) {
    return err;
  }
}


let contentful_client = null;

const createContentfulClient = async () => {
  contentful_client = await contentful.createClient({
    space: `fv7ixrqrr6dp`,
    accessToken: '2c7dE74FhA-aP2cHwwJYfWUDGyidEVv3ekCldUulr_s'
  })
}

export const getContentfulByEntryID = async (entry_id) => {
  if (contentful_client === null) await createContentfulClient();
  const createPromise = () => new Promise((resolve, reject) => {
    contentful_client.getEntry(entry_id).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    })
  })
  return await createPromise();

}

export const getAuth0Client = () => {
  const tempClient = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    // audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo`,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: `${window.location.origin}/authenticate?`,
    responseType: 'id_token',
    scope: 'openid profile email'
  });
  return tempClient;
}

export const checkApplicationVersion  = async () => {
  try {
    const res = await getContentfulByEntryID(process.env.REACT_APP_CONFIGURATION_ID);

    const local_version = packageJSON.version;
    const cloud_version = res.fields.version_number;

    if (cloud_version > local_version) {
      toast({
        title: 'Application not up-to-date.', type: 'warning', time: 99999999,
        description: <React.Fragment>
          <p>You're running an outdated version of this application.</p>
          <p>Please press CTRL + F5 on your keyboard, or press the button below.</p>
          <hr />
          <p>You're running the version <b>{local_version}</b> and the latest one is <b>{cloud_version}</b></p>
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 12 }}>
            <Button onClick={() => window.location.reload(true) }>Refresh my application</Button>
          </div>
        </React.Fragment>
      });
    }

  } catch (err) {
    console.error('Failed to get latest app configuration', err);
  }
}
