import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import SoundButton from '../components/Button';
import db from '../config';
export default class Screen1 extends React.Component {
 



  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Screen2')}>
          
          <Text> Frank </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Screen2')}
          style={[styles.button, { backgroundColor: 'red' }]}>
          {' '}
          <Text> Slappy </Text>
        </TouchableOpacity>

       

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('NewsScreen')}
          style={[styles.button, { backgroundColor: 'lightgreen' }]}>
          {' '}
          <Text> Adam </Text>
        </TouchableOpacity>


       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    alignItems: 'center',
    marginLeft: '20%',
    marginTop: 40,
    fontFamily: 'impact',
    fontSize: 20,
    width: 200,
    height: 70,
    borderRadius: 50,
  },
 
});
