import React, { useState } from 'react';

import {
  EuiHeader,
  EuiShowFor,
  EuiHeaderBreadcrumbs,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiHeaderLogo,
  EuiIcon,
  EuiPopover,
  EuiButton,
  EuiButtonIcon,
  EuiAvatar,
  EuiKeyPadMenu,
  EuiKeyPadMenuItem,
} from '@elastic/eui';

export default (props) => {
  const [showUser, setShowUser] = useState(false);

  const renderLogo = () => (
    <EuiHeaderLogo
      iconType="savedObjectsApp"
      onClick={() => {
        alert('logo pressed');
      }}
      aria-label="Go to home page"
    />
  );

  const renderMenuTrigger = () => (
    <EuiHeaderSectionItemButton
      aria-label="Open nav"
      onClick={() => props.navDrawerRef.current.toggleOpen()}>
      <EuiIcon type="apps" href="#" size="m" />
    </EuiHeaderSectionItemButton>
  );

  const renderBreadcrumbs = () => {
    const breadcrumbs = [
      {
        text: 'Dashboard'
      },
      {
        text: 'Homepage',
      },
    ];
    return <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs} />;
  };

  const renderSearch = () => (
    <EuiHeaderSectionItemButton aria-label="Search">
      <EuiIcon type="search" size="m" />
    </EuiHeaderSectionItemButton>
  );

  return <React.Fragment>
    <EuiHeader position="fixed">
      <EuiHeaderSection grow={false}>
        <EuiShowFor sizes={['xs', 's']}>
          <EuiHeaderSectionItem border="right">
            {renderMenuTrigger()}
          </EuiHeaderSectionItem>
        </EuiShowFor>

        <EuiHeaderSectionItem border="right">
          {renderLogo()}
        </EuiHeaderSectionItem>
      </EuiHeaderSection>

      {renderBreadcrumbs()}

      <EuiHeaderSection side="left">
        <EuiHeaderSectionItem>
          <div style={{ paddingLeft: 12, paddingRight: 12 }}>
            <EuiPopover
              ownFocus
              button={<div onClick={() => setShowUser(true)} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer', paddingLeft: 6, paddingRight: 6 }}>
                <EuiAvatar size="s" name="Valentin State" />
                <span style={{ marginLeft: 6, fontSize: 13 }}>Valentin.State</span>
              </div>}
              isOpen={showUser === true}
              closePopover={() => setShowUser(false)}>
              <EuiKeyPadMenu>
                <EuiKeyPadMenuItem label="Disconnect">
                  <EuiIcon type="sortRight" size="l" />
                </EuiKeyPadMenuItem>

                <EuiKeyPadMenuItem label="Dark mode" onClick={ () => {
                  const current_theme = localStorage.theme_option;

                  if(current_theme === "dark") {
                    localStorage.theme_option = "light";
                  } else {
                    localStorage.theme_option = "dark";
                  }
                  window.location.reload(true);
                }}>

                  <EuiIcon type="moon" size="l" />
                </EuiKeyPadMenuItem>
                </EuiKeyPadMenu>
          </EuiPopover>
          </div>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  </React.Fragment>
}