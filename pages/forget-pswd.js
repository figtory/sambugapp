import React, { Component } from 'react';
import {AppRegistry,Text,View,StyleSheet,Image,ScrollView,Dimensions, TouchableOpacity} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Container, Content,Navbar,Header, Title,Left,ListItem,List, InputGroup,Input, Icon,Right, Body,TextInput,Button,Picker} from 'native-base';


export default class Login extends Component {
  constructor() {
    super();
     
    }
    // method to hide default header
    static navigationOptions = () => ({
    headerStyle: {
      display:'none',
        height: 0
    }
})
  render(){
    // get window width and height
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

    return(
      <View style={{height:viewportHeight, width: viewportWidth}}>
      <ScrollView>
        <View >
          <Image source={require('./img/loginscreentoparc1.png')} style={{ width: viewportWidth, height: 150}}>
            <View style={styles.loginView}>
              <Image source={require('./img/logodimentions4.png')} style={{ width: 100, height: 100 }}>
              </Image>
            </View>
          </Image>
        </View>
        <View>
          <Container>
          <View style={{justifyContent: 'center', alignItems: 'center',}}>
          <Text style={{color: '#333',fontSize:16,fontWeight:'bold'}}>Forget Password</Text>
        </View>
                <Content style={styles.formStyle}>
                    <List>
                        <ListItem>
                            <InputGroup>
                               <Icon name='ios-person' style={{color:'#333'}}/>
                                <Input placeholder='Username/Email' style={{fontSize:16,}} />
                            </InputGroup>
                        </ListItem>
                    </List>               
                      
                   
                    <View style={{marginTop:15}}>
                    <Button block iconRight style={[styles.btnStyle,styles.accBtn]}><Text style={styles.iconSize}>Continue</Text><Icon name='ios-arrow-forward' style={styles.iconSize} /></Button>
                    
                </View>
                  </Content>
                
            </Container>

        </View>

        

      </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loginView: {
    justifyContent: 'center', 
    alignItems: 'center',
  },
  loginForm: {
    paddingHorizontal : 10,
    height:40,
    marginBottom:20,
    backgroundColor:'#333'
  },
  formStyle: {
    padding:30

  },
  btnStyle: {
    backgroundColor:'#37c133',
  },
  iconSize : {
    color:'#fff',
    fontSize:16
  },
  flexProp: {
    flexWrap: 'wrap', 
    flexDirection:'row'
  },
  accBtn :{
    marginBottom:15,
    zIndex:9
  }
});
AppRegistry.registerComponent('Login', () => Login);
