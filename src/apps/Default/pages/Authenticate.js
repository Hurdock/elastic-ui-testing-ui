import React, { useState, useEffect } from 'react';
import Container from '../../../layout/container_guest';
import { Button, Icon } from 'semantic-ui-react';
import { AppState } from '../../../utils/state';
import { getAuth0Client } from '../../../utils/helpers';

import jwt_decode from 'jwt-decode';

export default (props) => {
  const [checkedQuery, setCheckedQuery] = useState(false);
  const [checkedStorage, setCheckedStorage] = useState(false);
  const { setAccount } = AppState();

  useEffect(() => {
    if(checkedQuery === false && checkedStorage === true) {
      const execFunction = async () => {
        try {
        const location = window.location.href;
        const id_token = location.split("id_token=")[1];
        if(id_token) {
          const decrypted_token = await jwt_decode(id_token);
          let newAccount = { ...decrypted_token }
          newAccount.roles = decrypted_token["http://auth0/roles"];
          newAccount.data = decrypted_token["http://auth0/data"];
          delete newAccount["http://auth0/data"];
          delete newAccount["http://auth0/roles"];
          localStorage.setItem("jwt_token", id_token);
          setAccount(newAccount);
          if(localStorage.redirect_after_login) {
            let link = localStorage.redirect_after_login;
            localStorage.removeItem('redirect_after_login');
            props.history.push(link);
          }
        }
      } catch(err) {
        console.error('Checking URL Query Error', err);
      }
      }
      execFunction();
      setCheckedQuery(true);
    }
  }, [checkedQuery, checkedStorage, setAccount, props]);

  useEffect(() => {
    if(checkedStorage === false) {
      const execFunction = async () => {
        const jwt_token = localStorage.getItem("jwt_token");
        if(jwt_token) {
          const decrypted_token = await jwt_decode(jwt_token);
          const expires_at = decrypted_token.exp;
          const current_time = Date.now() / 1000;
          if(current_time < expires_at) {
            let newAccount = { ...decrypted_token }
            newAccount.roles = decrypted_token["http://auth0/roles"];
            newAccount.data = decrypted_token["http://auth0/data"];
            delete newAccount["http://auth0/data"];
            delete newAccount["http://auth0/roles"];
            localStorage.setItem("jwt_token", jwt_token);
            setAccount(newAccount);
            if(localStorage.redirect_after_login) {
              let link = localStorage.redirect_after_login;
              localStorage.removeItem('redirect_after_login');
              props.history.push(link);
            }
          }
        }
      }
      execFunction();
      setCheckedStorage(true);
    }
  }, [checkedStorage, setAccount, props]);


  const submit = async () => {
    const client = await getAuth0Client();
    client.authorize({});
  }

  return <Container app="Hub" page="Authenticate"> 
    <Icon name="lock" size="huge" />
    <h1>You're not authenticated.</h1>
    <p>Before accessing our apps you must authenticate yourself. If you've forgotten your credentials please contact our support team at <a className="color-link" href="mailto:help@rsconnect.com">help@rsconnect.com</a> for more assistance.</p>
    <Button onClick={submit} fluid primary={true} style={{ height: 44 }}>Authenticate</Button>
  </Container>
}