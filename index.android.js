/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// load library files
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import {StackNavigator} from 'react-navigation';
//load all components for routing
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import dashboard from './pages/dashboard';
import scout from './pages/scout-trip';
import bugSummary from './pages/bug-summary';
import scoutSummary from './pages/scout-summary';
import cameraCapture from './pages/camera-capture';
import selectGallery from './pages/select-gallery';
import addNewBug from './pages/add-new-bug';
import control from './pages/control-panel';
import location from './pages/location';
import forget from './pages/forget-pswd';
import pestGuide from './pages/pest-guide';
let response;
export default class Sambug extends Component {
  constructor() {
    super();
    // declare state variables
    this.state = {
      loggedin : null
    }
  }
  async componentDidMount() {
    // get data from local storage
    response = await AsyncStorage.getItem('token');
    this.setState({loggedin : response});
  }
  render() {
      if(response) {
      return (
      <Dashpage/>
      );
    }
    else {
      
      return (
        <Homepage/>
        );
    
    }
    
  }
}
const Homepage = StackNavigator({
  Home: {
    screen: Home
  },
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  dashboard: {
    screen: dashboard
  },
  scout: { 
    screen: scout
  },
  // bugSummary: { 
  //   screen: bugSummary
  // },
  scoutSummary: { 
    screen: scoutSummary
  },
  cameraCapture: {
    screen: cameraCapture
  },
  selectGallery: {
    screen: selectGallery
  },
  addNewBug: {
    screen: addNewBug
  },
  control: {
    screen: control
  },
  location: {
    screen: location
  },
  forget : {
    screen: forget
  },
  pestGuide : {
    screen: pestGuide
  }

});
const Dashpage = StackNavigator({
  dashboard: {
    screen: dashboard
  },
  Home: {
    screen: Home
  },
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  
  scout: { 
    screen: scout
  },
  // bugSummary: { 
  //   screen: bugSummary
  // },
  scoutSummary: { 
    screen: scoutSummary
  },
  cameraCapture: {
    screen: cameraCapture
  },
  selectGallery: {
    screen: selectGallery
  },
  addNewBug: {
    screen: addNewBug
  },
  control: {
    screen: control
  },
  location: {
    screen: location
  },
  forget : {
    screen: forget
  },
  pestGuide : {
    screen: pestGuide
  }

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Sambug', () => Sambug);
