import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import firebase from 'firebase';
import db from '../config';

class SoundButton extends React.Component {
  

  isButtonPressed(buttonColor) {
    var query = db.ref('teams/' + buttonColor + '/').update({
      isButtonPressed: true,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    });
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: this.props.color }]}
       >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    marginLeft: 80,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SoundButton;