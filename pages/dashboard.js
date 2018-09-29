// load library files starts
import React, {Component} from 'react';
import {AppRegistry, 
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity,
  AsyncStorage} from 'react-native';
  import ResponsiveImage from 'react-native-responsive-image';
import { Container, Header, Title, Button, Icon,Left,Right,Body,Segment,Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Drawer from 'react-native-drawer';
import ControlPanel from './control-panel';
// load library files end
export default class dashboard extends Component {
  // method to open side panel
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
  
  render() {
    // if(this.props.navigation.params) {
    //   const {state} = this.props.navigation;
    //   alert("Your Location: \n\n" + state.params.address[0].long_name + "\n" + state.params.address[1].long_name + "\n" + state.params.address[2].long_name + "\n" + state.params.address[3].long_name + "\n" + state.params.address[4].long_name )
    // }
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
                    <Body>
                    <TouchableOpacity onPress= {() => this.props.navigation.navigate('dashboard')}>
                      <Title style={styles.loginView}>
                      <Text style={styles.sam}>SAM</Text><Text style={styles.bug}>BUG</Text>
                      </Title>
                    </TouchableOpacity>
               </Body>
                   
                </Header>
                
                 <Content>
                 
                    <Grid style={styles.gridAlign}>
                        <Col  >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('scout')} style={styles.loginView}>
                          
                          <ResponsiveImage source={require("./img/scouter.png")} initWidth="50" initHeight="50"/>
                          <Text style={styles.textAlign1}>NEW SCOUT TRIP</Text>
                       </TouchableOpacity>
                        </Col>
                        <Col style={styles.loginView}>
                          
                          <ResponsiveImage source={require("./img/history.png")} initWidth="50" initHeight="50"/>
                          <Text style={styles.textAlign1}>HISTORY</Text>
                        </Col>
                    </Grid>
                    <Grid style={styles.gridAlign}>
                        <Col style={styles.loginView}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('location')} style={styles.loginView}>
                          
                          <ResponsiveImage source={require("./img/map.png")} initWidth="50" initHeight="50"/>
                          <Text style={styles.textAlign1}>LOCATIONS</Text>
                        </TouchableOpacity>
                        </Col>
                        <Col style={styles.loginView}>
                          
                          <ResponsiveImage source={require("./img/gears.png")} initWidth="50" initHeight="50"/>
                          <Text style={styles.textAlign1}>SETTINGS</Text>
                        </Col>
                    </Grid>
                    <Grid style={styles.gridAlign}>
                        <Col style={styles.loginView}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('pestGuide')} style={styles.loginView}>

                          <ResponsiveImage source={require("./img/book.png")} initWidth="50" initHeight="50"/>
                          <Text style={styles.textAlign1}>PEST GUIDE</Text>
                        </TouchableOpacity>

                        </Col>
                        <Col style={styles.loginView}>
                          
                          <ResponsiveImage source={require("./img/web.png")} initWidth="50" initHeight="50"/>
                          <Text style={styles.textAlign1}>VISIT WEBSITE</Text>
                        </Col>
                    </Grid>
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
  subWrap: {
    backgroundColor: '#333',
    paddingTop: 20,
    paddingBottom: 20, 
  },
  navigateMenus: {
    paddingTop: 25
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

AppRegistry.registerComponent('dashboard', () => dashboard);
