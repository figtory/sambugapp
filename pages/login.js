// load library files
import React, { Component } from 'react';
import {AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  AsyncStorage} from 'react-native';
import { Container, Content,Navbar,Header, Title,Left,ListItem,List, InputGroup,Input, Icon,Right, Body,TextInput,Button} from 'native-base';

export default class Login extends Component {
  constructor() {
    super();
    // state variables declaration
    this.state = {
      password:"",
      username:""
    }
  }
  // method called on login button click
      checkLogin() {
        // check username and password 
        if(this.state.username == 'sambug' && this.state.password == 'sambug123')
         this.props.navigation.navigate('dashboard');
         else
         alert('Incorrect Username or Password');
        
    }
  // method called when username get changed
     _inputUser(username){
    this.setState({username:username})
    //this.username == "";

  }
  // method called when password get changed
  _inputPass(password){
    this.setState({password:password})

  }
  // method to hide default header
  static navigationOptions = () => ({
    headerStyle: {
      display:'none',
        height: 0
    }
})
  async componentDidMount() {
    // get local storage data
  let response = await AsyncStorage.getItem('listOfTasks'); 
    let listOfTasks = await JSON.parse(response); 
}

  render(){
    // set viewport height and width
    const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

    return(
      <View style={{height:viewportHeight, width: viewportWidth}}>
      <ScrollView>
        <View >
          <Image source={require('./img/loginscreentoparc.png')} style={{ width: viewportWidth, height: 150}}>
            <View style={styles.loginView}>
              <Image source={require('./img/logodimentions.png')} style={{ width: 100, height: 100 }}>
              </Image>
            </View>
          </Image>
        </View>
        <View>
          <Container>
          <View style={{justifyContent: 'center', alignItems: 'center',}}>
          <Text style={{color: '#333',fontSize:16,fontWeight:'bold'}}>Sign in to your account</Text>
    </View>
                <Content style={styles.formStyle}>
                    <List>
                        <ListItem>
                            <InputGroup>
                               <Icon name='ios-person' style={{color:'#333'}}/>
                                <Input placeholder='EMAIL' style={{fontSize:16,}} onChangeText = {(user)=>this._inputUser(user)} />
                            </InputGroup>
                        </ListItem>
                    
                        <ListItem>
                            <InputGroup>
                                <Icon name='ios-unlock' style={{color:'#333'}} />
                                <Input placeholder='PASSWORD' secureTextEntry={true} style={{fontSize:16,}} onChangeText={(val)=>this._inputPass(val)} />
                            </InputGroup>
                        </ListItem>
                    </List>
                    <Button block iconRight style={styles.btnStyle} onPress={this.checkLogin.bind(this)}><Text style={styles.iconSize}>LOGIN</Text><Icon name='ios-arrow-forward' style={styles.iconSize} /></Button>
                    </Content>
                    <Content>
                    <View style={{justifyContent: 'center', alignItems: 'center',}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('forget')}>
                      <Text style={{color: '#333',fontSize:16}}>Forgot password ?</Text>
                      </TouchableOpacity>
                      <View style={styles.flexProp}>
                      <Text style={{color:'#333',fontSize:16,}}>New User? </Text>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                      <Text style={{color:'#37c133',fontSize:16}}>Create an account</Text>
                      </TouchableOpacity>                      
                      </View>
                    </View>
                    <View>

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
    marginTop:25
  },
  iconSize : {
    color:'#fff',
    fontSize:16
  },
  flexProp: {
    flexWrap: 'wrap', 
    flexDirection:'row'
  }
});
AppRegistry.registerComponent('Login', () => Login);
