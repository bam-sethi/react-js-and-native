/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var Featured = require('./feature.js');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

class ReactFun extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          React Fun
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ReactFun', () => ReactFun);
