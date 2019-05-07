/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import CounterComponent from '../components/CounterComponent';

class SecondScreen extends Component {
  state = {
    inputName: ''
  };

  componentDidMount() {
    this.setState({
      inputName: this.props.name
    });
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.increaseCounter()}>
          <Text>Increase Counter</Text>
        </TouchableOpacity>

        <CounterComponent counter={this.props.counter} />

        <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
          <Text>Decrease Counter</Text>
        </TouchableOpacity>

        <TextInput onChangeText={text => this.setState({ inputName: text })} value={this.state.inputName} />

        <TouchableOpacity onPress={() => this.props.login(this.state.inputName)}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.logout()}>
          <Text>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('First')}>
          <Text>{'<= Goto FirstScreen'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter.counter,
    name: state.login.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
    decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    login: name => dispatch({ type: 'LOGIN', name }),
    logout: () => dispatch({ type: 'LOGOUT' })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);
