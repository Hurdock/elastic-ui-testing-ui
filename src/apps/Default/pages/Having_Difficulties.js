import React from 'react';
import Container from '../../../layout/container_user';
import { Button, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default (props) => {
  const error_code = props.match.params.error_code;

  return <Container app="Hub" page="Having Difficulties">
    <h1 className="color-primary">Having difficulties</h1>
    <p>We've encountered an error in our application. Please try again later or contact our support team by pressing the button below.</p>
    {
      error_code && <div>
        <Input fluid label="Error Code" value={error_code} />
      </div>
    }
    <hr style={{ marginTop: 16, marginBottom: 16 }} />
    <div>
      <Link to="/">
        <Button primary={true}>Go to homepage</Button>
      </Link>
      <a href={`mailto:help@rsconnect.com?subject=Encountering problems with our office web application&body=Hello,%0AI'm having some issues with our office app.%0A%0A=================================%0A%0AError code that I've received: "${error_code}"%0A%0A=================================%0A%0AOther details: [Describe here the issue you're facing]`}>
        <Button>Contact our support team</Button>
      </a>
    </div>
  </Container>
}