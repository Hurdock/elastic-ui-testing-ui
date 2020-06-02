import React from 'react';
import { EuiNavDrawer, EuiImage, EuiHorizontalRule, EuiNavDrawerGroup } from '@elastic/eui';

export default (props) => {

  const faveExtraAction = {
    color: 'subdued',
    iconType: 'starEmpty',
    iconSize: 's',
    'aria-label': 'Add to favorites',
  };

  const pinExtraAction = {
    color: 'subdued',
    iconType: 'pin',
    iconSize: 's',
  };

  const adminLinks = [
    {
      label: 'Admin',
      iconType: 'managementApp',
      flyoutMenu: {
        title: 'Tools and settings',
        listItems: [
          {
            label: 'Dev tools',
            href: '#/layout/nav-drawer',
            iconType: 'devToolsApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add to Tools and Settings to favorites',
            },
          },
          {
            label: 'Stack Monitoring',
            href: '#/layout/nav-drawer',
            iconType: 'monitoringApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Stack Monitoring to favorites',
            },
          },
          {
            label: 'Stack Management',
            href: '#/layout/nav-drawer',
            iconType: 'managementApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Stack Management to favorites',
            },
          },
          {
            label: 'Nature Plugin (image as icon)',
            href: '#/layout/nav-drawer',
            icon: (
              <EuiImage
                size="s"
                alt="Random nature image"
                url="https://source.unsplash.com/300x300/?Nature"
              />
            ),
          },
        ],
      },
    },
  ];

  const analyzeLinks = [
    {
      label: 'Analyze',
      iconType: 'logoBusinessAnalytics',
      flyoutMenu: {
        title: 'Analyze your data',
        listItems: [
          {
            label: 'Discover',
            href: '#/layout/nav-drawer',
            iconType: 'discoverApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Discover to favorites',
            },
          },
          {
            label: 'Visualize',
            href: '#/layout/nav-drawer',
            iconType: 'visualizeApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Visualize to favorites',
            },
          },
          {
            label: 'Canvas',
            href: '#/layout/nav-drawer',
            iconType: 'canvasApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Canvas to favorites',
            },
          },
          {
            label: 'Maps',
            href: '#/layout/nav-drawer',
            iconType: 'gisApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Maps to favorites',
            },
          },
          {
            label: 'Machine Learning',
            href: '#/layout/nav-drawer',
            iconType: 'machineLearningApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Machine Learning to favorites',
            },
          },
          {
            label: 'Graph',
            href: '#/layout/nav-drawer',
            iconType: 'graphApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Graph to favorites',
            },
          },
        ],
      },
    },
  ];

  const securityLinks = [
    {
      label: 'Security',
      iconType: 'logoSecurity',
      flyoutMenu: {
        title: 'Security',
        listItems: [
          {
            label: 'SIEM',
            href: '#/layout/nav-drawer',
            iconType: 'securityApp',
          },
          {
            label: 'Endpoints',
            href: '#/layout/nav-drawer',
            iconType: 'securityAnalyticsApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add SIEM to favorites',
            },
          },
        ],
      },
    },
  ];

  const searchLinks = [
    {
      label: 'Enterprise Search',
      iconType: 'logoAppSearch',
      flyoutMenu: {
        title: 'Enterprise search',
        listItems: [
          {
            label: 'Site search',
            href: '#/layout/nav-drawer',
            iconType: 'searchProfilerApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Enterprise search to favorites',
            },
          },
          {
            label: 'App search',
            href: '#/layout/nav-drawer',
            iconType: 'searchProfilerApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add App Search to favorites',
            },
          },
          {
            label: 'Workplace search',
            href: '#/layout/nav-drawer',
            iconType: 'searchProfilerApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Workplace Search to favorites',
            },
          },
        ],
      },
    },
  ];

  const observabilityLinks = [
    {
      label: 'Observability',
      iconType: 'logoMetrics',
      flyoutMenu: {
        title: 'Observe your operations',
        listItems: [
          {
            label: 'Logs',
            href: '#/layout/nav-drawer',
            iconType: 'logsApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Logs to favorites',
            },
          },
          {
            label: 'Metrics',
            href: '#/layout/nav-drawer',
            iconType: 'metricsApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Metrics to favorites',
            },
          },
          {
            label: 'APM',
            href: '#/layout/nav-drawer',
            iconType: 'apmApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add APM to favorites',
            },
          },
          {
            label: 'Uptime',
            href: '#/layout/nav-drawer',
            iconType: 'uptimeApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Uptime to favorites',
            },
          },
        ],
      },
    },
  ];

  return <React.Fragment>
    <EuiNavDrawer ref={props.navDrawerRef}>
      <EuiNavDrawerGroup listItems={analyzeLinks} />
      <EuiNavDrawerGroup listItems={securityLinks} />
      <EuiNavDrawerGroup listItems={searchLinks} />
      <EuiNavDrawerGroup listItems={observabilityLinks} />
      <EuiHorizontalRule margin="none" />
      <EuiNavDrawerGroup listItems={adminLinks} />
    </EuiNavDrawer>
  </React.Fragment>
}