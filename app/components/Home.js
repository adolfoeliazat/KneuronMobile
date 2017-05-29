import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  AsyncStorage,
} from 'react-native';
import { Container, View, Icon, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Footer, FooterTab, Button } from 'native-base';
import NavBar from './NavBar';
import {Actions} from 'react-native-router-flux';
import CohortList from './CohortList';

export default class Test extends Component {
  render() {
    const { container } = styles;
        return (
            <View style={container}>
              <CohortList />
              <NavBar />
            </View>
        );
    }
}


const styles = {
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#dcdfe5',
  }
}
