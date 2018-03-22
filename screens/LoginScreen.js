import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image
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


          <View>

            <View style={{ 
                height: 150,
                backgroundColor: 'white',
              }}
            >
              <View style={{
                  opacity: 1, //animate
                  alignItems: 'flex-start',
                  paddingHorizontal: 25,
                  marginTop: 25 //animate
                }}
              >
                <Text style={{ fontSize: 20 }}>Get moving with Uber By Arqui</Text>
              </View>

              <TouchableOpacity>
                <View style={{
                    marginTop: 25, //animate
                    paddingHorizontal: 25,
                    flexDirection: 'row'
                  }}
                >
                  <Image source={require('../assets/ve.png')} style={{ height: 24, width: 25, resizeMode: 'contain'}} />
                  <View style={{
                      flexDirection: 'row', 
                      flex: 1,
                    }}
                  >
                    <Text style={{ fontSize: 20, paddingHorizontal: 10 }}></Text>
                    
                    <TextInput 
                      style={{ flex: 1, fontSize: 20 }}
                      placeholder='Ingresa tu numero telefonico'
                      underlineColorAndroid="transparent"
                    />

                  </View>

                </View>
              </TouchableOpacity>

            </View>

            <View style={{ 
                height: 70,
                backgroundColor: 'white',
                alignItems: 'flex-start',
                justifyContent: 'center',
                borderTopColor: '#e8e8ec',
                borderWidth: 1,
                paddingHorizontal: 25,
              }}
            >
              <Text style={{
                  color: '#5a7fdf'  
                }}
              >
                Or connect using social account
              </Text>

            </View>
            
          </View>
        </ImageBackground>
      </View>
    )
  }
}
export default LoginScreen;
