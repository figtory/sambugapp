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
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import pick from 'lodash/pick';
import {Button} from 'native-base';

var { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE = 0;
const LONGITUDE = 0;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

export default class location extends Component {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude:LONGITUDE ,
       latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      marker : {
        latitude: 0,
        longitude: 0,
      },
      address:{},
      title:'',
      description:'',
      lastPos : [],
      Polyline : [
         ],
      routeCoordinates: [] 
    }

    navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          marker: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
        this.watchID = navigator.geolocation.watchPosition((pos) => {
          const { routeCoordinates } = this.state
            const positionLatLngs = pick(pos.coords, ['latitude', 'longitude'])
            this.setState({ routeCoordinates: routeCoordinates.concat(positionLatLngs) });
        this.setState({
          
          Polyline:[{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },{
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          }],
          lastPos:[{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },{
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          }]
        });
      });

        // lattitude delta and langitude delta calculation
        var minX = position.coords.latitude;
        var maxX = position.coords.latitude;
        var minY = position.coords.longitude;
        var maxY = position.coords.longitude;

        minX = Math.min(minX, position.coords.latitude);
        maxX = Math.max(maxX, position.coords.latitude);
        minY = Math.min(minY, position.coords.longitude);
        maxY = Math.max(maxY, position.coords.longitude);

        var midX = (minX + maxX) / 2;
        var midY = (minY + maxY) / 2;
        var midPoint = [midX, midY];

        var deltaX = (maxX - minX);
        var deltaY = (maxY - minY);

        //update region using geo location

        this.setState({
           region: {
            latitude: midX,
            longitude:midY ,
           latitudeDelta: deltaX,
            longitudeDelta: deltaY
          }
        });

        // get address using geo coding

         Geocoder.setApiKey('AIzaSyBUafTqsXnURFTjL5eqwiNNvhG02_5ijq4');
          Geocoder.getFromLatLng(position.coords.latitude, position.coords.longitude).then(
          json => {
            var address_component = json.results[0].address_components;
            this.setState({
              address:address_component,
              title:address_component[3].long_name,
              description:address_component[4].long_name
            });
          },
          error => {
            alert(error);
          }
        );
      },
      (error) => alert(error.message),
       {enableHighAccuracy: false, timeout: 20000, maximumAge: 10000}
      
    );
    

  }

    goDashboard() {
      this.props.navigation.navigate('dashboard',{address:this.state.address});
    }
    static navigationOptions = () => ({
    headerStyle: {
      display:'none',
        height: 0
    }
})
  render() {
    
    
    return (
       <View style={styles.container}>
          <MapView style={styles.map}
            provider="google"
            region={this.state.region}
            showsUserLocation={true}
            followUserLocation={true}
            overlays={[{
              coordinates: this.state.routeCoordinates,
              strokeColor: '#19B5FE',
              lineWidth: 10,
            }]}
          >
            
              <MapView.Marker
                coordinate={this.state.marker}
              />
               <MapView.Polyline 
            coordinates={this.state.routeCoordinates}
            strokeWidth={2}
            strokeColor="red" />
            </MapView>
         <Button rounded light style={styles.textright} onPress={this.goDashboard.bind(this)}>
            <Text>Lets Go!</Text>
          </Button>
        </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'gray',
    paddingHorizontal:10
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  textright: { 
    alignSelf: 'flex-end', 
    top: 220 
  }
});

AppRegistry.registerComponent('location', () => location);
