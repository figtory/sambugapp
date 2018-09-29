// load libraries start
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Camera from 'react-native-camera';
import { Container, Content,Navbar,Header, Title,Left,ListItem,List,
   InputGroup,Input, Icon,Right, Body, Segment,Spinner} from 'native-base';
import Button from 'react-native-button';
import FontAwesome, { Icons } from 'react-native-fontawesome';
// load libraries end

export default class BadInstagramCloneApp extends Component {
  constructor()
 {
   super();
 } 
//  hide default header
  static navigationOptions = () => ({
    headerStyle: {
      display:'none',
        height: 0
    }
})
  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.hdrColor}>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.navigate('scout')}>
                        <FontAwesome style={{color:'#fff'}}>{Icons.chevronLeft}</FontAwesome>
                    </Button>
                </Left>
                    <Body >
                      <TouchableOpacity onPress= {() => this.props.navigation.navigate('dashboard')}>

                      <Title style={styles.loginView}><Text style={styles.sam}>SAM</Text><Text style={styles.bug}>BUG</Text></Title>
                  </TouchableOpacity>
                       </Body>
                </Header>
                {/* camera starts */}
                  <Camera
                    ref={(cam) => {
                      this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                        flashMode={Camera.constants.FlashMode.on}
                        captureTarget={Camera.constants.CaptureTarget.disk}
                        captureQuality={'low'}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                        
                  </Camera>
                  {/* camera ends */}
        
        
      </View>
    );
  }
// method called to take picture when capture button clicked
  takePicture() {
    const options = {};
    this.camera.capture({metadata: options})
      .then((data) => {
          this.props.navigation.navigate('addNewBug',{captureImage:data.path});
          
      })
      .catch(err => console.error(err));  
  
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex:0
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  hdrColor: {
    backgroundColor: '#333'
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
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  spinner: {
    marginTop:30,
    zIndex:4,
    backgroundColor:'transparent'
  },
  process: {
    backgroundColor:'#fff',
    borderRadius:25
  }
});



