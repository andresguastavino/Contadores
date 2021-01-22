import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contadores from './components/Contadores';
import NewContador from './components/NewContador';

export default class App extends Component {

  render() {
    return (
      <View>
      <NewContador />
      <Contadores />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
