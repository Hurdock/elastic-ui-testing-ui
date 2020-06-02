import React, { useRef } from 'react';
import {
  EuiPage,
  EuiPageBody
} from "@elastic/eui";

import Header from './header';
import Drawer from './drawer';


export default (props) => {
  window.document.title = `${props.app} - ${props.page}`
  const navDrawerRef = useRef(null);

  return <React.Fragment>
    <Header navDrawerRef={navDrawerRef} />
    <Drawer navDrawerRef={navDrawerRef} />
    <EuiPage className="euiNavDrawerPage">
      <EuiPageBody className="euiNavDrawerPage__pageBody">
        { props.children }
      </EuiPageBody>
    </EuiPage>
  </React.Fragment>
}