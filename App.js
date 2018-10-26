import React from 'react';
import { Alert, AppRegistry, Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  _onPressButton() {
    Alert.alert('Yerooooo')
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="If you is from New York press this"
            />
          </View>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>My first app!</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
