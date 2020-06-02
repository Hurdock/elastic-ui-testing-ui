import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from './utils/bootstrap';
import State from './utils/state'
import Routes from './utils/routes';

// import {
//   EuiButton,
//   EuiFlexGroup,
//   EuiFlexItem,
//   EuiPage,
//   EuiPageBody
// } from '@elastic/eui';

if(localStorage.theme_option === "dark") {
  require("@elastic/eui/dist/eui_theme_dark.css");
} else if(localStorage.theme_option === "amsterdam_light") {
  require("@elastic/eui/dist/eui_theme_amsterdam_light.css");
} else if(localStorage.theme_option === "amsterdam_dark") {
  require("@elastic/eui/dist/eui_theme_amsterdam_dark.css");
} else {
  require("@elastic/eui/dist/eui_theme_light.css");
}

ReactDOM.render(<React.Fragment>
  <State>
    <Bootstrap>
      <Routes />
    </Bootstrap>
  </State>
</React.Fragment>, document.getElementById('root'));