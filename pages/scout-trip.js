// load library files starts
import React, {Component} from 'react';
import {
  AppRegistry, 
  StyleSheet,
  Text, 
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  AsyncStorage,
  Slider 
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { Container, Header, Title, Button, Icon,Left,Right,Body,Segment,Content,List,ListItem,Picker} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Drawer from 'react-native-drawer';
import ControlPanel from './control-panel';
import Modal from 'react-native-modal';
// load library files ends

export default class dashboard extends Component {
   
  
  constructor() {
      super();
      // state variable declaration
      this.state = {
        selected1:'key0',
        selected2:'key0',
        isModalVisible: false,
      }
    }
      // called when select farm drop down changed
    onValueChange1(value: string) {
      this.setState({
        selected1: value
      });
    } 
    // called when select block drop down changed
    onValueChange2(value: string) {
      this.setState({
        selected2: value
      });
    }
    // to open side panel
    openControlPanel = () => {
    
      this._drawer.open();
    
  };
  // to hide default header
  static navigationOptions = () => ({
    headerStyle: {
      display:'none',
        height: 0
    }
})
  _showModal = () => this.setState({ isModalVisible: true })
 
  _hideModal = () => this.setState({ isModalVisible: false })

  // called when clicked on add bugs clicked

  async addBug() {
    const farmDetails = {
      farm : this.state.selected1,
      block : this.state.selected2
    }
    const scout = [];
    await AsyncStorage.setItem('listOfTasks', JSON.stringify(farmDetails)); 
    await AsyncStorage.setItem('scoutDetails', JSON.stringify(scout)); 
    this.setState({ isModalVisible: false });
    this.props.navigation.navigate('cameraCapture');
  }
  // called when clicked on no bug clicked
  noBug() {
    this.setState({ isModalVisible: false });
  }
  
	render() {
		return(
			<Container style={styles.container}>
      <Drawer
                ref={(ref) => this._drawer = ref}
                type="overlay"
                content={<ControlPanel navigation={this.props.navigation} />}
                tapToClose={true}
                openDrawerOffset={0.2} // 20% gap on the right side of drawer 
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                styles={drawerStyles}
                tweenHandler={(ratio) => ({
                  main: { opacity:(2-ratio)/2 }
                })}
                >
                <Header style={styles.hdrColor}>
                <Left>
                    <Button transparent onPress={this.openControlPanel}>
                        <Icon name='ios-menu' />
                    </Button>
                </Left>
                    <Body >
                    <TouchableOpacity onPress= {() => this.props.navigation.navigate('dashboard')}>

                    	<Title style={styles.loginView}><Text style={styles.sam}>SAM</Text><Text style={styles.bug}>BUG</Text></Title>
			             </TouchableOpacity>
               </Body>
                    
                </Header>
                 <Content>
                    <List>
                        <ListItem iconLeft itemDivider>
                            
                          <ResponsiveImage source={require("./img/scouter2.png")} initWidth="50" initHeight="50"/>
                            <Text style={styles.textDesign}>NEW SCOUT TRIP</Text>
                        </ListItem>
                    </List>
                    <ScrollView>
                    <Grid style={styles.gridAlign}>
                        <Col style={styles.loginView}>
                        
                         
                          <ResponsiveImage source={require("./img/location.png")} initWidth="40" initHeight="40"/>
                          <Text style={styles.textAlign1}>FARM NAME</Text>
                          
                        </Col>
                       
                    </Grid>


                     






                    <View style={{paddingRight:50,paddingLeft:50}}>
                          <Picker 
                          iosHeader="Select one"
                          mode="dropdown"
                          selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange1.bind(this)}
                          >
                          <Picker.Item label="Select Farm" value="key0" />
                          <Picker.Item label="KoekeMacs" value="KoekeMacs" />
                          <Picker.Item label="MokoenaMacs " value="MokoenaMacs " />
                          <Picker.Item label="BekerMacs" value="BekerMacs" />
                        </Picker>
                      </View>
                       <View
                        style={{
                          borderBottomColor: '#ccc',
                          borderBottomWidth: 1,
                          marginRight:50,marginLeft:50

                        }}
                        />
                        <Grid style={styles.gridAlign}>
                        <Col style={styles.loginView}>
                        
                          
                          <ResponsiveImage source={require("./img/blocks.png")} initWidth="40" initHeight="40"/>
                          <Text style={styles.textAlign1}>BLOCK NAME</Text>
                          
                        </Col>
                       
                    </Grid>
                    <View style={{paddingRight:50,paddingLeft:50}}>
                          <Picker 
                          iosHeader="Select one"
                          mode="dropdown"
                          selectedValue={this.state.selected2}
                        onValueChange={this.onValueChange2.bind(this)}
                          >
                          <Picker.Item label="Select Block" value="key0" />
                          <Picker.Item label="Block A" value="Block A" />
                          <Picker.Item label="Block B" value="Block B" />
                          <Picker.Item label="Block C" value="Block C" />
                        </Picker>
                      </View>
                       <View
                        style={{
                          borderBottomColor: '#ccc',
                          borderBottomWidth: 1,
                          marginRight:50,marginLeft:50

                        }}
                        />
                             <Grid style={styles.gridAlign}>
                        <Col style={styles.loginView}>
                        
                          
                          
                        </Col>
                       
                    </Grid>
                    <Grid style={styles.gridAlign}>
                        <Col style={styles.loginView}>
                        
                          
                          
                        </Col>
                       
                    </Grid>
                    <Grid style={styles.gridAlign}>
                        <Col style={styles.loginView}>
                        <Text></Text>
                          <Text></Text>
                          
                        </Col>
                       
                    </Grid>

                             <Button block iconRight style={styles.btnStyle} onPress={this._showModal}><Text style={styles.iconSize}>START SCOUTING</Text><ResponsiveImage source={require("./img/beetle.png")} initWidth="20" initHeight="20" style={{ marginLeft:10 }}/></Button>
                          <Modal 
                        isVisible={this.state.isModalVisible} 
                        style={styles.modalStyle1}
                        onBackButtonPress={() => this._hideModal}>
                        <View style={{marginTop:10,marginBottom:10}}>
                           <Segment style={{backgroundColor:'#fff'}}>

                          <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#333',marginRight:25}} onPress={this._hideModal.bind(this)}>
                            <Text style={{color:'#fff'}}>NO BUGS</Text>
                          </Button>
                          </View>
                            <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#37c133'}} onPress={this.addBug.bind(this)}> 
                            <Text style={{color:'#fff'}}>ADD BUGS</Text>
                          </Button>
                          </View>
                          </Segment> 
                          </View>

                        </Modal>
                        </ScrollView>
                    
                </Content>   

                </Drawer>            
            </Container>
			);
	}
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 1, shadowRadius: 3, backgroundColor: 'rgba(0, 0, 0, 0.86)'},
  main: {paddingLeft: 3},
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  loginView: {
    justifyContent: 'center', 
    alignItems: 'center',
  },
  sam: {
  	color:'#fff',
  	fontFamily: 'cursive', 
    fontWeight:"900"
  },
  bug : {
  	color:'#37c133',
  	fontFamily: 'cursive',
    fontWeight:'bold' 
  },
  gridAlign: {
  	marginTop: 25
  },
  textAlign1: {
  	marginTop:10,
  	color:'#333'
  },
  textDesign: {
    fontSize: 14,
  },
  btnStyle: {
    marginTop:10,
    backgroundColor: '#37c133'
  },
  iconSize : {
    color:'#fff',
    fontSize:16
  },
  hdrColor: {
    backgroundColor: '#333'
  },
  textright: { 
    alignSelf: 'flex-end', 
  },
  modalStyle1: {
    backgroundColor: '#fff',
   marginHorizontal:30,
    marginVertical:200
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
  
})

AppRegistry.registerComponent('dashboard', () => dashboard);