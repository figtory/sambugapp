/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  AsyncStorage
} from 'react-native';
import Carousel,{ Pagination } from 'react-native-snap-carousel';
import {Button} from 'native-base';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
    activeSlide: 0
    }
  }
    get pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={3}
              activeDotIndex={activeSlide}
              containerStyle={{ position: 'absolute',
                height: 70,
                top: (Dimensions.get('window').height)-70 ,
                left: (Dimensions.get('window').width/2)-50}}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }
     // method to hide default header
    static navigationOptions = () => ({
    headerStyle: {
      display:'none',
        height: 0
    }
})

async componentDidMount() {
  // get data from local storage
  let response = await AsyncStorage.getItem('listOfTasks'); 
    let listOfTasks = await JSON.parse(response); 
    console.log(listOfTasks);
}

    render () {
      const { navigate } = this.props.navigation;
      // get window width and height
      const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
        return (
            <View>
            
                <Carousel
                  onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                  sliderWidth={viewportWidth}
                  itemWidth={viewportWidth}
                >
                  
                <View style={{height:viewportHeight, width: viewportWidth}}>
                    <Image source={require('./img/frontscreen3.jpg')} style={{ width: viewportWidth, height: viewportHeight }}>
                     
                       <View style={styles.loginView}>
                        <Image source={require('./img/logodimentions1.png')} style={{ width: 100, height: 100 }}>
                        </Image>
                          <Text style={{color: 'white',fontSize:18,fontWeight:'bold'}}>PEST SCOUTING MADE EASIER</Text>

                      </View>
                      <View style={[styles.loginView,styles.signInView,styles.landAlign1]}>
                        <Button block style={[styles.btnStyle,styles.signIn]} onPress={() => this.props.navigation.navigate('Login')}><Text style={{color : '#fff',fontSize:14}}>Sign In</Text></Button>
                        <Button block style={styles.btnStyle} onPress={() => this.props.navigation.navigate('Register')}><Text style={{color : '#fff',fontSize:14}}>Sign Up</Text></Button>
                      </View>
                    
                    { this.pagination }
                    </Image>
                  </View>
                  <View style={{height:viewportHeight, width: viewportWidth}}>
                    <Image source={require('./img/frontscreen1.jpg')} style={{ width: viewportWidth, height: viewportHeight }}>
                     
                       <View style={styles.loginView}>
                        <Image source={require('./img/logodimentions2.png')} style={{ width: 130, height: 130 }}>
                        </Image>
                          <Text style={{color: 'white',fontSize:18,fontWeight:'bold'}}>PEST SCOUTING MADE EASIER</Text>

                      </View>
                      <View style={[styles.loginView,styles.imgMargin]}>
                        <Image source={require('./img/screen2.png')} style={{ width: 200 , height: 200 }}>
                        </Image>
                      </View>
                      <View style={[styles.loginView,styles.signInView,styles.landAlign2]}>
                        <Button block style={[styles.btnStyle,styles.signIn]} onPress={() => this.props.navigation.navigate('Login')}><Text style={{color : '#fff',fontSize:14}}>Sign In</Text></Button>
                        <Button block style={styles.btnStyle} onPress={() => this.props.navigation.navigate('Register')}><Text style={{color : '#fff',fontSize:14}}>Sign Up</Text></Button>
                      </View>
                    
                    { this.pagination }
                    </Image>
                  </View>
                  <View style={{height:viewportHeight, width: viewportWidth}}>
                    <Image source={require('./img/frontscreen2.jpg')} style={{ width: viewportWidth, height: viewportHeight }}>
                     
                       <View style={styles.loginView}>
                        <Image source={require('./img/logodimentions3.png')} style={{ width: 130, height: 130 }}>
                        </Image>
                          <Text style={{color: 'white',fontSize:18,fontWeight:'bold'}}>PEST SCOUTING MADE EASIER</Text>

                      </View>
                      <View style={[styles.loginView,styles.imgMargin]}>
                        <Image source={require('./img/screen3.png')} style={{ width: 230 , height: 140 }}>
                        </Image>
                      </View>
                      <View style={[styles.loginView,styles.signInView,styles.landAlign3]}>
                        <Button block style={[styles.btnStyle,styles.signIn]} onPress={() => this.props.navigation.navigate('Login')}><Text style={{color : '#fff',fontSize:14}}>Sign In</Text></Button>
                        <Button block style={styles.btnStyle} onPress={() => this.props.navigation.navigate('Register')}><Text style={{color : '#fff',fontSize:14}}>Sign Up</Text></Button>
                      </View>
                    
                    { this.pagination }
                    </Image>
                  </View>
                  
                </Carousel>
                
            </View>
        )
   
}
}

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
  loginView: {
    justifyContent: 'center', 
    alignItems: 'center',
  },
  btnStyle : {
    backgroundColor:'#37c133',
    borderRadius:4,
    paddingTop:5,
    paddingBottom:5,
    paddingRight:35,
    paddingLeft:35,
    

  },
  signIn: {
    marginBottom:5
  },
  signInView : {
    marginTop: 50
  },
  imgMargin :{
    marginTop: 50
  },
  landAlign1: {
    top: (Dimensions.get('window').height) - 330,
    paddingLeft:25,
    paddingRight:25
  },
  landAlign2: {
    bottom: 10,
    paddingLeft:25,
    paddingRight:25
  },
  landAlign3: {
     bottom: -50,
     paddingLeft:25,
    paddingRight:25
  }
});

AppRegistry.registerComponent('Home', () => Home);
