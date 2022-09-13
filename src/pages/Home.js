import React, {Component} from 'react';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class Home extends Component<{}> {
    render() {
      return (

        <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        
        <RNPickerSelect
    
      touchableWrapperProps={{ accessibilityLabel: 'pickerSelect'}}
  
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />    
      </View>
        );
      };
    }
