// load library files starts
import React, { Component } from 'react';
import {AppRegistry,Text,View,StyleSheet,Image,ScrollView,Dimensions, TouchableOpacity} from 'react-native';
import { Container, Content,Navbar,Header, Title,Left,ListItem,List, InputGroup,Input, Icon,Right, Body,TextInput,Button,Picker} from 'native-base';
// load library files ends

export default class Login extends Component {
  constructor() {
    super();
     this.state = {
        selected1:'key0'
     }
    }
    // method called when location dropdown changes
    onValueChange(value: string) {
      this.setState({
        selected1: value
    });
    }
    // to hide default header
    static navigationOptions = () => ({
    headerStyle: {
      display:'none',
        height: 0
    }
})
  render(){
    // get and set viewport width and height
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
          <Text style={{color: '#333',fontSize:16,fontWeight:'bold'}}>Create an account</Text>
        </View>
                <Content style={styles.formStyle}>
                    <List>
                        <ListItem>
                            <InputGroup>
                               <Icon name='ios-person' style={{color:'#333'}}/>
                                <Input placeholder='YOUR NAME' style={{fontSize:16,}} />
                            </InputGroup>
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup>
                            <Icon name='ios-mail' style={{color:'#333'}}/>
                                <Input placeholder='EMAIL ADDRESS' style={{fontSize:16,}} />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                               <Icon name='ios-unlock' style={{color:'#333'}}/>
                                <Input placeholder='PASSWORD' style={{fontSize:16,}} secureTextEntry={true} />
                            </InputGroup>
                        </ListItem>
                    <View style={{flex:.5,paddingHorizontal:15}}>
                        <Picker
                        iosHeader="Select one"
                        mode="dropdown"
                        style={{paddingRight:50}}
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}
                        >
                        <Picker.Item label="Select Location" value="key0" />
                        <Picker.Item label="The Eastern Cape" value="key1" />
                        <Picker.Item label="The Free State" value="key2" />
                        <Picker.Item label="Gauteng" value="key3" />
                        <Picker.Item label="KwaZulu-Natal" value="key4" />
                        <Picker.Item label="Limpopo" value="key5" />
                        <Picker.Item label="Mpumalanga" value="key6" />
                        <Picker.Item label="Northern Cape" value="key7" />
                        <Picker.Item label="North West" value="key8" />
                        <Picker.Item label="Western Cape" value="key9" />
                        <Picker.Item label="Eastern Cape" value="key10" />

                      </Picker>
                    </View>
                   <View
                    style={{
                      borderBottomColor: '#ccc',
                      borderBottomWidth: 1,
                      flex:.5,marginLeft:15

                    }}
                    />
                    </List>
                    
                  
                      
                   
                    <View style={{marginTop:15}}>
                    <Button block iconRight style={[styles.btnStyle,styles.accBtn]}><Text style={styles.iconSize}>CREATE MY ACCOUNT</Text><Icon name='ios-arrow-forward' style={styles.iconSize} /></Button>
                    <View style={{justifyContent: 'center', alignItems: 'center',}}>
                      <View style={styles.flexProp}>
                      <Text style={{color:'#333',fontSize:16,}}>Existing User? </Text>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                      <Text style={{color:'#37c133',fontSize:16}}>Sign in</Text>
                      </TouchableOpacity>
                      </View>
                    </View>
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
