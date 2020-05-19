import React, { Component } from 'react';
import { WebView } from 'react-native';
export default class EtgPortalScreen extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://portal.eagletg.com'}}
        style={{marginTop: 20}}
      />
    );
  }
}
  