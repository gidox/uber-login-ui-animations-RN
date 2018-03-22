import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  Keyboard,
  Platform
} from 'react-native';
import { Icon } from 'native-base';
const HEIGHT_WINDOW = Dimensions.get("window").height;
import * as Animatable from 'react-native-animatable';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(){
    super();
    this.state = { 
      placeholderTxt: 'Ingresa tu numero telefonico'
    }
  }
  componentWillMount(){
    this.loginHeight = new Animated.Value(150);
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
    
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
    
    this.keyboardHeight = new Animated.Value(0);
    this.forwardArrowOpacity = new Animated.Value(0);
    this.borderBottomWidth = new Animated.Value(0);
    
  }

  keyboardWillShow = (event) => {
    if(Platform.OS == 'android'){
      duration = 100;
    }else{
      duration = event.duration;
    }
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: duration + 100,
        toValue: event.endCoordinates.height + 10
      }),
      Animated.timing(this.forwardArrowOpacity, {
        duration: duration,
        toValue: 1,
      }),
      Animated.timing(this.borderBottomWidth, {
        duration: duration,
        toValue: 1,
      })

    ]).start();
  }
  keyboardWillHide = (event) => {

    if(Platform.OS == 'android'){
      duration = 100;
    }else{
      duration = event.duration;
    }

    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: duration + 100,
        toValue: 0
      }),
      Animated.timing(this.forwardArrowOpacity, {
        duration: duration,
        toValue: 0,
      }),
      Animated.timing(this.borderBottomWidth, {
        duration: duration,
        toValue: 0,
      })

    ]).start();
  }

  increaseHeightOfLogin = () => {
    this.setState({ placeholderTxt: "426-8823942"})
    Animated.timing(this.loginHeight, { 
      toValue: HEIGHT_WINDOW, 
      duration: 500
    }).start(() => {
      this.refs.textInputMobile.focus();
    });
  }
  decreaseHeightOfLogin = () => {
    Keyboard.dismiss();
    Animated.timing(this.loginHeight, { 
      toValue: 150, 
      duration: 500
    }).start();
  }
  render() {

    const headerTxtOpacity = this.loginHeight.interpolate({
      inputRange: [150,HEIGHT_WINDOW],
      outputRange: [1,0]
    })
    const headerArrowOpacity = this.loginHeight.interpolate({
      inputRange: [150,HEIGHT_WINDOW],
      outputRange: [0,1]
    })

    const marginTop = this.loginHeight.interpolate({
      inputRange: [150,HEIGHT_WINDOW],
      outputRange: [25,100]
    })

    const titleTxtLeft = this.loginHeight.interpolate({
      inputRange: [150,HEIGHT_WINDOW],
      outputRange: [100,25]
    })

    const titleTxtBottom = this.loginHeight.interpolate({
      inputRange: [150,400,HEIGHT_WINDOW],
      outputRange: [0,0,100]
    })

    const titleTxtOpacity = this.loginHeight.interpolate({
      inputRange: [150,HEIGHT_WINDOW],
      outputRange: [0,1]
    })
    
    return (
      <View style={{ flex: 1 }}>

        <Animated.View 
          style={{
            position: 'absolute',
            height: 60, width: 60,
            top: 60,
            left: 25,
            zIndex: 100,
            opacity: headerArrowOpacity,
          }}
        >
          <TouchableOpacity
            onPress={() => this.decreaseHeightOfLogin()}
          > 
            
            <Icon name="md-arrow-back"  style={{ color: 'black' }} />
          </TouchableOpacity>
        </Animated.View>
       
        <Animated.View
          style={{
            position: 'absolute',
            height: 60,width:60,
            right: 10,
            bottom: this.keyboardHeight, //animate,
            opacity: this.forwardArrowOpacity, //animate
            zIndex: 100,
            backgroundColor: '#54575e',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,

          }}
        >
          <Icon name="md-arrow-forward" style={{ color: 'white' }} />
        </Animated.View>

        <ImageBackground
          source={require('../assets/bg.png')}
          style={{ flex: 1 }}
        >
          <Animatable.View 
            animation="zoomIn"
            iterationCount={1}
            style={{ 
              flex: 1, 
              justifyContent: 'center', 
              alignItems: 'center'
             }}
          >
            <View style={{ backgroundColor: 'white', height: 100, width: 100, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 26 }}>UBER</Text>
            </View>
          </Animatable.View>


          <Animatable.View 
            animation="slideInUp"
            iterationCount={1}
          >

            <Animated.View style={{ 
                height: this.loginHeight,
                backgroundColor: 'white',
              }}
            >
              <Animated.View style={{
                  opacity: headerTxtOpacity, //animate
                  alignItems: 'flex-start',
                  paddingHorizontal: 25,
                  marginTop: marginTop, //animate
                }}
              >
                <Text style={{ fontSize: 20 }}>Get moving with Uber By Arqui</Text>
              </Animated.View>

              <TouchableOpacity
                onPress={() => this.increaseHeightOfLogin()}
              >
                <Animated.View style={{
                    marginTop: marginTop, //animate
                    paddingHorizontal: 25,
                    flexDirection: 'row'
                  }}
                >
                  <Animated.Text
                    style={{ 
                      fontSize: 25, 
                      color: 'gray', 
                      position: 'absolute', 
                      bottom: titleTxtBottom,
                      left: titleTxtLeft,
                      opacity: titleTxtOpacity
                    }}
                  >
                    Ingresa un numero telefonico
                  </Animated.Text>
                  
                  <Image source={require('../assets/ve.png')} style={{ height: 24, width: 25, resizeMode: 'contain'}} />
                  
                  <Animated.View
                    pointerEvents="none" 
                    style={{
                      flexDirection: 'row', 
                      flex: 1,
                      borderBottomWidth: this.borderBottomWidth
                    }}
                  >
                    <Text style={{ fontSize: 20, paddingHorizontal: 10 }}></Text>
                    
                    <TextInput 
                      keyboardType="numeric"
                      ref="textInputMobile"
                      style={{ flex: 1, fontSize: 20 }}
                      placeholder={this.state.placeholderTxt}
                      underlineColorAndroid="transparent"
                    />

                  </Animated.View>

                </Animated.View>
              </TouchableOpacity>

            </Animated.View>

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
            
          </Animatable.View>
        </ImageBackground>
      </View>
    )
  }
}
export default LoginScreen;
