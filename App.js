import React, { Component } from 'react';
import { Text, View , StyleSheet, StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login'
import Signup from './src/pages/Signup'
import Home from './src/pages/Home'


import AzureAuth from 'react-native-azure-auth';

const azureAuth = new AzureAuth({
    clientId: '13892435-4df6-43a4-b6e9-922b6dbc3098'
});

const Stack = createStackNavigator();


export default class App extends Component<{}> {
 
  render() {
    return (
      <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown:false}}
        />
          <Stack.Screen
          name="Signup"
          component={Signup}
        
        />
         <Stack.Screen
          name="Home"
          component={Home}
        
        /> 
      </Stack.Navigator>

      
    </NavigationContainer>
       
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
  text: {
    color: 'black', 
    fontSize: 40
  }
});
