import React, { Component } from 'react';
import { Text, View , StyleSheet , TextInput, TouchableOpacity} from 'react-native';
import Form from '../components/Form';
import Logo from '../components/Logo';
import Signup from './Signup';

import AsyncStorage from '@react-native-community/async-storage';

import AzureAuth from 'react-native-azure-auth';

const azureAuth = new AzureAuth({
    clientId: '13892435-4df6-43a4-b6e9-922b6dbc3098'
})


export default class Login extends Component<{}> {
  
 async  onPressAzureLogin() {
  try {
    let tokens = await azureAuth.webAuth.authorize({scope: 'openid profile User.Read Mail.Read' })
    this.setState({ accessToken: tokens.accessToken });
    let info = await azureAuth.auth.msGraphRequest({token: tokens.accessToken, path: '/me'})
    this.setState({ user: info.displayName, userId: tokens.userId })
  } catch (error) {
    console.log(error)
  }
  }
  
  render() {
    return (
       <View style={styles.container}>
        <Logo/>
        <Form type="Sign in" navigation={this.props.navigation}/>
        <TouchableOpacity
        style={styles.azureButton}
        onPress={onPress}>
          <Text>LoginViaAzure</Text>
         </TouchableOpacity>
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
    },
    azureButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
    },
  });
  
