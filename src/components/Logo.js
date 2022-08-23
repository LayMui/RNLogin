import React, { Component } from 'react';
import { Text, View , StyleSheet, Image } from 'react-native';


export default class Logo extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
        <Image style={{width: 70, height: 70}}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
        <Text style={styles.logoText}>Welcome to Test Automation</Text>
       </View>
      );
    };
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#455a64', 
      flexGrow: 1,
      alignItems: 'center', 
      justifyContent: 'center',
    }, 
    logoText: {
      color: 'white', 
      fontSize: 15,
      alignItems: 'center'
    }
  });
  