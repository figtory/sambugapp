import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  CameraRoll,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { Container, Content,Navbar,Header, Title,Left,ListItem,List, InputGroup,Input, Icon,Right, Body, Segment, Button} from 'native-base';
import FontAwesome, { Icons } from 'react-native-fontawesome';
export default class selectGallery extends Component {
  constructor() {
    super();
   this.state = {
    photos: [],
    index:null,
    picture:'./icons/scouter.png'
  }
  CameraRoll.getPhotos({
      first: 20,
      assetType: 'All'
    })
    .then(r => this.setState({ photos: r.edges }))
    this.getImage.bind(this);
  }
  static navigationOptions = () => ({
    headerStyle: {
        display:'none',
        height: 0
    }
})
  render() {
    const { width } = Dimensions.get('window')
    return (
      <Container>
      <Header style={styles.hdrColor}>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.navigate('addNewBug')}>
                        <FontAwesome style={{color:'#fff'}}>{Icons.chevronLeft}</FontAwesome>
                    </Button>
                </Left>
                    <Body >
                      <TouchableOpacity onPress= {() => this.props.navigation.navigate('dashboard')}>

                      <Title style={styles.loginView}><Text style={styles.sam}>SAM</Text><Text style={styles.bug}>BUG</Text></Title>
                  </TouchableOpacity>
                       </Body>
                    <Right>
                    
                    <Button transparent >
                        <FontAwesome style={{color:'#fff'}}>{Icons.ellipsisV}</FontAwesome>
                    </Button>
                    </Right>
                </Header>
      <ScrollView
              contentContainerStyle={styles.scrollView}>
              {
                this.state.photos.map((p, i) => {
                  return (
                    <TouchableHighlight
                      style={{opacity: i === this.state.index ? 0.5 : 1}}
                      key={i}
                      underlayColor='transparent'
                      onPress={this.getImage.bind(this,i)}
                    >
                      <Image
                        style={{
                          width: (width/3),
                          height: (width/3),
                         
                        }}
                        source={{uri: p.node.image.uri}}
                      />
                      
                      </TouchableHighlight>
                  )
                })
              }
            </ScrollView>
      </Container>
    );
  }
  getImage(i) {
    this.setState({index:i});
    const image = this.state.photos[i].node.image.uri;
    this.setState({image:image})
    this.props.navigation.navigate('addNewBug',{captureImage:image});

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
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
  modalContainer: {
    paddingTop: 20,
    flex: 1
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
});

