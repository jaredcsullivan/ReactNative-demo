import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import EtgPortalScreen from '../screens/EtgPortalScreen';

export default createSwitchNavigator(
  {
    EtgPortal: EtgPortalScreen,
  },
  {
    initialRouteName: 'EtgPortal',
  }
);