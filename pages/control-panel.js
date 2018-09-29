// load libraries starts
import React, {Component} from 'react';
import {AppRegistry, 
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity,
  AsyncStorage} from 'react-native';
import { Container, Header, Title, Button, Icon,Left,Right,Body,Segment,Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Drawer from 'react-native-drawer';
import ResponsiveImage from 'react-native-responsive-image';

export default class ControlPanel extends Component {
  static navigationOptions = {
      title: 'control',
    };
    logout() {
      // remove datas from local storage
      AsyncStorage.removeItem('token');
      this.props.navigation.navigate('Login');
    }
        render(){
            return(     
                <Content>  
                <Grid style={styles.subWrap}> 
                        <Col style={styles.loginView}>
                         
                        <Icon name='ios-person' style={{color:'#fff',fontSize:50,marginLeft:10}}/>
                        </Col>  
                        <Col>
                        <Text style={{color:'#fff'}}>Person Name</Text>
                        <Text style={{color:'#fff',marginTop:5}}><Icon name='ios-unlock' style={{color:'#fff',fontSize:14,marginLeft:10}}/> Username</Text>
                        </Col> 
                        <Col>
                        </Col>
                    </Grid>
                  <View style={styles.navigateMenus}> 
                  <TouchableOpacity style={{paddingLeft:20}} onPress={() => this.props.navigation.navigate('dashboard')}>
                  <Segment >
                    <Text>
                      
                      <ResponsiveImage source={require("./img/dashboardnew.png")} initWidth="35" initHeight="35"/>
                    </Text>
                    <Text style={{color:'#fff',marginLeft:10}}>DASHBOARD</Text>
                  </Segment>    
                  </TouchableOpacity> 

                  <TouchableOpacity style={{paddingLeft:20}} onPress={() => this.props.navigation.navigate('scout')}>
                  <Segment >
                    <Text>
             
                          <ResponsiveImage source={require("./img/newtripnew.png")} initWidth="35" initHeight="35"/>
                    </Text>
                    <Text style={{color:'#fff',marginLeft:10}}>NEW SCOUT TRIP</Text>
                  </Segment>    
                  </TouchableOpacity> 

                  <TouchableOpacity style={{paddingLeft:20}}>
                  <Segment >
                    <Text>

                          <ResponsiveImage source={require("./img/historynew.png")} initWidth="35" initHeight="35"/>
                    </Text>
                    <Text style={{color:'#fff',marginLeft:10}}>HISTORY</Text>
                  </Segment>    
                  </TouchableOpacity> 

                  <TouchableOpacity style={{paddingLeft:20}} onPress={() => this.props.navigation.navigate('location')}>
                  <Segment >
                    <Text>

                          <ResponsiveImage source={require("./img/locationnew.png")} initWidth="35" initHeight="35"/>
                    </Text>
                    <Text style={{color:'#fff',marginLeft:10}}>LOCATIONS</Text>
                  </Segment>    
                  </TouchableOpacity> 

                  <TouchableOpacity style={{paddingLeft:20}}>
                  <Segment >
                    <Text>

                          <ResponsiveImage source={require("./img/webpagenew.png")} initWidth="35" initHeight="35"/>
                    </Text>
                    <Text style={{color:'#fff',marginLeft:10}}>VISIT WEBSITE</Text>
                  </Segment>    
                  </TouchableOpacity> 

                  <TouchableOpacity style={{paddingLeft:20}} onPress={() => this.props.navigation.navigate('pestGuide')}>
                  <Segment >
                    <Text>
                      
                        <ResponsiveImage source={require("./img/guidenew.png")} initWidth="35" initHeight="35"/>
                    </Text>
                    <Text style={{color:'#fff',marginLeft:10}}>PEST GUIDE</Text>
                  </Segment>    
                  </TouchableOpacity> 

                  <TouchableOpacity style={{paddingLeft:20}} onPress={this.logout.bind(this)}>
                  <Segment >
                    <Text>
                      
                          <ResponsiveImage source={require("./img/logoutnew.png")} initWidth="35" initHeight="35"/>
                    </Text>
                    <Text style={{color:'#fff',marginLeft:10}}>LOGOUT</Text>
                  </Segment>    
                  </TouchableOpacity>  
                </View>    
                </Content>
            );
          }
    }

    const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }, 
  subWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.82)',
    paddingTop: 20,
    paddingBottom: 20, 
  },
  navigateMenus: {
    paddingTop: 25,
    alignItems: 'flex-start',
  },
  loginView: {
    justifyContent: 'center', 
    alignItems: 'center',
  },
  sam: {
    color:'#fff',
    fontFamily: 'cursive', 
  },
  bug : {
    color:'#37c133',
    fontFamily: 'cursive', 
  },
  gridAlign: {
    marginTop: 25
  },
  textAlign1: {
    marginTop:10,
    color:'#333'
  },
  hdrColor: {
    backgroundColor: '#333'
  },
  textright: { 
    alignSelf: 'flex-end', 
  },
})

AppRegistry.registerComponent('ControlPanel', () => ControlPanel);
