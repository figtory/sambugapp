// load libraries
import React, { Component } from 'react';
import {AppRegistry, 
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  NetInfo} from 'react-native';
  import ResponsiveImage from 'react-native-responsive-image';
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
  Thumbnail, Text, Left, Body, Icon,Button,Title,Right,Fab } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Drawer from 'react-native-drawer';
import ControlPanel from './control-panel';

export default class bugSummary extends Component {
  constructor() {
      super();
    }
    // to open side panel
    openControlPanel = () => {
    
      this._drawer.open();
  };
  // hide default header
  static navigationOptions = () => ({
    headerStyle: {
      display:'none',
        height: 0
    }
})
  async componentDidMount() {
    // get previous scout trips from localStorage
    let response = await AsyncStorage.getItem('scoutDetails'); 
    let scoutDetails = await JSON.parse(response); 
    console.log(scoutDetails);
    this.setState({
      scoutBugs : scoutDetails
    });
    // NetInfo.isConnected.fetch().then(isConnected => {
    //   console.log('First, is ' + (isConnected ? 'online' : 'offline'));
    //   if(isConnected) {
    //     console.log("true");
    //   }
    //   else {
    //     console.log("false");
    //   }
    // });
  }
    
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
                <List>
                        <ListItem iconLeft itemDivider>
                            
                          <ResponsiveImage source={require("./img/scouter.png")} initWidth="50" initHeight="50"/>
                            <Text style={styles.textDesign}>YOUR SCOUT DETAIL</Text>
                        </ListItem>
                    </List>
          

        <View>
        </View>
        
          <List>
          {this.state.scoutBugs && this.state.scoutBugs.map((filter,i) => {
            return (
            <ListItem key={i}>
              <Thumbnail square size={80} source={{ uri : filter.matchingImage}} />
              <Body>
                <Grid>
                        <Col >
                          <Text>Stink Bugs</Text>
                          <Text note>adult</Text>
                        </Col>
                        <Col >
                        <View style={styles.loginView}>
                          <Text>{filter.bugPerTree}</Text>
                          <Text note>No. of Bugs</Text>
                        </View>
                        </Col>                        
          </Grid>
                
                
              </Body>
                <Icon name='ios-arrow-forward' style={{color:'#333'}} />
            
            </ListItem>
            );
          })
        }
           
          </List>

         
        <Button block iconRight style={styles.btnStyle} onPress={() => this.props.navigation.navigate('scoutSummary')}>
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
  btnBack:{
    backgroundColor:'transparent'
  },
  btnStyle: {
    marginTop:10,
    backgroundColor: '#37c133'
  },
  textright: { 
    alignSelf: 'flex-end', 
  },
  hdr: {
    backgroundColor: '#333',
    padding:5,
    width:40,
    height:40,
    marginBottom:8
  },
  
})
AppRegistry.registerComponent('bugSummary', () => bugSummary);