/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class FirstScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text>Counter (Non Persistent): {this.props.counter}</Text>
        <Text>Login Status (Persistent): {this.props.isLogin ? 'Logged In' : 'Not Logged In'}</Text>
        <Text>Login As (Persistent): {this.props.name !== '' ? this.props.name : '-'}</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Second')}>
          <Text>{'Goto SecondScreen =>'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter.counter,
    isLogin: state.login.isLogin,
    name: state.login.name
  };
}

export default connect(mapStateToProps)(FirstScreen);
