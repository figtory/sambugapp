// start load libraries
import React, { Component } from 'react';
import {
  AppRegistry, 
  StyleSheet, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions,
  AsyncStorage,
  Slider 
} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { 
  Container, 
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
  Segment,
  Thumbnail, Text, Left, Body, Icon,Button,Title,Right,Fab,Picker,Tab,Tabs,TabHeading,Spinner } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Modal from 'react-native-modal';
import Drawer from 'react-native-drawer';
import ControlPanel from './control-panel';
import axios from 'axios';
import RNFS from 'react-native-fs';
// end load libraries

const selectedImage = '';
const image = '';

export default class bugSummary extends Component { 
  constructor() {
      super();
      // state variables declaration
      this.state = {
        isModalVisible: false,
        value1: 3,
        active1: false,
        image:true,
        secondimage:true,
        thirdimage:true,
        fourthimage:true,
        fifthimage:true,
        sixthimage:true,
        seventhimage:true,
        eighthimage:true,
        ninthimage:true,
        finalImage:true,
        value2: 0,
        count:0,
        AIresponse:[],
        automatic:false,
        valid: false,
        responseImage:'',
        description:'',
        bugType:'',
        name:''
      }
      
    }
    // start method get called when select one bug image in manual classification
    resetImages() {
      this.setState({
        image:true,
        secondimage:true,
        thirdimage:true,
        fourthimage:true,
        fifthimage:true,
        sixthimage:true,
        seventhimage:true,
        eighthimage:true,
        ninthimage:true,
        finalImage:true,
      })
    }
  
  _showModal1 () { 
    this.setState({ isModalVisible1: true});
    this.resetImages();
  } 
  _hideModal1 = () => this.setState({ isModalVisible1: false })

  _showModal2() {
   this.setState({ isModalVisible2: true })
   this.resetImages();
 }
 
  _hideModal2 = () => this.setState({ isModalVisible2: false })

  _showModal3() {
    this.setState({ isModalVisible3: true })
    this.resetImages();
 }
  _hideModal3 = () => this.setState({ isModalVisible3: false })

  _showModal4 () {
   this.setState({ isModalVisible4: true });
   this.resetImages();
 }
 
  _hideModal4 = () => this.setState({ isModalVisible4: false })

  _showModal5() {
   this.setState({ isModalVisible5: true });
   this.resetImages();
 }
 
  _hideModal5 = () => this.setState({ isModalVisible5: false })

  _showModal6() {
   this.setState({ isModalVisible6: true });
   this.resetImages();
 }
 
  _hideModal6 = () => this.setState({ isModalVisible6: false })

  _showModal7() {
   this.setState({ isModalVisible7: true });
   this.resetImages();
 }
 
  _hideModal7 = () => this.setState({ isModalVisible7: false })

  _showModal8() {
    this.setState({ isModalVisible8: true })
    this.resetImages();
  }
 
  _hideModal8 = () => this.setState({ isModalVisible8: false })

  _showModal9() {
   this.setState({ isModalVisible9: true });
   this.resetImages();
 }
 
  _hideModal9 = () => this.setState({ isModalVisible9: false });

  // end method get called when select one bug image in manual classification
// below method called when side panel opens
  openControlPanel = () => {
    
      this._drawer.open();
  };
  //method to hide default header
  static navigationOptions = () => ({
    headerStyle: {
      display:'none',
        height: 0
    }
})
//start method to compare selected image with captured image in manual classification
  showSelectedImage1(value) {
      this.setState({
      image:false,
      selectedImage: value});
  }
  
  selectedImage2(value) {
    this.setState({
        secondimage:false,
        selectedImage: value
      });
    
  }
  selectedImage3(value) {
    this.setState({
      thirdimage:false,
      selectedImage: value
      })
  }
  selectedImage4(value) {
      this.setState({
        fourthimage:false,
        selectedImage: value
        
      });
    
  }
  selectedImage5(value) {
    this.setState({
      fifthimage:false,
      selectedImage: value
    })
  }
  selectedImage6(value) {
      this.setState({
        sixthimage:false,
        selectedImage: value
      });
  }
  selectedImage7(value) {
    this.setState({
      seventhimage:false,
    selectedImage: value
  })
  }
  selectedImage8(value) {
    this.setState({
      eighthimage:false,
      selectedImage: value
    })
  }
  selectedImage9(value) {
      this.setState({
        ninthimage:false,
        selectedImage: value
      });
  }
  finish() {
    this.setState({
      finalImage: false,
      isModalVisible1: false,
      isModalVisible2: false ,
      isModalVisible3: false ,
      isModalVisible4: false ,
      isModalVisible5: false ,
      isModalVisible6: false ,
      isModalVisible7: false ,
      isModalVisible8: false ,
      isModalVisible9: false  
    })
  }
  //end method to compare selected image with captured image in manual classification
  
  async componentDidMount() {
    // get previous scout trips from localStorage
    let response = await AsyncStorage.getItem('listOfTasks'); 
    let listOfTasks = await JSON.parse(response); 
    let response1 = await AsyncStorage.getItem('scoutDetails'); 
    let scoutTrip = await JSON.parse(response1);
    this.setState({
      farmDetails : listOfTasks,
      scoutTrip: scoutTrip
    })
  }
  submit(image) {
    // save current scout trip details in local storage when finish button clicked
      // navigator.geolocation.getCurrentPosition((position) => {
      //   this.setState({
      //     marker: {
      //       latitude: position.coords.latitude,
      //       longitude: position.coords.longitude
      //     }
      //      });
      //     const scoutDetails = {
      //       farm : this.state.farmDetails.farm,
      //       block : this.state.farmDetails.block,
      //       currentDate : new Date(),
      //       bugPerTree : this.state.count,
      //       imageUrl: image,
      //       lattitude: position.coords.latitude,
      //       longitude: position.coords.longitude,
      //       classificationType: this.state.classificationType ? this.state.classificationType : 'Manual',
      //       matchingImage:  this.state.selectedImage
      //     }
           
      //     this.state.scoutTrip.push(scoutDetails);
      //     AsyncStorage.setItem('scoutDetails', JSON.stringify(this.state.scoutTrip));
       
      //  });
      
    this.props.navigation.navigate('scoutSummary');
  }
  //method called when manual tab clicked
  tabClick1() {
    console.log("manual")
    this.setState({classificationType:'Manual'})
  }
  //method called when automatic tab clicked
  async tabClick2() {
    let base64Img = this.props.navigation.state.params.captureImage;
    const base64image = await RNFS.readFile(base64Img.substring(7), 'base64');
        RNFS.readFile(base64Img, "base64")  //substring(7) -> to remove the file://
        .then(res => {
          const formdata = {
            img: res
          };
          var self = this;
          axios.post('https://55807c03.ngrok.io/insertimage', formdata)
          .then(function (response) {
            if(response.data[0]) {
              self.setState({valid:true});
            }
            else {
              self.setState({automatic:true});
            }
            self.setState({
              AIresponse: response.data.possibility,
              responseImage: response.data.image[0].imageDetails,
              description: response.data.description,
              bugType: response.data.bugType[0].bugType,
              name: response.data.possibility[0].bugName
            });
            
          })
          .catch(function (error) {
            console.log(error);
          });
        });
  }
  //method called when next tree clicked
  _showNewModal () {
    this.setState({newModalVisible: true});
  }
//method called to close modal
  _hideNewModal () {
    this.setState({newModalVisible: false});
  }
  //method called when add bugs clicked
  addBug() {
    this.setState({newModalVisible: false});
    this.props.navigation.navigate('cameraCapture');
  }
  //method to increase no of bugs
  plusBtn() {
    if(this.state.count <= 30) {
      this.setState({count:this.state.count + 1})
    }
  }
  //method to decrease no of bugs
  minusBtn(){
    if(this.state.count > 0) {
      this.setState({count:this.state.count - 1})
    }
  }
  render() {
    const {state} = this.props.navigation;
    if(this.state.AIresponse) {
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
        
        <Content>
        <List>
                        <ListItem iconLeft itemDivider>
                            <Image source={require('./img/beetle.png')} style={{ width: 35, height: 35 }}>
                          </Image>
                            <Text style={styles.textDesign}>No of Bugs at Tree</Text>
                        </ListItem>
                    </List>
                    {this.state.farmDetails && 
                        <Grid style={styles.gridAlign}>
                          <Col  >
                          <TouchableOpacity onPress={() => this.props.navigation.navigate('scout')} style={styles.loginView}>
                            
                           
                          <ResponsiveImage source={require("./img/location.png")} initWidth="35" initHeight="35"/>
                                                   
                            <Text style={styles.textAlign1}>{this.state.farmDetails.farm}</Text>
                         </TouchableOpacity>
                          </Col>
                          <Col style={styles.loginView}>
                          <ResponsiveImage source={require("./img/blocks.png")} initWidth="35" initHeight="35"/>
                          
                            <Text style={styles.textAlign1}>{this.state.farmDetails.block}</Text>
                          </Col>
                        </Grid>
                      }
          

                             <Tabs style={{ marginTop:20,backgroundColor:'#37c133' }} onChangeTab={this.tabClick2.bind(this)}>
                             
                              <Tab  heading={ <TouchableOpacity><TabHeading><Icon name="camera" /><Text>Choose Manually</Text></TabHeading></TouchableOpacity>}>
                                <List style={{margin:15}}>
                        <ListItem iconLeft itemDivider>
                        <Grid>
                        
                          <Col>
                          <View style={styles.loginView}>

                          <ResponsiveImage source={{ uri : state.params.captureImage }} initWidth="150" initHeight="150"/>

                           
                            </View>

                          </Col>
                          {this.state.finalImage ? 
                            <Col style={{marginTop:40}}>
                              <View style={styles.loginView}>
                                <ResponsiveImage source={require('./img/scan.png')} initWidth="30" initHeight="30"/>
                                <Text note>Classifying results</Text>
                              </View>
                            </Col> :
                            <Col >
                              <View style={styles.loginView}>
                                <ResponsiveImage source={{ uri : this.state.selectedImage}} initWidth="150" initHeight="150"/>
                              </View>
                            </Col> 
                          }
                            
                        </Grid>
                            
                        </ListItem>
                    </List>
                    <View style={styles.loginView}>
                      <Text>CHOOSE FROM BELOW</Text>
                    </View> 
                    <ScrollView style={styles.container}>      
                    <Grid style={styles.gridAlign}>
                        
                          <Col > 
                          <TouchableOpacity onPress={this._showModal1.bind(this)}>
                            <View style={styles.loginView}>    
                              
                               <ResponsiveImage source={require("./img/bug_images/anolcuscampestris.png")} initWidth="70" initHeight="70"/>
                              <Text style={{fontSize: 12,textAlign: 'center'}}>Anolcus campestris</Text>
                              </View>
                             </TouchableOpacity> 
                          </Col>
                         
                                              
                          <Col >
                          <TouchableOpacity onPress={this._showModal2.bind(this)}>
                          
                            <View style={styles.loginView}>

                              <ResponsiveImage source={require("./img/bug_images/coconutbug.png")} initWidth="70" initHeight="70"/>
                              <Text style={{fontSize: 12,textAlign: 'center'}}>Coconut</Text>
                          </View>
                          </TouchableOpacity>
                          </Col>
                          
                          <Col >
                          <TouchableOpacity onPress={this._showModal3.bind(this)}>

                        
                            <View style={styles.loginView}>

                              
                              <ResponsiveImage source={require("./img/bug_images/coenomorphanervosa.png")} initWidth="70" initHeight="70"/>
                              <Text style={{fontSize: 12,textAlign: 'center'}}>Coenomorpha nervosa</Text>
                          </View>
                             </TouchableOpacity>
                          </Col>
                       
                       <Col >
                        <TouchableOpacity onPress={this._showModal4.bind(this)}>

                          
                            <View style={styles.loginView}>

                            
                              <ResponsiveImage source={require("./img/bug_images/greenvegetablebug.png")} initWidth="70" initHeight="70"/>
                              <Text style={{fontSize: 12,textAlign: 'center'}}>Vegetable</Text>
                          </View>
                          </TouchableOpacity>
                          </Col>
                          
                        </Grid>
                        <Grid style={styles.gridAlign}>
                        <Col>
                         <TouchableOpacity onPress={this._showModal5.bind(this)}>
                          <View style={styles.loginView}>
                            
                            <ResponsiveImage source={require("./img/bug_images/nezaraprunasis.png")} initWidth="70" initHeight="70"/>
                            <Text style={{fontSize: 12,textAlign: 'center'}}>Nezara prunasis</Text>
                            </View>
                            </TouchableOpacity>
                          </Col>
                          
                          <Col>
                          <TouchableOpacity onPress={this._showModal6.bind(this)}>
                          <View style={styles.loginView}>
                            
                            <ResponsiveImage source={require("./img/bug_images/pseudatelusraptoria.png")} initWidth="70" initHeight="70"/>
                            <Text style={{fontSize: 12,textAlign: 'center'}}>Pseudatelus raptoria</Text>
                            </View>
                            </TouchableOpacity>
                          </Col>
                            
                          <Col >
                          <TouchableOpacity onPress={this._showModal7.bind(this)}>
                            <View style={styles.loginView}>

                             
                              <ResponsiveImage source={require("./img/bug_images/smallbrownbug.png")} initWidth="70" initHeight="70"/>
                              <Text style={{fontSize: 12,textAlign: 'center'}}>Small Brown</Text>
                          </View>
                          </TouchableOpacity>
                          </Col>
                        
                        <Col>
                          <TouchableOpacity onPress={this._showModal9.bind(this)}>
                         
                          <View style={styles.loginView}>
                            
                            <ResponsiveImage source={require("./img/bug_images/twospottedbug1.png")} initWidth="70" initHeight="70"/>
                            <Text style={{fontSize: 12,textAlign: 'center'}}>Two Spotted</Text>
                            </View>
                              </TouchableOpacity>
                          </Col>
                          <Col>
                          <TouchableOpacity onPress={this._showModal8.bind(this)}>
                         
                          <View style={styles.loginView}>
                            
                            <ResponsiveImage source={require("./img/bug_images/yellowedgedbug.png")} initWidth="70" initHeight="70"/>
                            <Text style={{fontSize: 12,textAlign: 'center'}}>Yellow Edged</Text>
                            </View>
                              </TouchableOpacity>
                          </Col>

                         
                        
                        </Grid>
                        </ScrollView>
                        <Grid style={styles.gridAlign}>
                        <Col style={styles.loginView}>
                        
                          
                          <ResponsiveImage source={require("./img/bugtree.png")} initWidth="40" initHeight="40"/>
                          
                         
                          
                          

                        </Col>
                        
                       
                    </Grid>
                     

                      <Grid style={{marginBottom:30}}>
                      <Col>
                      <View style={{marginLeft:30}}>
                      <Button light onPress={this.minusBtn.bind(this)}>
                        <FontAwesome>{Icons.minus}</FontAwesome>
                      </Button>
                      </View>
                      </Col>
                      <Col >
                       <Text style={styles.welcome} >
                          BUGS AT THIS TREE : {this.state.count}
                        </Text>
                      </Col>
                      <Col>
                      <View style={{marginLeft:30}}>
                      <Button light onPress={this.plusBtn.bind(this)}>
                        <FontAwesome>{Icons.plus}</FontAwesome>
                      </Button>
                      </View>
                      </Col>
                      </Grid>                     
                              </Tab>
                              <Tab heading={ <TabHeading><Text>Choose Automatically</Text></TabHeading>}>
                              <List style={{margin:15}}>
                        <ListItem iconLeft itemDivider>
                        <Grid>
                        
                          <Col>
                          <View style={styles.loginView}>

                          <ResponsiveImage source={{ uri : state.params.captureImage }} initWidth="150" initHeight="150"/>

                           
                            </View>

                          </Col>
                            <Col >
                            {this.state.automatic  ?
                              <View style={styles.loginView}>
                                <ResponsiveImage source={{uri: `data:image/gif;base64,${this.state.responseImage}`}} initWidth="150" initHeight="150"/>
                               
                              </View> :
                              <View >
                                {  !this.state.valid ?
                                  <Spinner color='blue' /> 
                                  :
                                  <Text style={{marginTop:40}}></Text>
                                }
                                {/* <ResponsiveImage source={require('./img/scan.png')} initWidth="30" initHeight="30"/> */}
                                <Text note>Classifying results...</Text>
                                
                              </View>
                             } 
                            </Col> 
                            </Grid>
                            </ListItem>
                            </List>

                              {/* {!this.state.automatic && !this.state.valid && */}
                              {/* // <Spinner color='blue' style={{marginTop:30}} /> */}
                               {/* } */}
                              {this.state.automatic && !this.state.valid &&

                              <View style={{ flexDirection:'row',marginTop:15}}>
                              <View style={{padding:10}}>
                                <Text style={{fontWeight:'bold'}}>NAME:</Text>
                                  <Text>{this.state.name}</Text>
                                  <Text></Text>
                                <Text style={{fontWeight:'bold'}}>TYPE:</Text>
                                  <Text>{this.state.bugType}</Text>
                                  <Text></Text>
                                  <Text style={{fontWeight:'bold'}}>DESCRIPTION:</Text>
                                  <Text>{this.state.description}</Text>
                                  <Text></Text>
                                  <Text style={{fontWeight:'bold'}}>ALL POSSIBILITIES:</Text>
                                </View>
                                <View style={{flexDirection:'column',width:'50%',justifyContent:'center',alignItems:'center'}}>
                                  <Text style={{fontWeight:'bold'}}>BUG NAME</Text>
                                  </View>
                                  <View style={{flexDirection:'column', width:'50%',justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontWeight:'bold'}}>POSSIBILITIES</Text>
                                  </View>
                              </View>
                              }
                              { this.state.valid &&
                                <View style={styles.noBugs}><Text style={{color:'red'}}>No Bugs Matched</Text></View>
                              }
                        <List >
                                {!this.state.valid && this.state.AIresponse && this.state.AIresponse.map((filter,i) => {
                                  return (
                                      <ListItem key={i}>
                                        <Grid>
                                    <Col>
                                      <Text>{filter.bugName}</Text>
                                    </Col>
                                    <Col >
                                      <Text>{filter.possibility} %</Text>
                                    </Col>
                                    </Grid>
                                </ListItem>  
                                        
                                  )
                                })}
                            </List> 
                              </Tab>
                        
                            </Tabs>


                            
                    
                        <Modal 
                        isVisible={this.state.isModalVisible1} 
                        style={styles.modalStyle}
                        onBackButtonPress={() => this._hideModal1}>
                        
                        

                        <Grid style={{marginTop:20}}>
                        
                          <Col>
                          <View style={styles.loginView}>
                           
                              <ResponsiveImage source={{ uri : state.params.captureImage}} initWidth="150" initHeight="150"/>
                            </View>

                          </Col>
                          {this.state.image && 
                            <Col style={{marginTop:35}}>
                              <View style={styles.loginView}>

                                
                                <ResponsiveImage source={require("./img/scan.png")} initWidth="30" initHeight="30"/>
                                <Text note style={{alignItems: 'center'}}>Choose from below to compare bug</Text>
                            </View>
                            </Col>  
                            }
                            {!this.state.image && 
                            <Col >
                              <View style={styles.loginView}>
                                <ResponsiveImage source={require("./img/bug_images/anolcuscampestris.png")} initWidth="150" initHeight="150"/>
                                
                            </View>
                            </Col> 
                            }
                            
                        </Grid>

                        <View style={styles.chooseoption}>
                          <Text>CHOOSE FROM BELOW</Text>
                        </View> 

                    <Grid style={styles.gridAlignview}>


                     <Col > 
                          <TouchableOpacity onPress={this.showSelectedImage1.bind(this,'anolcuscampestris')}>
                            <View style={styles.loginView}>    
                              
                              <ResponsiveImage source={require("./img/bug_images/anolcuscampestris.png")} initWidth="70" initHeight="70"/>
                              
                              </View>
                             </TouchableOpacity> 
                          </Col>
                        </Grid>
  
                          <View style={{marginTop:60,marginBottom:10}}>
                           <Segment style={{backgroundColor:'#fff'}}>
                          <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#333',marginRight:25}} onPress={this._hideModal1}>
                            <Text style={{color:'#fff'}}>Cancel</Text>
                          </Button>
                          </View>
                            <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#37c133'}} onPress={this.finish.bind(this)}> 
                            <Text style={{color:'#fff'}}>Done</Text>
                          </Button>
                          </View>
                          </Segment> 
                          </View>

                        </Modal>



                        <Modal 
                        isVisible={this.state.isModalVisible2} 
                        style={styles.modalStyle}
                        onBackButtonPress={() => this._hideModal2}>
                        
                        

                        <Grid style={{marginTop:20}}>
                        
                          <Col>
                          <View style={styles.loginView}>
                           
                              <ResponsiveImage source={{ uri : state.params.captureImage}} initWidth="150" initHeight="150"/>
                            </View>

                          </Col>
                           {this.state.secondimage ?
                            <Col style={{marginTop:35}}>
                              <View style={styles.loginView}>
                                <ResponsiveImage source={require("./img/scan.png")} initWidth="30" initHeight="30"/> 
                                <Text note style={{alignItems: 'center'}}>Choose from below to compare bug</Text>
                            </View>
                            </Col>  :
                              <Col>
                                <View style={styles.loginView}>
                                  <ResponsiveImage source={{uri : this.state.selectedImage}} initWidth="150" initHeight="150"/>
                                </View>
                              </Col>
                            }
                        </Grid>

                        <View style={styles.chooseoption}>
                          <Text>CHOOSE FROM BELOW</Text>
                        </View> 

                    <Grid style={styles.gridAlignview}>


                     <Col > 
                          <TouchableOpacity onPress={this.selectedImage2.bind(this,'coconutbug')}>
                            <View style={styles.loginView}>    
                              
                              <ResponsiveImage source={require("./img/bug_images/coconutbug.png")} initWidth="70" initHeight="70"/>
                              
                              </View>
                             </TouchableOpacity> 
                          </Col>
                         
                                              
                          <Col >
                          <TouchableOpacity onPress={this.selectedImage2.bind(this,'coconutbuginstar')}>
                    

                            <View style={styles.loginView}>

                              
                              <ResponsiveImage source={require("./img/bug_images/coconutbuginstar.png")} initWidth="70" initHeight="70"/>
                              
                          </View>
                          </TouchableOpacity>
                          </Col>
                          
                          <Col >
                          <TouchableOpacity onPress={this.selectedImage2.bind(this,'coconutbugthirdinstar')}>

                        
                            <View style={styles.loginView}>

                              
                              <ResponsiveImage source={require("./img/bug_images/coconutbugthirdinstar.png")} initWidth="70" initHeight="70"/>
                              
                          </View>
                             </TouchableOpacity>
                          </Col>
                       
                       <Col >
                        <TouchableOpacity onPress={this.selectedImage2.bind(this,'coconutbugfourinstar')}>

                          
                            <View style={styles.loginView}> 

                              
                              <ResponsiveImage source={require("./img/bug_images/coconutbugfourinstar.png")} initWidth="70" initHeight="70"/>
                               
                          </View>
                          </TouchableOpacity>
                          </Col>
                          </Grid>
                          <Grid style={styles.gridAlignview}>

                          <Col >
                        <TouchableOpacity onPress={this.selectedImage2.bind(this,'coconutbugfifthinstar')}>

                          
                            <View style={styles.loginView}> 

                              
                              <ResponsiveImage source={require("./img/bug_images/coconutbugfifthinstar.png")} initWidth="70" initHeight="70"/>
                               
                          </View>
                          </TouchableOpacity>
                          </Col>

                          <Col >
                        <TouchableOpacity onPress={this.selectedImage2.bind(this,'coconutbugadult')}>

                          
                            <View style={styles.loginView}> 

                              
                              <ResponsiveImage source={require("./img/bug_images/coconutbugadult.png")} initWidth="70" initHeight="70"/>
                               
                          </View>
                          </TouchableOpacity>
                          </Col>

                          <Col >
                        <TouchableOpacity onPress={this.selectedImage2.bind(this,'coconutbugegg')}>

                          
                            <View style={styles.loginView}> 

                              
                              <ResponsiveImage source={require("./img/bug_images/coconutbugegg.png")} initWidth="70" initHeight="70"/>
                               
                          </View>
                          </TouchableOpacity>
                          </Col>
                         
                        
                          
                          
                        </Grid>



                          
                          <View style={{marginTop:60,marginBottom:10}}>
                           <Segment style={{backgroundColor:'#fff'}}>
                          <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#333',marginRight:25}} onPress={this._hideModal2}>
                            <Text style={{color:'#fff'}}>Cancel</Text>
                          </Button>
                          </View>
                            <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#37c133'}} onPress={this.finish.bind(this)}> 
                            <Text style={{color:'#fff'}}>Done</Text>
                          </Button>
                          </View>
                          </Segment> 
                          </View>

                        </Modal>


                        <Modal 
                        isVisible={this.state.isModalVisible3} 
                        style={styles.modalStyle}
                        onBackButtonPress={() => this._hideModal3}>
                        
                        

                        <Grid style={{marginTop:20}}>
                        
                          <Col>
                          <View style={styles.loginView}>
                           
                              <ResponsiveImage source={{ uri : state.params.captureImage}} initWidth="150" initHeight="150"/>
                            </View>

                          </Col>
                          {this.state.thirdimage && 
                            <Col style={{marginTop:35}}>
                              <View style={styles.loginView}>

                                
                                <ResponsiveImage source={require("./img/scan.png")} initWidth="30" initHeight="30"/>
                                <Text note style={{alignItems: 'center'}}>Choose from below to compare bug</Text>
                            </View>
                            </Col>  
                            }
                            {!this.state.thirdimage && 
                            <Col >
                              <View style={styles.loginView}>

                               
                                <ResponsiveImage source={require("./img/bug_images/coenomorphanervosa.png")} initWidth="150" initHeight="150"/>
                                
                            </View>
                            </Col> 
                            }
                            
                        </Grid>

                        <View style={styles.chooseoption}>
                          <Text>CHOOSE FROM BELOW</Text>
                        </View> 

                    <Grid style={styles.gridAlignview}>


                     <Col > 
                          <TouchableOpacity onPress={this.selectedImage3.bind(this,'coenomorphanervosa')}>
                            <View style={styles.loginView}>    
                              
                              <ResponsiveImage source={require("./img/bug_images/coenomorphanervosa.png")} initWidth="70" initHeight="70"/>
                              
                              </View>
                             </TouchableOpacity> 
                          </Col>                     
                        </Grid>
                          <View style={{marginTop:60,marginBottom:10}}>
                           <Segment style={{backgroundColor:'#fff'}}>
                          <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#333',marginRight:25}} onPress={this._hideModal3}>
                            <Text style={{color:'#fff'}}>Cancel</Text>
                          </Button>
                          </View>
                            <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#37c133'}} onPress={this.finish.bind(this)}> 
                            <Text style={{color:'#fff'}}>Done</Text>
                          </Button>
                          </View>
                          </Segment> 
                          </View>

                        </Modal>



                        <Modal 
                        isVisible={this.state.isModalVisible4} 
                        style={styles.modalStyle}
                        onBackButtonPress={() => this._hideModal4}>
                        
                        

                        <Grid style={{marginTop:20}}>
                        
                          <Col>
                          <View style={styles.loginView}>
                           
                              <ResponsiveImage source={{ uri : state.params.captureImage}} initWidth="150" initHeight="150"/>
                            </View>

                          </Col>
                          { this.state.fourthimage ? 
                            <Col style={{marginTop:35}}>
                              <View style={styles.loginView}>
                              <ResponsiveImage source={require("./img/scan.png")} initWidth="30" initHeight="30"/>
                                <Text note style={{alignItems: 'center'}}>Choose from below to compare bug</Text>
                            </View>
                            </Col>  :
                            <Col>
                              <View style={styles.loginView}>
                                <ResponsiveImage source={{ uri : this.state.selectedImage }} initWidth="150" initHeight="150"/>
                              </View>
                            </Col>
                          }
                        </Grid>

                        <View style={styles.chooseoption}>
                          <Text>CHOOSE FROM BELOW</Text>
                        </View> 

                    <Grid style={styles.gridAlignview}>


                     <Col > 
                          <TouchableOpacity onPress={this.selectedImage4.bind(this,'greenvegetablebug')}>
                            <View style={styles.loginView}>    
                              
                              <ResponsiveImage source={require("./img/bug_images/greenvegetablebug.png")} initWidth="70" initHeight="70"/>
                              
                              </View>
                             </TouchableOpacity> 
                          </Col> 
                          <Col > 
                          <TouchableOpacity onPress={this.selectedImage4.bind(this,'greenvegetablebuggreenvariant')}>
                            <View style={styles.loginView}>    
                              
                              <ResponsiveImage source={require("./img/bug_images/greenvegetablebuggreenvariant.png")} initWidth="70" initHeight="70"/>
                              
                              </View>
                             </TouchableOpacity> 
                          </Col> 
                          <Col > 
                          <TouchableOpacity onPress={this.selectedImage4.bind(this,'greenvegetablebugthree')}>
                            <View style={styles.loginView}>    
                              
                              <ResponsiveImage source={require("./img/bug_images/greenvegetablebugthree.png")} initWidth="70" initHeight="70"/>
                              
                              </View>
                             </TouchableOpacity> 
                          </Col> 
                          <Col > 
                          <TouchableOpacity onPress={this.selectedImage4.bind(this,'greenvegetabletwobug')}>
                            <View style={styles.loginView}>    
                              
                              <ResponsiveImage source={require("./img/bug_images/greenvegetabletwobug.png")} initWidth="70" initHeight="70"/>
                              
                              </View>
                             </TouchableOpacity> 
                          </Col>                     
                          
                          
                        </Grid>
                          <View style={{marginTop:60,marginBottom:10}}>
                           <Segment style={{backgroundColor:'#fff'}}>
                          <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#333',marginRight:25}} onPress={this._hideModal4}>
                            <Text style={{color:'#fff'}}>Cancel</Text>
                          </Button>
                          </View>
                            <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#37c133'}} onPress={this.finish.bind(this)}> 
                            <Text style={{color:'#fff'}}>Done</Text>
                          </Button>
                          </View>
                          </Segment> 
                          </View>

                        </Modal>



                        <Modal 
                        isVisible={this.state.isModalVisible5} 
                        style={styles.modalStyle}
                        onBackButtonPress={() => this._hideModal5}>
                        
                        

                        <Grid style={{marginTop:20}}>
                        
                          <Col>
                          <View style={styles.loginView}>
                           
                              <ResponsiveImage source={{ uri : state.params.captureImage}} initWidth="150" initHeight="150"/>
                            </View>

                          </Col>
                          {this.state.fifthimage && 
                            <Col style={{marginTop:35}}>
                              <View style={styles.loginView}>

                                
                                <ResponsiveImage source={require("./img/scan.png")} initWidth="30" initHeight="30"/>
                                <Text note style={{alignItems: 'center'}}>Choose from below to compare bug</Text>
                            </View>
                            </Col>  
                            }
                            {!this.state.fifthimage && 
                            <Col >
                              <View style={styles.loginView}>

                               
                                <ResponsiveImage source={require("./img/bug_images/nezaraprunasis.png")} initWidth="150" initHeight="150"/>
                                
                            </View>
                            </Col> 
                            }
                        </Grid>

                        <View style={styles.chooseoption}>
                          <Text>CHOOSE FROM BELOW</Text>
                        </View> 

                    <Grid style={styles.gridAlignview}>


                     <Col > 
                          <TouchableOpacity onPress={this.selectedImage5.bind(this,'nezaraprunasis')}>
                            <View style={styles.loginView}>    
                              
                              <ResponsiveImage source={require("./img/bug_images/nezaraprunasis.png")} initWidth="70" initHeight="70"/>
                              
                              </View>
                             </TouchableOpacity> 
                          </Col>
                        </Grid>
                         <View style={{marginTop:60,marginBottom:10}}>
                           <Segment style={{backgroundColor:'#fff'}}>
                          <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#333',marginRight:25}} onPress={this._hideModal5}>
                            <Text style={{color:'#fff'}}>Cancel</Text>
                          </Button>
                          </View>
                            <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#37c133'}} onPress={this.finish.bind(this)}> 
                            <Text style={{color:'#fff'}}>Done</Text>
                          </Button>
                          </View>
                          </Segment> 
                          </View>

                        </Modal>



                        <Modal 
                        isVisible={this.state.isModalVisible6} 
                        style={styles.modalStyle}
                        onBackButtonPress={() => this._hideModal6}>
                        
                        

                        <Grid style={{marginTop:20}}>
                        
                          <Col>
                          <View style={styles.loginView}>
                           
                              <ResponsiveImage source={{ uri : state.params.captureImage}} initWidth="150" initHeight="150"/>
                            </View>

                          </Col>
                          {this.state.sixthimage ?
                            <Col style={{marginTop:35}}>
                              <View style={styles.loginView}>
                                <ResponsiveImage source={require("./img/scan.png")} initWidth="30" initHeight="30"/>
                                <Text note style={{alignItems: 'center'}}>Choose from below to compare bug</Text>
                            </View> 
                            </Col> :
                            <Col>
                            <View style={styles.loginView}>
                              <ResponsiveImage source={{ uri : this.state.selectedImage }} initWidth="150" initHeight="150"/>
                            </View>
                            </Col>  
                          }
                        </Grid>

                        <View style={styles.chooseoption}>
                          <Text>CHOOSE FROM BELOW</Text>
                        </View> 

                    <Grid style={styles.gridAlignview}>


                     <Col > 
                          <TouchableOpacity onPress={this.selectedImage6.bind(this,'pseudatelusraptoiatwoinstar')}>
                            <View style={styles.loginView}>    
                              
                              <ResponsiveImage source={require("./img/bug_images/pseudatelusraptoiatwoinstar.png")} initWidth="70" initHeight="70"/>
                              
                              </View>
                             </TouchableOpacity> 
                          </Col>
                         
                                              
                          <Col >
                          <TouchableOpacity onPress={this.selectedImage6.bind(this,'pseudatelusraptoriathreeinstar')}>
                          
                            <View style={styles.loginView}>

                              
                              <ResponsiveImage source={require("./img/bug_images/pseudatelusraptoriathreeinstar.png")} initWidth="70" initHeight="70"/>
                              
                          </View>
                          </TouchableOpacity>
                          </Col>
                          
                          <Col >
                          <TouchableOpacity onPress={this.selectedImage6.bind(this,'pseudatelusraptoriafourinstar')}>

                        
                            <View style={styles.loginView}>

                              
                              <ResponsiveImage source={require("./img/bug_images/pseudatelusraptoriafourinstar.png")} initWidth="70" initHeight="70"/>
                              
                          </View>
                             </TouchableOpacity>
                          </Col>
                       
                       <Col >
                        <TouchableOpacity onPress={this.selectedImage6.bind(this,'pseudatelusraptoiafiveinstar')}>

                          
                            <View style={styles.loginView}> 

                              
                              <ResponsiveImage source={require("./img/bug_images/pseudatelusraptoiafiveinstar.png")} initWidth="70" initHeight="70"/>
                               
                          </View>
                          </TouchableOpacity>
                          </Col> 
                          <Col >
                        <TouchableOpacity onPress={this.selectedImage6.bind(this,'pseudatelusraptoria')}>

                          
                            <View style={styles.loginView}> 

                              
                              <ResponsiveImage source={require("./img/bug_images/pseudatelusraptoria.png")} initWidth="70" initHeight="70"/>
                               
                          </View>
                          </TouchableOpacity>
                          </Col> 
                        </Grid>
                          <View style={{marginTop:60,marginBottom:10}}>
                           <Segment style={{backgroundColor:'#fff'}}>
                          <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#333',marginRight:25}} onPress={this._hideModal6}>
                            <Text style={{color:'#fff'}}>Cancel</Text>
                          </Button>
                          </View>
                            <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#37c133'}} onPress={this.finish.bind(this)}> 
                            <Text style={{color:'#fff'}}>Done</Text>
                          </Button>
                          </View>
                          </Segment> 
                          </View>

                        </Modal>




                        <Modal 
                        isVisible={this.state.isModalVisible7} 
                        style={styles.modalStyle}
                        onBackButtonPress={() => this._hideModal7}>
                        
                        

                        <Grid style={{marginTop:20}}>
                        
                          <Col>
                          <View style={styles.loginView}>
                           
                              <ResponsiveImage source={{ uri : state.params.captureImage}} initWidth="150" initHeight="150"/>
                            </View>

                          </Col>
                          {this.state.seventhimage && 
                            <Col style={{marginTop:35}}>
                              <View style={styles.loginView}>

                                
                                <ResponsiveImage source={require("./img/scan.png")} initWidth="30" initHeight="30"/>
                                <Text note style={{alignItems: 'center'}}>Choose from below to compare bug</Text>
                            </View>
                            </Col>  
                            }
                            {!this.state.seventhimage && 
                            <Col >
                              <View style={styles.loginView}>
                                <ResponsiveImage source={require("./img/bug_images/smallbrownbug.png")} initWidth="150" initHeight="150"/>
                              </View>
                            </Col> 
                            }                            
                        </Grid>

                        <View style={styles.chooseoption}>
                          <Text>CHOOSE FROM BELOW</Text>
                        </View> 

                    <Grid style={styles.gridAlignview}>


                     <Col > 
                          <TouchableOpacity onPress={this.selectedImage7.bind(this,'smallbrownbug')}>
                            <View style={styles.loginView}>    
                              
                              <ResponsiveImage source={require("./img/bug_images/smallbrownbug.png")} initWidth="70" initHeight="70"/>
                              
                              </View>
                             </TouchableOpacity> 
                          </Col>
                        </Grid>
                        <View style={{marginTop:60,marginBottom:10}}>
                           <Segment style={{backgroundColor:'#fff'}}>
                          <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#333',marginRight:25}} onPress={this._hideModal7}>
                            <Text style={{color:'#fff'}}>Cancel</Text>
                          </Button>
                          </View>
                            <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#37c133'}} onPress={this.finish.bind(this)}> 
                            <Text style={{color:'#fff'}}>Done</Text>
                          </Button>
                          </View>
                          </Segment> 
                          </View>

                        </Modal>





                        <Modal 
                        isVisible={this.state.isModalVisible8} 
                        style={styles.modalStyle}
                        onBackButtonPress={() => this._hideModal8}>
                        
                        

                        <Grid style={{marginTop:20}}>
                        
                          <Col>
                          <View style={styles.loginView}>
                           
                              <ResponsiveImage source={{ uri : state.params.captureImage}} initWidth="150" initHeight="150"/>
                            </View>

                          </Col>
                          {this.state.eighthimage && 
                            <Col style={{marginTop:35}}>
                              <View style={styles.loginView}>

                                
                                <ResponsiveImage source={require("./img/scan.png")} initWidth="30" initHeight="30"/>
                                <Text note style={{alignItems: 'center'}}>Choose from below to compare bug</Text>
                            </View>
                            </Col>  
                            }
                            {!this.state.eighthimage && 
                            <Col >
                              <View style={styles.loginView}>

                               
                                <ResponsiveImage source={require("./img/bug_images/yellowedgedbug.png")} initWidth="150" initHeight="150"/>
                                
                            </View>
                            </Col> 
                            }
                            
                        </Grid>

                        <View style={styles.chooseoption}>
                          <Text>CHOOSE FROM BELOW</Text>
                        </View> 

                    <Grid style={styles.gridAlignview}>


                     <Col > 
                          <TouchableOpacity onPress={this.selectedImage8.bind(this,'yellowedgedbug')}>
                            <View style={styles.loginView}>    
                              
                              <ResponsiveImage source={require("./img/bug_images/yellowedgedbug.png")} initWidth="70" initHeight="70"/>
                              
                              </View>
                             </TouchableOpacity> 
                          </Col>
                        </Grid>
                        <View style={{marginTop:60,marginBottom:10}}>
                           <Segment style={{backgroundColor:'#fff'}}>
                          <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#333',marginRight:25}} onPress={this._hideModal8}>
                            <Text style={{color:'#fff'}}>Cancel</Text>
                          </Button>
                          </View>
                            <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#37c133'}} onPress={this.finish.bind(this)}> 
                            <Text style={{color:'#fff'}}>Done</Text>
                          </Button>
                          </View>
                          </Segment> 
                          </View>

                        </Modal>



                        <Modal 
                        isVisible={this.state.isModalVisible9} 
                        style={styles.modalStyle}
                        onBackButtonPress={() => this._hideModal9}>
                        
                        

                        <Grid style={{marginTop:20}}>
                        
                          <Col>
                          <View style={styles.loginView}>
                           
                              <ResponsiveImage source={{ uri : state.params.captureImage}} initWidth="150" initHeight="150"/>
                            </View>

                          </Col>
                          {this.state.ninthimage ?
                            <Col style={{marginTop:35}}>
                              <View style={styles.loginView}>                             
                                  <ResponsiveImage source={require("./img/scan.png")} initWidth="30" initHeight="30"/>
                                  <Text note style={{alignItems: 'center'}}>Choose from below to compare bug</Text>
                                </View> 
                            </Col> :
                            <Col>
                              <View style={styles.loginView}>
                                <ResponsiveImage source={{ uri : this.state.selectedImage }} initWidth="150" initHeight="150"/>
                            </View>
                            </Col>   
                            }        
                        </Grid>
                        <View style={styles.chooseoption}>
                          <Text>CHOOSE FROM BELOW</Text>
                        </View> 

                    <Grid style={styles.gridAlignview}>


                     <Col > 
                          <TouchableOpacity onPress={this.selectedImage9.bind(this,'twospottedbug1')}>
                            <View style={styles.loginView}>    
                              
                              <ResponsiveImage source={require("./img/bug_images/twospottedbug1.png")} initWidth="70" initHeight="70"/>
                              
                              </View>
                             </TouchableOpacity> 
                          </Col>
                         
                                              
                          <Col >
                          <TouchableOpacity onPress={this.selectedImage9.bind(this,'twospottedbugtwoinstar')}>
                          
                            <View style={styles.loginView}>

                              
                              <ResponsiveImage source={require("./img/bug_images/twospottedbugtwoinstar.png")} initWidth="70" initHeight="70"/>
                              
                          </View>
                          </TouchableOpacity>
                          </Col>
                          
                          <Col >
                          <TouchableOpacity onPress={this.selectedImage9.bind(this,'twospottedbugthreeinstar')}>

                        
                            <View style={styles.loginView}>

                              
                              <ResponsiveImage source={require("./img/bug_images/twospottedbugthreeinstar.png")} initWidth="70" initHeight="70"/>
                              
                          </View>
                             </TouchableOpacity>
                          </Col>
                       
                       <Col >
                        <TouchableOpacity onPress={this.selectedImage9.bind(this,'twospottedbugfourinstar')}>

                          
                            <View style={styles.loginView}> 

                              
                              <ResponsiveImage source={require("./img/bug_images/twospottedbugfourinstar.png")} initWidth="70" initHeight="70"/>
                               
                          </View>
                          </TouchableOpacity>
                          </Col>
                        </Grid>
                        <Grid style={styles.gridAlignview}>
                          <Col >
                          <TouchableOpacity onPress={this.selectedImage9.bind(this,'twospottedbugfiveinstar')}>
                          
                            <View style={styles.loginView}>

                              
                              <ResponsiveImage source={require("./img/bug_images/twospottedbugfiveinstar.png")} initWidth="70" initHeight="70"/>
                              
                          </View>
                          </TouchableOpacity>
                          </Col>
                          
                          <Col >
                          <TouchableOpacity onPress={this.selectedImage9.bind(this,'twospottedbugadult')}>

                        
                            <View style={styles.loginView}>

                              
                              <ResponsiveImage source={require("./img/bug_images/twospottedbugadult.png")} initWidth="70" initHeight="70"/>
                              
                          </View>
                             </TouchableOpacity>
                          </Col>
                       
                       <Col >
                        <TouchableOpacity onPress={this.selectedImage9.bind(this,'twospottedbugeggs')}>

                          
                            <View style={styles.loginView}> 

                              
                              <ResponsiveImage source={require("./img/bug_images/twospottedbugeggs.png")} initWidth="70" initHeight="70"/>
                               
                          </View>
                          </TouchableOpacity>
                          </Col>
                        </Grid>
                          <View style={{marginTop:60,marginBottom:10}}>
                           <Segment style={{backgroundColor:'#fff'}}>
                          <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#333',marginRight:25}} onPress={this._hideModal9}>
                            <Text style={{color:'#fff'}}>Cancel</Text>
                          </Button>
                          </View>
                            <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#37c133'}} onPress={this.finish.bind(this)}> 
                            <Text style={{color:'#fff'}}>Done</Text>
                          </Button>
                          </View>
                          </Segment> 
                          </View>

                        </Modal>
                        <Modal 
                        isVisible={this.state.newModalVisible} 
                        style={styles.modalStyle1}
                        onBackButtonPress={() => this._hideNewModal}>
                        <View style={{marginTop:10,marginBottom:10}}>
                        
                           <Segment style={{backgroundColor:'#fff'}}>

                          <View style={styles.loginView}>
                            <Button style={{backgroundColor:'#333',marginRight:25}} onPress={this._hideNewModal.bind(this)}>
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


                        <View style={{ flex: 1 }}>
                          
                        </View>

                    </Content>


                    <Footer style={{backgroundColor:'#37c133'}}>
          <FooterTab>
            <Button vertical onPress={() => this.props.navigation.navigate('cameraCapture')}>
              <Icon name="camera" />
              
              <Text>New Bug</Text>
            </Button>
            <Button vertical active onPress={this.submit.bind(this,state.params.captureImage)}>
              <FontAwesome style={{color:'#fff'}}>{Icons.check}</FontAwesome>
              <Text>Finish</Text>
            </Button>
            <Button vertical onPress={this._showNewModal.bind(this)}>
              <FontAwesome style={{color:'#fff'}}>{Icons.tree}</FontAwesome>
              <Text>Next Tree</Text>
            </Button>
            
          </FooterTab>
        </Footer>
                    
        
        </Drawer>
      </Container>
    );
  }
  else {
    return(
      <Spinner color='blue' style={{marginTop:30}} />
    );
  }
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
  loginView1:{
    marginTop:40,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  chooseoption: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 30, 
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
  gridAlignview: {
    marginTop: 15
  },
  textAlign1: {
    marginTop:10,
    color:'#333'
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
  hdrColor1: {
    backgroundColor: '#333',
    padding:5,
    width:40,
    height:40,
    marginBottom:8
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
  modalStyle: {
    backgroundColor: '#fff',
    marginHorizontal:10,
    marginVertical:10
  },
  modalStyle1: {
    backgroundColor: '#fff',
    marginHorizontal:30,
    marginVertical:200
  },
  marAlign: {
    marginBottom: 15
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 500,
    width: 500
  },
  textright: { 
    alignSelf: 'flex-end', 
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    alignItems: 'center', 
  },
  noBugs: {
    alignItems: 'center',
    marginTop:20
  }
})
AppRegistry.registerComponent('bugSummary', () => bugSummary);