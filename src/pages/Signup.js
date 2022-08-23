import React, { Component } from 'react';
import { Text, View , StyleSheet , TextInput, TouchableOpacity} from 'react-native';


export default class Signup extends Component<{}> {
  render() {
    return (
       <View style={styles.container}>
        <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Don't have any account yet? </Text>
            <Text style={styles.signupButton}>Signup</Text>
        </View>
        </View>
        
      );
    };
  }

  const styles = StyleSheet.create({
    container: {
       backgroundColor: '#455a64', 
        flex: 0.1,
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
  