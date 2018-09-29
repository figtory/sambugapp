// load library files
import React, { Component } from 'react';
import {AppRegistry, StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';
import { Container, 
  Header, 
  View, 
  DeckSwiper, 
  Card, 
  CardItem, 
  Footer,
  FooterTab,
  List,
  ListItem,
  Content,
  Thumbnail, Text, Left, Body, Icon,Button,Title,Right,Fab,Picker } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';
import ResponsiveImage from 'react-native-responsive-image';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Drawer from 'react-native-drawer';
import ControlPanel from './control-panel';
export default class bugSummary extends Component {
  constructor() {
      super();
      // declare state variables
      this.state = {
        selected1:'key0'
     }
      
    }
    // called to open side panel 
    openControlPanel = () => {
    
      this._drawer.open();
  };
  // called when select location dropdown value changes
  onValueChange(value) {
      this.setState({
        selected1: value
    });
    }
    // hide default header
    static navigationOptions = () => ({
    headerStyle: {
      display:'none',
        height: 0
    }
})
    
  render() {
    return (
      <Container>
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
        <ScrollView>
        <Content>
        <List>
                        <ListItem iconLeft itemDivider>
                            
                          <ResponsiveImage source={require("./img/scouter.png")} initWidth="50" initHeight="50"/>
                            <Text style={styles.textDesign}>SCOUT SUMMARY</Text>
                        </ListItem>
                    </List>
                    <View style={{paddingRight:50,paddingLeft:50}}>
                          <Picker 
                          iosHeader="Select one"
                          mode="dropdown"
                          selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}
                          >
                          <Picker.Item label="Select Location" value="key0" />
                          <Picker.Item label="Durban" value="key1" />
                          <Picker.Item label="Pretoria" value="key2" />
                          <Picker.Item label="Nelspruit" value="key3" />
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
                          
                          <ResponsiveImage source={require("./img/blocks.png")} initWidth="25" initHeight="25"/>
                          <Text style={styles.textAlign1}>BLOCK NAME</Text>
                        </Col>
                        <Col  >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('scout')} style={styles.loginView}>
                          
                          <ResponsiveImage source={require("./img/tree.png")} initWidth="25" initHeight="25"/>
                          <Text style={styles.textAlign1}>NO OF TREES</Text>
                       </TouchableOpacity>
                        </Col>
                        <Col style={styles.loginView}>
                          
                          <ResponsiveImage source={require("./img/bugtree.png")} initWidth="25" initHeight="25"/>
                          <Text style={styles.textAlign1}>NO OF BUGS</Text>
                        </Col>
                      </Grid>
                        <List>
                          <ListItem>
                             <Grid>
                        <Col >
                          <Text>Block A</Text>
                        </Col>
                        <Col >
                          <Text>5</Text>
                        </Col>
                        <Col >
                          <Text>2</Text>
                        </Col>
                        
                  </Grid>
                          </ListItem>                    
                          <ListItem itemDivider>
                             <Grid>
                        <Col >
                          <Text>Block A</Text>
                        </Col>
                        <Col >
                          <Text>7</Text>
                        </Col>
                        <Col >
                          <Text>9</Text>
                        </Col>
                        
                  </Grid>
                          </ListItem>
                          <ListItem >
                             <Grid>
                        <Col >
                          <Text>Block B</Text>
                        </Col>
                        <Col >
                          <Text>10</Text>
                        </Col>
                        <Col >
                          <Text>33</Text>
                        </Col>
                        
                  </Grid>
                          </ListItem>
                          <ListItem itemDivider>
                             <Grid>
                        <Col >
                          <Text>Block C</Text>
                        </Col>
                        <Col >
                          <Text>8</Text>
                        </Col>
                        <Col >
                          <Text>9</Text>
                        </Col>
                        
                  </Grid>
                          </ListItem>  
                          <ListItem>
                             <Grid>
                        <Col >
                          <Text>Block D</Text>
                        </Col>
                        <Col >
                          <Text>9</Text>
                        </Col>
                        <Col >
                          <Text>1</Text>
                        </Col>
                        
                  </Grid>
                          </ListItem>
                        </List>
                        <View style={{marginTop:20}}>
                        <List>
                        <ListItem iconLeft itemDivider>
                        
                        <ResponsiveImage source={require("./img/pest2.png")} initWidth="50" initHeight="50"/>
                            <Text style={styles.textDesign}>PESTS PER TREE</Text>
                        </ListItem>
                    </List>

                    <List>
                          <ListItem>
                             <Grid>
                        <Col >
                          <Text>Block A</Text>
                        </Col>
                        <Col >
                          <Text>0.19</Text>
                        </Col>
                        
                  </Grid>
                          </ListItem>                    
                          <ListItem itemDivider>
                             <Grid>
                        <Col >
                          <Text>Block A</Text>
                        </Col>
                         <Col >
                          <Text>0.19</Text>
                        </Col>
                        
                  </Grid>
                          </ListItem>
                          <ListItem >
                             <Grid>
                        <Col >
                          <Text>Block B</Text>
                        </Col>
                         <Col >
                          <Text>0.19</Text>
                        </Col>
                        
                  </Grid>
                          </ListItem>
                          <ListItem itemDivider>
                             <Grid>
                        <Col >
                          <Text>Block C</Text>
                        </Col>
                         <Col >
                          <Text>0.19</Text>
                        </Col>
                        
                  </Grid>
                          </ListItem>  
                          <ListItem>
                             <Grid>
                        <Col >
                          <Text>Block D</Text>
                        </Col>
                         <Col >
                          <Text>0.19</Text>
                        </Col>
                        
                  </Grid>
                          </ListItem>
                        </List>
                        </View>

                    </Content>
                    <Button block iconRight style={styles.btnStyle} onPress={() => this.props.navigation.navigate('dashboard')}>
        <Text style={styles.iconSize}>FINISH</Text>
        <FontAwesome style={{color:'#fff'}}>{Icons.check}</FontAwesome>
        </Button>

        </ScrollView>
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
    color:'#333',
    fontSize: 14
  },
  textDesign: {
    fontSize: 14,
    marginLeft:10
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
  btnBack:{
    backgroundColor:'transparent'
  },
  btnStyle: {
    marginTop:10,
    backgroundColor: '#37c133'
  },
  table: { width: 360 },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { textAlign: 'center' },
  textright: { 
    alignSelf: 'flex-end', 
  },
})
AppRegistry.registerComponent('bugSummary', () => bugSummary);