import React, { Component } from 'react';
import { Text, View , StyleSheet , TextInput, TouchableOpacity} from 'react-native';
import Form from '../components/Form';
import Logo from '../components/Logo';
import Signup from './Signup';

import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component<{}> {
  render() {
    return (
       <View style={styles.container}>
        <Logo/>
        <Form type="Sign in" navigation={this.props.navigation}/>
        </View>
      );
    };
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#455a64', 
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
    }, 
    signupTextCont: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingVertical: 16, 
      flexDirection: 'row'
    },
    signupText: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 16
    },
    signupButton: {
      color: 'white',
      fontSize: 16, 
      fontWeight: '500'
    },
    text: {
      color: 'black', 
      fontSize: 40
    },
    inputBox: {
      width: 300,

    }
  });
  