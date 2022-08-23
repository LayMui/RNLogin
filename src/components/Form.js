import React, { Component } from 'react';
import { Text, View , StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import testProperties from '../utility/helper'
export default class Form extends Component<{}> {
  render() {
    const { navigate } = this.props.navigation;
    return (
         <View style={styles.container}>
        <TextInput style={styles.inputBox} 
        {...testProperties('email')}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Email"
        placeholderTextColor = 'white'
       />
       <TextInput 
        {...testProperties('password')}
        style={styles.inputBox} 
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor = 'white'
        />
        <TouchableOpacity  
        onPress={() => navigate('Home')}
        {...testProperties('login')}
         style={styles.button}>
            <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
       </View>
       
      );
    };
  }

  const styles = StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: 'flex-start',
    }, 
    button: {
        width: 300, 
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25, 
        marginVertical: 10,
        borderRadius: 25,
        marginVertical: 10, 
        paddingVertical: 16,
        backgroundColor: '#1c313a'
    }, 
    buttonText: {
        fontSize: 16, 
        fontWeight: '500', 
        color: 'white', 
        textAlign: 'center', 
       
       
    },
    inputBox: {
      width: 300,
      height: 50,
      color: 'white', 
      marginVertical: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 15, 
      paddingHorizontal: 20
    }
  });
  