/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';

const AppNavigator = createSwitchNavigator(
  {
    First: FirstScreen,
    Second: SecondScreen,
  },
  {
    initialRouteName: 'First'
  }
);

const Navigation = createAppContainer(AppNavigator);

class AppRoute extends Component {
  render() {
    return (
      <Navigation />
    );
  }
}

export default AppRoute;
