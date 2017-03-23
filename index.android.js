/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';

import Main from './Main';


// const routes = [
//   {titulo: 'First Scene', numeroEcra: 0},
//   {titulo: 'Second Scene', numeroEcra: 1},
// ];

export default class GithubNoteTaker extends Component {
  render() {
    return (
      <Navigator
        initialRoute={routes[0]}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route, routeStack) =>   Navigator.SceneConfigs.FadeAndroid}
      />

    );
  }
  renderScene(route, navigator) {
    var routeIndex = route.numeroEcra;

    switch (route.numeroEcra) {
      case 0:
        return(
          <View style={{padding:20}}>
            <Text>{route.titulo}</Text>
            <TouchableOpacity onPress={() => {
                navigator.push(routes[1]);
            }}>
              <Text>Go route 2</Text>
            </TouchableOpacity>
          </View>
        );
        break;
      case 1:
        return(
          <View style={{padding:20}}>
            <Text>{route.titulo}</Text>
            <TouchableOpacity onPress={() => {
                navigator.pop();
            }}>
              <Text>Go back</Text>
            </TouchableOpacity>
          </View>
        );
        break;
      default:

    }

    return(
      <View style={{padding:20}}>
        <Text>{route.titulo}</Text>
        <TouchableOpacity onPress={() => {
          if (routeIndex === 0) {
            navigator.push(routes[1]);
          } else {
            navigator.pop();
          }
        }}>
          <Text>Go route 2</Text>
        </TouchableOpacity>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('GithubNoteTaker', () => GithubNoteTaker);
