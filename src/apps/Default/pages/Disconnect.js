import React from 'react';
import Container from '../../../layout/container_user';
import { Button } from 'semantic-ui-react';
import { AppState } from '../../../utils/state';
import { getAuth0Client } from '../../../utils/helpers';

export default (props) => {
  const { setAccount, lightsOff} = AppState();

  const goBack = () => {
    window.history.back();
  }

  const logOut = async () => {
    setAccount(null);
    localStorage.removeItem('jwt_token');
    const client = await getAuth0Client();
    client.logout({
      returnTo: `${window.location.origin}/`,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID
    });
  }

  return <Container app="Hub" page="Disconnect">
    <h1 className="color-primary">End session</h1>
    <p>Are you sure you want to log out now?</p>
    <Button onClick={logOut} inverted={lightsOff} color="red">Yes, I'm sure</Button>
    <Button onClick={goBack}>Go back to previous page</Button>
  </Container>
}