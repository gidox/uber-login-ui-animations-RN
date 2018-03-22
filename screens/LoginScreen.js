import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground
} from 'react-native'

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/bg.png')}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 26 }}>UBER</Text>
            </View>
          </View>
          
        </ImageBackground>
      </View>
    )
  }
}
export default LoginScreen;
